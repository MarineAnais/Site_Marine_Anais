import { createFileRoute, Link } from "@tanstack/react-router";
import { solsticeEntreprise as visuel } from "../../../../lib/medias";
import { offreSolsticeEntreprise as pdf } from "../../../../lib/medias";
import OfferSheet from "../../../../components/site/OfferSheet";

export const Route = createFileRoute("/services/concert/solstice/entreprises")({
  head: () => ({
    meta: [
      { title: "Entreprise — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { name: "description", content: "Animation musicale pour entreprises en Île-de-France avec le duo acoustique Solstice. Cocktails, séminaires et team building en musique pop-rock." },
      { property: "og:title", content: "Entreprise — Duo acoustique Solstice | Animation musicale Île-de-France" },
      { property: "og:description", content: "Animation musicale pour entreprises en Île-de-France avec le duo acoustique Solstice." },
    ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/services/concert/solstice/entreprises" }],
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
