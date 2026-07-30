import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/voix-off")({
  head: () => ({
    meta: [
      { title: "Voix Off — Marine Anaïs" },
      { name: "description", content: "Voix off professionnelle pour vos projets audiovisuels, publicités et documentaires." },
      { property: "og:title", content: "Voix Off — Marine Anaïs" },
      { property: "og:description", content: "Voix off professionnelle et captivante." },
    ],
  }),
  component: VoixOff,
});

function VoixOff() {
  return (
    <div style={{ padding: "5rem 2rem", minHeight: "calc(100vh - 85px)", maxWidth: 1000, margin: "0 auto" }}>
      <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", display: "inline-block" }}>
        ← Retour aux services
      </Link>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--accent-cream)", marginBottom: "1rem" }}>Voix Off</h1>
        <p style={{ color: "var(--text-light)", fontSize: "1.15rem", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
          Donnez vie à vos projets audiovisuels, publicités et documentaires avec une voix professionnelle et captivante.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4rem", gap: "2rem" }}>
        <div style={{ width: "100%", maxWidth: 600, height: 100, background: "rgba(255,255,255,0.05)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(212,196,168,0.3)" }}>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>Démos audio à venir</p>
        </div>
        <Link to="/contact">
          <button className="ma-btn ma-btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.05rem" }}>
            Me contacter pour un projet
          </button>
        </Link>
      </div>
    </div>
  );
}
