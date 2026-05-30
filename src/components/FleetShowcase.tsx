"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Animations";

export function FleetShowcase() {
  const fleetRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: fleetScroll } = useScroll({
    target: fleetRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: roadScroll } = useScroll({
    target: roadRef,
    offset: ["start end", "end start"],
  });

  const fleetY = useTransform(fleetScroll, [0, 1], ["-12%", "12%"]);
  const roadY = useTransform(roadScroll, [0, 1], ["-15%", "15%"]);

  const fleetFeatures = [
    "Dual-control safety system",
    "Full AC & comfortable seats",
    "Fully insured & GPS tracked",
    "Regularly serviced",
  ];

  return (
    <>
      {/* ════ FLEET SHOWCASE ════ */}
      <section id="fleet" style={{ marginTop: "var(--section-gap, 5rem)" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Our Fleet</p>
          <h2 className="section-title">
            Modern, Safe &amp; <span className="accent">Always Ready.</span>
          </h2>
          <p style={{
            fontSize: "clamp(0.82rem, 1.8vw, 0.88rem)",
            color: "var(--muted)",
            marginTop: "0.75rem",
            maxWidth: 480,
            margin: "0.75rem auto 0",
            lineHeight: 1.7,
          }}>
            Every vehicle in our fleet is dual-control, regularly serviced, and equipped for both beginner and advanced training.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={fleetRef}
            style={{
              position: "relative",
              height: "clamp(240px, 40vw, 380px)",
              borderRadius: 7,
              overflow: "hidden",
              border: "2px solid var(--ink)",
            }}
          >
            <motion.div style={{ position: "absolute", inset: "-15%", y: fleetY }}>
              <Image src="/fleet.png" alt="Sri Guru training fleet" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </motion.div>
            {/* Overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)",
              pointerEvents: "none",
            }} />

            {/* Bottom content */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "clamp(1rem, 3vw, 1.5rem)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
              zIndex: 1,
            }}>
              <div>
                <p style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1rem, 2.5vw, 1.2rem)", textTransform: "uppercase" }}>
                  Suzuki Swift Fleet
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.68rem, 1.5vw, 0.75rem)", fontWeight: 600, marginTop: "0.2rem" }}>
                  Dual-control · AC · Fully insured · GPS tracked
                </p>
              </div>

              {/* Feature pills */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {fleetFeatures.slice(0, 2).map(f => (
                  <span key={f} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "0.28rem 0.65rem",
                    borderRadius: 99,
                    fontSize: "clamp(0.58rem, 1.2vw, 0.65rem)",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}>
                    <CheckCircle2 size={10} style={{ color: "var(--yellow)" }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fleet feature grid */}
        <Reveal delay={0.2}>
          <div className="fleet-features-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            border: "2px solid var(--ink)",
            borderTop: "none",
            marginTop: 0,
          }}>
            {fleetFeatures.map((f, i) => (
              <div key={f} style={{
                padding: "0.85rem 1rem",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: i % 2 === 0 ? "#fafafa" : "#fff",
              }}>
                <CheckCircle2 size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <p style={{
                  fontSize: "clamp(0.62rem, 1.4vw, 0.72rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}>
                  {f}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 640px) {
            .fleet-features-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ════ FULL-WIDTH ROAD IMAGE ════ */}
      <Reveal style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div ref={roadRef} style={{
          position: "relative",
          height: "clamp(200px, 30vw, 260px)",
          borderRadius: 7,
          overflow: "hidden",
          border: "2px solid var(--ink)",
        }}>
          <motion.div style={{ position: "absolute", inset: "-15%", y: roadY }}>
            <Image src="/road-aerial.png" alt="Scenic road" fill sizes="100vw" style={{ objectFit: "cover" }} />
          </motion.div>
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(13,13,13,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "1rem",
            padding: "1rem",
          }}>
            <p style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              textAlign: "center",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}>
              Your Journey Starts <span style={{ color: "var(--yellow)" }}>Here.</span>
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(245,200,0,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: "var(--yellow)", color: "var(--yellow-ink)",
                padding: "clamp(0.6rem, 1.5vw, 0.7rem) clamp(1rem, 2.5vw, 1.4rem)",
                fontSize: "clamp(0.68rem, 1.4vw, 0.75rem)",
                fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                borderRadius: 3, border: "none",
              }}
            >
              Enroll Now <ArrowRight size={12} />
            </motion.a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
