import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Marine Anaïs" },
      { name: "description", content: "Prestations live, coaching vocal et voix off." },
      { property: "og:title", content: "Services — Marine Anaïs" },
      { property: "og:description", content: "Prestations live, coaching vocal et voix off." },
    ],
  }),
  component: ServicesHub,
});

const SERVICES = [
  { title: "Prestations (Live)", to: "/services/live", desc: "Duo acoustique Solstice ou prestation solo sur bande son pour vos événements." },
  { title: "Coaching Vocal", to: "/services/coaching", desc: "Développez votre voix avec un accompagnement sur-mesure." },
  { title: "Voix Off", to: "/voix-off", desc: "Donnez vie à vos projets audiovisuels avec une voix professionnelle." },
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
                <p style={{ color: "var(--text-muted)", textAlign: "center", flex: 1 }}>{s.desc}</p>
                <div style={{ textAlign: "center", color: "var(--accent-blue)", fontWeight: 600 }}>Découvrir →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
