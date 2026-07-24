import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Vocal — Marine Anaïs" },
      { name: "description", content: "Coaching vocal personnalisé. Réservez votre séance en ligne." },
      { property: "og:title", content: "Coaching Vocal" },
      { property: "og:description", content: "Coaching vocal personnalisé, tous niveaux." },
    ],
  }),
  component: Coaching,
});

function Coaching() {
  return (
    <div style={{ padding: "4rem 2rem", minHeight: "calc(100vh - 85px)", maxWidth: 900, margin: "0 auto" }}>
      <Link to="/services/coaching" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", display: "inline-block" }}>
        ← Retour au coaching
      </Link>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.3rem", color: "var(--text-light)", marginBottom: "1rem" }}>Réserver une séance de Coaching</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
          Pour réserver une séance, utilisez notre calendrier en ligne.
        </p>
      </div>
      <div style={{ textAlign: "center", padding: "3rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,196,168,0.2)", borderRadius: 16 }}>
        <a href="https://calendly.com" target="_blank" rel="noreferrer" className="ma-btn ma-btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
          Ouvrir Calendly
        </a>
      </div>
    </div>
  );
}
