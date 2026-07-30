import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions Légales — Marine Anaïs" },
      { name: "description", content: "Mentions légales du site Marine Anaïs, chanteuse et coach vocal." },
      { property: "og:title", content: "Mentions Légales — Marine Anaïs" },
      { property: "og:description", content: "Mentions légales du site Marine Anaïs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 200px)",
        background: "var(--bg-primary)",
        color: "var(--text-light)",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent-cream)",
              fontSize: "0.9rem",
              marginBottom: "2rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-cream)")}
          >
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--accent-cream)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.5px",
            }}
          >
            Mentions Légales
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l'économie numérique (LCEN), il est précisé aux utilisateurs du site l'identité des
            différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <Section number="1" title="ÉDITEUR DU SITE">
            <p>Le présent site internet est édité par :</p>
            <InfoList
              items={[
                { label: "Nom / Raison sociale", value: "Marine Anaïs (Entrepreneur Individuel - EI)" },
                { label: "Responsable", value: "Marine Martinez" },
                { label: "Statut juridique", value: "Micro-entreprise / Entrepreneur Individuel" },
                { label: "Siège social", value: "Rueil-Malmaison, France" },
                { label: "SIRET", value: "10320092900018" },
                { label: "Immatriculation", value: "Immatriculée au RNE (Registre National des Entreprises)" },
                { label: "TVA", value: "Franchise en base de TVA, article 293 B du Code Général des Impôts (CGI)" },
                { label: "Contact e-mail", value: "marineanaiscontact@gmail.com", href: "mailto:marineanaiscontact@gmail.com" },
              ]}
            />
          </Section>

          <Section number="2" title="DIRECTEUR DE LA PUBLICATION">
            <p>Le Directeur de la publication du site est : Marine Martinez.</p>
          </Section>

          <Section number="3" title="HÉBERGEUR DU SITE">
            <p>Le site est hébergé par :</p>
            <InfoList
              items={[
                { label: "Société", value: "OVH SAS" },
                { label: "Adresse", value: "2 rue Kellermann, 59100 Roubaix, France" },
                { label: "Site web", value: "www.ovhcloud.com", href: "https://www.ovhcloud.com" },
                { label: "Téléphone", value: "1007" },
              ]}
            />
          </Section>

          <Section number="4" title="PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS">
            <p>
              Marine Martinez / Marine Anaïs est propriétaire des droits de propriété intellectuelle
              et détient les droits d'usage sur tous les éléments accessibles sur le site internet,
              notamment les textes, images, graphismes, logos, vidéos, architectures, icônes et sons.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
              sauf autorisation écrite préalable de Marine Martinez.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
              sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
              dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </Section>

          <Section number="5" title="PROTECTION DES DONNÉES PERSONNELLES (RGPD)">
            <p>
              Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée et au Règlement
              Général sur la Protection des Données (RGPD), l'utilisateur dispose d'un droit d'accès,
              de rectification, de suppression et d'opposition aux données personnelles le concernant.
            </p>
            <p>
              Pour exercer ce droit, vous pouvez adresser une demande par e-mail à :{" "}
              <a
                href="mailto:marineanaiscontact@gmail.com"
                style={{ color: "var(--accent-blue)", textDecoration: "underline" }}
              >
                marineanaiscontact@gmail.com
              </a>
              .
            </p>
            <p>
              Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de
              l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
            </p>
          </Section>

          <Section number="6" title="LIENS HYPERTEXTES ET COOKIES">
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites. Cependant, Marine Martinez
              n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en
              conséquence aucune responsabilité de ce fait.
            </p>
            <p>
              <strong>Cookies :</strong> Ce site n'utilise aucun cookie nécessitant le consentement
              préalable des utilisateurs (aucun cookie publicitaire ou de traçage tiers).
            </p>
          </Section>

          <Section number="7" title="LIMITATION DE RESPONSABILITÉ">
            <p>
              Marine Martinez ne pourra être tenue pour responsable des dommages directs et indirects
              causés au matériel de l'utilisateur lors de l'accès au site.
            </p>
          </Section>

          <Section number="8" title="DROIT APPLICABLE ET JURIDICTION">
            <p>
              Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est
              fait attribution exclusive de juridiction aux tribunaux compétents.
            </p>
          </Section>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <Link
              to="/"
              className="ma-btn ma-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <ArrowLeft size={18} />
              Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--accent-blue)",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--accent-cream)",
            color: "var(--bg-secondary)",
            fontSize: "0.85rem",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {number}
        </span>
        {title}
      </h2>
      <div
        style={{
          color: "var(--text-light)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function InfoList({
  items,
}: {
  items: { label: string; value: string; href?: string }[];
}) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "1rem 0 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
      }}
    >
      {items.map((item) => (
        <li key={item.label} style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          <span style={{ color: "var(--accent-cream)", fontWeight: 500 }}>{item.label} :</span>
          {item.href ? (
            <a
              href={item.href}
              style={{ color: "var(--accent-blue)", textDecoration: "underline" }}
            >
              {item.value}
            </a>
          ) : (
            <span style={{ color: "var(--text-light)" }}>{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
