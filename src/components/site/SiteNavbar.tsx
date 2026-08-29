import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

type Item = { label: string; to: string; children?: { label: string; to: string }[] };

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
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 3rem",
        background: "rgba(11, 31, 71, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212,196,168,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Link to="/" style={{ color: "var(--accent-cream)", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "1px" }}>
        Marine Anaïs
      </Link>

      <div className="ma-nav-desktop" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
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
        }}
        aria-label="menu"
      >
        ☰
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="ma-mobile-menu bg-[var(--bg-secondary)] opacity-100 z-50 w-full"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              padding: "5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "white", fontSize: "1.5rem" }}
            >
              ✕
            </button>
            {MENU.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--text-light)", fontSize: "1.1rem", fontWeight: 600 }}
                >
                  {item.label}
                </Link>
                {item.children?.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.to}
                    onClick={() => setMobileOpen(false)}
                    style={{ display: "block", color: "var(--text-muted)", fontSize: "0.95rem", padding: "0.5rem 0 0 1rem" }}
                  >
                    → {sub.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .ma-mobile-menu {
          background: var(--bg-secondary);
          z-index: 200;
        }
        @media (max-width: 900px) {
          .ma-nav-desktop { display: none !important; }
          .ma-nav-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
