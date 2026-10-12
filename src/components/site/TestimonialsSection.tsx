export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  date: string;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
  variant?: "card" | "editorial";
}

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(212,196,168,0.2)",
  borderRadius: "12px",
  padding: "1.75rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
};

function EditorialItem({ t }: { t: Testimonial }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <span
        aria-hidden
        style={{
          fontSize: "3.2rem",
          lineHeight: 1,
          color: "var(--accent-blue)",
          opacity: 0.55,
          fontFamily: "Georgia, 'Times New Roman', serif",
          marginBottom: "0.75rem",
          userSelect: "none",
        }}
      >
        «
      </span>
      <blockquote
        style={{
          color: "var(--text-light)",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1.8,
          fontSize: "1.05rem",
          margin: 0,
          maxWidth: 480,
        }}
      >
        {t.quote}
      </blockquote>
      <span
        aria-hidden
        style={{
          display: "block",
          width: "42px",
          height: "1px",
          background: "var(--accent-cream)",
          opacity: 0.5,
          margin: "1.4rem auto 1rem",
        }}
      />
      <figcaption style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.2rem" }}>
        <span
          style={{
            color: "var(--accent-cream)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {t.name}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {t.role ? `${t.role} · ` : ""}
          {t.date}
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection({
  title = "Témoignages & Avis",
  testimonials,
  variant = "card",
}: TestimonialsSectionProps) {
  return (
    <section style={{ marginBottom: "2.5rem", width: "100%" }}>
      <h2 style={{ color: "var(--text-light)", fontSize: "1.5rem", fontWeight: 500, marginBottom: "1.5rem", textAlign: "center" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          width: "100%",
        }}
      >
        {testimonials.map((t) =>
          variant === "editorial" ? (
            <EditorialItem key={t.name + t.date} t={t} />
          ) : (
            <figure key={t.name + t.date} style={{ ...cardStyle, margin: 0 }}>
              <blockquote
                style={{
                  color: "var(--text-light)",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                  margin: 0,
                }}
              >
                « {t.quote} »
              </blockquote>
              <figcaption
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                }}
              >
                {t.name}
                {t.role ? ` — ${t.role}` : ""} · {t.date}
              </figcaption>
            </figure>
          )
        )}
      </div>
    </section>
  );
}
