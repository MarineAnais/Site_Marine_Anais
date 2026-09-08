import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";


type Props = {
  title: string;
  imageUrl: string;
  pdfUrl: string;
  pdfName: string;
  backLink: ReactNode;
};

export default function OfferSheet({ title, imageUrl, pdfUrl, pdfName, backLink }: Props) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 85px)",
        background: "var(--bg-secondary)",
        padding: "2rem 1rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: 900, marginBottom: "1.5rem" }}>{backLink}</div>

      <h1
        style={{
          color: "var(--text-light)",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          textAlign: "center",
          margin: "0 0 2rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h1>

      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        style={{
          width: "100%",
          maxWidth: 900,
          height: "auto",
          display: "block",
          borderRadius: 12,
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
          background: "#fff",
        }}
      />

      <a
        className="offer-cta"
        href={pdfUrl}
        download={pdfName}
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger la fiche offre en PDF
      </a>

      <Link to="/contact" className="offer-cta offer-cta-secondary">
        Contacter nous pour réserver une date de concert
      </Link>


      <style>{`
        .offer-cta {
          margin-top: 1rem;
          display: inline-block;
          max-width: 100%;
          text-align: center;
          padding: 0.95rem 2rem;
          border-radius: 999px;
          background: var(--accent-blue);
          color: #0b1626;
          font-weight: 700;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .offer-cta:first-of-type {
          margin-top: 2.25rem;
        }
        .offer-cta:hover {
          background: #B0C8E8;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(204,220,245,0.25);
        }
        .offer-cta-secondary {
          background: transparent;
          color: var(--text-light);
          border: 2px solid var(--accent-blue);
        }
        .offer-cta-secondary:hover {
          background: var(--accent-blue);
          color: #0b1626;
        }
        @media (max-width: 640px) {
          .offer-cta { width: 100%; padding: 0.9rem 1rem; }
        }

      `}</style>
    </div>
  );
}
