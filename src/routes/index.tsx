import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";
import { VenuesSection } from "../components/site/VenuesSection";
import { ALL_VENUES } from "../lib/venues";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison" },
      { name: "description", content: "Chanteuse pop-rock, variété française et coach vocal. Découvrez les prestations live (solo & duo Solstice) et les cours de chant sur mesure." },
      { property: "og:title", content: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison" },
      { property: "og:description", content: "Chanteuse pop-rock, variété française et coach vocal. Découvrez les prestations live (solo & duo Solstice) et les cours de chant sur mesure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/" }],
  }),
  component: Home,
});

function Home() {
  const projects = [
    { src: "/marine-photo-1.jpg", alt: "Marine Anaïs en concert live — Chanteuse Pop-Rock", label: "Marine Anaïs — Comédie Musical", to: "/book/marine-anais" as const, objectPosition: "center 20%" as const },
    { src: "/marine-photo-18.jpg", alt: "Prestation scénique variété française et pop-rock", label: "Marine Anaïs — Concert", to: "/book/marine-anais" as const },
    { src: "/marine-photo-2.jpg", alt: "Prestation scénique variété française et pop-rock", label: "Marine Anaïs — Projet solo", to: "/book/marine-anais" as const, objectPosition: "center 20%" as const },
    { src: "/marine-photo-20.jpg", alt: "Duo acoustique Solstice en prestation musicale", label: "Solstice — Duo acoustique", to: "/book/solstice" as const },
    { src: "/marine-photo-4.jpg", alt: "Cours de chant et coaching vocal individuel", label: "Marine Anaïs — Spectacle", to: "/book/marine-anais" as const },
    { src: "/marine-photo-5.jpg", alt: "Prestation scénique variété française et pop-rock", label: "Marine Anaïs — Spectacle", to: "/book/marine-anais" as const },
  ];


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

        <h2
          style={{
            color: "var(--text-light)",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "5rem 0 2rem",
            textAlign: "center",
          }}
        >
          Quelques images de mes projets
        </h2>

        <div className="home-project-grid">
          {projects.map((project) => (
            <Link
              key={`${project.label}-${project.src}`}
              to={project.to}
              className="home-project-link"
              aria-label={`Découvrir ${project.label}`}
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
                style={{ objectPosition: project.objectPosition }}
              />
              <span>{project.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <VenuesSection title="J'ai chanté ici" venues={ALL_VENUES} />
      </div>

      <style>{`
        .home-project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          width: 100%;
          max-width: 1100px;
        }
        .home-project-link {
          position: relative;
          display: block;
          min-width: 0;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 8px;
          background: var(--bg-primary);
        }
        .home-project-link img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .home-project-link span {
          position: absolute;
          inset: auto 0 0;
          padding: 2.75rem 1rem 1rem;
          color: var(--text-light);
          font-size: 0.95rem;
          font-weight: 700;
          background: linear-gradient(transparent, var(--bg-secondary));
        }
        .home-project-link:hover img { transform: scale(1.04); opacity: 0.82; }
        .home-project-link:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) {
          .home-project-link img { transition: none; }
        }
        @media (max-width: 800px) {
          .home-project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 520px) {
          #video-section { padding: 4rem 1.25rem !important; }
          .home-project-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
