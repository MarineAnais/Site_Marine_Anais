import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        color: "var(--text-muted)",
        fontSize: "0.85rem",
        opacity: 0.7,
        borderTop: "1px solid rgba(212,196,168,0.1)",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ marginBottom: "0.75rem" }}>
        © {new Date().getFullYear()} Marine Anaïs. Tous droits réservés.
      </div>
      <Link
        to="/mentions-legales"
        style={{
          color: "var(--text-muted)",
          fontSize: "0.8rem",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cream)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        Mentions Légales
      </Link>
    </footer>
  );
}
