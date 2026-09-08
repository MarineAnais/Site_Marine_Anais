import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marine Anaïs | Cours de chant & concerts" },
      { name: "description", content: "Vous souhaitez réserver un concert ou prendre un cours de chant ? Contactez Marine Anaïs par email ou sur les réseaux sociaux." },
      { property: "og:title", content: "Contact — Marine Anaïs | Cours de chant & concerts" },
      { property: "og:description", content: "Vous souhaitez réserver un concert ou prendre un cours de chant ? Contactez Marine Anaïs par email ou sur les réseaux sociaux." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/contact" }],
  }),
  component: Contact,
});

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  color: "var(--text-light)",
  fontSize: "1.1rem",
  transition: "all 0.3s",
};

function Contact() {
  return (
    <div style={{ padding: "4rem 2rem", minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", color: "var(--accent-cream)", marginBottom: "1rem" }}>Pour me contacter</h1>
        <p style={{ color: "var(--text-light)", fontSize: "1.15rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
          Vous souhaitez réserver un concert, prendre un cours de chant ou une voix off pour un projet ? N'hésitez pas à me contacter directement par email.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(212, 196, 168, 0.2)",
          borderRadius: 16,
          padding: "3rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "flex-start",
        }}
      >
        <a href="https://www.instagram.com/marinanais_" target="_blank" rel="noreferrer" style={socialLinkStyle}>
          <FaInstagram size={28} color="var(--accent-blue)" /> @marinanais_
        </a>
        <a href="https://www.youtube.com/@MarineAnaisBook" target="_blank" rel="noreferrer" style={socialLinkStyle}>
          <FaYoutube size={30} color="var(--accent-blue)" /> Marine Anaïs
        </a>
        <a href="https://vm.tiktok.com/ZNREASSyQ/" target="_blank" rel="noreferrer" style={socialLinkStyle}>
          <FaTiktok size={26} color="var(--accent-blue)" /> @marine_anais_off
        </a>
        <a href="mailto:marineanaiscontact@gmail.com" className="ma-contact-email" style={socialLinkStyle}>
          <Mail size={28} color="var(--accent-blue)" /> marineanaiscontact@gmail.com
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          marginTop: "2rem",
          color: "var(--text-muted)",
          fontSize: "1rem",
          textAlign: "center",
          maxWidth: 600,
          lineHeight: 1.6,
        }}
      >
        Basée à Rueil-Malmaison (92) — Déplacement possible dans les Hauts-de-Seine, à Paris et en Île-de-France.
      </motion.p>
      <style>{`
        @media (max-width: 768px) {
          .ma-contact-email {
            word-break: break-all;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
