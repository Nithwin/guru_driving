"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Animations";

const plans = [
  {
    badge: "Starter",
    name: "Beginner Prep",
    price: "₹12,000",
    features: ["15 Core Lessons", "Simulator Basics", "Theory Materials"],
    tone: "yellow" as const,
  },
  {
    badge: "Most Popular",
    name: "Pro Mastery",
    price: "₹18,500",
    features: ["25 Advanced Lessons", "Defensive Maneuvers", "Night Drive Special", "Unlimited Mock Tests"],
    tone: "featured" as const,
  },
  {
    badge: "Crash Course",
    name: "Refresher",
    price: "₹7,000",
    features: ["5 Intensive Sessions", "Confidence Building", "License Prep"],
    tone: "neutral" as const,
  },
];

export function PricingPlans() {
  return (
    <section id="plans" style={{ marginTop: "5rem" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Training Plans</p>
        <h2 className="section-title">
          Precision <span className="accent">Programs</span>
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginTop: "0.75rem", maxWidth: 500, margin: "0.75rem auto 0" }}>
          Choose a plan that matches your current skill level. We don't just teach you to drive — we teach you to own the road.
        </p>
      </Reveal>

      <div className="plans-grid">
        {plans.map((plan) => {
          const featured = plan.tone === "featured";
          const yellow = plan.tone === "yellow";
          return (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={featured
                ? { translateY: -18, boxShadow: "0 28px 70px rgba(204,0,51,0.4)" }
                : { translateY: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }
              }
              className={`plan-card${featured ? " featured" : ""}`}
              style={{ padding: 0 }}
            >
              <div style={{ padding: "1.75rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Badge */}
                <span style={{
                  display: "inline-block",
                  padding: "0.22rem 0.6rem",
                  fontSize: "0.6rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: featured ? "#fff" : "var(--ink)",
                  color: featured ? "var(--accent)" : "#fff",
                  borderRadius: 2,
                  alignSelf: "flex-start",
                  marginBottom: "1rem",
                }}>
                  {plan.badge}
                </span>

                <h3 style={{
                  fontSize: "1.35rem", fontWeight: 900, textTransform: "uppercase",
                  color: featured ? "#fff" : "var(--ink)", lineHeight: 1.1, marginBottom: "0.5rem",
                }}>
                  {plan.name}
                </h3>
                <div style={{
                  fontSize: "2.2rem", fontWeight: 900,
                  color: featured ? "#fff" : yellow ? "var(--ink)" : "var(--ink)",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}>
                  {plan.price}
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      fontSize: "0.8rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.05em",
                      color: featured ? "rgba(255,255,255,0.9)" : "var(--ink)",
                    }}>
                      <CheckCircle2 size={15} style={{ flexShrink: 0, color: featured ? "#fff" : "var(--accent)" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    marginTop: "1.75rem",
                    display: "block",
                    textAlign: "center",
                    padding: "0.85rem",
                    border: featured ? "2px solid var(--yellow)" : "2px solid var(--ink)",
                    fontWeight: 800, fontSize: "0.78rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                    background: featured ? "var(--yellow)" : "var(--ink)",
                    color: featured ? "var(--ink)" : "#fff",
                    borderRadius: 3,
                    transition: "opacity 0.15s",
                  }}
                >
                  Select Plan
                </motion.a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
