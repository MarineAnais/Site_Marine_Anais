import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/live")({
  head: () => ({
    meta: [
      { title: "Prestations Live — Marine Anaïs" },
      { name: "description", content: "Choisissez votre prestation live : Marine Anaïs en solo ou le duo acoustique Solstice." },
      { property: "og:title", content: "Prestations Live — Marine Anaïs" },
      { property: "og:description", content: "Marine Anaïs solo ou le duo acoustique Solstice pour vos événements." },
    ],
  }),
  component: LiveHub,
});

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 16,
  height: 250,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  cursor: "pointer",
  padding: "1rem",
};

function LiveHub() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem" }}>
      <h1 style={{ color: "var(--text-light)", marginBottom: "4rem", fontSize: "2.5rem", textAlign: "center", fontWeight: 500 }}>
        Choisissez votre prestation Live
      </h1>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: 900 }}>
        <motion.div whileHover={{ scale: 1.05 }} style={{ flex: "1 1 350px" }}>
          <Link to="/prestations-live">
            <div style={cardStyle}>
              <h2 style={{ color: "var(--text-light)", fontSize: "2rem", fontWeight: 700, margin: 0 }}>Marine Anaïs</h2>
              <p style={{ color: "var(--text-muted)", marginTop: "1rem", textAlign: "center" }}>
                Anniversaires enfants et restaurateurs
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} style={{ flex: "1 1 350px" }}>
          <Link to="/offres-solstice">
            <div style={cardStyle}>
              <h2 style={{ color: "var(--text-light)", fontSize: "2rem", fontWeight: 700, margin: 0 }}>Solstice</h2>
              <h3 style={{ color: "var(--accent-cream)", fontSize: "1.2rem", margin: "0.5rem 0", fontWeight: 700 }}>Duo Acoustique</h3>
              <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "center" }}>
                ( Mariages, restaurateurs et entreprises )
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
