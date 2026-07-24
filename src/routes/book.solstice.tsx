import { createFileRoute } from "@tanstack/react-router";
import photo1 from "../assets/guy_guitar.jpg.asset.json";
import photo2 from "../assets/marine_smiling.jpg.asset.json";
import photo3 from "../assets/guy_closeup.jpg.asset.json";
import photo4 from "../assets/marine_studio.jpg.asset.json";

export const Route = createFileRoute("/book/solstice")({
  head: () => ({
    meta: [
      { title: "Book — Solstice" },
      { name: "description", content: "Book du duo acoustique Solstice : présentation, galerie photos, lieux joués." },
      { property: "og:title", content: "Book — Solstice" },
      { property: "og:description", content: "Duo acoustique Solstice — présentation et galerie photos." },
      { property: "og:image", content: photo2.url },
      { name: "twitter:image", content: photo2.url },
    ],
  }),
  component: BookSolstice,
});

const LIEUX = ["Lieu A", "Lieu B", "Lieu C"];

function BookSolstice() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "var(--text-light)", fontSize: "2.2rem", marginBottom: "3rem", fontWeight: 700 }}>Solstice</h1>

      <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
        <div style={{ width: "100%", height: 500, background: `url(${photo1.url}) center/cover`, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
        <div>
          <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1rem", fontWeight: 700 }}>Présentation</h3>
          <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.9 }}>
            Une ambiance élégante et décontractée pour accueillir vos invités en douceur. Un répertoire rythmé et convivial pour faire chanter et danser vos convives.
          </p>
        </div>
      </div>

      <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1.5rem", fontWeight: 700 }}>Galerie Photos</h3>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px", height: 300, background: `url(${photo3.url}) center/cover`, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
        <div style={{ flex: "1 1 300px", height: 300, background: `url(${photo4.url}) center/cover`, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
      </div>

      <div style={{ width: "100%", height: 400, background: `url(${photo2.url}) center/cover`, borderRadius: 16, marginBottom: "4rem", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />

      <div>
        <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1.5rem", fontWeight: 700 }}>Où l'on a joué</h3>
        <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 2, opacity: 0.9, paddingLeft: "1.5rem" }}>
          {LIEUX.map((l) => <li key={l}>{l}</li>)}
        </ul>
      </div>

      <style>{`@media (max-width: 900px){ .book-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
