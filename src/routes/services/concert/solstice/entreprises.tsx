import { createFileRoute, Link } from "@tanstack/react-router";
import visuel from "../../../../assets/solstice_Entreprise.png.asset.json";
import pdf from "../../../../assets/Offre_Solstice_Entreprise.pdf.asset.json";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/entreprises")({
  head: () => ({
    meta: [
      { title: "Solstice — Entreprises" },
      { name: "description", content: "Formules Solstice pour entreprises : cocktail, séminaire, team building." },
      { property: "og:title", content: "Solstice — Entreprises" },
      { property: "og:description", content: "Animation musicale pour entreprises." },
    ],
  }),
  component: Ent,
});

function Ent() {
  return (
    <OfferSheet
      title="Offre Solstice — Entreprises"
      imageUrl={visuel.url}
      pdfUrl={pdf.url}
      pdfName="Offre_Solstice_Entreprise.pdf"
      backLink={<Link to="/services/concert/solstice" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>← Retour aux offres Solstice</Link>}
    />
  );
}
