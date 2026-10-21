// Compare l'ancien site (Lovable, marineanais.fr) au nouveau build, page par page :
// captures d'écran, pourcentage de pixels différents, images qui ne se chargent pas.
import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = "dist/client";
const OUT = "captures";
const PREFIX = (process.env.SITE_BASE || "/").replace(/\/$/, "");
const ROUTES = [
  "/", "/services", "/services/concert", "/services/concert/marine-anais", "/services/concert/marine-anais/anniversaires",
  "/services/concert/marine-anais/restaurateurs", "/services/concert/solstice", "/services/concert/solstice/mariages",
  "/services/concert/solstice/entreprises", "/services/concert/solstice/restaurateurs", "/services/coaching",
  "/services/voix-off", "/services/concert-mariage", "/services/concert-entreprise", "/services/concert-restaurateur",
  "/book", "/book/marine-anais", "/book/solstice", "/contact", "/mentions-legales",
];
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".pdf": "application/pdf", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain" };

const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split("?")[0]);
  let p = null;
  if (!PREFIX || url === PREFIX || url.startsWith(PREFIX + "/")) {
    url = url.slice(PREFIX.length) || "/";
    p = path.join(ROOT, url);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
  }
  let status = 200;
  if (!p || !fs.existsSync(p)) { status = 404; p = path.join(ROOT, "404.html"); }
  res.writeHead(status, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const TARGETS = [
  { name: "ancien-lovable", base: "https://marineanais.fr" },
  { name: "nouveau", base: `http://localhost:${port}${PREFIX}` },
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
const slugOf = (route) => (route === "/" ? "accueil" : route.slice(1).replace(/\//g, "_"));
const details = {};

for (const t of TARGETS) {
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    const failed = [];
    page.on("response", (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
    page.on("requestfailed", (r) => failed.push(`ÉCHEC ${r.url()}`));
    let note = "";
    try {
      await page.goto(t.base + route, { waitUntil: "networkidle", timeout: 45000 });
      await autoScroll(page);
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${OUT}/${t.name}__${slugOf(route)}.png`, fullPage: true });
      const broken = await page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src));
      const title = await page.title();
      note = `titre: ${title} | images cassées: ${broken.length}`;
      if (broken.length) note += "\n    - " + [...new Set(broken)].map((u) => u.replace(t.base, "")).join("\n    - ");
    } catch (e) {
      note = "ERREUR: " + e.message.split("\n")[0];
    }
    const uniq = [...new Set(failed)].filter((f) => !/youtube|google|gstatic|doubleclick|instagram|ytimg/.test(f));
    if (uniq.length) note += "\n    requêtes en échec:\n    - " + uniq.map((f) => f.replace(t.base, "")).join("\n    - ");
    details[`${t.name} ${route}`] = note;
    await ctx.close();
  }
}
await browser.close();
server.close();

function compare(a, b, diffPath) {
  const A = PNG.sync.read(fs.readFileSync(a));
  const B = PNG.sync.read(fs.readFileSync(b));
  const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height);
  const ca = new PNG({ width: w, height: h }), cb = new PNG({ width: w, height: h }), d = new PNG({ width: w, height: h });
  PNG.bitblt(A, ca, 0, 0, w, h, 0, 0);
  PNG.bitblt(B, cb, 0, 0, w, h, 0, 0);
  const n = pixelmatch(ca.data, cb.data, d.data, w, h, { threshold: 0.15 });
  fs.writeFileSync(diffPath, PNG.sync.write(d));
  return { pct: (100 * n) / (w * h), hA: A.height, hB: B.height };
}

let report = "# Comparaison ancien site (Lovable) / nouveau build\n\n| Page | % de pixels différents | hauteur ancien | hauteur nouveau |\n|---|---|---|---|\n";
for (const route of ROUTES) {
  const s = slugOf(route);
  try {
    const r = compare(`${OUT}/ancien-lovable__${s}.png`, `${OUT}/nouveau__${s}.png`, `${OUT}/diff__${s}.png`);
    report += `| ${route} | ${r.pct.toFixed(2)} % | ${r.hA} | ${r.hB} |\n`;
  } catch (e) {
    report += `| ${route} | non comparable (${e.message.split("\n")[0]}) | | |\n`;
  }
}
report += "\n## Détails\n\n";
for (const [k, v] of Object.entries(details)) report += `- **${k}** — ${v}\n`;
fs.writeFileSync(`${OUT}/rapport.md`, report);
console.log(report);
