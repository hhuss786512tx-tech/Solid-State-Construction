import puppeteer from "puppeteer";
import fs from "node:fs";

const pages = [
  ["/", "home"],
  ["/about.html", "about"],
  ["/contact.html", "contact"],
  ["/services/concrete.html", "concrete"],
  ["/services/tunneling.html", "tunneling"],
  ["/services/plumbing.html", "plumbing"],
  ["/services/roofing.html", "roofing"],
  ["/services/water-remediation.html", "water-remediation"],
];

const OUT_DIR = "./temporary screenshots";
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch();
let totalIssues = 0;

for (const [path, label] of pages) {
  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));
  page.on("requestfailed", (req) => {
    failedRequests.push(`${req.url()} — ${req.failure()?.errorText}`);
  });
  page.on("response", (res) => {
    if (res.status() >= 400) failedRequests.push(`${res.url()} — HTTP ${res.status()}`);
  });

  async function scrollThrough() {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let total = 0;
        const distance = 400;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          total += distance;
          if (total >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 120);
      });
    });
    await new Promise((r) => setTimeout(r, 500));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 300));
  }

  // Desktop — scroll through first so reveal animations fire, THEN screenshot (matches real user experience)
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 900)); // let fonts settle
  await scrollThrough();
  const revealCheck = await page.evaluate(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-scale");
    const visible = document.querySelectorAll(".reveal.is-visible, .reveal-scale.is-visible");
    return { total: reveals.length, visible: visible.length };
  });
  await page.screenshot({ path: `${OUT_DIR}/verify-${label}-desktop.png`, fullPage: true });

  // Mobile
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 900));
  await scrollThrough();
  await page.screenshot({ path: `${OUT_DIR}/verify-${label}-mobile.png`, fullPage: true });

  console.log(`\n=== ${label} (${path}) ===`);
  console.log(`reveal elements: ${revealCheck.visible}/${revealCheck.total} became visible on scroll`);
  if (consoleErrors.length) {
    console.log(`CONSOLE ERRORS (${consoleErrors.length}):`);
    consoleErrors.forEach((e) => console.log("  " + e));
    totalIssues += consoleErrors.length;
  }
  if (failedRequests.length) {
    console.log(`FAILED/4xx/5xx REQUESTS (${failedRequests.length}):`);
    failedRequests.forEach((e) => console.log("  " + e));
    totalIssues += failedRequests.length;
  }
  if (!consoleErrors.length && !failedRequests.length) console.log("clean — no console errors, no failed requests");

  await page.close();
}

await browser.close();
console.log(`\n=== TOTAL ISSUES: ${totalIssues} ===`);
process.exit(totalIssues > 0 ? 1 : 0);
