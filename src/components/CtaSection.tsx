"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Animations";

export function CtaSection() {
  const [phone, setPhone] = useState("");

  return (
    <section
      id="contact"
      className="cta-section"
      style={{
        marginTop: "var(--section-gap, 5rem)",
        padding: "clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 1.5rem)",
        background: "var(--yellow)",
        color: "var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
        className="cta-inner-grid"
      >
        {/* Left Side: Copy */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--accent)" }}>Get Started</p>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
          }}>
            Ready to <br />
            <span style={{ color: "var(--accent)" }}>Drive?</span>
          </h2>
          <p style={{
            fontSize: "clamp(0.84rem, 1.8vw, 0.95rem)",
            lineHeight: 1.8,
            color: "var(--yellow-ink)",
            marginTop: "1.25rem",
            maxWidth: 380,
          }}>
            Drop your number below and our team will get back to you immediately to schedule your first lesson.
          </p>

          {/* Location Map */}
          <div style={{
            marginTop: "2rem",
            height: "clamp(140px, 20vw, 180px)",
            borderRadius: 6,
            border: "2px solid var(--ink)",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              padding: "0.38rem 0.75rem", background: "var(--ink)", color: "#fff",
              fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
              display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2,
            }}>
              <span>Our Training Hub</span>
              <span style={{ color: "var(--yellow)" }}>● Open Today</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Kolathur,+Mettur,+Salem,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)", transform: "translateY(15px)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Guru Driving School Location"
            />
          </div>
        </Reveal>

        {/* Right Side: Simple Contact Form */}
        <Reveal delay={0.15}>
          <div style={{
            background: "#0f0f0f",
            border: "1.5px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            position: "relative",
            overflow: "hidden",
            color: "#fff",
          }}>
            {/* Ambient glow */}
            <div style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ minHeight: "clamp(180px, 25vw, 220px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                Request a Callback
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.75rem, 1.6vw, 0.85rem)", marginBottom: "1.5rem", lineHeight: 1.5 }}>
                We'll call you back quickly to discuss plans, timings, and doorstep pickup options.
              </p>

              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "clamp(0.85rem, 1.8vw, 1.2rem)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderRadius: 5,
                  outline: "none",
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  fontWeight: 600,
                  marginBottom: "0.85rem",
                  transition: "border-color 0.2s",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,102,255,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  padding: "clamp(0.85rem, 2vw, 1.2rem)",
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)",
                }}
              >
                Get a Call Back <ArrowRight size={15} />
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
