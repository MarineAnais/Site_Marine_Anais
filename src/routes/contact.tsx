import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Mic2, Music } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marine Anaïs | Concerts, voix off & cours de chant" },
      { name: "description", content: "Organisez un concert, réservez le duo Solstice, faites appel à mes services de voix off ou prenez un cours de chant à Rueil-Malmaison. Contactez-moi par email ou Calendly." },
      { property: "og:title", content: "Contact — Marine Anaïs | Concerts, voix off & cours de chant" },
      { property: "og:description", content: "Organisez un concert, réservez le duo Solstice, faites appel à mes services de voix off ou prenez un cours de chant à Rueil-Malmaison. Contactez-moi par email ou Calendly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/contact" }],
  }),
  component: Contact,
});

const sectionStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(212, 196, 168, 0.2)",
  borderRadius: 16,
  padding: "2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
};

const sectionTitleStyle: React.CSSProperties = {
  color: "var(--accent-cream)",
  fontSize: "1.3rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "0.25rem",
};

const textStyle: React.CSSProperties = {
  color: "var(--text-light)",
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

const linkStyle: React.CSSProperties = {
  color: "var(--accent-blue)",
  textDecoration: "underline",
  textUnderlineOffset: "0.2em",
  fontWeight: 600,
};

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  color: "var(--text-light)",
  fontSize: "1.05rem",
  transition: "all 0.3s",
};

function Contact() {
  return (
    <div style={{ padding: "4rem 2rem", minHeight: "calc(100vh - 85px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", color: "var(--accent-cream)", marginBottom: "1rem" }}>Pour me contacter</h1>
        <p style={{ color: "var(--text-light)", fontSize: "1.15rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
          Basée à Rueil-Malmaison (92), je me déplace dans les Hauts-de-Seine, à Paris et en Île-de-France.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          width: "100%",
          maxWidth: 680,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <Music size={24} color="var(--accent-blue)" />
            Concerts, Événements & Voix Off
          </h2>
          <p style={textStyle}>
            Vous souhaitez organiser un concert, réserver le duo Solstice ou faire appel à mes services de voix off ? Contactez-moi directement par email en précisant la date, le lieu et votre projet.
          </p>
          <a href="mailto:marineanaiscontact@gmail.com" style={{ ...textStyle, ...linkStyle, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Mail size={20} />
            marineanaiscontact@gmail.com
          </a>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <Mic2 size={24} color="var(--accent-blue)" />
            Cours de chant & Coaching Vocal
          </h2>
          <p style={textStyle}>
            Vous cherchez à développer votre technique vocale ou préparer une prestation ? Réservez votre créneau ou échangeons sur votre projet.
          </p>
          <a
            href="https://calendly.com/marineanaiscontact"
            target="_blank"
            rel="noreferrer"
            style={{ ...textStyle, ...linkStyle }}
          >
            Réserver un cours / créneau d'essai via Calendly
          </a>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Réseaux sociaux</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <a href="https://www.instagram.com/marinanais_" target="_blank" rel="noreferrer" style={socialLinkStyle}>
              <FaInstagram size={22} color="var(--accent-blue)" />
              Instagram Marine Anaïs (@marinanais_)
            </a>
            <a href="https://www.youtube.com/@MarineAnaisBook" target="_blank" rel="noreferrer" style={socialLinkStyle}>
              <FaYoutube size={24} color="var(--accent-blue)" />
              Youtube Marine Anaïs (@marine_anais_off)
            </a>
            <a href="https://vm.tiktok.com/ZNREASSyQ/" target="_blank" rel="noreferrer" style={socialLinkStyle}>
              <FaTiktok size={22} color="var(--accent-blue)" />
              TikTok Marine Anaïs (@marine_anais_off)
            </a>
          </div>
        </section>
      </motion.div>

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
