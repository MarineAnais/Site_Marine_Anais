import { createFileRoute } from "@tanstack/react-router";
import cvPdf from "../assets/cv-marine-anais.pdf.asset.json";
import { VideoCarousel } from "../components/site/VideoCarousel";
import { VenuesSection } from "../components/site/VenuesSection";
import { ALL_VENUES } from "../lib/venues";

export const Route = createFileRoute("/book/marine-anais")({
  head: () => ({
    meta: [
      { title: "Book — Marine Anaïs" },
      { name: "description", content: "Book de Marine Anaïs : présentation, vidéos et galerie photos." },
      { property: "og:title", content: "Book — Marine Anaïs" },
      { property: "og:description", content: "Présentation, vidéos et galerie photos de Marine Anaïs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      ],
    links: [{ rel: "canonical", href: "https://marineanais.fr/book/marine-anais" }],
  }),
  component: BookMarine,
});

const presentation = `Chanter, c'est transmettre des émotions et partager un instant avec le public. Formée au chant lyrique, à la comédie musicale et au théâtre, j'ai eu la chance de jouer aussi bien dans de grandes salles de 800 places que dans l'intimité de Cafés-Concerts ou de maisons de retraite. Je serai ravie d'animer vos événements en live autour d'un répertoire Pop-Rock et variété française, d'incarner vos projets en voix off et de vous guider avec bienveillance lors de séances de coaching vocal.`;

// Vidéos de la chaîne https://www.youtube.com/@MarineAnaisBook
const VIDEOS = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/O_R8ad0kTC4",
    title: "Spectacle Groupe Suivant – I Wanna Be a Producer",
    context: "Un numéro de Comédie Musicale interprété sur scène au Théatre André Malraux avec l'Avant Scène de Rueil-Malmaison",
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/IPHIk6fi7y4",
    title: "Spectacle Groupe Suivant\u00a0\u00a0– You Can't Stop the Beat",
    context: "Final du spectacle portée par le collectif énergique de l'Avant Scène",
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/eEoW_Irbx1Y",
    title: "Cover – Partir là-bas",
    context: "Interprétation d'un classique de film d'animation.\u00a0",
  },
  {
    id: "4",
    url: "https://www.youtube.com/embed/_G5r_K3viBs",
    title: "\u00a0Voyage dans le temps",
    context: "\n",
  },
  {
    id: "5",
    url: "https://www.youtube.com/embed/FrL03FrCwkc",
    title: "Spectacle En avant vers le Passé\u00a0 – Bring Me to Life",
    context: "Une reprise pop-rock intense mettant en avant la puissance et les nuances de la voix.",
  },
  {
    id: "6",
    url: "https://www.youtube.com/embed/Ra2oMsCUK28",
    title: "Concert – Je vais t'aimer",
    context: "Une reprise de variété française et un moment de partage avec le public.",
  },
];

const GALLERY = [
  { src: "/marine-photo-10.jpg" },
  { src: "/marine-photo-3.jpg" },
  { src: "/marine-photo-14.jpg" },
  { src: "/marine-photo-19.jpg", objectPosition: "center 20%" },
  { src: "/marine-photo-13.jpg" },
  { src: "/marine-home.jpg" },
  { src: "/marine-photo-6.jpg" },
  { src: "/marine-photo-9.jpg", objectPosition: "center 20%" },
  { src: "/marine-photo-12.jpg" },
];

function BookMarine() {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "var(--text-light)", fontSize: "2.2rem", marginBottom: "3rem", fontWeight: 700 }}>
        Marine Anaïs
      </h1>

      <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
        <div style={{ width: "100%", height: 500, background: `url(/marine-photo-1.jpg) center/cover`, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
        <div>
          <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1rem", fontWeight: 700 }}>Présentation</h3>
          <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.9, whiteSpace: "pre-wrap" }}>{presentation}</p>
          <a
            href={cvPdf.url}
            download="CV_Marine_Martinez_Artistique.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
              padding: "0.85rem 1.8rem",
              borderRadius: 999,
              background: "var(--accent-blue)",
              color: "#0b1626",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(204,220,245,0.25)",
              transition: "all 0.3s ease",
            }}
          >
            📄 Télécharger mon CV Artistique (PDF)
          </a>
        </div>
      </div>

      <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1.5rem", fontWeight: 700 }}>Vidéos</h3>
      <div style={{ marginBottom: "4rem" }}>
        <VideoCarousel videos={VIDEOS} />
      </div>

      <h3 style={{ color: "var(--text-light)", fontSize: "1.2rem", marginBottom: "1.5rem", fontWeight: 700 }}>Galerie Photos</h3>
      <div className="photo-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
        {GALLERY.map((item, i) => (
          <div
            key={item.src}
            style={{
              overflow: "hidden",
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              aspectRatio: "4 / 3",
            }}
          >
            <img
              src={item.src}
              alt={`Marine Anaïs en concert ${i + 1}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: item.objectPosition || "center center",
                display: "block",
                transition: "transform 0.45s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </div>
        ))}
      </div>

      <VenuesSection title="Quelques lieux où j'ai chanté" venues={ALL_VENUES} />

      <style>{`
        @media (max-width: 1100px){ .photo-gallery{ grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 900px){ .book-grid{ grid-template-columns: 1fr !important; } }
        @media (max-width: 640px){ .photo-gallery{ grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
