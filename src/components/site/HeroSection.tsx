import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SOCIALS = {
  instagram: "https://www.instagram.com/marinanais_?igsh=ejMycDA4eTBuNnNu",
  tiktok: "https://vm.tiktok.com/ZNREASSyQ/",
  youtube: "https://www.youtube.com/@MarineAnaisBook",
};

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="ma-hero"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "3rem 6rem",
        gap: "4rem",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={{ flex: "1 1 350px", maxWidth: "600px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "4.5rem",
            fontWeight: 800,
            color: "var(--text-light)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          Marine Anaïs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontSize: "1.3rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
            fontWeight: 300,
            lineHeight: 1.6,
            whiteSpace: "pre-line",
          }}
        >
          <span style={{ display: "block" }}>Chanteuse & Coach Vocal</span>
          <span style={{ display: "block", fontSize: "1.05rem", fontStyle: "italic" }}>
            Pop-Rock, Variété française, Films d'animation,&nbsp; &nbsp; &nbsp; &nbsp; Basée à Rueil-Malmaison (92)
          </span>
        </motion.p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/services/concert">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="ma-btn"
              style={{ background: "var(--accent-cream)", color: "#111" }}
            >
              Réserver un concert (Live)
            </motion.button>
          </Link>

          <Link to="/services/coaching">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="ma-btn ma-btn-ghost"
            >
              Réserver un cours de chant
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
      >
        <Link
          to="/book"
          style={{ position: "relative", width: "100%", maxWidth: "420px", display: "block" }}
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            style={{ position: "relative", borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
          >
            <motion.img
              variants={{ hover: { scale: 1.05, filter: "brightness(0.5)" } }}
              transition={{ duration: 0.3 }}
              src="/marine-home.jpg"
              alt="Marine Anaïs, chanteuse"
              style={{ width: "100%", maxHeight: "55vh", objectFit: "cover", display: "block", borderRadius: "16px" }}
            />
            <motion.div
              variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textAlign: "center",
                padding: "1rem",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              Découvrir mon book
            </motion.div>
          </motion.div>

          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "-15px",
              background: "rgba(10, 25, 47, 0.85)",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              color: "var(--text-light)",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "1.1rem",
              backdropFilter: "blur(8px)",
              borderLeft: "4px solid var(--accent-blue)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              pointerEvents: "none",
            }}
          >
            Marine Anaïs
          </div>
        </Link>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginTop: "0.5rem" }}>
          <motion.a whileHover={{ scale: 1.15, color: "var(--accent-blue)" }} href={SOCIALS.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--text-light)" }}>
            <FaInstagram size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.15, color: "var(--accent-blue)" }} href={SOCIALS.tiktok} target="_blank" rel="noreferrer" style={{ color: "var(--text-light)" }}>
            <FaTiktok size={26} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.15, color: "var(--accent-blue)" }} href={SOCIALS.youtube} target="_blank" rel="noreferrer" style={{ color: "var(--text-light)" }}>
            <FaYoutube size={30} />
          </motion.a>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .ma-hero { flex-direction: column; padding: 2rem 1.5rem !important; }
          .ma-hero h1 { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
