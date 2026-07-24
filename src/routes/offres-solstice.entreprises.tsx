import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "../assets/marine_studio.jpg.asset.json";

export const Route = createFileRoute("/offres-solstice/entreprises")({
  head: () => ({
    meta: [
      { title: "Solstice — Entreprises" },
      { name: "description", content: "Formules Solstice pour entreprises : cocktail, séminaire, team building." },
      { property: "og:title", content: "Solstice — Entreprises" },
      { property: "og:description", content: "Animation musicale pour entreprises." },
    ],
  }),
  component: Ent,
});

function Ent() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/offres-solstice" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start", marginLeft: "5%" }}>
        ← Retour aux offres Solstice
      </Link>
      <div className="book-container" style={{ position: "relative", width: "100%", maxWidth: 1100, display: "flex", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", borderRadius: 8, background: "#fdfdfc", color: "#222", overflow: "hidden", minHeight: 600 }}>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "3.5rem", fontFamily: "Impact, sans-serif", color: "#1a2b4c", margin: 0, letterSpacing: 2 }}>SOLSTICE</h1>
            <h3 style={{ fontSize: "1.2rem", color: "#2a4b8c", margin: "0.5rem 0", fontWeight: 700 }}>Animation Musicale Live</h3>
            <div style={{ width: "100%", height: 3, background: "#1a2b4c", margin: "1rem 0" }} />
            <p style={{ textAlign: "left", fontSize: "0.9rem", color: "#444", margin: 0 }}>
              <strong>Duo guitare-voix Pop/Rock</strong><br />Une animation sur mesure et autonome, calibrée pour valoriser l'image de votre marque et fédérer vos collaborateurs.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              { t: "PACK BUSINESS/COCKTAIL", s: "Lounge & Networking - 2H", d: "Habille l'espace sans couvrir vos conversations, idéal pour vos afterworks, lancements de produit ou cocktails clients.", p: "690 €" },
              { t: "PACK SÉMINAIRE", s: "Concert évolutif - 3H", d: "Transition entre rigueur et convivialité, de Sobre à Festif, parfait pour conclure la journée.", p: "990 €" },
              { t: "PACK TEAM BUILDING", s: "Blind test et Karaoké acoustique - 4H", d: "Un show interactif où vos collaborateurs peuvent monter sur scène à nos côtés, accompagnés en direct.", p: "1 290 €" },
            ].map((o) => (
              <div key={o.t} style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.15rem", color: "#1a2b4c", margin: "0 0 0.2rem 0", fontWeight: 700 }}>{o.t}</h4>
                  <p style={{ margin: 0, color: "#2a4b8c", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>{o.s}</p>
                  <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", color: "#555", maxWidth: 300 }}>{o.d}</p>
                </div>
                <div style={{ fontSize: "1.6rem", color: "#2a4b8c", fontWeight: 700 }}>{o.p}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="page" style={{ flex: 1, padding: "3rem 4rem 3rem 5rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
            <div style={{ flex: 1 }}>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#2a4b8c" }}>Extrait</h3>
                <h2 style={{ fontSize: "2.3rem", color: "#1a2b4c", margin: 0, fontFamily: "Impact, sans-serif", letterSpacing: 1 }}>RÉPERTOIRE</h2>
                <h3 style={{ margin: 0, fontSize: "1rem", color: "#2a4b8c" }}>Modulable</h3>
              </div>
              {[
                { h: "Feutré", txt: "Le Sud - Nino Ferrer • La vie en Rose - Edith Piaf • Kyo — Dernière danse / Le chemin / Le Graal • Je l'aime à mourir • Flowers - Miley Cyrus" },
                { h: "Fédérateur", txt: "Aux Champs Elysées • Pour que tu m'aimes encore • Viva la vida • Creep • Zombie • Les copains d'abord • Calogero • Emmenez-moi" },
                { h: "Dynamique", txt: "Numb - Linkin Park • Freed from desire • Hit the Road Jack • Beggin • Baby One More Time • Imagine Dragons • Téléphone" },
              ].map((r) => (
                <div key={r.h} style={{ marginBottom: "1.2rem" }}>
                  <h4 style={{ color: "#2a4b8c", textAlign: "right", margin: "0 0 0.4rem 0", fontSize: "1rem" }}>{r.h}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#555", margin: 0, textAlign: "justify" }}>{r.txt}</p>
                </div>
              ))}
            </div>
            <div style={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: 220, background: `url(${photo.url}) center/cover`, border: "10px solid #6b85b5", marginBottom: "2rem" }} />
              <h3 style={{ color: "#1a2b4c", fontSize: "1.8rem", margin: "0 0 1rem 0", fontFamily: "Impact, sans-serif" }}>CONTACT</h3>
              <p style={{ fontSize: "1rem", margin: "0.2rem 0", fontWeight: 700 }}>06.89.82.69.61</p>
              <div style={{ marginTop: "0.5rem", textAlign: "center", fontSize: "0.8rem", fontWeight: 700 }}>@sinclairdortomb<br />@marinanais_</div>
              <p style={{ fontSize: "0.75rem", margin: "1rem 0 0 0", fontWeight: 700, textAlign: "center" }}>marineanaiscontact@gmail.com</p>
            </div>
          </div>
          <div style={{ borderTop: "3px solid #1a2b4c", marginTop: "auto", paddingTop: "1rem", fontSize: "0.8rem", color: "#444" }}>
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
