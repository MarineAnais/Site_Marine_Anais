import { createFileRoute, Link } from "@tanstack/react-router";
import visuel from "../../../../assets/solstice_Restaurateur.png.asset.json";
import pdf from "../../../../assets/Offre_Solstice_Restaurateur.pdf.asset.json";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/restaurateurs")({
  head: () => ({
    meta: [
      { title: "Solstice — Restaurateurs" },
      { name: "description", content: "Formules du duo Solstice pour bars et restaurants." },
      { property: "og:title", content: "Solstice — Restaurateurs" },
      { property: "og:description", content: "Formules restaurateurs du duo Solstice." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/solstice/restaurateurs" }],
  }),
  component: Resto,
});

function Resto() {
  return (
    <OfferSheet
      title="Offre Solstice — Restaurateurs"
      imageUrl={visuel.url}
      pdfUrl={pdf.url}
      pdfName="Offre_Solstice_Restaurateur.pdf"
      backLink={<Link to="/services/concert/solstice" style={{ color: "var(--accent-blue)", fontWeight: 700 }}>← Retour aux offres Solstice</Link>}
    />
  );
}
