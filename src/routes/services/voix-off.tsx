import { createFileRoute, Link } from "@tanstack/react-router";
import { logoEcouteDuVivant as ecouteLogo } from "@/lib/medias";
import { logoOrigins as originsLogo } from "@/lib/medias";

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
  {
    name: "L'Écoute du Vivant",
    url: "https://www.instagram.com/ecoute_du_vivant?cplk=MTI1Y3N4anZuZDI5dg==",
    logo: ecouteLogo.url,
    background: "#f3ead8",
  },
  {
    name: "Origins",
    url: "https://linktr.ee/asso.origins?utm_source=linktree_profile_share&ltsid=e3874358-bfed-46be-9499-e36ea4f02efc",
    logo: originsLogo.url,
    background: "#000000",
  },
];

const REVIEWS = [
  {
    firstSentence:
      "J'ai fait appel à Marine Anaïs pour la voix off de mon podcast Les Nouvelles de l'Écoute du Vivant.",
    paragraphs: [
      "Elle a pris le temps de trouver le ton exact qui correspondait à ce que j'attendais et à l'univers du projet. C'était un vrai plaisir de travailler avec elle et je ferai de nouveau appel à elle pour de prochains épisodes !",
    ],
    author: "Grégory Guillou-Montéan",
    role: "Fondateur de l’Écoute du Vivant",
    date: "Mai 2026",
  },
  {
    firstSentence:
      "On recommande vivement Marine Anaïs pour sa créativité, sa réactivité et sa capacité à donner vie à un projet avec authenticité !",
    paragraphs: [
      "On a fait appel à elle pour une prestation voix off lors d’un week-end événementiel pour notre association de jeux vidéo, Origins. ✨",
      "À l'occasion de notre Color Party, Marine a imaginé et interprété un personnage sur-mesure pour immerger les participants dès le début de la soirée. Son implication et son talent ont apporté une vraie identité à l'événement et rendu l'expérience encore plus mémorable et conviviale !",
    ],
    author: "La team Origins 💫",
    role: "",
    date: "Mai 2026",
  },
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

        <style>{`
          .collab-tile-link:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
          .collab-tile-link:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 4px; }
          @media (max-width: 720px) { .review-row { flex-direction: column !important; } }
        `}</style>

        {/* Témoignages & Avis */}
        <section style={{ width: "100%", maxWidth: 900 }}>
          <h2 style={{ color: "var(--text-light)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "1.5rem", textAlign: "center" }}>
            Témoignages & Avis
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {REVIEWS.map((r, i) => (
              <div
                key={r.author}
                className="review-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                }}
              >
              <CollaborationTile c={COLLABORATIONS[i]} />
              <figure
                style={{
                  margin: 0,
                  flex: 1,
                  background: "#ffffff",
                  color: "#1f1f1f",
                  borderRadius: 12,
                  padding: "1.75rem 1.75rem 1.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  textAlign: "left",
                }}
              >
                <blockquote style={{ margin: 0, lineHeight: 1.7, fontSize: "1rem", fontStyle: "italic" }}>
                  {r.paragraphs.map((p, j) => (
                    <p key={j} style={{ margin: j === 0 ? 0 : "0.9rem 0 0" }}>
                      {j === 0 ? (
                        <>
                          <strong style={{ fontWeight: 700 }}>{r.firstSentence}</strong> {p}
                        </>
                      ) : (
                        p
                      )}
                    </p>
                  ))}
                </blockquote>
                <figcaption style={{ marginTop: "1.25rem", fontSize: "1.05rem", color: "#444" }}>
                  — <strong>{r.author}</strong>
                  {r.role ? `, ${r.role}` : ""} ({r.date})
                </figcaption>
              </figure>
              </div>
            ))}
          </div>
        </section>

        <Link to="/contact">
          <button className="ma-btn ma-btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.05rem" }}>
            Me contacter pour un projet
          </button>
        </Link>
      </div>
    </div>
  );
}
