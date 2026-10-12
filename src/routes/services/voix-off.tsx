import { createFileRoute, Link } from "@tanstack/react-router";
import TestimonialsSection from "../../components/site/TestimonialsSection";

export const Route = createFileRoute("/services/voix-off")({
  head: () => ({
    meta: [
      { title: "Voix Off — Marine Anaïs | Voix professionnelle pour vos projets" },
      { name: "description", content: "Voix off professionnelle pour publicités, documentaires et projets audiovisuels. Marine Anaïs, chanteuse et coach vocal basée en région parisienne." },
      { property: "og:title", content: "Voix Off — Marine Anaïs | Voix professionnelle pour vos projets" },
      { property: "og:description", content: "Voix off professionnelle pour publicités, documentaires et projets audiovisuels avec Marine Anaïs." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/voix-off" }],
  }),
  component: VoixOff,
});

type Collaboration = {
  name: string;
  /** Lien du partenaire. Tant qu'il est absent, le logo s'affiche sans être cliquable. */
  url?: string;
  /** Chemin du logo, par ex. "/logos/ecoute-du-vivant.png" (fichier à placer dans public/logos/). Sans logo, le nom s'affiche à la place. */
  logo?: string;
  /** Couleur de fond de la tuile, à adapter si le logo est clair ou sombre. */
  background?: string;
};

const COLLABORATIONS: Collaboration[] = [
  { name: "L'Écoute du Vivant" }, // lien à venir
  { name: "Origins" }, // lien à venir
];

const tileStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 240,
  maxWidth: "100%",
  minHeight: 140,
  padding: "1.5rem",
  borderRadius: 16,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(212,196,168,0.2)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

function CollaborationTile({ c }: { c: Collaboration }) {
  const style = c.background ? { ...tileStyle, background: c.background } : tileStyle;
  const content = c.logo ? (
    <img
      src={c.logo}
      alt={c.name}
      loading="lazy"
      style={{ maxWidth: "100%", maxHeight: 90, objectFit: "contain", display: "block" }}
    />
  ) : (
    <span style={{ color: "var(--accent-cream)", fontWeight: 600, fontSize: "1.1rem", textAlign: "center" }}>
      {c.name}
    </span>
  );

  if (!c.url) {
    return (
      <div className="collab-tile" style={style}>
        {content}
      </div>
    );
  }

  return (
    <a
      className="collab-tile collab-tile-link"
      href={c.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visiter ${c.name}`}
      style={style}
    >
      {content}
    </a>
  );
}

function VoixOff() {
  return (
    <div style={{ padding: "5rem 2rem", minHeight: "calc(100vh - 85px)", maxWidth: 1000, margin: "0 auto" }}>
      <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", display: "inline-block" }}>
        ← Retour aux services
      </Link>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--accent-cream)", marginBottom: "1rem" }}>Voix Off</h1>
        <p style={{ color: "var(--text-light)", fontSize: "1.15rem", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
          Une voix expressive, vibrante et lumineuse pour donner vie à vos projets audiovisuels.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4rem", gap: "2rem" }}>
        <div style={{ width: "100%", maxWidth: 600, height: 100, background: "rgba(255,255,255,0.05)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(212,196,168,0.3)" }}>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>Démos audio à venir</p>
        </div>

        {/* Collaborations & Projets */}
        <section style={{ width: "100%", marginTop: "2rem" }}>
          <h2 style={{ color: "var(--text-light)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "1.5rem", textAlign: "center" }}>
            Ils me font confiance
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
            {COLLABORATIONS.map((c) => (
              <CollaborationTile key={c.name} c={c} />
            ))}
          </div>
          <style>{`
            .collab-tile-link:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
            .collab-tile-link:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 4px; }
          `}</style>
        </section>

        {/* Témoignages & Avis */}
        <div style={{ width: "100%", maxWidth: 900 }}>
          <TestimonialsSection
            testimonials={[
              {
                quote:
                  "J'ai fait appel à Marine Anaïs pour la voix off de mon podcast Les Nouvelles de l'Écoute du Vivant. Elle a pris le temps de trouver le ton exact qui correspondait à ce que j'attendais et à l'univers du projet. C'était un vrai plaisir de travailler avec elle et je ferai de nouveau appel à elle pour de prochains épisodes !",
                name: "Grégory Guillou-Montéan",
                role: "Fondateur de l’Écoute du Vivant",
                date: "Mai 2026",
              },
              {
                quote:
                  "On recommande vivement Marine Anaïs pour sa créativité, sa réactivité et sa capacité à donner vie à un projet avec authenticité ! On a fait appel à elle pour une prestation voix off lors d’un week-end événementiel pour notre association de jeux vidéo, Origins. ✨\nÀ l'occasion de notre Color Party, Marine a imaginé et interprété un personnage sur-mesure pour immerger les participants dès le début de la soirée. Son implication et son talent ont apporté une vraie identité à l'événement et rendu l'expérience encore plus mémorable et conviviale !",
                name: "La team Origins 💫",
                date: "Mai 2026",
              },
            ]}
          />
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
