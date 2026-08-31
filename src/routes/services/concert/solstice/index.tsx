import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/concert/solstice/")({
  head: () => ({
    meta: [
      { title: "Offres Solstice — Marine Anaïs" },
      { name: "description", content: "Offres du duo Solstice pour mariages, restaurateurs et entreprises." },
      { property: "og:title", content: "Offres Solstice" },
      { property: "og:description", content: "Offres du duo Solstice pour mariages, restaurateurs et entreprises." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/solstice" }],
  }),
  component: SolsticeOffers,
});

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 16,
  height: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  cursor: "pointer",
};
const titleStyle: React.CSSProperties = { color: "var(--text-light)", fontSize: "2rem", fontWeight: 700, letterSpacing: 1, textShadow: "2px 2px 8px rgba(0,0,0,0.5)", margin: 0 };

function SolsticeOffers() {
  const items = [
    { to: "/services/concert/solstice/mariages", label: "Mariages", border: "rgba(212,196,168,0.4)" },
    { to: "/services/concert/solstice/restaurateurs", label: "Restaurateurs", border: "rgba(153,0,0,0.4)" },
    { to: "/services/concert/solstice/entreprises", label: "Entreprises", border: "rgba(42,75,140,0.4)" },
  ];
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem" }}>
      <Link to="/services/concert" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start" }}>
        ← Retour aux prestations Live
      </Link>
      <h1 style={{ color: "var(--text-light)", marginBottom: "4rem", fontSize: "2.5rem", textAlign: "center", fontWeight: 500 }}>Offres pour</h1>
      <div className="solstice-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", width: "100%", maxWidth: 1200 }}>
        {items.map((it) => (
          <motion.div key={it.to} whileHover={{ scale: 1.05 }}>
            <Link to={it.to}>
              <div style={{ ...cardStyle, borderColor: it.border }}>
                <h2 style={titleStyle}>{it.label}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width:900px){.solstice-grid{grid-template-columns:1fr !important;gap:1.5rem !important}}`}</style>
    </div>

  );
}
