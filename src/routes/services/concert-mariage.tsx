import { createFileRoute, Link } from "@tanstack/react-router";
import OfferSheet from "../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert-mariage")({
  head: () => ({
    meta: [
      { title: "Solstice — Mariages & Particuliers" },
      { name: "description", content: "Formules du duo acoustique Solstice pour mariages et événements privés : cocktail, cérémonie, soirée." },
      { property: "og:title", content: "Solstice — Mariages & Particuliers" },
      { property: "og:description", content: "Formules du duo acoustique Solstice pour mariages et événements privés." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConcertMariage,
});

function ConcertMariage() {
  return (
    <OfferSheet
      title="Offre Particuliers & Mariages"
      imageUrl="/brochure-mariage.png"
      pdfUrl="/brochure-mariage.pdf"
      pdfName="brochure-mariage.pdf"
      backLink={
        <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>
          ← Retour aux services
        </Link>
      }
    />
  );
}
