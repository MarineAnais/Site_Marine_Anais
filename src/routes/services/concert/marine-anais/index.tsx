import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/concert/marine-anais/")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs Solo — Offres" },
      { name: "description", content: "Offres solo de Marine Anaïs : anniversaires d'enfants et restaurateurs." },
      { property: "og:title", content: "Marine Anaïs Solo — Offres" },
      { property: "og:description", content: "Offres solo : anniversaires d'enfants et restaurateurs." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/marine-anais" }],
  }),
  component: MarineOffers,
});

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(212,196,168,0.4)",
  borderRadius: 16,
  height: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  cursor: "pointer",
  position: "relative",
};

function MarineOffers() {
  const items = [
    { to: "/services/concert/marine-anais/anniversaires", label: "Anniversaires d'Enfants", soon: false },
    { to: "/services/concert/marine-anais/restaurateurs", label: "Restaurateurs", soon: true },
  ];
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem" }}>
      <Link to="/services/concert" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start" }}>
        ← Retour aux prestations Live
      </Link>
      <h1 style={{ color: "var(--text-light)", marginBottom: "4rem", fontSize: "2.5rem", textAlign: "center", fontWeight: 500 }}>Offres pour</h1>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: 900 }}>
        {items.map((it) => (
          <motion.div key={it.to} whileHover={{ scale: 1.05 }} style={{ flex: "1 1 300px" }}>
            <Link to={it.to} style={{ display: "block", position: "relative" }}>
              <div style={cardStyle}>
                <h2 style={{ color: "var(--text-light)", fontSize: "1.9rem", fontWeight: 700, margin: 0, textAlign: "center" }}>{it.label}</h2>
                {it.soon && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "var(--accent-blue)",
                      color: "var(--bg-primary)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "0.35rem 0.7rem",
                      borderRadius: 999,
                    }}
                  >
                    Bientôt disponible
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
