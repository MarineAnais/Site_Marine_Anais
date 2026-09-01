import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Marine Anaïs | Cours de chant, concerts & voix off" },
      { name: "description", content: "Cours de chant et technique vocale, animation musicale et concerts pop-rock en Île-de-France, voix off professionnelle. Découvrez les prestations de Marine Anaïs." },
      { property: "og:title", content: "Services — Marine Anaïs | Cours de chant, concerts & voix off" },
      { property: "og:description", content: "Cours de chant, animation musicale pop-rock en Île-de-France et voix off avec Marine Anaïs." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services" }],
  }),
  component: ServicesHub,
});

const SERVICES = [
  { title: "Concerts (Live)", to: "/services/concert", desc: "Animation musicale et concerts pop-rock en Île-de-France\u00a0\nDuo Acoustique ou Solo" },
  { title: "Coaching Vocal", to: "/services/coaching", desc: "Cours de chant et technique vocale, dans les Hauts-de-Seine\n\n" },
  { title: "Voix Off", to: "/services/voix-off", desc: "Donnez vie à vos projets audiovisuels\u00a0\n\n" },
];

function ServicesHub() {
  return (
    <div style={{ padding: "4rem 2rem", minHeight: "calc(100vh - 85px)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", color: "var(--text-light)", marginBottom: "1rem", textTransform: "uppercase" }}>
          Mes Services
        </h1>
        <div style={{ width: 60, height: 4, background: "var(--accent-blue)", margin: "0 auto" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {SERVICES.map((s) => (
          <motion.div key={s.to} whileHover={{ scale: 1.03 }}>
            <Link to={s.to}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,196,168,0.2)",
                  borderRadius: 16,
                  padding: "3rem 2rem",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h2 style={{ fontSize: "2rem", color: "var(--accent-cream)", textAlign: "center" }}>{s.title}</h2>
                <p style={{ color: "var(--text-muted)", textAlign: "center", flex: 1, whiteSpace: "pre-line" }}>{s.desc}</p>
                <div style={{ textAlign: "center", color: "var(--accent-blue)", fontWeight: 600 }}>Découvrir →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
