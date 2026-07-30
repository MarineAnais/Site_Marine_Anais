import type { ReactNode } from "react";

type Props = {
  title: string;
  imageUrl: string;
  pdfUrl: string;
  pdfName: string;
  backLink: ReactNode;
};

export default function OfferSheet({ title, imageUrl, pdfUrl, pdfName, backLink }: Props) {
  return (
    <div style={{ minHeight: "calc(100vh - 85px)", padding: "2.5rem 1.5rem 4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000, marginBottom: "1.5rem" }}>{backLink}</div>
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        style={{ width: "100%", maxWidth: 1000, height: "auto", display: "block", borderRadius: 8, boxShadow: "0 30px 60px rgba(0,0,0,0.5)", background: "#fff" }}
      />
      <a
        href={pdfUrl}
        download={pdfName}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2rem",
          display: "inline-block",
          padding: "0.9rem 1.8rem",
          borderRadius: 999,
          background: "var(--accent-blue)",
          color: "#0b1626",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Télécharger la fiche offre en PDF
      </a>
    </div>
  );
}
