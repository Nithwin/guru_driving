"use client";

import { motion } from "framer-motion";
import { Clock, Route, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "./Animations";

const plans = [
  {
    badge: "Starter",
    name: "Beginner",
    price: "₹9,500",
    duration: "1 hr / session",
    distance: "50 km total",
    weeks: "4 weeks",
    sessions: 12,
    features: [
      "12 Sessions (1 hr each)",
      "50 km covered in total",
      "Basic road rules & signals",
      "Parking & slow maneuvers",
      "Theory materials included",
    ],
    tone: "neutral" as const,
  },
  {
    badge: "Most Popular",
    name: "Medium",
    price: "₹15,000",
    duration: "1.5 hrs / session",
    distance: "120 km total",
    weeks: "6 weeks",
    sessions: 18,
    features: [
      "18 Sessions (1.5 hrs each)",
      "120 km covered in total",
      "Highway & city driving",
      "Defensive driving basics",
      "Night driving session",
      "Mock RTO test included",
    ],
    tone: "featured" as const,
  },
  {
    badge: "Pro Level",
    name: "Advanced",
    price: "₹22,000",
    duration: "2 hrs / session",
    distance: "250 km total",
    weeks: "8 weeks",
    sessions: 25,
    features: [
      "25 Sessions (2 hrs each)",
      "250 km covered in total",
      "Expressway & ghat roads",
      "Advanced hazard control",
      "Multiple night drives",
      "Unlimited mock tests",
      "License support & escort",
    ],
    tone: "yellow" as const,
  },
];


export function PricingPlans() {
  return (
    <section id="plans" style={{ marginTop: "var(--section-gap, 5rem)" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "clamp(1.75rem, 4vw, 2.5rem)" }}>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Training Plans</p>
        <h2 className="section-title">
          Pick Your <span className="accent">Level</span>
        </h2>
        <p style={{
          fontSize: "clamp(0.82rem, 1.8vw, 0.88rem)",
          color: "var(--muted)",
          marginTop: "0.75rem",
          maxWidth: 500,
          margin: "0.75rem auto 0",
          lineHeight: 1.7,
        }}>
          Every plan is designed around real driving distance and time — so you build genuine confidence, not just hours on paper.
        </p>
      </Reveal>

      <div className="plans-grid">
        {plans.map((plan, idx) => {
          const featured = plan.tone === "featured";
          return (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={
                featured
                  ? { translateY: -14, boxShadow: "0 28px 70px rgba(204,0,51,0.4)" }
                  : { translateY: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }
              }
              className={`plan-card${featured ? " featured" : ""}`}
              style={{ padding: 0 }}
            >
              {/* Featured glow effect */}
              {featured && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, transparent 60%)",
                  pointerEvents: "none",
                  zIndex: 0,
                  borderRadius: "inherit",
                }} />
              )}

              <div style={{
                padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
              }}>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.22rem 0.65rem",
                    fontSize: "0.6rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: featured ? "#fff" : "var(--yellow)",
                    color: featured ? "var(--accent)" : "var(--yellow-ink)",
                    borderRadius: 2,
                  }}>
                    {featured && <Sparkles size={9} />}
                    {plan.badge}
                  </span>
                  {featured && (
                    <span style={{
                      fontSize: "0.55rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                    }}>
                      Best value
                    </span>
                  )}
                </div>

                {/* Plan name */}
                <h3 style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: featured ? "#fff" : "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "0.3rem",
                }}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
                  fontWeight: 900,
                  color: featured ? "#fff" : "var(--ink)",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                  lineHeight: 1,
                }}>
                  {plan.price}
                </div>

                {/* Stats pill row */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                  padding: "0.75rem 0.6rem",
                  background: featured ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.03)",
                  borderRadius: 5,
                  border: featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)",
                }}>
                  {/* Session duration */}
                  <div style={{ textAlign: "center" }}>
                    <Clock size={13} style={{ color: featured ? "#fff" : "var(--accent)", margin: "0 auto 4px" }} />
                    <p style={{
                      fontSize: "clamp(0.55rem, 1.2vw, 0.62rem)",
                      fontWeight: 800,
                      color: featured ? "rgba(255,255,255,0.9)" : "var(--ink)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      lineHeight: 1.3,
                    }}>
                      {plan.duration}
                    </p>
                    <p style={{
                      fontSize: "0.5rem",
                      color: featured ? "rgba(255,255,255,0.45)" : "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: 2,
                    }}>Per Session</p>
                  </div>
                  {/* Distance */}
                  <div style={{
                    textAlign: "center",
                    borderLeft: featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)",
                    borderRight: featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)",
                  }}>
                    <Route size={13} style={{ color: featured ? "#fff" : "var(--accent)", margin: "0 auto 4px" }} />
                    <p style={{
                      fontSize: "clamp(0.55rem, 1.2vw, 0.62rem)",
                      fontWeight: 800,
                      color: featured ? "rgba(255,255,255,0.9)" : "var(--ink)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      lineHeight: 1.3,
                    }}>
                      {plan.distance}
                    </p>
                    <p style={{
                      fontSize: "0.5rem",
                      color: featured ? "rgba(255,255,255,0.45)" : "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: 2,
                    }}>Driving</p>
                  </div>
                  {/* Weeks */}
                  <div style={{ textAlign: "center" }}>
                    <Calendar size={13} style={{ color: featured ? "#fff" : "var(--accent)", margin: "0 auto 4px" }} />
                    <p style={{
                      fontSize: "clamp(0.55rem, 1.2vw, 0.62rem)",
                      fontWeight: 800,
                      color: featured ? "rgba(255,255,255,0.9)" : "var(--ink)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      lineHeight: 1.3,
                    }}>
                      {plan.weeks}
                    </p>
                    <p style={{
                      fontSize: "0.5rem",
                      color: featured ? "rgba(255,255,255,0.45)" : "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: 2,
                    }}>Duration</p>
                  </div>
                </div>

                {/* Features list */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.55rem", flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.45rem",
                      fontSize: "clamp(0.74rem, 1.6vw, 0.8rem)", fontWeight: 600,
                      color: featured ? "rgba(255,255,255,0.88)" : "var(--ink)",
                      lineHeight: 1.4,
                    }}>
                      <CheckCircle2 size={13} style={{ flexShrink: 0, color: featured ? "var(--yellow)" : "var(--accent)", marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, opacity: 0.92 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-shimmer"
                  style={{
                    marginTop: "1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    padding: "clamp(0.75rem, 1.5vw, 0.85rem)",
                    border: featured ? "2px solid var(--yellow)" : "2px solid var(--yellow-dark)",
                    fontWeight: 800,
                    fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    background: "var(--yellow)",
                    color: "var(--yellow-ink)",
                    borderRadius: 3,
                  }}
                >
                  Enroll Now
                </motion.a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
