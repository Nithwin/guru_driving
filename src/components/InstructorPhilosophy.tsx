"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Animations";

export function InstructorPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section style={{ marginTop: "4rem" }}>
      <Reveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          alignItems: "center",
        }} className="instructor-grid">
          <div ref={containerRef} style={{ position: "relative", height: 360, borderRadius: 6, overflow: "hidden", border: "2px solid var(--ink)" }}>
            <motion.div style={{ position: "absolute", inset: "-15%", y: imageY }}>
              <Image src="/instructor.png" alt="Instructor teaching student" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </motion.div>
          </div>
          <div style={{ padding: "1rem 0" }}>
            <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Our Promise</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              We're Here to Help You <br />
              <span className="accent">Love Driving.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--muted)", marginTop: "1rem", maxWidth: 400 }}>
              Learning to drive shouldn't be scary. Our local, certified instructors sit right beside you with dual controls, ensuring you are 100% safe while you learn at your own pace.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem" }}>
              {[["12+", "Years Experience"], ["5000+", "Graduates"], ["100%", "Dual-Control"]].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontWeight: 900, fontSize: "1.4rem", color: "var(--accent)" }}>{n}</p>
                  <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      <style>{`@media(max-width:768px){.instructor-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
