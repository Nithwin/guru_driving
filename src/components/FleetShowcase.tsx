"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Animations";

export function FleetShowcase() {
  const fleetRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: fleetScroll } = useScroll({
    target: fleetRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: roadScroll } = useScroll({
    target: roadRef,
    offset: ["start end", "end start"]
  });

  const fleetY = useTransform(fleetScroll, [0, 1], ["-12%", "12%"]);
  const roadY = useTransform(roadScroll, [0, 1], ["-15%", "15%"]);

  return (
    <>
      {/* ════ FLEET SHOWCASE ════ */}
      <section id="fleet" style={{ marginTop: "5rem" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Our Fleet</p>
          <h2 className="section-title">
            Modern, Safe &amp; <span className="accent">Always Ready.</span>
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
            Every vehicle in our fleet is dual-control, regularly serviced, and equipped for both beginner and advanced training.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div ref={fleetRef} style={{ position: "relative", height: 380, borderRadius: 6, overflow: "hidden", border: "2px solid var(--ink)" }}>
            <motion.div style={{ position: "absolute", inset: "-15%", y: fleetY }}>
              <Image src="/fleet.png" alt="Sri Guru training fleet" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </motion.div>
            {/* Overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)",
              pointerEvents: "none",
            }} />
            {/* Bottom text */}
            <div style={{
              position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 1,
            }}>
              <p style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase" }}>
                Suzuki Swift Fleet
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", fontWeight: 600, marginTop: "0.25rem" }}>
                Dual-control · AC · Fully insured · GPS tracked
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════ FULL-WIDTH ROAD IMAGE ════ */}
      <Reveal style={{ marginTop: "4rem" }}>
        <div ref={roadRef} style={{
          position: "relative", height: 260, borderRadius: 6,
          overflow: "hidden", border: "2px solid var(--ink)",
        }}>
          <motion.div style={{ position: "absolute", inset: "-15%", y: roadY }}>
            <Image src="/road-aerial.png" alt="Scenic road" fill sizes="100vw" style={{ objectFit: "cover" }} />
          </motion.div>
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(13,13,13,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "0.75rem",
          }}>
            <p style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900,
              color: "#fff", textTransform: "uppercase", textAlign: "center",
              letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>
              Your Journey Starts <span style={{ color: "var(--yellow)" }}>Here.</span>
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: "var(--accent)", color: "#fff",
                padding: "0.7rem 1.4rem", fontSize: "0.72rem",
                fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                borderRadius: 3, border: "none",
              }}
            >
              Enroll Now <ArrowRight size={13} />
            </motion.a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
