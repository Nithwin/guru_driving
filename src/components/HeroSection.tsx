"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Reveal, RevealText } from "./Animations";

const CarScene = dynamic(() => import("./CarScene").then((m) => ({ default: m.CarScene })), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "100%",
      width: "100%",
      background: "linear-gradient(135deg,#f5c800 0%,#e6b800 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: 36, height: 36,
        border: "3px solid rgba(255,255,255,0.1)",
        borderTopColor: "var(--accent)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  ),
});

const EASE = [0.76, 0, 0.24, 1] as const;

const featurePills = ["Dual-control vehicles", "RTO-focused", "Flexible slots", "5000+ passed"];

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* ── LEFT: Text ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>

        {/* Eyebrow tag */}
        <Reveal delay={0.05}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "#fef9e7",
            border: "1.5px solid var(--yellow-dark)",
            color: "var(--yellow-ink)",
            fontSize: "clamp(0.6rem, 1.5vw, 0.68rem)",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.35rem 0.85rem",
            borderRadius: 2,
            whiteSpace: "nowrap",
          }}>
            <Shield size={10} />
            Accelerate Your Confidence
          </span>
        </Reveal>

        {/* Headline */}
        <div style={{ overflow: "visible" }}>
          <h1 style={{
            fontSize: "clamp(2rem, 5.5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            textTransform: "uppercase",
            color: "var(--ink)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            <RevealText text="LEARN TO" delay={0.15} style={{ display: "block" }} />
            <RevealText text="DRIVE WITH" delay={0.35} style={{ display: "block" }} />
            <div style={{ display: "inline-block", marginTop: "0.05em", wordWrap: "break-word", whiteSpace: "normal" }}>
              <span style={{ color: "var(--accent)", position: "relative", display: "inline-block" }}>
                <RevealText text="CONFIDENCE." delay={0.65} style={{ display: "inline-block" }} />
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    position: "absolute",
                    bottom: "0.05em",
                    left: 0,
                    right: 0,
                    height: "0.1em",
                    background: "var(--yellow)",
                    transformOrigin: "left",
                    display: "block",
                    zIndex: -1
                  }}
                />
              </span>
            </div>
          </h1>
        </div>

        {/* Subtext */}
        <Reveal delay={0.4} y={20}>
          <p style={{
            fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
            lineHeight: 1.85,
            color: "var(--muted)",
            maxWidth: 420,
          }}>
            We know getting behind the wheel can feel overwhelming. Our friendly, patient instructors are here to help you feel safe, relaxed, and ready for the road.
          </p>
        </Reveal>

        {/* CTA Row */}
        <Reveal delay={0.5} y={20}>
          <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", alignItems: "center" }}>
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(245,200,0,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--yellow)",
                color: "var(--yellow-ink)",
                padding: "clamp(0.75rem, 1.5vw, 0.9rem) clamp(1.25rem, 3vw, 1.9rem)",
                fontSize: "clamp(0.7rem, 1.5vw, 0.78rem)",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "2px solid var(--yellow-dark)",
              }}
            >
              Book Your First Lesson
              <ArrowRight size={13} />
            </motion.a>
            <motion.a
              href="#plans"
              whileHover={{ background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "var(--ink)",
                padding: "clamp(0.75rem, 1.5vw, 0.9rem) clamp(1rem, 2.5vw, 1.6rem)",
                fontSize: "clamp(0.7rem, 1.5vw, 0.78rem)",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "2px solid var(--ink)",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
            >
              View Pricing
            </motion.a>
          </div>
        </Reveal>

        {/* Feature pills */}
        <Reveal delay={0.6} y={16}>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {featurePills.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.07, duration: 0.4, ease: EASE }}
                style={{
                  fontSize: "clamp(0.62rem, 1.4vw, 0.7rem)",
                  fontWeight: 700,
                  color: "var(--muted)",
                  background: "#f3f4f6",
                  padding: "0.28rem 0.7rem",
                  borderRadius: 99,
                  border: "1px solid var(--border)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                ✓ {pill}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── RIGHT: Premium floating car ── */}
      <div style={{ position: "relative" }}>
        {/* Outer positioning wrapper */}
        <div
          className="hero-right-panel"
          style={{ position: "relative", minHeight: "clamp(280px, 50vw, 520px)" }}
        >

          {/* ── Decorative background circle ── */}
          <svg
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%", height: "90%",
              zIndex: 0, pointerEvents: "none",
            }}
            viewBox="0 0 400 400"
          >
            <circle cx="200" cy="200" r="195" fill="none" stroke="var(--yellow)" strokeWidth="1.5" opacity="0.25" />
            <circle cx="200" cy="200" r="155" fill="none" stroke="var(--yellow)" strokeWidth="1" opacity="0.14" />
            <circle cx="200" cy="200" r="120" fill="var(--yellow)" opacity="0.05" />
            {[...Array(7)].map((_, row) =>
              [...Array(7)].map((__, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={60 + col * 50}
                  cy={60 + row * 50}
                  r={1.5}
                  fill="var(--ink)"
                  opacity={0.07}
                />
              ))
            )}
          </svg>

          {/* ── 3D Canvas ── */}
          <div
            style={{
              position: "absolute",
              inset: "5% 0 5% 0",
              zIndex: 1,
              touchAction: "none",
            }}
          >
            <CarScene />
          </div>

          {/* ── Rotate hint ── */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            style={{
              position: "absolute",
              top: "8%",
              right: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "clamp(0.52rem, 1vw, 0.6rem)",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              zIndex: 2,
            }}
          >
            <span style={{ width: 14, height: 1, background: "var(--muted)", display: "block" }} />
            Drag to rotate
          </motion.div>

          {/* ── Floating stat: 100% ── */}
          <motion.div
            className="hero-stat-left"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.55, ease: EASE }}
            style={{
              position: "absolute",
              bottom: "28%",
              left: "-1rem",
              background: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
              border: "1.5px solid var(--border)",
              padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.1rem)",
              borderRadius: 6,
              zIndex: 3,
              minWidth: 100,
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: "var(--ink)", lineHeight: 1 }}>100%</p>
            <p style={{ fontSize: "clamp(0.48rem, 1vw, 0.55rem)", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", marginTop: 3 }}>
              Pass Rate
            </p>
          </motion.div>

          {/* ── Floating stat: 5000+ ── */}
          <motion.div
            className="hero-stat-right"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.55, ease: EASE }}
            style={{
              position: "absolute",
              top: "18%",
              right: "-0.75rem",
              background: "var(--accent)",
              boxShadow: "0 8px 32px rgba(204,0,51,0.3)",
              padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.1rem)",
              borderRadius: 6,
              zIndex: 3,
              minWidth: 90,
              color: "#fff",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", lineHeight: 1 }}>5000+</p>
            <p style={{ fontSize: "clamp(0.48rem, 1vw, 0.55rem)", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85, marginTop: 3 }}>
              Graduates
            </p>
          </motion.div>

          {/* ── Yellow trusted strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5, ease: EASE }}
            style={{
              position: "absolute",
              bottom: "6%",
              left: "8%",
              right: "8%",
              background: "var(--yellow)",
              border: "1.5px solid var(--ink)",
              padding: "0.5rem 0.85rem",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 12 12" fill="var(--ink)">
                  <path d="M6 0l1.5 4H12l-3.6 2.6L9.7 11 6 8.2 2.3 11l1.3-4.4L0 4h4.5z" />
                </svg>
              ))}
            </div>
            <p style={{
              fontSize: "clamp(0.52rem, 1vw, 0.6rem)",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}>
              Trusted by 5000+ Local Drivers
            </p>
          </motion.div>

          {/* ── Decorative yellow vertical stripe ── */}
          <div
            className="hero-deco-stripe"
            style={{
              position: "absolute",
              right: "-1.25rem",
              top: "15%",
              bottom: "15%",
              width: 3,
              background: "linear-gradient(180deg, transparent, var(--yellow) 40%, var(--yellow) 60%, transparent)",
              borderRadius: 2,
              zIndex: 0,
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}