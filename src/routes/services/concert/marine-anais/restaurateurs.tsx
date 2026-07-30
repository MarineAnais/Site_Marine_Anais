import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "../../../../assets/marine_smiling.jpg.asset.json";

export const Route = createFileRoute("/services/concert/marine-anais/restaurateurs")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Restaurateurs" },
      { name: "description", content: "Prestation live solo sur bande son pour restaurants, bars et terrasses." },
      { property: "og:title", content: "Marine Anaïs — Restaurateurs" },
      { property: "og:description", content: "Ambiance chantée live pour votre salle ou votre terrasse." },
    ],
  }),
  component: SoloResto,
});

function SoloResto() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/services/concert/marine-anais" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start", marginLeft: "5%" }}>
        ← Retour aux offres Marine Anaïs
      </Link>
      <div className="book-container" style={{ width: "100%", maxWidth: 1100, display: "flex", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderRadius: 8, background: "#fdfdfc", color: "#222", overflow: "hidden", minHeight: 600 }}>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "3rem", fontFamily: "Arial Black, sans-serif", color: "#111", margin: 0 }}>Marine Anaïs</h1>
            <h3 style={{ fontSize: "1.15rem", color: "#900", margin: "0.5rem 0", fontWeight: 700 }}>Live solo sur bande son</h3>
            <div style={{ width: "100%", height: 3, background: "linear-gradient(to right, transparent, #900, transparent)", margin: "1rem 0" }} />
            <p style={{ textAlign: "left", fontSize: "0.9rem", color: "#444", margin: 0 }}>
              <strong>Voix & bande son Pop/Rock et variété française</strong><br />
              Un concert calibré pour votre salle ou votre terrasse, matériel et installation inclus.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h4 style={{ fontSize: "1.15rem", color: "#900", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Formule Classique</h4><p style={{ margin: 0, color: "#333", fontSize: "0.9rem" }}>2 sets ou plus (durée modulable)</p></div>
              <div style={{ fontSize: "1.2rem", color: "#900", fontWeight: 700 }}>120 € <span style={{ fontSize: "0.9rem", color: "#555" }}>/heure</span></div>
            </div>
            <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h4 style={{ fontSize: "1.15rem", color: "#900", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Karaoké & Open Mic</h4><p style={{ margin: 0, color: "#333", fontSize: "0.85rem", fontWeight: 700 }}>Vos clients chantent accompagnés en live</p></div>
              <div style={{ fontSize: "1.2rem", color: "#900", fontWeight: 700 }}>170 € <span style={{ fontSize: "0.9rem", color: "#555" }}>/heure</span></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h4 style={{ fontSize: "1.15rem", color: "#111", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Soirée à Thème</h4><p style={{ margin: 0, color: "#333", fontSize: "0.85rem" }}>Répertoire sur mesure (Années 80/90, Cinéma, Halloween...)</p></div>
              <div style={{ fontSize: "0.9rem", color: "#900", fontWeight: 700, textAlign: "right" }}>Formule Classique<br />+ Devis</div>
            </div>
          </div>
        </div>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem 3rem 5rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
            <div style={{ flex: 1 }}>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#900" }}>Extrait</h3>
                <h2 style={{ fontSize: "2.3rem", color: "#900", margin: 0, fontFamily: "Arial Black, sans-serif" }}>RÉPERTOIRE</h2>
                <h3 style={{ margin: 0, fontSize: "1rem", color: "#900" }}>Modulable</h3>
              </div>
              {[
                { h: "Feutré", txt: "La vie en Rose • Le Sud • Je l'aime à mourir • Flowers - Miley Cyrus" },
                { h: "Fédérateur", txt: "Aux Champs Elysées • Pour que tu m'aimes encore • Viva la vida • Zombie • Emmenez-moi" },
                { h: "Dynamique", txt: "Freed from desire • Hit the Road Jack • Beggin • Baby One More Time • Imagine Dragons" },
              ].map((r) => (
                <div key={r.h} style={{ marginBottom: "1.2rem" }}>
                  <h4 style={{ color: "#900", margin: "0 0 0.4rem 0", fontSize: "1rem" }}>{r.h}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#555", margin: 0 }}>{r.txt}</p>
                </div>
              ))}
              <Link to="/devis">
                <button className="ma-btn ma-btn-primary" style={{ padding: "0.9rem 1.5rem", width: "100%" }}>Demander un devis</button>
              </Link>
            </div>
            <div style={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: 220, background: `url(${photo.url}) center/cover`, border: "10px solid #900", marginBottom: "2rem" }} />
              <h3 style={{ color: "#900", fontSize: "1.8rem", margin: "0 0 1rem 0" }}>Contact</h3>
              <p style={{ fontSize: "1rem", margin: "0.2rem 0", fontWeight: 700 }}>06.89.82.69.61</p>
              <div style={{ marginTop: "0.5rem", textAlign: "center", fontSize: "0.8rem", fontWeight: 700 }}>@marinanais_</div>
              <p style={{ fontSize: "0.75rem", margin: "1rem 0 0 0", fontWeight: 700, textAlign: "center" }}>marineanaiscontact@gmail.com</p>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #ccc", marginTop: "auto", paddingTop: "1rem", fontSize: "0.8rem", color: "#444" }}>
            <strong>Ces tarifs incluent l'intégralité du matériel et le déplacement.</strong>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:900px){.book-container{flex-direction:column}.page{padding:2rem !important}}`}</style>
    </div>
  );
}
