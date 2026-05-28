import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        padding: "2.5rem 0 2rem",
      }}
      className="hero-grid"
    >
      {/* Left: Text Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* Small red headline */}
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Accelerate Your Confidence
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "var(--ink)",
            maxWidth: 520,
          }}
        >
          Master the Road with{" "}
          <span style={{ color: "var(--accent)" }}>Precision.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            maxWidth: 440,
          }}
        >
          Premium driving education where safety meets high-performance
          instruction. From first-time steering to professional maneuvers, we
          drive excellence.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="#plans"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent)",
              color: "#ffffff",
              padding: "0.85rem 1.6rem",
              fontWeight: 800,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid var(--accent)",
              borderRadius: 2,
              transition: "opacity 0.15s",
            }}
          >
            Book Your First Lesson
          </a>
          <a
            href="#plans"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#ffffff",
              color: "var(--ink)",
              padding: "0.85rem 1.6rem",
              fontWeight: 800,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid var(--ink)",
              borderRadius: 2,
              transition: "opacity 0.15s",
            }}
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Right: Image card */}
      <div
        style={{
          position: "relative",
          borderRadius: 6,
          overflow: "hidden",
          border: "3px solid var(--accent)",
          boxShadow: "6px 6px 0 var(--accent)",
          minHeight: 340,
          background: "#111",
        }}
      >
        <Image
          src="/highway.png"
          alt="Training car on highway"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Badge: 100% */}
        <div
          style={{
            position: "absolute",
            bottom: "4.5rem",
            left: "1rem",
            right: "1rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            padding: "0.6rem 0.8rem",
            borderRadius: 3,
          }}
        >
          <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>100%</p>
          <p
            style={{
              fontSize: "0.6rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: 2,
            }}
          >
            Success Focus
          </p>
        </div>

        {/* Trust badge */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            right: "1rem",
            background: "var(--secondary)",
            padding: "0.5rem 0.8rem",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <Star size={13} style={{ fill: "var(--ink)", color: "var(--ink)" }} />
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink)",
            }}
          >
            Trusted by Local Drivers
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}