import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Vocal & Technique Vocale — Marine Anaïs" },
      {
        name: "description",
        content:
          "Coaching vocal et technique vocale avec Marine Anaïs dans les Hauts-de-Seine (92). Séances personnalisées axées sur l'interprétation pour enfants et adultes.",
      },
      { property: "og:title", content: "Coaching Vocal & Technique Vocale — Marine Anaïs" },
      {
        property: "og:description",
        content: "Coaching vocal et technique vocale avec Marine Anaïs dans les Hauts-de-Seine.",
      },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/coaching" }],
  }),
  component: CoachingHub,
});

function CoachingHub() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem 1.5rem" }}>
      {/* Navigation Retour */}
      <div style={{ width: "100%", maxWidth: 800, marginBottom: "2rem" }}>
        <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700, textDecoration: "none" }}>
          ← Retour aux services
        </Link>
      </div>

      <main style={{ textAlign: "center", maxWidth: 800, width: "100%" }}>
        {/* En-tête */}
        <header style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ color: "var(--text-light)", marginBottom: "1rem", fontSize: "2.8rem", fontWeight: 500 }}>
            Coaching Vocal
          </h1>
          <p style={{ color: "var(--accent-cream)", fontSize: "1.3rem", lineHeight: 1.5, fontStyle: "italic", margin: 0 }}>
            Coaching, technique vocale & interprétation pour tous niveaux — Hauts-de-Seine
          </p>
        </header>

        {/* Grille des Formules & Tarifs */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: "var(--text-light)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "1.5rem" }}>
            Tarifs pour 1h30
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              width: "100%",
            }}
          >
            {/* Card Enfants */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,196,168,0.2)",
                borderRadius: "12px",
                padding: "1.75rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--accent-blue)", marginBottom: "0.25rem" }}>35 €</span>
              <h3 style={{ color: "var(--text-light)", fontSize: "1.15rem", fontWeight: 600, margin: "0.5rem 0 0.25rem" }}>Coaching Enfant</h3>
              <span style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--accent-cream)", background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.75rem", borderRadius: "20px" }}>
                Exclusivement chez vous
              </span>
            </div>

            {/* Card Adultes */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,196,168,0.2)",
                borderRadius: "12px",
                padding: "1.75rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--accent-blue)", marginBottom: "0.25rem" }}>45 €</span>
              <h3 style={{ color: "var(--text-light)", fontSize: "1.15rem", fontWeight: 600, margin: "0.5rem 0 0.25rem" }}>Coaching Adulte</h3>
              <span style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--accent-cream)", background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.75rem", borderRadius: "20px" }}>
                À mon domicile (Rueil-Malmaison) ou chez vous
              </span>
            </div>
          </div>

          {/* Précisions logistiques */}
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "1.5rem" }}>
            Règlement par CESU (50 % de crédit d'impôt) et frais de déplacement applicables si je me déplace chez vous.
          </p>
        </section>

        {/* Présentation de l'approche */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
            <strong>L'objectif</strong> : vous guider avec bienveillance pour développer votre technique vocale et <strong>interpréter au mieux les chansons</strong> que vous souhaitez travailler. Chaque séance de <strong>1h30</strong> est pensée sur mesure pour libérer votre voix, transmettre vos émotions et gagner en confiance.
          </p>
        </section>

        {/* Bloc d'Appel à l'Action (CTA) */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(204, 220, 245, 0.15)",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            marginBottom: "2.5rem",
          }}
        >
          <h2 style={{ color: "var(--text-light)", fontSize: "1.4rem", fontWeight: 500, marginBottom: "1rem" }}>
            Pour réserver votre créneau
          </h2>
          <a
            href="https://calendly.com/marineanais"
            target="_blank"
            rel="noopener noreferrer"
            className="ma-btn ma-btn-primary"
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Choisissez la date et l'heure sur Calendly
          </a>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 550, margin: "0 auto 1.5rem", lineHeight: 1.5, fontStyle: "italic" }}>
            La sélection enfant/adulte et le choix du lieu ne fonctionne pas sur Calendly. Précisez s'il sagit d'un cours adulte ou enfant ainsi que le lieu, votre domicile (avec l'adresse) ou le miens dans les notes de réservation.
          </p>

          {/* Encadré Conseil Préparation */}
          <div
            style={{
              background: "rgba(204, 220, 245, 0.08)",
              border: "1px solid rgba(204, 220, 245, 0.25)",
              borderRadius: "12px",
              padding: "1.25rem 1.75rem",
              textAlign: "left",
            }}
          >
            <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--accent-blue)" }}>💡 Préparez votre séance :</strong>{" "}
              Pour préparer au mieux votre session préciser quelle chanson vous souhaitez travailler lors de votre coaching et vos objectifs !
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
