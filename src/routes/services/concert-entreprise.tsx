import { createFileRoute, Link } from "@tanstack/react-router";
import { asset } from "@/lib/asset";
import OfferSheet from "../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert-entreprise")({
  head: () => ({
    meta: [
      { title: "Solstice — Entreprises & Corporate" },
      { name: "description", content: "Formules du duo acoustique Solstice pour entreprises : cocktail business, séminaire, team building." },
      { property: "og:title", content: "Solstice — Entreprises & Corporate" },
      { property: "og:description", content: "Formules du duo acoustique Solstice pour entreprises et événements corporate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert-entreprise" }],
  }),
  component: ConcertEntreprise,
});

function ConcertEntreprise() {
  return (
    <OfferSheet
      title="Offre Entreprises & Corporate"
      imageUrl={asset("/brochure-entreprise.png")}
      pdfUrl={asset("/brochure-entreprise.pdf")}
      pdfName="brochure-entreprise.pdf"
      backLink={
        <Link to="/services" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>
          ← Retour aux services
        </Link>
      }
    />
  );
}
