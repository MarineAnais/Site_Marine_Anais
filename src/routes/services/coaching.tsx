import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Vocal — Marine Anaïs" },
      { name: "description", content: "Coaching vocal personnalisé pour tous niveaux, enfants ou adultes. Réservation en ligne." },
      { property: "og:title", content: "Coaching Vocal — Marine Anaïs" },
      { property: "og:description", content: "Coaching vocal personnalisé pour tous niveaux." },
    ],
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
        <h1 style={{ color: "var(--text-light)", marginBottom: "2rem", fontSize: "3rem", fontWeight: 500 }}>
          Coaching Vocal
        </h1>
        <p style={{ color: "var(--accent-cream)", fontSize: "1.4rem", lineHeight: 1.6, marginBottom: "3rem", fontStyle: "italic", whiteSpace: "pre-line" }}>
          Trouvons comment interpréter au mieux vos morceaux préférés !{" "}&nbsp;
          {"\n"}Coaching personnalisé pour tous les niveaux
        </p>

        <a
          href="https://calendly.com/marineanais"
          target="_blank"
          rel="noopener noreferrer"
          className="ma-btn ma-btn-primary"
          style={{ padding: "1rem 3rem", fontSize: "1.15rem", marginBottom: "1.5rem", display: "inline-block" }}
        >
          Réserver sur Calendly
        </a>

        <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
          Lors de votre réservation, vous aurez la possibilité de choisir entre des <strong>cours enfant</strong> ou <strong>adulte</strong>.
        </p>
      </motion.div>
    </div>
  );
}
