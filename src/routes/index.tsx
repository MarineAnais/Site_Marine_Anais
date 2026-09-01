import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { name: "description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations musicales live (solo & duo Solstice), cours de chant et voix off à Rueil-Malmaison, dans les Hauts-de-Seine et en Île-de-France." },
      { property: "og:title", content: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { property: "og:description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations live, cours de chant et voix off dans les Hauts-de-Seine, à Paris et en Île-de-France." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeroSection />

      <div
        id="video-section"
        style={{
          padding: "6rem 2rem",
          background: "var(--bg-secondary)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <iframe
          width="100%"
          style={{
            maxWidth: "900px",
            aspectRatio: "16/9",
            borderRadius: "16px",
            border: "none",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
          src="https://www.youtube.com/embed/eEoW_Irbx1Y"
          title="Marine Anaïs — Performance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

    </div>
  );
}
