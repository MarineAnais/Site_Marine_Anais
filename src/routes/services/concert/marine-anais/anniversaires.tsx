import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "../../../../assets/marine_singing.jpg.asset.json";

export const Route = createFileRoute("/services/concert/marine-anais/anniversaires")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Anniversaires d'Enfants" },
      { name: "description", content: "Prestation live solo sur bande son pour les goûters d'anniversaire et fêtes d'enfants." },
      { property: "og:title", content: "Marine Anaïs — Anniversaires d'Enfants" },
      { property: "og:description", content: "Une animation chantée pleine d'énergie pour les enfants." },
    ],
  }),
  component: Anniversaires,
});

function Anniversaires() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/services/concert/marine-anais" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start", marginLeft: "5%" }}>
        ← Retour aux offres Marine Anaïs
      </Link>
      <div className="book-container" style={{ width: "100%", maxWidth: 1100, display: "flex", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderRadius: 8, background: "#fdfdfc", color: "#222", overflow: "hidden", minHeight: 600 }}>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "3rem", fontFamily: "Georgia, serif", color: "#111", margin: 0 }}>Marine Anaïs</h1>
            <h3 style={{ fontSize: "1.15rem", color: "#d3a579", fontStyle: "italic", margin: "0.5rem 0", fontWeight: "normal" }}>Live solo sur bande son</h3>
            <div style={{ width: "80%", height: 1, background: "#d3a579", margin: "1rem auto" }} />
          </div>
          <p style={{ textAlign: "center", fontSize: "1.05rem", lineHeight: 1.6, color: "#444", marginBottom: "2.5rem" }}>
            Une énergie débordante pour vos goûters d'anniversaires et fêtes d'enfants : chansons Disney, films d'animation
            et tubes préférés des petits, avec la participation des enfants.
          </p>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.35rem", fontFamily: "Georgia, serif", color: "#666", fontStyle: "italic", margin: 0 }}>Répertoire Modulable</h3>
            <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>Extrait</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", background: "#f2dac6", padding: "1.5rem", borderRadius: 12, fontSize: "0.85rem", color: "#333" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>- Libérée, délivrée - La Reine des Neiges</li><li>- Vaiana</li><li>- Le Roi Lion</li><li>- Raiponce</li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>- Encanto</li><li>- Aladdin</li><li>- La Petite Sirène</li><li>- Tubes actuels adaptés</li>
            </ul>
          </div>
        </div>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem 3rem 5rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "2.4rem", color: "#e0a87f", fontStyle: "italic", fontFamily: "Georgia, serif", margin: 0 }}>Nos Tarifs</h2>
              <p style={{ color: "#555", fontStyle: "italic", margin: "0 0 2rem 0", fontSize: "0.9rem" }}>Matériel inclus</p>
              {[
                { t: "Formule Découverte (1h)", s: "Mini-concert participatif", p: "290 €" },
                { t: "Formule Fête (2h)", s: "Concert + jeux chantés", p: "450 €" },
              ].map((o) => (
                <div key={o.t} style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                  <h4 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 700 }}>{o.t}</h4>
                  <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>{o.s}</p>
                  <div style={{ color: "#e0a87f", fontSize: "1.4rem", fontWeight: 700 }}>{o.p}</div>
                  <div style={{ width: "50%", height: 1, background: "#e0a87f", margin: "0.5rem auto" }} />
                </div>
              ))}
              <Link to="/devis">
                <button className="ma-btn ma-btn-primary" style={{ padding: "0.9rem 1.5rem", width: "100%" }}>Demander un devis</button>
              </Link>
            </div>
            <div style={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: 200, background: `url(${photo.url}) center/cover`, border: "10px solid #f2dac6", marginBottom: "2rem" }} />
              <h3 style={{ color: "#e0a87f", fontSize: "1.8rem", fontStyle: "italic", margin: "0 0 1rem 0", fontFamily: "Georgia, serif" }}>Contact</h3>
              <p style={{ fontSize: "0.9rem", margin: "0.2rem 0", fontWeight: 700 }}>06.89.82.69.61</p>
              <p style={{ fontSize: "0.85rem", margin: "0.2rem 0" }}>@marinanais_</p>
              <p style={{ fontSize: "0.75rem", margin: "0.5rem 0 0 0", fontStyle: "italic", textAlign: "center" }}>marineanaiscontact@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:900px){.book-container{flex-direction:column}.page{padding:2rem !important}}`}</style>
    </div>
  );
}
