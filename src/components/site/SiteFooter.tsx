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
      © {new Date().getFullYear()} Marine Anaïs. Tous droits réservés.
    </footer>
  );
}
