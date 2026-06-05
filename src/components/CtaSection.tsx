"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Animations";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CtaSection() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <Reveal>
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            position: "relative",
          }} className="cta-inner-grid">
            {/* Background glow */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "50%", height: "100%",
              background: "radial-gradient(circle at 80% 50%, rgba(0,85,233,0.08) 0%, transparent 60%)",
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* LEFT */}
            <div style={{ padding: "clamp(2rem, 5vw, 4rem)", position: "relative", zIndex: 1 }}>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Get Started</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                lineHeight: 1.04,
                color: "#fff",
                marginBottom: "1rem",
              }}>
                Ready to<br />
                <span className="gradient-text-blue">Drive?</span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: 340, marginBottom: "1.75rem" }}>
                Drop your number and we'll call you back immediately to discuss plans, timings, and pickup from your doorstep.
              </p>

              {/* Pickup areas */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Mettur", "Kolathur", "RS", "Mecheri"].map(area => (
                  <span key={area} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    background: "var(--surface-2)", border: "1px solid var(--border-mid)",
                    color: "var(--text-muted)",
                    padding: "0.3rem 0.7rem",
                    borderRadius: 99,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    <MapPin size={9} style={{ color: "var(--accent)" }} />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={{
              padding: "clamp(2rem, 5vw, 4rem)",
              background: "var(--surface-2)",
              borderLeft: "1px solid var(--border)",
              position: "relative", zIndex: 1,
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              {!sent ? (
                <>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#fff", marginBottom: "0.45rem" }}>
                    Request a Callback
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    We'll get back to you within minutes during school hours.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <input
                      type="tel"
                      className="dark-input"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(0,85,233,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                        background: "var(--accent)", color: "#fff",
                        border: "none", borderRadius: 8, cursor: "pointer",
                        padding: "0.9rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem", fontWeight: 800,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                      }}
                    >
                      Get a Call Back <ArrowRight size={14} />
                    </motion.button>
                    <a
                      href="tel:+917092063335"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                        background: "transparent",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-mid)",
                        borderRadius: 8, padding: "0.75rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        textDecoration: "none",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                    >
                      <Phone size={12} /> Call Directly
                    </a>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ textAlign: "center" }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(34,197,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                    <CheckCircle2 size={28} style={{ color: "#22c55e" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "#fff", marginBottom: "0.5rem" }}>We'll Call You Back!</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    Our team will reach out shortly. Meanwhile, feel free to call us directly.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-inner-grid { grid-template-columns: 1fr !important; }
          .cta-inner-grid > div:last-child { border-left: none !important; border-top: 1px solid var(--border); }
        }
      `}</style>
    </section>
  );
}
