import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/concert/marine-anais/anniversaires")({
  head: () => ({
    meta: [
      { title: "Marine Anaïs — Anniversaires d'Enfants" },
      { name: "description", content: "Animation anniversaires enfants : jeux interactifs, blind test, concert live sur les chansons Disney et films d'animation préférés." },
      { property: "og:title", content: "Marine Anaïs — Anniversaires d'Enfants" },
      { property: "og:description", content: "Animation anniversaires enfants : jeux interactifs, blind test, concert live sur les chansons Disney et films d'animation préférés." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/marine-anais/anniversaires" }],
  }),
  component: Anniversaires,
});

const FORMULES = [
  {
    age: "3 / 5 ans",
    duree: "30 à 45 min",
    prix: "80 €",
    programme: [
      "De petites Énigmes Sonores très simples",
      "Des Jeux d'éveil Musicaux amusants",
      "Plusieurs chansons que l’enfant choisit pour animer sa fête",
    ],
  },
  {
    age: "6 / 8 ans",
    duree: "45 min à 1h",
    prix: "100 €",
    programme: [
      "Défis en Équipe : Blind Test et N'oubliez pas les Paroles adaptés aux films préférés de l’enfant",
      "Chanter en chœur et à tue-tête (Vaiana, La Reine des Neiges, Le Roi Lion...)",
    ],
  },
  {
    age: "9 ans et +",
    duree: "1h à 1h30",
    prix: "120 €",
    programme: [
      "Défis en Équipe : Blind Test, Quizz, N'oubliez pas les Paroles et Devine la Réplique",
      "Faisons la fête autour des chansons de tes films d'animation préférés !",
    ],
  },
];

const POINTS_FORTS = [
  {
    title: "Chanson Cadeau",
    text: "Tu ne trouves pas TA CHANSON PRÉFÉRÉE dans mon répertoire ? Je l’apprendrai avec plaisir pour ton cadeau d’anniversaire !",
  },
  {
    title: "Sur mesure !",
    text: "Donne-moi tes films d’animation préférés pour que les jeux et le répertoire soient adaptés à TON THÈME !",
  },
  {
    title: "En famille",
    text: "Les parents présents à la fête sont les bienvenus pour prêter main-forte pendant les jeux et pour chanter avec les enfants !",
  },
];

function Anniversaires() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 85px)",
        padding: "3rem 1.5rem 5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        <Link
          to="/services/concert/marine-anais"
          style={{
            color: "var(--accent-blue)",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            marginBottom: "2.5rem",
          }}
        >
          ← Retour aux offres Marine Anaïs
        </Link>

        {/* En-tête */}
        <header style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-light)",
              margin: "0 0 0.75rem",
              fontWeight: 600,
            }}
          >
            Marine Anaïs — Anniversaires
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--accent-cream)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Jeux interactifs et Concert Live
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
        </header>

        {/* Section Une Fête unique */}
        <section
          style={{
            background: "rgba(204,220,245,0.08)",
            border: "1px solid rgba(204,220,245,0.2)",
            borderRadius: 24,
            padding: "2.5rem",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "var(--text-light)",
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: 600,
            }}
          >
            Une Fête unique, la Tienne !
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {POINTS_FORTS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "rgba(11,31,71,0.45)",
                  borderRadius: 16,
                  padding: "1.75rem",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--accent-cream)",
                    margin: "0 0 0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Formules & Tarifs */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "var(--text-light)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontWeight: 600,
            }}
          >
            Formules & Tarifs
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {FORMULES.map((f) => (
              <article
                key={f.age}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,196,168,0.25)",
                  borderRadius: 20,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      color: "var(--accent-cream)",
                      margin: 0,
                      fontWeight: 700,
                    }}
                  >
                    {f.age}
                  </h3>
                  <span
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                    }}
                  >
                    {f.prix}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    margin: "0 0 1.25rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Durée : {f.duree}
                </p>

                <div
                  style={{
                    width: "100%",
                    height: 1,
                    background: "rgba(212,196,168,0.25)",
                    marginBottom: "1.25rem",
                  }}
                />

                <h4
                  style={{
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    margin: "0 0 0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Programme
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    flex: 1,
                  }}
                >
                  {f.programme.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.95rem",
                        lineHeight: 1.55,
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--accent-blue)",
                          fontWeight: 700,
                        }}
                      >
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Section Fiche Technique & Logistique */}
        <section
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,196,168,0.2)",
            borderRadius: 24,
            padding: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "var(--text-light)",
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: 600,
            }}
          >
            Fiche Technique & Logistique
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <h4
                style={{
                  color: "var(--accent-blue)",
                  fontSize: "1.05rem",
                  margin: "0 0 1rem",
                  fontWeight: 700,
                }}
              >
                Matériel à prévoir sur place
              </h4>
              <ul
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  paddingLeft: "1.1rem",
                  margin: 0,
                }}
              >
                <li>Une prise électrique à proximité</li>
                <li>Un écran accessible (télévision ou vidéoprojecteur) pour les jeux</li>
                <li>Un câble HDMI si vous en avez un, pour brancher mon ordinateur</li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  color: "var(--accent-blue)",
                  fontSize: "1.05rem",
                  margin: "0 0 1rem",
                  fontWeight: 700,
                }}
              >
                Matériel fourni
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Je ramène l'enceinte et le micro — seulement 10 minutes d’installation.
              </p>
            </div>

            <div>
              <h4
                style={{
                  color: "var(--accent-blue)",
                  fontSize: "1.05rem",
                  margin: "0 0 1rem",
                  fontWeight: 700,
                }}
              >
                Secteur
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Déplacements en Île-de-France. Frais de transport sur devis.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
