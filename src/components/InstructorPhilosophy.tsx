"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "./Animations";

export function InstructorPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="trainer" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
            }}
            className="instructor-grid"
          >
            {/* Image */}
            <div
              ref={containerRef}
              style={{
                position: "relative",
                height: "clamp(280px, 42vw, 520px)",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <motion.div style={{ position: "absolute", inset: "-10%", y: imageY }}>
                <Image
                  src="/instructor.png"
                  alt="Vignesh — your instructor"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(0,85,233,0.1) 0%, transparent 40%)",
                pointerEvents: "none",
              }} />

              {/* Badge */}
              <div style={{
                position: "absolute", bottom: "1.25rem", left: "1.25rem",
                background: "rgba(15,15,15,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "0.6rem 0.9rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
                  Available Today
                </span>
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: "clamp(0.5rem, 2vw, 1rem) 0" }}>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Meet Your Instructor</p>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", marginBottom: "1.25rem" }}>
                Learn with<br />
                <span className="gradient-text-blue">Vignesh.</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
                lineHeight: 1.85,
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                maxWidth: 420,
              }}>
                With years of professional driving instruction on Mettur roads, Vignesh transforms nervous beginners into confident, skilled drivers — with patience, precision, and care at every step.
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.75rem" }}>
                {[
                  "Patient & Friendly Approach",
                  "Certified Instructor",
                  "Focus on 100% Pass Rate",
                  "Pickup & Drop (Mettur, Kolathur, RS, Mecheri)",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "clamp(0.8rem, 1.6vw, 0.88rem)", fontWeight: 500, color: "var(--text-muted)" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini stats */}
              <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
                {[["12+", "Years Experience"], ["5000+", "Graduates"], ["100%", "Pass Rate"]].map(([n, l]) => (
                  <div key={l}>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }}>{l}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  padding: "0.85rem 1.6rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", textDecoration: "none",
                  borderRadius: 10, border: "1px solid var(--border-mid)",
                  transition: "background 0.2s",
                }}
              >
                Book a Free Consultation <ArrowRight size={14} />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .instructor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
