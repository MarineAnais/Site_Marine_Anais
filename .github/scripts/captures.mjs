// Prend des captures d'écran de l'ancien site (Lovable) et du nouveau build,
// et relève les images / fichiers qui ne se chargent pas.
import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = "dist/client";
const OUT = "captures";
const ROUTES = ["/", "/services", "/services/concert", "/services/concert/solstice", "/services/coaching", "/services/voix-off", "/book", "/book/solstice", "/contact"];
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".pdf": "application/pdf", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain" };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let p = path.join(ROOT, url);
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
  let status = 200;
  if (!fs.existsSync(p)) { status = 404; p = path.join(ROOT, "404.html"); }
  res.writeHead(status, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const TARGETS = [
  { name: "ancien-lovable", base: "https://marineanais.fr" },
  { name: "nouveau", base: `http://localhost:${port}` },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 400);
        y += 400;
        if (y >= document.body.scrollHeight + 400) { clearInterval(t); window.scrollTo(0, 0); resolve(); }
      }, 120);
    });
  });
}

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
let report = "# Rapport de comparaison\n\n";

for (const t of TARGETS) {
  report += `## ${t.name} (${t.base})\n\n`;
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    const failed = [];
    const errors = [];
    page.on("response", (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
    page.on("requestfailed", (r) => failed.push(`ÉCHEC ${r.url()}`));
    page.on("pageerror", (e) => errors.push(e.message));
    let note = "";
    try {
      await page.goto(t.base + route, { waitUntil: "networkidle", timeout: 45000 });
      await autoScroll(page);
      await page.waitForTimeout(800);
      const slug = route === "/" ? "accueil" : route.slice(1).replace(/\//g, "_");
      await page.screenshot({ path: `${OUT}/${t.name}__${slug}.png`, fullPage: true });
      const broken = await page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src));
      const nImg = await page.evaluate(() => document.images.length);
      const title = await page.title();
      const cssOk = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      note = `titre: ${title} | images: ${nImg} dont cassées: ${broken.length} | fond: ${cssOk}`;
      if (broken.length) note += "\n  - cassées: " + [...new Set(broken)].map((u) => u.replace(t.base, "")).join("\n  - cassées: ");
    } catch (e) {
      note = "ERREUR: " + e.message.split("\n")[0];
    }
    report += `### ${route}\n${note}\n`;
    const uniq = [...new Set(failed)].filter((f) => !/youtube|google|gstatic|doubleclick/.test(f));
    if (uniq.length) report += uniq.map((f) => `  - ${f.replace(t.base, "")}`).join("\n") + "\n";
    if (errors.length) report += errors.slice(0, 3).map((e) => `  - JS: ${e}`).join("\n") + "\n";
    report += "\n";
    await ctx.close();
  }
}
await browser.close();
server.close();
fs.writeFileSync(`${OUT}/rapport.md`, report);
console.log(report);
