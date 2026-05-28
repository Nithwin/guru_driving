"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield } from "lucide-react";
import { Reveal, RevealText } from "./Animations";

const CarScene = dynamic(() => import("./CarScene").then((m) => ({ default: m.CarScene })), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "100%",
      width: "100%",
      background: "linear-gradient(135deg,#111 0%,#1a1a2e 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: 40, height: 40,
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
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {/* Eyebrow tag */}
        <Reveal delay={0.05}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "#fff5f7",
            border: "1.5px solid #ffccd5",
            color: "var(--accent)",
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "0.35rem 0.8rem",
            borderRadius: 2,
          }}>
            <Shield size={10} />
            Accelerate Your Confidence
          </span>
        </Reveal>

        {/* Headline */}
        <div style={{ overflow: "visible" }}>
          <h1 style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--ink)",
            maxWidth: 580,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            <RevealText text="MASTER" delay={0.15} style={{ display: "block" }} />
            <RevealText text="THE ROAD" delay={0.35} style={{ display: "block" }} />
            <div style={{ display: "inline-block", marginTop: "0.1em", wordWrap: "break-word", whiteSpace: "normal" }}>
              <RevealText text="WITH" delay={0.55} style={{ marginRight: "0.25em", display: "inline-block" }} />
              <span style={{ color: "var(--accent)", position: "relative", display: "inline-block" }}>
                <RevealText text="PRECISION." delay={0.65} style={{ display: "inline-block" }} />
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
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--muted)", maxWidth: 430 }}>
            Premium driving education where safety meets high-performance instruction.
            From first-time steering to professional maneuvers, we drive excellence.
          </p>
        </Reveal>

        {/* CTA Row */}
        <Reveal delay={0.5} y={20}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(204,0,51,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "0.9rem 1.9rem",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "2px solid var(--accent)",
              }}
            >
              Book Your First Lesson
              <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#plans"
              whileHover={{ background: "var(--ink)", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "var(--ink)",
                padding: "0.9rem 1.6rem",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "2px solid var(--ink)",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              View Pricing
            </motion.a>
          </div>
        </Reveal>

        {/* Feature pills */}
        <Reveal delay={0.6} y={16}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {featurePills.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.07, duration: 0.4, ease: EASE }}
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--muted)",
                  background: "#f3f4f6",
                  padding: "0.3rem 0.75rem",
                  borderRadius: 99,
                  border: "1px solid var(--border)",
                  letterSpacing: "0.04em",
                }}
              >
                ✓ {pill}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── RIGHT: Premium floating car ── */}
      <Reveal delay={0.2} y={40} style={{ position: "relative" }}>
        {/* Outer positioning wrapper — no box, no border */}
        <div style={{ position: "relative", minHeight: 500 }}>

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
            {/* Large pale-red outer ring */}
            <circle cx="200" cy="200" r="195" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.12" />
            <circle cx="200" cy="200" r="155" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.08" />
            {/* Solid tinted disc */}
            <circle cx="200" cy="200" r="120" fill="#cc0033" opacity="0.04" />
            {/* Dot grid */}
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

          {/* ── 3D Canvas (no box, transparent bg) ── */}
          <div
            style={{
              position: "absolute",
              inset: "10% 0 10% 0",
              zIndex: 1,
              /* touch-action fix for gesture lib warning */
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
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              zIndex: 2,
            }}
          >
            <span style={{ width: 16, height: 1, background: "var(--muted)", display: "block" }} />
            Drag to rotate
          </motion.div>

          {/* ── Floating stat: 100% ── */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.4, duration: 0.55, ease: EASE }}
            style={{
              position: "absolute",
              bottom: "28%",
              left: "-1.5rem",
              background: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              border: "1.5px solid var(--border)",
              padding: "0.75rem 1.1rem",
              borderRadius: 6,
              zIndex: 3,
              minWidth: 110,
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.8rem", color: "var(--ink)", lineHeight: 1 }}>100%</p>
            <p style={{ fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", marginTop: 3 }}>
              Pass Rate
            </p>
          </motion.div>

          {/* ── Floating stat: 5000+ ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.55, ease: EASE }}
            style={{
              position: "absolute",
              top: "18%",
              right: "-1rem",
              background: "var(--accent)",
              boxShadow: "0 8px 32px rgba(204,0,51,0.28)",
              padding: "0.75rem 1.1rem",
              borderRadius: 6,
              zIndex: 3,
              minWidth: 100,
              color: "#fff",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.6rem", lineHeight: 1 }}>5000+</p>
            <p style={{ fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85, marginTop: 3 }}>
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
              left: "10%",
              right: "10%",
              background: "var(--yellow)",
              border: "1.5px solid var(--ink)",
              padding: "0.55rem 1rem",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={11} style={{ fill: "var(--ink)", color: "var(--ink)" }} />)}
            </div>
            <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink)" }}>
              Trusted by 5000+ Local Drivers
            </p>
          </motion.div>

          {/* ── Decorative red vertical stripe ── */}
          <div style={{
            position: "absolute",
            right: "-1.5rem",
            top: "15%",
            bottom: "15%",
            width: 3,
            background: "linear-gradient(180deg, transparent, var(--accent) 40%, var(--accent) 60%, transparent)",
            borderRadius: 2,
            zIndex: 0,
            opacity: 0.5,
          }} />
        </div>
      </Reveal>
    </section>
  );
}