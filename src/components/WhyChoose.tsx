"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, CarFront, BadgeCheck, ArrowRight } from "lucide-react";
import { Reveal3D } from "./Animations";

export function WhyChoose() {
  return (
    <section style={{ marginTop: "var(--section-gap, 5rem)" }}>
      <Reveal3D>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Why Learn With Us</p>
        <h2 className="section-title">
          No Yelling, No Stress.
          <br />
          Just <span className="accent">Safe Driving.</span>
        </h2>
        <div style={{ width: 44, height: 3, background: "var(--accent)", marginTop: "0.75rem" }} />
      </Reveal3D>

      {/* Bento features grid */}
      <div className="features-grid" style={{ marginTop: "clamp(1.5rem, 3vw, 2.5rem)" }}>

        {/* Cell 1 – large white: Advanced Safety */}
        <motion.div
          whileHover={{ background: "var(--yellow)" }}
          transition={{ duration: 0.3 }}
          className="feature-cell white"
          style={{
            gridRow: "span 2",
            borderRight: "2px solid var(--ink)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "clamp(240px, 30vw, 340px)",
            cursor: "default",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.querySelectorAll<HTMLElement>(".hover-invert").forEach(n => {
              n.style.color = "var(--yellow-ink)";
            });
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.querySelectorAll<HTMLElement>(".hover-invert").forEach(n => {
              n.style.color = "";
            });
          }}
        >
          <div>
            <div style={{
              width: 44, height: 44,
              border: "2px solid var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#fff5f7", color: "var(--accent)",
              marginBottom: "1.25rem",
              flexShrink: 0,
            }}>
              <ShieldCheck size={20} />
            </div>
            <h3 className="hover-invert" style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
              transition: "color 0.3s",
            }}>
              Advanced Safety<br />Training
            </h3>
            <p className="hover-invert" style={{
              fontSize: "clamp(0.78rem, 1.8vw, 0.84rem)",
              lineHeight: 1.8,
              color: "var(--muted)",
              transition: "color 0.3s",
            }}>
              Beyond the basics — defensive maneuvers, hazard prevention, and specialty protocols used by professional chauffeurs.
            </p>
          </div>

          <div style={{ borderTop: "2px solid currentColor", paddingTop: "1rem", marginTop: "1.5rem" }}>
            <a href="#plans" className="hover-invert" style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none", color: "inherit",
              transition: "color 0.3s",
            }}>
              Learn More <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Cell 2 – yellow: Flexible Slots */}
        <motion.div
          className="feature-cell yellow"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.22 }}
          style={{ borderBottom: "2px solid var(--ink)", display: "flex", alignItems: "flex-start", gap: "1rem" }}
        >
          <div style={{
            width: 40, height: 40, border: "2px solid var(--ink)",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#fff", color: "var(--accent)", flexShrink: 0,
          }}>
            <Clock3 size={18} />
          </div>
          <div>
            <h3 style={{
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem",
            }}>Flexible Slots</h3>
            <p style={{ fontSize: "clamp(0.76rem, 1.7vw, 0.82rem)", lineHeight: 1.75, color: "var(--yellow-ink)" }}>
              Morning, late-night, or weekend sessions tailored to your busy lifestyle.
            </p>
          </div>
        </motion.div>

        {/* Cell 3 – red: Top Fleet */}
        <motion.div
          className="feature-cell red"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.22 }}
          style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
        >
          <div style={{
            width: 40, height: 40, border: "2px solid rgba(255,255,255,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.12)", color: "#fff", flexShrink: 0,
          }}>
            <CarFront size={18} />
          </div>
          <div>
            <h3 style={{
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem",
            }}>Top Fleet</h3>
            <p style={{ fontSize: "clamp(0.76rem, 1.7vw, 0.82rem)", lineHeight: 1.75, color: "rgba(255,255,255,0.8)" }}>
              Modern dual-control vehicles, perfectly maintained for comfort and safety.
            </p>
          </div>
        </motion.div>

        {/* Cell 4 – light: Local Pros */}
        <motion.div
          className="feature-cell"
          whileHover={{ scale: 1.01, background: "#fdf0c8" }}
          transition={{ duration: 0.22 }}
          style={{
            background: "#fef9e7",
            borderRight: "none",
            gridColumn: "1 / -1",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <div style={{
            width: 40, height: 40, border: "2px solid var(--ink)",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#fff", color: "var(--accent)", flexShrink: 0,
          }}>
            <BadgeCheck size={18} />
          </div>
          <div>
            <h3 style={{
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 900, textTransform: "uppercase", marginBottom: "0.35rem",
            }}>Local Pros</h3>
            <p style={{ fontSize: "clamp(0.76rem, 1.7vw, 0.82rem)", lineHeight: 1.75, color: "var(--muted)" }}>
              RTO-aware instructors who know the roads, test routes, and common mistakes to avoid.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid > div:first-child {
            grid-row: span 1 !important;
            min-height: 200px !important;
          }
          .features-grid > div:last-child {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
