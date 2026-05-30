"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Zap, Car } from "lucide-react";
import { Reveal } from "./Animations";

const PLANS = ["Beginner", "Medium", "Advanced"];
const TRANSMISSION = ["Manual", "Automatic"];
const EASE = [0.76, 0, 0.24, 1] as const;

export function CtaSection() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(PLANS[0]);
  const [trans, setTrans] = useState(TRANSMISSION[0]);
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
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--accent)" }}>Booking Wizard</p>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
          }}>
            Ignite Your <br />
            <span style={{ color: "var(--accent)" }}>Engine.</span>
          </h2>
          <p style={{
            fontSize: "clamp(0.84rem, 1.8vw, 0.95rem)",
            lineHeight: 1.8,
            color: "var(--yellow-ink)",
            marginTop: "1.25rem",
            maxWidth: 380,
          }}>
            No more boring forms. Configure your training setup exactly how you want it, and our instructors will be ready.
          </p>

          {/* Step progress indicator */}
          <div style={{ marginTop: "1.75rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <div style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: i <= step ? "var(--ink)" : "rgba(0,0,0,0.15)",
                  color: i <= step ? "var(--yellow)" : "rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  transition: "all 0.3s",
                }}>
                  {i < step ? <Check size={12} /> : i}
                </div>
                <span style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: i <= step ? "var(--ink)" : "rgba(0,0,0,0.4)",
                  transition: "color 0.3s",
                }}>
                  {i === 1 ? "Plan" : i === 2 ? "Transmission" : "Contact"}
                </span>
                {i < 3 && <div style={{ width: 24, height: 1, background: i < step ? "var(--ink)" : "rgba(0,0,0,0.2)", marginLeft: "0.1rem" }} />}
              </div>
            ))}
          </div>

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

        {/* Right Side: Dashboard UI */}
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
              background: "radial-gradient(circle, rgba(204,0,51,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Step bar */}
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "2rem" }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  flex: 1, height: 3, borderRadius: 2,
                  background: i <= step ? "var(--accent)" : "rgba(255,255,255,0.08)",
                  transition: "background 0.4s ease",
                }} />
              ))}
            </div>

            <div style={{ minHeight: "clamp(180px, 25vw, 220px)" }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25, ease: EASE }}>
                    <h3 style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                      Select Plan
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {PLANS.map(p => (
                        <button
                          key={p}
                          onClick={() => { setPlan(p); setStep(2); }}
                          style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            width: "100%", padding: "0.85rem 1rem",
                            background: plan === p ? "var(--accent)" : "rgba(255,255,255,0.04)",
                            border: plan === p ? "1.5px solid var(--accent)" : "1.5px solid rgba(255,255,255,0.07)",
                            color: "#fff", fontWeight: 700,
                            fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)",
                            borderRadius: 5, cursor: "pointer",
                            transition: "all 0.2s",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {p}
                          {plan === p && <Check size={15} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25, ease: EASE }}>
                    <h3 style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                      Transmission
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      {TRANSMISSION.map(t => (
                        <button
                          key={t}
                          onClick={() => { setTrans(t); setStep(3); }}
                          style={{
                            padding: "clamp(1.25rem, 3vw, 2rem) 1rem",
                            background: trans === t ? "var(--yellow)" : "rgba(255,255,255,0.04)",
                            border: trans === t ? "1.5px solid var(--yellow)" : "1.5px solid rgba(255,255,255,0.07)",
                            color: trans === t ? "var(--ink)" : "#fff",
                            fontWeight: 800,
                            fontSize: "clamp(0.75rem, 1.6vw, 0.85rem)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            borderRadius: 5,
                            cursor: "pointer",
                            transition: "all 0.2s",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          {t === "Automatic" ? <Zap size={20} /> : <Car size={20} />}
                          {t}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        marginTop: "1rem",
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        letterSpacing: "0.04em",
                      }}
                    >
                      ← Back
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25, ease: EASE }}>
                    <h3 style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                      Final Step
                    </h3>

                    {/* Summary pills */}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                      {[plan, trans].map(v => (
                        <span key={v} style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "var(--yellow)",
                          padding: "0.2rem 0.65rem",
                          borderRadius: 99,
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}>
                          ✓ {v}
                        </span>
                      ))}
                    </div>

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
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(204,0,51,0.35)" }}
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
                      Confirm Booking <ArrowRight size={15} />
                    </motion.button>
                    <button
                      onClick={() => setStep(2)}
                      style={{
                        marginTop: "0.75rem",
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        letterSpacing: "0.04em",
                        display: "block",
                      }}
                    >
                      ← Back
                    </button>
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
