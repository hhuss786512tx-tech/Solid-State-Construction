import fs from "node:fs";

const files = [
  "index.html",
  "about.html",
  "contact.html",
  "services/concrete.html",
  "services/tunneling.html",
  "services/plumbing.html",
  "services/roofing.html",
  "services/water-remediation.html",
];

const loremflickrRe = /https:\/\/loremflickr\.com\/(\d+)\/(\d+)\/([a-zA-Z0-9,]+)/g;

let totalReplaced = 0;

for (const file of files) {
  const slug = file.replace(/\//g, "-").replace(".html", "");
  let content = fs.readFileSync(file, "utf8");
  let counter = 0;

  content = content.replace(loremflickrRe, (match, w, h, keywords) => {
    counter++;
    const keySlug = keywords.replace(/,/g, "-").slice(0, 24);
    const seed = `ssc-${slug}-${counter}-${keySlug}`;
    totalReplaced++;
    return `https://picsum.photos/seed/${seed}/${w}/${h}`;
  });

  fs.writeFileSync(file, content, "utf8");
  console.log(`${file}: ${counter} image(s) migrated`);
}

console.log(`\nTotal replaced: ${totalReplaced}`);
