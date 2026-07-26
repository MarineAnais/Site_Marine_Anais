import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Chanteuse & Coach Vocal" },
      { name: "description", content: "Chanteuse & Coach Vocal. Prestations live, coaching et voix off. Pop-Rock, variété française, films d'animation." },
      { property: "og:title", content: "Marine Anaïs — Chanteuse & Coach Vocal" },
      { property: "og:description", content: "Prestations live, coaching vocal et voix off pour vos événements." },
    ],
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
