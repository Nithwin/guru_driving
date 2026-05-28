"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, CarFront, BadgeCheck, ArrowRight } from "lucide-react";
import { Reveal, Reveal3D } from "./Animations";

export function WhyChoose() {
  return (
    <section style={{ marginTop: "5rem" }}>
      <Reveal3D>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Why Choose Sri Guru</p>
        <h2 className="section-title">
          Built for Confidence,
          <br />
          Speed, & <span className="accent">Safe Progress.</span>
        </h2>
        <div style={{ width: 48, height: 3, background: "var(--accent)", marginTop: "0.75rem" }} />
      </Reveal3D>

      {/* Bento features grid */}
      <div className="features-grid" style={{ marginTop: "2.5rem" }}>
        {/* Cell 1 – large white: Advanced Safety */}
        <motion.div
          whileHover={{ background: "#0d0d0d" }}
          transition={{ duration: 0.3 }}
          className="feature-cell white"
          style={{
            gridRow: "span 2",
            borderRight: "2px solid var(--ink)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 340,
            cursor: "default",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            const el = e.currentTarget;
            el.querySelectorAll<HTMLElement>(".hover-invert").forEach(n => {
              n.style.color = "#fff";
            });
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            const el = e.currentTarget;
            el.querySelectorAll<HTMLElement>(".hover-invert").forEach(n => {
              n.style.color = "";
            });
          }}
        >
          <Reveal3D delay={0.05}>
            <div style={{
              width: 46, height: 46,
              border: "2px solid var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#fff5f7", color: "var(--accent)",
              marginBottom: "1.25rem",
            }}>
              <ShieldCheck size={22} />
            </div>
            <h3 className="hover-invert" style={{ fontSize: "1.4rem", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "0.75rem", transition: "color 0.3s" }}>
              Advanced Safety<br />Training
            </h3>
            <p className="hover-invert" style={{ fontSize: "0.84rem", lineHeight: 1.8, color: "var(--muted)", transition: "color 0.3s" }}>
              Beyond the basics — defensive maneuvers, hazard prevention, and specialty protocols used by professional chauffeurs.
            </p>
          </Reveal3D>

          <Reveal3D delay={0.12}>
            <div style={{ borderTop: "2px solid currentColor", paddingTop: "1rem", marginTop: "1.5rem" }}>
              <a href="#plans" className="hover-invert" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none", color: "inherit",
                transition: "color 0.3s",
              }}>
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </Reveal3D>
        </motion.div>

        {/* Cell 2 – yellow: Flexible Slots */}
        <motion.div
          className="feature-cell yellow"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.22 }}
          style={{ borderBottom: "2px solid var(--ink)", display: "flex", alignItems: "flex-start", gap: "1rem" }}
        >
          <Reveal3D delay={0.1} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{
              width: 40, height: 40, border: "2px solid var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#fff", color: "var(--accent)", flexShrink: 0,
            }}>
              <Clock3 size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem" }}>Flexible Slots</h3>
              <p style={{ fontSize: "0.8.rem", lineHeight: 1.75, color: "var(--yellow-ink)" }}>
                Morning, late-night, or weekend sessions tailored to your busy lifestyle.
              </p>
            </div>
          </Reveal3D>
        </motion.div>

        {/* Cell 3 – red: Top Fleet */}
        <motion.div
          className="feature-cell red"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.22 }}
          style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
        >
          <Reveal3D delay={0.15} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{
              width: 40, height: 40, border: "2px solid rgba(255,255,255,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.12)", color: "#fff", flexShrink: 0,
            }}>
              <CarFront size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem" }}>Top Fleet</h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.8)" }}>
                Modern dual-control vehicles, perfectly maintained for comfort and safety.
              </p>
            </div>
          </Reveal3D>
        </motion.div>

        {/* Cell 4 – light: Local Pros */}
        <motion.div
          className="feature-cell"
          whileHover={{ scale: 1.02, background: "#eef2ff" }}
          transition={{ duration: 0.22 }}
          style={{ background: "#f0f4ff", borderRight: "none", display: "flex", alignItems: "flex-start", gap: "1rem" }}
        >
          <Reveal3D delay={0.2} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{
              width: 40, height: 40, border: "2px solid var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#fff", color: "var(--accent)", flexShrink: 0,
            }}>
              <BadgeCheck size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem" }}>Local Pros</h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "var(--muted)" }}>
                RTO-aware instructors who know the roads, test routes, and common mistakes to avoid.
              </p>
            </div>
          </Reveal3D>
        </motion.div>
      </div>
    </section>
  );
}
