"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Reveal } from "./Animations";
import { MagneticButton } from "./MagneticButton";

const PLANS = ["Beginner", "Medium", "Advanced"];
const TRANSMISSION = ["Manual", "Automatic"];

export function CtaSection() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(PLANS[0]);
  const [trans, setTrans] = useState(TRANSMISSION[0]);

  return (
    <section id="contact" className="cta-section" style={{ marginTop: "5rem", padding: "4rem 1.5rem", background: "var(--yellow)", color: "var(--ink)" }}>
      <div style={{
        maxWidth: 1000,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center"
      }} className="cta-inner-grid">
        
        {/* Left Side: Copy */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--accent)" }}>Booking Wizard</p>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900, textTransform: "uppercase",
            lineHeight: 1.04, letterSpacing: "-0.02em",
          }}>
            Ignite Your <br />
            <span style={{ color: "var(--accent)" }}>Engine.</span>
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--yellow-ink)", marginTop: "1.25rem", maxWidth: 400 }}>
            No more boring forms. Configure your training setup exactly how you want it, and our instructors will be ready.
          </p>

          {/* Location Map */}
          <div style={{
            marginTop: "2.5rem",
            maxWidth: 400,
            height: 180,
            borderRadius: 6,
            border: "2px solid var(--ink)",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            position: "relative"
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              padding: "0.4rem 0.75rem", background: "var(--ink)", color: "#fff",
              fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
              display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2
            }}>
              <span>Our Training Hub</span>
              <span style={{ color: "var(--yellow)" }}>Open Today</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Kolathur,+Mettur,+Salem,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)", transform: "translateY(15px)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        {/* Right Side: Dashboard UI */}
        <Reveal delay={0.15}>
          <div style={{
            background: "#0f0f0f",
            border: "1.5px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
            color: "#fff"
          }}>
            {/* Steps indicator */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: i <= step ? "var(--accent)" : "rgba(255,255,255,0.1)",
                  transition: "background 0.3s"
                }} />
              ))}
            </div>

            <div style={{ minHeight: 220 }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>Select Plan</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {PLANS.map(p => (
                        <button
                          key={p}
                          onClick={() => { setPlan(p); setStep(2); }}
                          style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            width: "100%", padding: "1rem 1.25rem",
                            background: plan === p ? "var(--accent)" : "rgba(255,255,255,0.03)",
                            border: plan === p ? "1.5px solid var(--accent)" : "1.5px solid rgba(255,255,255,0.08)",
                            color: "#fff", fontWeight: 700, borderRadius: 4, cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                        >
                          {p}
                          {plan === p && <Check size={16} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>Transmission</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      {TRANSMISSION.map(t => (
                        <button
                          key={t}
                          onClick={() => { setTrans(t); setStep(3); }}
                          style={{
                            padding: "2rem 1rem",
                            background: trans === t ? "var(--yellow)" : "rgba(255,255,255,0.03)",
                            border: trans === t ? "1.5px solid var(--yellow)" : "1.5px solid rgba(255,255,255,0.08)",
                            color: trans === t ? "var(--ink)" : "#fff",
                            fontWeight: 800, textTransform: "uppercase", borderRadius: 4, cursor: "pointer",
                            transition: "all 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem"
                          }}
                        >
                          <Zap size={24} />
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>Final Step</h3>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      style={{
                        width: "100%", padding: "1.2rem", background: "rgba(255,255,255,0.05)",
                        border: "1.5px solid rgba(255,255,255,0.1)", color: "#fff",
                        borderRadius: 4, outline: "none", fontSize: "1rem", fontWeight: 600,
                        marginBottom: "1rem"
                      }}
                    />
                    <MagneticButton className="w-full">
                      <button
                        style={{
                          width: "100%", padding: "1.2rem", background: "var(--accent)", color: "#fff",
                          border: "none", borderRadius: 4, fontWeight: 800, textTransform: "uppercase",
                          letterSpacing: "0.1em", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
                        }}
                      >
                        Confirm Booking <ArrowRight size={16} />
                      </button>
                    </MagneticButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
