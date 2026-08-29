import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const MENU: Item[] = [
  { label: "Accueil", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Concerts (Live)", to: "/services/concert" },
      { label: "Coaching Vocal", to: "/services/coaching" },
      { label: "Voix Off", to: "/services/voix-off" },
    ],
  },
  { label: "Book", to: "/book" },
  { label: "Contact", to: "/contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          background: "rgba(11, 31, 71, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(212,196,168,0.1)",
        }}
      >
        <Link
          to="/"
          style={{
            color: "var(--accent-cream)",
            fontSize: "1.4rem",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Marine Anaïs
        </Link>

        <div
          className="ma-nav-desktop"
          style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
        >
          {MENU.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                to={item.to}
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
                activeProps={{ style: { color: "var(--accent-blue)" } }}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {item.children && open === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-1rem",
                      marginTop: "0.5rem",
                      background: "rgba(9, 23, 51, 0.98)",
                      border: "1px solid rgba(212,196,168,0.2)",
                      borderRadius: "8px",
                      padding: "0.5rem 0",
                      minWidth: "180px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    }}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        style={{
                          display: "block",
                          padding: "0.6rem 1.2rem",
                          color: "var(--text-light)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ma-nav-burger"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "var(--text-light)",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.25rem",
          }}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="ma-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              minHeight: "100vh",
              background: "var(--bg-secondary)",
              opacity: 1,
              zIndex: 9999,
              padding: "2rem 1.5rem 3rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              overflowY: "auto",
            }}
          >
            {MENU.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    color: "var(--text-light)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    padding: "0.5rem 0",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: "1rem", marginTop: "0.25rem" }}>
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: "block",
                          color: "var(--text-muted)",
                          fontSize: "1rem",
                          padding: "0.4rem 0",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .ma-nav-desktop { display: none !important; }
          .ma-nav-burger { display: block !important; }
        }
      `}</style>
    </div>
  );
}
