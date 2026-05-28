"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Reveal } from "./Animations";

export function CtaSection() {
  return (
    <section id="contact" className="cta-section" style={{ marginTop: "5rem", padding: "3.5rem 2.5rem" }}>
      {/* Watermark car */}
      <div style={{
        position: "absolute", right: -20, top: -10,
        opacity: 0.06, transform: "rotate(8deg)",
        pointerEvents: "none", fontSize: "14rem", lineHeight: 1,
      }}>
        🚗
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "2.5rem",
        alignItems: "center",
        maxWidth: 960,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }} className="cta-inner-grid">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.5rem", color: "rgba(61,48,0,0.6)" }}>Get Started Today</p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900, textTransform: "uppercase",
            color: "var(--yellow-ink)", lineHeight: 1.04,
            letterSpacing: "-0.02em", maxWidth: 440,
          }}>
            Ready to Take<br />the <span style={{ color: "var(--accent)" }}>Wheel?</span>
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(61,48,0,0.75)", marginTop: "0.75rem", maxWidth: 400 }}>
            Join thousands of confident drivers who started their journey with Sri Guru. High-energy training for high-performance people.
          </p>
        </Reveal>

        <Reveal delay={0.15} style={{ minWidth: 270 }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            <label className="sr-only" htmlFor="phone-cta">Phone number</label>
            <motion.input
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(204,0,51,0.18)" }}
              id="phone-cta"
              type="tel"
              placeholder="Your Phone Number"
              style={{
                border: "2px solid var(--ink)",
                background: "#fff",
                padding: "0.85rem 1rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                outline: "none",
                borderRadius: 3,
                width: "100%",
                transition: "box-shadow 0.2s",
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 6px 24px rgba(204,0,51,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                background: "var(--accent)", color: "#fff",
                border: "2px solid var(--ink)",
                padding: "0.85rem 1.25rem",
                fontSize: "0.8rem", fontWeight: 800,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", borderRadius: 3, width: "100%",
              }}
            >
              <Phone size={14} />
              Call Me Back
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
