import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/concert/marine-anais/restaurateurs")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Offre Restaurateurs" },
      { name: "description", content: "Offre restaurateurs de Marine Anaïs — Bientôt disponible." },
      { property: "og:title", content: "Marine Anaïs — Offre Restaurateurs" },
      { property: "og:description", content: "Offre restaurateurs de Marine Anaïs — Bientôt disponible." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/marine-anais/restaurateurs" }],
  }),
  component: SoloResto,
});

function SoloResto() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 85px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        background: "var(--bg-secondary)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "var(--text-light)",
          margin: "0 0 1rem",
          fontWeight: 600,
        }}
      >
        Marine Anaïs — Offre Restaurateurs
      </h1>
      <p
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          color: "var(--accent-cream)",
          margin: 0,
          fontStyle: "italic",
        }}
      >
        Bientôt disponible
      </p>
      <div
        style={{
          width: 80,
          height: 3,
          background: "var(--accent-blue)",
          margin: "1.5rem auto 0",
          borderRadius: 999,
        }}
      />
    </div>
  );
}
