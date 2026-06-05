"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "./Animations";

const PLANS = [
  {
    badge: "Starter",
    name: "Standard",
    price: "₹6,500",
    days: "15 Days",
    sessions: 15,
    km: "5 km / session",
    features: ["15 Sessions (5 km each)", "Basic road rules & signals", "Parking & slow maneuvers", "License support & escort"],
    featured: false,
    isYellow: false,
  },
  {
    badge: "Most Popular",
    name: "Premium",
    price: "₹9,000",
    days: "20 Days",
    sessions: 20,
    km: "5 km / session",
    features: ["20 Sessions (5 km each)", "Highway & city driving", "Defensive driving basics", "License support & escort"],
    featured: true,
    isYellow: false,
  },
  {
    badge: "Pro Level",
    name: "Pro",
    price: "₹13,000",
    days: "30 Days",
    sessions: 30,
    km: "5 km / session",
    features: ["30 Sessions (5 km each)", "Expressway & ghat roads", "Advanced hazard control", "License support & escort"],
    featured: false,
    isYellow: true,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function PricingPlans() {
  return (
    <section id="plans" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <Reveal style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Training Plans</p>
          <h2 className="section-title">
            Pick Your <span className="gradient-text-blue">Level</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
            color: "var(--text-muted)",
            marginTop: "0.85rem",
            maxWidth: 480,
            margin: "0.85rem auto 0",
            lineHeight: 1.7,
          }}>
            Every plan includes license support, escort, and doorstep pickup across Mettur & surrounding areas.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", alignItems: "start" }} className="plans-grid-v2">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`plan-card${plan.featured ? " featured" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
              style={{
                background: plan.isYellow ? "var(--yellow)" : plan.featured ? "var(--accent)" : "var(--surface)",
                border: plan.featured ? "1px solid var(--accent)" : plan.isYellow ? "1px solid rgba(0,0,0,0.08)" : "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: 3,
                background: plan.featured ? "var(--yellow)" : plan.isYellow ? "var(--yellow-ink)" : "var(--accent)",
                opacity: plan.isYellow ? 0.2 : 1,
              }} />

              <div style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                {/* Badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  background: plan.featured ? "rgba(255,255,255,0.15)" : plan.isYellow ? "rgba(0,0,0,0.08)" : "var(--surface-2)",
                  color: plan.isYellow ? "var(--yellow-ink)" : plan.featured ? "#fff" : "var(--text-muted)",
                  padding: "0.28rem 0.75rem",
                  borderRadius: 99,
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}>
                  {plan.featured && <Sparkles size={9} />}
                  {plan.badge}
                </div>

                {/* Name + Price */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: plan.isYellow ? "var(--yellow-ink)" : "#fff",
                  marginBottom: "0.5rem",
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: plan.isYellow ? "var(--yellow-ink)" : "#fff",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}>
                  {plan.price}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  color: plan.isYellow ? "rgba(26,21,0,0.55)" : "rgba(255,255,255,0.45)",
                  marginBottom: "1.5rem",
                }}>
                  {plan.days} · {plan.sessions} sessions · {plan.km}
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.12)" : plan.isYellow ? "rgba(0,0,0,0.1)" : "var(--border)", marginBottom: "1.25rem" }} />

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.75rem" }}>
                  {plan.features.map(f => (
                    <li key={f} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.55rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.78rem, 1.5vw, 0.85rem)",
                      color: plan.isYellow ? "rgba(26,21,0,0.75)" : "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                    }}>
                      <CheckCircle2 size={13} style={{
                        color: plan.isYellow ? "var(--yellow-ink)" : plan.featured ? "var(--yellow)" : "var(--accent)",
                        flexShrink: 0, marginTop: 2,
                      }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                    width: "100%",
                    background: plan.featured ? "var(--yellow)" : plan.isYellow ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.08)",
                    color: plan.featured ? "var(--yellow-ink)" : plan.isYellow ? "var(--yellow-ink)" : "#fff",
                    padding: "0.85rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    borderRadius: 8,
                    border: "none",
                    transition: "background 0.2s",
                  }}
                >
                  Get Started <ArrowRight size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plans-grid-v2 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .plans-grid-v2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
