import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/prestations-live")({
  head: () => ({
    meta: [
      { title: "Prestations Live — Marine Anaïs" },
      { name: "description", content: "Prestations live : duo acoustique Solstice ou Marine Anaïs en solo sur bande son." },
      { property: "og:title", content: "Prestations Live — Marine Anaïs" },
      { property: "og:description", content: "Solstice (duo acoustique) ou Marine Anaïs en solo." },
    ],
  }),
  component: Prestations,
});

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(212,196,168,0.2)",
  borderRadius: 16,
  padding: "2.5rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function Prestations() {
  return (
    <div style={{ padding: "3rem 2rem", minHeight: "calc(100vh - 85px)", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2rem", color: "var(--accent-cream)", marginBottom: "0.5rem" }}>Mes Prestations (Live)</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
          Que vous organisiez un événement ou souhaitiez travailler votre voix.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
        <div style={card}>
          <h3 style={{ fontSize: "1.8rem", color: "var(--text-light)", textAlign: "center", marginBottom: "0.2rem" }}>Groupe Solstice</h3>
          <h4 style={{ fontSize: "1rem", color: "var(--accent-cream)", textAlign: "center", marginBottom: "1.5rem", fontWeight: 400 }}>
            (Duo Acoustique Guitare/Voix)
          </h4>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1.05rem", textAlign: "center", flexGrow: 1, marginBottom: "2rem" }}>
            Le duo acoustique idéal pour animer vos événements d'entreprise, restaurateurs ou mariages avec élégance.
          </p>
          <Link to="/offres-solstice" style={{ width: "100%", maxWidth: 300 }}>
            <button className="ma-btn ma-btn-primary" style={{ padding: "1rem", fontSize: "1rem", width: "100%" }}>
              Découvrir nos offres
            </button>
          </Link>
        </div>

        <div style={card}>
          <h3 style={{ fontSize: "1.8rem", color: "var(--text-light)", textAlign: "center", marginBottom: "0.2rem" }}>Marine Anaïs (Solo)</h3>
          <h4 style={{ fontSize: "1rem", color: "var(--accent-cream)", textAlign: "center", marginBottom: "1.5rem", fontWeight: 400 }}>
            (Live sur bande son)
          </h4>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1.05rem", textAlign: "center", flexGrow: 1, marginBottom: "2rem" }}>
            Une énergie débordante pour vos goûters d'anniversaires et soirées privées avec une prestation live sur bande son.
          </p>
          <Link to="/devis" style={{ width: "100%", maxWidth: 300 }}>
            <button className="ma-btn ma-btn-primary" style={{ padding: "1rem", fontSize: "1rem", width: "100%" }}>
              Demander un devis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
