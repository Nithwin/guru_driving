"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Shield } from "lucide-react";

const CarScene = dynamic(() => import("./CarScene").then(m => ({ default: m.CarScene })), {
  ssr: false,
  loading: () => (
    <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 40, height: 40, border: "2px solid rgba(255,255,255,0.1)", borderTopColor: "var(--accent)", borderRadius: "50%", animation: "spin 0.9s linear infinite", margin: "0 auto 1rem" }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Loading 3D Model</p>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  ),
});

const EASE = [0.16, 1, 0.3, 1] as const;

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  return (
    <span ref={ref} style={{ display: "block" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.28em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", rotate: 3 }}
            animate={inView ? { y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: delay + i * 0.08 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} style={{
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "clamp(1.5rem, 4vw, 3rem)",
      alignItems: "center",
      minHeight: "calc(100vh - clamp(60px,8vw,72px))",
      padding: "clamp(2rem, 5vw, 4rem) 0",
    }} className="hero-grid">
      {/* LEFT */}
      <motion.div style={{ y, opacity, display: "flex", flexDirection: "column", gap: "clamp(1.25rem, 3vw, 2rem)" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(0,85,233,0.1)",
            border: "1px solid rgba(0,85,233,0.25)",
            color: "var(--accent-2)",
            fontSize: "clamp(0.6rem, 1.3vw, 0.68rem)",
            fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "0.42rem 1rem",
            borderRadius: 100,
            width: "fit-content",
          }}
        >
          <MapPin size={11} />
          Guru Driving School · Mettur, TN
        </motion.div>

        {/* Hero headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          color: "var(--text)",
        }}>
          <WordReveal text="MASTER" delay={0.1} />
          <WordReveal text="THE ROAD" delay={0.25} />
          <span style={{ display: "block", overflow: "hidden" }}>
            <motion.span
              className="gradient-text-blue"
              style={{ display: "block" }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            >
              WITH CONFIDENCE.
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            maxWidth: 420,
          }}
        >
          From nervous beginner to confident driver — our expert instructors guide you every step of the way with dual-control safety and doorstep pickup across Mettur & surrounding areas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}
        >
          <motion.a
            href="#plans"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(255,213,0,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="btn-shimmer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--yellow)", color: "var(--yellow-ink)",
              padding: "clamp(0.8rem, 1.8vw, 1rem) clamp(1.5rem, 3vw, 2.2rem)",
              fontSize: "clamp(0.7rem, 1.4vw, 0.8rem)",
              fontWeight: 800, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              borderRadius: 10, border: "none",
            }}
          >
            Book First Lesson <ArrowRight size={13} />
          </motion.a>
          <motion.a
            href="#plans"
            whileHover={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "transparent", color: "rgba(255,255,255,0.6)",
              padding: "clamp(0.8rem, 1.8vw, 1rem) clamp(1.25rem, 2.5vw, 1.8rem)",
              fontSize: "clamp(0.7rem, 1.4vw, 0.8rem)",
              fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            View Pricing
          </motion.a>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}
        >
          {["Dual-control vehicles", "Weekend Classes", "RTO-focused", "Pickup & Drop"].map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05 + i * 0.07 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.6rem, 1.2vw, 0.68rem)",
                fontWeight: 600, color: "var(--text-muted)",
                background: "var(--surface-2)",
                padding: "0.3rem 0.75rem",
                borderRadius: 99,
                border: "1px solid var(--border)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              ✓ {p}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — 3D Car canvas */}
      <div style={{ position: "relative" }}>
        <div className="hero-right-panel" style={{ position: "relative", minHeight: "clamp(300px, 50vw, 560px)" }}>
          {/* Background glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%", height: "70%",
            background: "radial-gradient(circle, rgba(0,85,233,0.18) 0%, transparent 65%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Grid dot pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.08, pointerEvents: "none" }}>
            {[...Array(8)].map((_, r) => [...Array(8)].map((__, c) => (
              <circle key={`${r}-${c}`} cx={`${12.5 + c * 12.5}%`} cy={`${12.5 + r * 12.5}%`} r="1.5" fill="#fff" />
            )))}
          </svg>

          {/* 3D Canvas */}
          <div style={{ position: "absolute", inset: "4% 0 4% 0", zIndex: 1, touchAction: "none" }}>
            <CarScene />
          </div>

          {/* Floating stat: Pass Rate */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
            style={{
              position: "absolute", bottom: "26%", left: "-1.5rem",
              background: "var(--surface-2)",
              border: "1px solid var(--border-mid)",
              padding: "clamp(0.65rem, 1.5vw, 0.9rem) clamp(0.85rem, 2vw, 1.2rem)",
              borderRadius: 12, zIndex: 3,
              backdropFilter: "blur(12px)",
              minWidth: 110,
            }} className="hero-stat-left"
          >
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#fff", lineHeight: 1 }}>100%</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }}>Pass Rate</p>
          </motion.div>

          {/* Floating stat: Graduates */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: EASE }}
            style={{
              position: "absolute", top: "15%", right: "-1rem",
              background: "var(--accent)",
              padding: "clamp(0.65rem, 1.5vw, 0.9rem) clamp(0.85rem, 2vw, 1.2rem)",
              borderRadius: 12, zIndex: 3, minWidth: 100,
              boxShadow: "0 12px 40px rgba(0,85,233,0.4)",
              color: "#fff",
            }} className="hero-stat-right"
          >
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", lineHeight: 1 }}>5000+</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8, marginTop: 4 }}>Graduates</p>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5, ease: EASE }}
            style={{
              position: "absolute", bottom: "4%", left: "6%", right: "6%",
              background: "rgba(255,213,0,0.95)",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "0.5rem 0.9rem",
              borderRadius: 8, display: "flex", alignItems: "center", gap: "0.5rem",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 12 12" fill="#1a1500">
                  <path d="M6 0l1.5 4H12l-3.6 2.6L9.7 11 6 8.2 2.3 11l1.3-4.4L0 4h4.5z" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1500", whiteSpace: "nowrap" }}>
              Trusted by 5000+ Local Drivers
            </p>
          </motion.div>

          {/* Drag hint */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            style={{
              position: "absolute", top: "6%", right: 0,
              display: "flex", alignItems: "center", gap: "0.35rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--text-dim)", zIndex: 2,
            }}
          >
            <span style={{ width: 14, height: 1, background: "var(--text-dim)", display: "block" }} />
            Drag to rotate
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right-panel { min-height: 320px !important; }
          .hero-stat-left { left: 0 !important; }
          .hero-stat-right { right: 0 !important; }
        }
      `}</style>
    </section>
  );
}