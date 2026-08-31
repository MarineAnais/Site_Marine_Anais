import { createFileRoute, Link } from "@tanstack/react-router";
import OfferSheet from "../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert-restaurateur")({
  head: () => ({
    meta: [
      { title: "Solstice — Bars & Restaurants" },
      { name: "description", content: "Formules du duo acoustique Solstice pour bars et restaurants : concert, karaoké live, soirée à thème." },
      { property: "og:title", content: "Solstice — Bars & Restaurants" },
      { property: "og:description", content: "Formules du duo acoustique Solstice pour bars et restaurants." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert-restaurateur" }],
  }),
  component: ConcertRestaurateur,
});

function ConcertRestaurateur() {
  return (
    <OfferSheet
      title="Offre Bars & Restaurants"
      imageUrl="/brochure-restaurateur.png"
      pdfUrl="/brochure-restaurateur.pdf"
      pdfName="brochure-restaurateur.pdf"
      backLink={
        <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>
          ← Retour aux services
        </Link>
      }
    />
  );
}
