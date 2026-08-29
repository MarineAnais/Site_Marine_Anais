import * as React from "react";

interface VideoCarouselProps {
  videos?: string[];
}

export function VideoCarousel({ videos = [] }: VideoCarouselProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const gap = parseInt(getComputedStyle(track).gap || "0", 10) || 0;
    const slideWidth = slide.offsetWidth + gap;
    track.scrollTo({
      left: track.scrollLeft + direction * slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="video-carousel" style={{ position: "relative" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "0.5rem 0",
        }}
      >
        {videos.map((url, i) => (
          <div
            key={url}
            style={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              width: "min(100%, 720px)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                backgroundColor: "#000",
              }}
            >
              <iframe
                src={url}
                title={`Vidéo YouTube ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.25rem",
        }}
      >
        <CarouselButton onClick={() => scrollBy(-1)} label="Précédent" />
        <CarouselButton onClick={() => scrollBy(1)} label="Suivant" />
      </div>
    </div>
  );
}

function CarouselButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: `1px solid var(--accent-cream)`,
        backgroundColor: "transparent",
        color: "var(--accent-cream)",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(212, 196, 168, 0.15)";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {label === "Précédent" ? (
        <Chevron direction="left" />
      ) : (
        <Chevron direction="right" />
      )}
    </button>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}
