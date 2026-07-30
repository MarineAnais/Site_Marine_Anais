import { createFileRoute, Link } from "@tanstack/react-router";
import visuel from "../../../../assets/solstice_Mariage.png.asset.json";
import pdf from "../../../../assets/Offre_Solstice_Mariage.pdf.asset.json";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/mariages")({
  head: () => ({
    meta: [
      { title: "Solstice — Mariages" },
      { name: "description", content: "Formules du duo Solstice pour mariages : cocktail, cérémonie & cocktail, soirée." },
      { property: "og:title", content: "Solstice — Mariages" },
      { property: "og:description", content: "Formules mariage du duo Solstice." },
    ],
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
