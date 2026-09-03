import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/coaching")({
  head: () => ({
    meta: [
      { title: "Cours de chant et technique vocale — Marine Anaïs" },
      { name: "description", content: "Cours de chant et technique vocale avec Marine Anaïs, professeur de chant dans les Hauts-de-Seine. Coaching vocal personnalisé pour tous niveaux, enfants et adultes." },
      { property: "og:title", content: "Cours de chant et technique vocale — Marine Anaïs" },
      { property: "og:description", content: "Cours de chant et technique vocale avec Marine Anaïs, professeur de chant dans les Hauts-de-Seine." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/coaching" }],
  }),
  component: CoachingHub,
});

function CoachingHub() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", padding: "5rem 2rem" }}>
      <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", alignSelf: "flex-start" }}>
        ← Retour aux services
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", maxWidth: 800 }}
      >
        <h1 style={{ color: "var(--text-light)", marginBottom: "1.5rem", fontSize: "3rem", fontWeight: 500 }}>
          Coaching Vocal
        </h1>
        <p style={{ color: "var(--accent-cream)", fontSize: "1.4rem", lineHeight: 1.6, marginBottom: "2rem", fontStyle: "italic", whiteSpace: "pre-line" }}>
          Coaching, technique vocale & interprétation pour tous niveaux — Hauts-de-Seine
        </p>

        <div
          style={{
            background: "rgba(204, 220, 245, 0.1)",
            border: "1px solid rgba(204, 220, 245, 0.35)",
            borderRadius: "12px",
            padding: "1.5rem 2rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--accent-blue)" }}>Préparez votre séance :</strong>{" "}
            N’hésitez pas à me préciser quelle chanson vous souhaitez travailler lors de votre coaching pour que je puisse préparer au mieux votre venue !
          </p>
        </div>

        <a
          href="https://calendly.com/marineanais"
          target="_blank"
          rel="noopener noreferrer"
          className="ma-btn ma-btn-primary"
          style={{ padding: "1rem 3rem", fontSize: "1.15rem", marginBottom: "1.5rem", display: "inline-block" }}
        >
          Réserver sur Calendly
        </a>

        <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
          Il n’est pas possible de choisir directement entre un cours adulte ou enfant sur Calendly.
          {" "}<strong style={{ color: "var(--text-light)" }}>Précisez-le simplement dans les notes ou par message</strong>{" "}
          lors de votre réservation, et j’ajusterai la séance en conséquence.
        </p>
      </motion.div>
    </div>
  );
}
