"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Animations";

const miniStats = [["12+", "Years Experience"], ["5000+", "Graduates"], ["100%", "Dual-Control"]];

export function InstructorPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section style={{ marginTop: "var(--section-gap, 5rem)" }}>
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(1.25rem, 3vw, 1.75rem)",
            alignItems: "center",
          }}
          className="instructor-grid"
        >
          {/* Image side */}
          <div
            ref={containerRef}
            style={{
              position: "relative",
              height: "clamp(260px, 40vw, 360px)",
              borderRadius: 7,
              overflow: "hidden",
              border: "2px solid var(--ink)",
            }}
          >
            <motion.div style={{ position: "absolute", inset: "-15%", y: imageY }}>
              <Image
                src="/instructor.png"
                alt="Instructor teaching student"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            {/* Subtle overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(204,0,51,0.08) 0%, transparent 50%)",
              pointerEvents: "none",
            }} />

            {/* Bottom badge */}
            <div style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 5,
              padding: "0.5rem 0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
              }} />
              <span style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink)" }}>
                Available Today
              </span>
            </div>
          </div>

          {/* Text side */}
          <div style={{ padding: "clamp(0.5rem, 1.5vw, 1rem) 0" }}>
            <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Our Promise</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>
              We&apos;re Here to Help You <br />
              <span className="accent">Love Driving.</span>
            </h2>
            <p style={{
              fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)",
              lineHeight: 1.9,
              color: "var(--muted)",
              marginTop: "1rem",
              maxWidth: 400,
            }}>
              Learning to drive shouldn&apos;t be scary. Our local, certified instructors sit right beside you with dual controls, ensuring you are 100% safe while you learn at your own pace.
            </p>

            {/* Checkmarks */}
            <ul style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {[
                "Patient & certified instructors",
                "Dual-control safety in every lesson",
                "Learn at your own comfortable pace",
              ].map(item => (
                <li key={item} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "clamp(0.78rem, 1.7vw, 0.84rem)",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}>
                  <CheckCircle2 size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "clamp(1rem, 3vw, 1.5rem)", flexWrap: "wrap" }}>
              {miniStats.map(([n, l]) => (
                <div key={l}>
                  <p style={{
                    fontWeight: 900,
                    fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)",
                    color: "var(--accent)",
                    letterSpacing: "-0.02em",
                  }}>
                    {n}
                  </p>
                  <p style={{
                    fontSize: "clamp(0.6rem, 1.3vw, 0.68rem)",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginTop: 2,
                  }}>
                    {l}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: "1.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--ink)",
                color: "#fff",
                padding: "0.75rem 1.4rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "none",
              }}
            >
              Book a Free Consultation <ArrowRight size={13} />
            </motion.a>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 768px) {
          .instructor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
