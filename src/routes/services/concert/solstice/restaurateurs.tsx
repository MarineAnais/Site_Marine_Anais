import { createFileRoute, Link } from "@tanstack/react-router";
import { solsticeRestaurateur as visuel } from "../../../../lib/medias";
import { offreSolsticeRestaurateur as pdf } from "../../../../lib/medias";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/restaurateurs")({
  head: () => ({
    meta: [
      { title: "Restaurant — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { name: "description", content: "Animation musicale pour restaurants et bars en Île-de-France avec le duo acoustique Solstice. Ambiance pop-rock acoustique sur mesure." },
      { property: "og:title", content: "Restaurant — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { property: "og:description", content: "Animation musicale pour restaurants et bars en Île-de-France avec le duo acoustique Solstice." },
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
