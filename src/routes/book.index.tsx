import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import marineHub from "../assets/marine_hub_btn.jpg.asset.json";
import solsticeHub from "../assets/solstice_hub_btn.png.asset.json";

export const Route = createFileRoute("/book/")({
  head: () => ({
    meta: [
      { title: "Book — Marine Anaïs & Duo Solstice | Chanteuse pop-rock Île-de-France" },
      { name: "description", content: "Book de Marine Anaïs et du duo Solstice : vidéos live, photos et présentations. Chanteuse pop-rock, variété française et duo acoustique en Île-de-France." },
      { property: "og:title", content: "Book — Marine Anaïs & Duo Solstice | Chanteuse pop-rock Île-de-France" },
      { property: "og:description", content: "Book de Marine Anaïs et du duo Solstice : vidéos live, photos et présentations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://marineanais.fr/book" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/book" }],
  }),
  component: BookHub,
});

const cardStyle = {
  borderRadius: 16,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  cursor: "pointer",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

const title = {
  color: "var(--text-light)",
  fontSize: "2.2rem",
  fontWeight: 700,
  letterSpacing: 1,
  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  margin: 0,
} as const;

function BookHub() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem" }}>
      <h1 style={{ color: "var(--text-light)", marginBottom: "4rem", fontSize: "2.5rem", textAlign: "center", fontWeight: 500 }}>
        Découvrez nos books
      </h1>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: 900 }}>
        <motion.div whileHover={{ scale: 1.05 }} style={{ flex: "1 1 350px" }}>
          <Link to="/book/marine-anais">
            <div style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${marineHub.url})` }}>
              <h2 style={title}>Marine Anaïs</h2>
            </div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} style={{ flex: "1 1 350px" }}>
          <Link to="/book/solstice">
            <div style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${solsticeHub.url})` }}>
              <h2 style={title}>Solstice</h2>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
