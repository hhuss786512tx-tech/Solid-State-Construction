import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();
const consoleErrors = [];
page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));

await page.goto("http://localhost:3000/contact.html", { waitUntil: "networkidle0" });

async function testCase(label, values) {
  await page.evaluate(() => {
    document.querySelector('input[type="text"], input:not([type])')?.closest("form");
  });
  await page.evaluate((v) => {
    const form = document.querySelector("form[data-validate]");
    form.querySelector('input[placeholder="Jane Doe"]').value = v.name;
    form.querySelector('input[placeholder="(512) 555-0182"]').value = v.phone;
    form.querySelector('input[placeholder="jane@example.com"]').value = v.email;
    form.querySelector("select").value = v.service || "";
    form.querySelector("textarea").value = v.message;
    // reset visual state
    form.querySelectorAll(".border-red-500").forEach(el => el.classList.remove("border-red-500"));
    const status = form.querySelector("[data-form-status]");
    status.classList.add("hidden");
    status.textContent = "";
  }, values);

  await page.click('form[data-validate] button[type="submit"]');
  await new Promise((r) => setTimeout(r, 200));

  const result = await page.evaluate(() => {
    const form = document.querySelector("form[data-validate]");
    const status = form.querySelector("[data-form-status]");
    const invalidFields = [...form.querySelectorAll(".border-red-500")].map(el => el.name || el.tagName);
    const formStillHasValues = form.querySelector('input[placeholder="Jane Doe"]').value !== "";
    return {
      statusText: status.textContent,
      statusHidden: status.classList.contains("hidden"),
      invalidFields,
      formStillHasValues,
      bodyHTML_hasScriptInjection: document.body.innerHTML.includes("<script>alert"),
    };
  });

  console.log(`\n--- ${label} ---`);
  console.log(JSON.stringify(result, null, 2));
  return result;
}

// 1. All empty (required-field violation)
await testCase("Empty required fields", { name: "", phone: "", email: "", service: "", message: "" });

// 2. Invalid email format
await testCase("Invalid email format", { name: "Jane Doe", phone: "5125550182", email: "not-an-email", service: "Concrete", message: "Need a quote" });

// 3. Leading/trailing whitespace only (whitespace-only "required" field should still count as empty per HTML5 required semantics — but our custom JS uses .value.trim())
await testCase("Whitespace-only required fields", { name: "   ", phone: "   ", email: "a@b.com", service: "Roofing", message: "   " });

// 4. Over-length strings
await testCase("Over-length strings", { name: "A".repeat(5000), phone: "5".repeat(2000), email: "test@example.com", service: "Plumbing", message: "B".repeat(20000) });

// 5. Injection-style strings
await testCase("Injection-style strings", {
  name: "<script>alert(1)</script>",
  phone: "' OR 1=1 --",
  email: "test@example.com",
  service: "Water Remediation",
  message: "<img src=x onerror=alert('xss')> ' OR '1'='1",
});

console.log(`\n=== Console errors during form stress test: ${consoleErrors.length} ===`);
consoleErrors.forEach((e) => console.log("  " + e));

await browser.close();
process.exit(consoleErrors.length > 0 ? 1 : 0);
