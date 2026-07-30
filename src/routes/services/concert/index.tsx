import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import marineHub from "../../../assets/marine_hub_btn.jpg.asset.json";
import solsticeHub from "../../../assets/solstice_hub_btn.png.asset.json";

export const Route = createFileRoute("/services/concert/")({
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
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 16,
  height: 300,
  backgroundSize: "cover",
  backgroundPosition: "center",
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
            <div style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${marineHub.url})` }}>
              <h2 style={{ color: "var(--text-light)", fontSize: "2rem", fontWeight: 700, margin: 0, textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>Marine Anaïs</h2>
              <p style={{ color: "var(--text-light)", marginTop: "1rem", textAlign: "center", textShadow: "1px 1px 6px rgba(0,0,0,0.8)", fontSize: "1.15rem" }}>
                Anniversaires d'Enfants et Restaurateurs
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} style={{ flex: "1 1 350px" }}>
          <Link to="/services/concert/solstice">
            <div style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${solsticeHub.url})` }}>
              <h2 style={{ color: "var(--text-light)", fontSize: "2rem", fontWeight: 700, margin: 0, textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>Solstice</h2>
              <h3 style={{ color: "var(--accent-cream)", fontSize: "1.2rem", margin: "0.5rem 0", fontWeight: 700, textShadow: "1px 1px 6px rgba(0,0,0,0.8)" }}>Duo Acoustique</h3>
              <p style={{ color: "var(--text-light)", marginTop: "0.5rem", textAlign: "center", textShadow: "1px 1px 6px rgba(0,0,0,0.8)", fontSize: "1.15rem" }}>
                Mariages, Restaurateurs et Entreprises
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
