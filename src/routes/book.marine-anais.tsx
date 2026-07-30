import { createFileRoute } from "@tanstack/react-router";
import photo1 from "../assets/marine_studio.jpg.asset.json";
import photo2 from "../assets/marine_singing.jpg.asset.json";
import photo3 from "../assets/marine_smiling.jpg.asset.json";
import photo4 from "../assets/marine_anais.png.asset.json";
import cvPdf from "../assets/cv-marine-anais.pdf.asset.json";

export const Route = createFileRoute("/book/marine-anais")({
  head: () => ({
    meta: [
      { title: "Book — Marine Anaïs" },
      { name: "description", content: "Book de Marine Anaïs : présentation, galerie photos et lieux joués." },
      { property: "og:title", content: "Book — Marine Anaïs" },
      { property: "og:description", content: "Présentation, galerie photos et scènes de Marine Anaïs." },
      { property: "og:image", content: photo2.url },
      { name: "twitter:image", content: photo2.url },
    ],
  }),
  component: BookMarine,
});

const presentation = `Passionnée par la musique depuis mon plus jeune âge, j'ai fait de la scène mon terrain d'expression favori. Avec un répertoire riche allant des grands classiques de la chanson française aux hits pop/rock internationaux, je m'adapte à l'atmosphère de votre événement pour créer un moment musical sur-mesure et inoubliable.

Que ce soit pour une ambiance feutrée et intimiste lors d'un cocktail, ou une performance plus dynamique pour animer votre soirée, je mets tout mon cœur et mon énergie au service de vos émotions.`;

const LIEUX = ["Lieu 1", "Lieu 2", "Lieu 3", "Lieu 4"];

function BookMarine() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "var(--text-light)", fontSize: "2.2rem", marginBottom: "3rem", fontWeight: 700 }}>
        Marine Anaïs
      </h1>

      <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
        <div style={{ width: "100%", height: 500, background: `url(${photo1.url}) center/cover`, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
        <div>
          <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1rem", fontWeight: 700 }}>Présentation</h3>
          <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.9, whiteSpace: "pre-wrap" }}>{presentation}</p>
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
