export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  date: string;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
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

export default function TestimonialsSection({
  title = "Témoignages & Avis",
  testimonials,
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
        {testimonials.map((t) => (
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
        ))}
      </div>
    </section>
  );
}
