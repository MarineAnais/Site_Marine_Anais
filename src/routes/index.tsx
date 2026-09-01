import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { name: "description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations musicales live (solo & duo Solstice), cours de chant et voix off à Rueil-Malmaison, dans les Hauts-de-Seine et en Île-de-France." },
      { property: "og:title", content: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { property: "og:description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations live, cours de chant et voix off dans les Hauts-de-Seine, à Paris et en Île-de-France." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/" }],
  }),
  component: Home,
});

function Home() {
  const projects = [
    { src: "/marine-photo-2.jpg", alt: "Marine Anaïs sur scène", label: "Marine Anaïs — Live", to: "/book/marine-anais" as const },
    { src: "/marine-photo-4.jpg", alt: "Marine Anaïs en concert", label: "Marine Anaïs — Concert", to: "/book/marine-anais" as const },
    { src: "/marine-photo-6.jpg", alt: "Projet artistique de Marine Anaïs", label: "Marine Anaïs — Projet solo", to: "/book/marine-anais" as const },
    { src: solsticeHub.url, alt: "Le duo acoustique Solstice", label: "Solstice — Duo acoustique", to: "/book/solstice" as const },
    { src: solsticeMarriage.url, alt: "Solstice en formule mariage", label: "Solstice — Mariages", to: "/book/solstice" as const },
    { src: solsticeCompany.url, alt: "Solstice en formule entreprise", label: "Solstice — Entreprises", to: "/book/solstice" as const },
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
        <h2
          style={{
            color: "var(--text-light)",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "0 0 2rem",
            textAlign: "center",
          }}
        >
          En vidéo
        </h2>
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
              <img src={project.src} alt={project.alt} loading="lazy" />
              <span>{project.label}</span>
            </Link>
          ))}
        </div>
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
