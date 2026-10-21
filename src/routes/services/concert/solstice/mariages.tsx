import { createFileRoute, Link } from "@tanstack/react-router";
import { solsticeMariage as visuel } from "../../../../lib/medias";
import { offreSolsticeMariage as pdf } from "../../../../lib/medias";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/mariages")({
  head: () => ({
    meta: [
      { title: "Mariage — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { name: "description", content: "Animation musicale pour mariage en Île-de-France avec le duo acoustique Solstice. Cérémonie, cocktail et soirée en musique pop-rock." },
      { property: "og:title", content: "Mariage — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { property: "og:description", content: "Animation musicale pour mariage en Île-de-France avec le duo acoustique Solstice." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/solstice/mariages" }],
  }),
  component: Mariages,
});

function Mariages() {
  return (
    <OfferSheet
      title="Offre Solstice — Mariages"
      imageUrl={visuel.url}
      pdfUrl={pdf.url}
      pdfName="Offre_Solstice_Mariage.pdf"
      backLink={<Link to="/services/concert/solstice" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>← Retour aux offres Solstice</Link>}
    />
  );
}
