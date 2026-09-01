import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import solsticePhoto from "../assets/solstice_hub_btn.png.asset.json";

export const Route = createFileRoute("/book/solstice")({
  head: () => ({
    meta: [
      { title: "Duo Solstice — Pop/Rock Acoustique | Marine Anaïs et Sinclair" },
      { name: "description", content: "Solstice, duo guitare-voix pop/rock acoustique avec Marine Anaïs et Sinclair : reprises intemporelles et titres récents pour restaurants, bars, événements d'entreprise et fêtes privées. Sonorisation incluse." },
      { property: "og:title", content: "Duo Solstice — Pop/Rock Acoustique | Marine Anaïs et Sinclair" },
      { property: "og:description", content: "Duo guitare-voix acoustique pop/rock avec Marine Anaïs et Sinclair : prestation clé en main pour restaurants, entreprises et événements privés." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://marineanais.fr/book/solstice" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/book/solstice" }],
  }),
  component: BookSolstice,
});

const VIDEOS = [
  {
    id: "1",
    url: "https://www.instagram.com/reel/DWy4W66CHIq/embed",
    title: "Concert au Préau – 9 avril 2026",
    context: "Annonce du concert de Solstice au Préau, à Rueil-Malmaison, dans une ambiance chaleureuse et conviviale.",
  },
  {
    id: "2",
    url: "https://www.instagram.com/reel/DXJnyBXiHLH/embed",
    title: "Concert au Préau – Avril 2026",
    context: "Best of du premier concert du duo, au plus près du public du Préau.",
  },
  {
    id: "3",
    url: "https://www.instagram.com/reel/DXZoQUECMK1/embed",
    title: "Extrait Solstice – Le Chemin",
    context: "Reprise acoustique de Kyo lors de la jam du lundi au Highlander.",
  },
  {
    id: "4",
    url: "https://www.instagram.com/reel/DWt2VQiiI5-/embed",
    title: "Extrait Solstice – Live au Préau",
    context: "Un aperçu guitare-voix de l'univers du duo avant son concert à Rueil-Malmaison.",
  },
  {
    id: "5",
    url: "https://www.instagram.com/reel/Dah-OL1o7Ek/embed",
    title: "Extrait Solstice – Enemy & Shallow",
    context: "Deux reprises en acoustique captées en concert au Mamato.",
  },
];

function BookSolstice() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "var(--text-light)", fontSize: "2.2rem", marginBottom: "3rem", fontWeight: 700 }}>Solstice</h1>

      <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
        <div style={{ width: "100%", maxHeight: 520, backgroundColor: "var(--bg-secondary)", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img
            src={solsticePhoto.url}
            alt="Le duo acoustique Solstice"
            style={{ width: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
          />
        </div>
        <div>
          <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1rem", fontWeight: 700 }}>Présentation</h3>
          <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.9, whiteSpace: "pre-line" }}>
            {`Solstice est un duo guitare-voix spécialisé dans les reprises pop/rock en version acoustique. Nous proposons une expérience musicale chaleureuse, variée et entraînante, conçue pour rassembler toutes les générations autour de succès intemporels et de titres récents.

Que ce soit pour animer une soirée en établissement (restaurant, bar, terrasse), rythmer un événement d'entreprise ou célébrer une occasion privée, nous adaptons notre concert à votre cadre pour offrir une animation sur mesure.

Prestation clé en main et autonome : sonorisation complète (matériel adapté jusqu'à 150 personnes, micros HF), installation, démontage et déplacements inclus.`}
          </p>
        </div>
      </div>

      <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1.5rem", fontWeight: 700 }}>Vidéos</h3>
      <SolsticeVideoCarousel />

      <style>{`
        .solstice-video-track::-webkit-scrollbar { display: none; }
        @media (max-width: 900px){ .book-grid{ grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </div>
  );
}

function SolsticeVideoCarousel() {
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    const slide = track?.firstElementChild as HTMLElement | null;
    if (!track || !slide) return;
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div
        ref={trackRef}
        className="solstice-video-track"
        style={{ display: "flex", gap: "1.5rem", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", padding: "0.5rem 0" }}
      >
        {VIDEOS.map((video) => (
          <div key={video.id} style={{ flex: "0 0 min(82vw, 340px)", scrollSnapAlign: "start" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "9 / 16", overflow: "hidden", borderRadius: 16, backgroundColor: "var(--bg-secondary)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
              <iframe
                src={video.url}
                title={video.title}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
            <h4 style={{ color: "var(--text-light)", fontSize: "1.05rem", fontWeight: 700, margin: "1rem 0 0.35rem" }}>
              {video.title}
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              {video.context}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.25rem" }}>
        <CarouselButton label="Vidéo précédente" direction="left" onClick={() => scrollBy(-1)} />
        <CarouselButton label="Vidéo suivante" direction="right" onClick={() => scrollBy(1)} />
      </div>
    </div>
  );
}

function CarouselButton({ label, direction, onClick }: { label: string; direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--accent-cream)", backgroundColor: "transparent", color: "var(--accent-cream)", cursor: "pointer" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {direction === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}
