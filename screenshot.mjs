import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "temporary screenshots");

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label]");
  process.exit(1);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = fs.readdirSync(OUT_DIR).filter((f) => f.startsWith("screenshot-"));
const nextN = existing.length
  ? Math.max(...existing.map((f) => parseInt(f.match(/screenshot-(\d+)/)?.[1] || "0"))) + 1
  : 1;

const fileName = label ? `screenshot-${nextN}-${label}.png` : `screenshot-${nextN}.png`;
const outPath = path.join(OUT_DIR, fileName);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
