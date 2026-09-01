import * as React from "react";

export interface Venue {
  name: string;
  url: string;
  logo: { url: string };
  cardBackground?: string;
}

interface VenuesSectionProps {
  title: string;
  venues: Venue[];
}

export function VenuesSection({ title, venues }: VenuesSectionProps) {
  return (
    <section style={{ width: "100%", padding: "4rem 0" }}>
      <h2
        style={{
          color: "var(--text-light)",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          margin: "0 0 2rem",
          textAlign: "center",
        }}
      >
        {title}
      </h2>

      <div
        className="venues-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(venues.length, 3)}, minmax(0, 1fr))`,
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {venues.map((venue) => (
          <a
            key={venue.name}
            href={venue.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visiter le site de ${venue.name}`}
            className="venue-card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 160,
              padding: "1.5rem",
              borderRadius: 16,
              backgroundColor: venue.cardBackground || "var(--text-light)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src={venue.logo.url}
              alt={venue.name}
              loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: 110,
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>
        ))}
      </div>

      <style>{`
        .venue-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .venue-card:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 4px; }
        @media (max-width: 768px) {
          .venues-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
