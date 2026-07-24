import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "../assets/marine_smiling.jpg.asset.json";

export const Route = createFileRoute("/offres-solstice/restaurateurs")({
  head: () => ({
    meta: [
      { title: "Solstice — Restaurateurs" },
      { name: "description", content: "Formules Solstice pour restaurateurs : classique, karaoké acoustique, soirées à thème." },
      { property: "og:title", content: "Solstice — Restaurateurs" },
      { property: "og:description", content: "Formules acoustiques pour restaurateurs." },
    ],
  }),
  component: Resto,
});

function Resto() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/offres-solstice" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start", marginLeft: "5%" }}>
        ← Retour aux offres Solstice
      </Link>
      <div className="book-container" style={{ position: "relative", width: "100%", maxWidth: 1100, display: "flex", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderRadius: 8, background: "#fdfdfc", color: "#222", overflow: "hidden", minHeight: 600 }}>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "3.5rem", fontFamily: "Arial Black, sans-serif", color: "#111", margin: 0, letterSpacing: 1 }}>Solstice</h1>
            <h3 style={{ fontSize: "1.2rem", color: "#900", margin: "0.5rem 0", fontWeight: 700 }}>Reprises Acoustiques & Animations Live</h3>
            <div style={{ width: "100%", height: 3, background: "linear-gradient(to right, transparent, #900, transparent)", margin: "1rem 0" }} />
            <p style={{ textAlign: "left", fontSize: "0.9rem", color: "#444", margin: 0 }}>
              <strong>Duo guitare-voix Pop/Rock</strong><br />Concert acoustique de vos morceaux préférés calibré pour votre salle ou terrasse. Matériel et installation inclus.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h4 style={{ fontSize: "1.15rem", color: "#900", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Formule Classique</h4><p style={{ margin: 0, color: "#333", fontSize: "0.9rem" }}>3 Sets ou plus (durée modulable)</p></div>
              <div style={{ fontSize: "1.2rem", color: "#900", fontWeight: 700 }}>150 € <span style={{ fontSize: "0.9rem", color: "#555" }}>/heure</span></div>
            </div>
            <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><p style={{ margin: "0 0 0.2rem 0", fontSize: "0.9rem", color: "#333" }}>Soirée Interactive</p><h4 style={{ fontSize: "1.15rem", color: "#900", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Karaoké & Open Mic</h4><p style={{ margin: 0, color: "#333", fontSize: "0.85rem", fontWeight: 700 }}>Vos clients chantent accompagnés en live</p></div>
              <div style={{ fontSize: "1.2rem", color: "#900", fontWeight: 700 }}>200 € <span style={{ fontSize: "0.9rem", color: "#555" }}>/heure</span></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h4 style={{ fontSize: "1.15rem", color: "#111", margin: "0 0 0.2rem 0", fontWeight: 700 }}>Soirée à Thème</h4><p style={{ margin: 0, color: "#333", fontSize: "0.85rem" }}>Répertoire sur mesure (Années 80/90, Pop/Rock US, Cinéma, Halloween...)</p></div>
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
                { h: "Feutré", txt: "Le Sud - Nino Ferrer • La vie en Rose - Edith Piaf • Kyo : Dernière danse / Le chemin / Le Graal • Je l'aime à mourir • Flowers - Miley Cyrus" },
                { h: "Fédérateur", txt: "Aux Champs Elysées • Pour que tu m'aimes encore • Viva la vida • Creep • Zombie • Les copains d'abord • Calogero : Si seulement je pouvais lui manquer / En Apesenteur • Emmenez moi" },
                { h: "Dynamique", txt: "Numb - Linkin Park • Freed from desire • Hit the Road Jack • Beggin • Baby One More Time • Imagine Dragons : Warrior / Demons / Enemy / It's Time / Sharks • Téléphone : Un autre monde / New York" },
              ].map((r) => (
                <div key={r.h} style={{ marginBottom: "1.2rem" }}>
                  <h4 style={{ color: "#900", margin: "0 0 0.4rem 0", fontSize: "1rem" }}>{r.h}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#555", margin: 0 }}>{r.txt}</p>
                </div>
              ))}
            </div>
            <div style={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: 220, background: `url(${photo.url}) center/cover`, border: "10px solid #900", marginBottom: "2rem" }} />
              <h3 style={{ color: "#900", fontSize: "1.8rem", margin: "0 0 1rem 0" }}>Contact</h3>
              <p style={{ fontSize: "1rem", margin: "0.2rem 0", fontWeight: 700 }}>06.89.82.69.61</p>
              <div style={{ marginTop: "0.5rem", textAlign: "center", fontSize: "0.8rem", fontWeight: 700 }}>@sinclairdortomb<br />@marinanais_</div>
              <p style={{ fontSize: "0.75rem", margin: "1rem 0 0 0", fontWeight: 700, textAlign: "center" }}>marineanaiscontact@gmail.com</p>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #ccc", marginTop: "auto", paddingTop: "1rem", fontSize: "0.8rem", color: "#444" }}>
            <strong>Ces tarifs incluent l'intégralité du matériel et le déplacement.</strong>
            <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
              <li>Micros HF et Enceintes adaptées à 80-150 personnes</li>
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
