import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marine Anaïs" },
      { name: "description", content: "Contactez Marine Anaïs par email." },
      { property: "og:title", content: "Contact — Marine Anaïs" },
      { property: "og:description", content: "Contactez Marine Anaïs par email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div
      style={{
        padding: "4rem 2rem",
        minHeight: "calc(100vh - 85px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <h1 style={{ fontSize: "3rem", color: "var(--accent-cream)", marginBottom: "1rem" }}>
          Pour me contacter
        </h1>
        <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
          Écrivez-moi directement à l'adresse ci-dessous.
        </p>
      </motion.div>

      <motion.a
        href="mailto:marineanaiscontact@gmail.com"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ma-contact-email"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          color: "var(--text-light)",
          fontSize: "1.25rem",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(212, 196, 168, 0.2)",
          borderRadius: 16,
          padding: "1.5rem 2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          textDecoration: "none",
          transition: "all 0.3s",
        }}
      >
        <Mail size={28} color="var(--accent-blue)" />
        marineanaiscontact@gmail.com
      </motion.a>

      <style>{`
        @media (max-width: 768px) {
          .ma-contact-email {
            word-break: break-all;
            font-size: 1rem;
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
