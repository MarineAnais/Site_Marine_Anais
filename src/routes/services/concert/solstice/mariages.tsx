import { createFileRoute, Link } from "@tanstack/react-router";
import guyGuitar from "../../../../assets/guy_guitar.jpg.asset.json";

export const Route = createFileRoute("/services/concert/solstice/mariages")({
  head: () => ({
    meta: [
      { title: "Solstice — Mariages" },
      { name: "description", content: "Formules du duo Solstice pour mariages : cocktail, cérémonie & cocktail, soirée." },
      { property: "og:title", content: "Solstice — Mariages" },
      { property: "og:description", content: "Formules mariage du duo Solstice." },
    ],
  }),
  component: Mariages,
});

function Mariages() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/services/concert/solstice" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start", marginLeft: "5%" }}>
        ← Retour aux offres Solstice
      </Link>
      <div className="book-container" style={{ position: "relative", width: "100%", maxWidth: 1100, display: "flex", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderRadius: 8, background: "#fdfdfc", color: "#222", overflow: "hidden", minHeight: 600 }}>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "3.5rem", fontFamily: "Georgia, serif", color: "#111", margin: 0 }}>Solstice</h1>
            <h3 style={{ fontSize: "1.2rem", color: "#d3a579", fontStyle: "italic", margin: "0.5rem 0", fontWeight: "normal" }}>Groupe de Reprises Pop/Rock Acoustiques</h3>
            <div style={{ width: "80%", height: 1, background: "#d3a579", margin: "1rem auto" }} />
          </div>
          <p style={{ textAlign: "center", fontSize: "1.05rem", lineHeight: 1.5, color: "#444", marginBottom: "3rem" }}>
            Expérience musicale variée et entraînante conçue pour plaire à un large public, mêlant succès intemporels et titres plus récents.
          </p>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontFamily: "Georgia, serif", color: "#666", fontStyle: "italic", margin: 0 }}>Répertoire Modulable</h3>
            <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>Extrait</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", background: "#f2dac6", padding: "1.5rem", borderRadius: 12, fontSize: "0.85rem", color: "#333" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>- Je l'aime à mourir - Cabrel</li><li>- Rue des étoiles - Grégoire</li><li>- J'traîne des pieds - Olivia Ruiz</li><li>- Aux Champs Elysées</li><li>- La vie en Rose</li><li>- Mon Amant de St Jean</li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>- Shallow / Bad Romance - Lady Gaga</li><li>- Zombie - The Cranberries</li><li>- Beggin - Maneskin</li><li>- Flowers - Miley Cyrus</li><li>- Counting Stars - OneRepublic</li><li>- Viva la vida - Coldplay</li>
            </ul>
          </div>
        </div>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem 3rem 5rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "2.5rem", color: "#e0a87f", fontStyle: "italic", fontFamily: "Georgia, serif", margin: 0 }}>Nos Tarifs</h2>
              <p style={{ color: "#555", fontStyle: "italic", margin: "0 0 2rem 0", fontSize: "0.9rem" }}>Matériel inclus</p>
              {[
                { t: "Cocktail (2h)", s: "Vin d'honneur", p: "890 €" },
                { t: "Cérémonie & Cocktail", s: "sur le même lieu", p: "1 190 €" },
                { t: "Cocktail & Soirée", s: "Concert & Mix DJ de 4h", p: "1 490 €" },
              ].map((o) => (
                <div key={o.t} style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                  <h4 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 700 }}>{o.t}</h4>
                  <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>{o.s}</p>
                  <div style={{ color: "#e0a87f", fontSize: "1.4rem", fontWeight: 700 }}>{o.p}</div>
                  <div style={{ width: "50%", height: 1, background: "#e0a87f", margin: "0.5rem auto" }} />
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ccc", paddingTop: "1rem", display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                <div><strong>Options</strong><br />Dîner<br />Heure supp DJ</div>
                <div style={{ textAlign: "right", color: "#e0a87f", fontWeight: 700 }}><br />+ 300 €<br />+ 150 € / h</div>
              </div>
            </div>
            <div style={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: 200, background: `url(${guyGuitar.url}) center/cover`, border: "10px solid #f2dac6", marginBottom: "2rem" }} />
              <h3 style={{ color: "#e0a87f", fontSize: "1.8rem", fontStyle: "italic", margin: "0 0 1rem 0", fontFamily: "Georgia, serif" }}>Contact</h3>
              <p style={{ fontSize: "0.9rem", margin: "0.2rem 0", fontWeight: 700 }}>06.89.82.69.61</p>
              <p style={{ fontSize: "0.85rem", margin: "0.2rem 0" }}>@sinclairdortomb</p>
              <p style={{ fontSize: "0.85rem", margin: "0.2rem 0" }}>@marinanais_</p>
              <p style={{ fontSize: "0.75rem", margin: "0.5rem 0 0 0", fontStyle: "italic", textAlign: "center" }}>marineanaiscontact@gmail.com</p>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #555", marginTop: "2rem", paddingTop: "1rem", fontSize: "0.8rem", color: "#444" }}>
            <strong>Ces tarifs incluent l'intégralité du matériel nécessaire aux performances, et le déplacement.</strong>
            <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
              <li>Micros et Enceintes adaptés à 80-150 personnes</li>
              <li>Système de sonorisation et table de mixage</li>
              <li>Câblage et Pieds de micro</li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:900px){.book-container{flex-direction:column}.page{padding:2rem !important}}`}</style>
    </div>
  );
}
