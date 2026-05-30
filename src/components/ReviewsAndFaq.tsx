"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus, Quote } from "lucide-react";
import { Reveal } from "./Animations";

const EASE = [0.76, 0, 0.24, 1] as const;

const reviews = [
  { name: "Priya S.", role: "First-time driver", text: "The lessons were practical and calm. I passed my test on the very first attempt. Highly recommend!", stars: 5 },
  { name: "Arjun M.", role: "Refresher student", text: "Instructors explained each mistake clearly and helped me build real road confidence. Amazing experience.", stars: 5 },
  { name: "Lakshmi R.", role: "Advanced course", text: "Booking was easy, and the dual-control car felt safe even in heavy traffic. Best school in the city.", stars: 5 },
];

const faqs = [
  { q: "Do you offer pickup and drop for lessons?", a: "Yes. Pickup and drop can be arranged based on your area and lesson schedule." },
  { q: "Can I book only a refresher course?", a: "Absolutely. The refresher plan is designed for licensed drivers who want confidence before returning to traffic." },
  { q: "Are the vehicles dual-control?", a: "Yes. All training is conducted in modern dual-control vehicles for maximum safety and instructor support." },
  { q: "How do I get a learner's licence?", a: "We guide you through the entire RTO process — from form-filling to mock tests and the final driving test." },
];

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
      style={{
        border: "1.5px solid var(--border)",
        borderRadius: 5,
        overflow: "hidden",
        background: "#fff",
        transition: "border-color 0.2s",
        ...(open ? { borderColor: "rgba(204,0,51,0.25)" } : {}),
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(0.85rem, 2vw, 1rem) clamp(0.85rem, 2vw, 1.1rem)",
          background: open ? "rgba(204,0,51,0.03)" : "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "0.75rem",
          transition: "background 0.2s",
        }}
      >
        <span style={{
          fontWeight: 700,
          fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)",
          color: open ? "var(--accent)" : "var(--ink)",
          lineHeight: 1.45,
          transition: "color 0.2s",
        }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <Plus size={15} color={open ? "var(--accent)" : "var(--muted)"} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <p style={{
          padding: "0 clamp(0.85rem, 2vw, 1.1rem) clamp(0.85rem, 2vw, 1rem)",
          fontSize: "clamp(0.8rem, 1.7vw, 0.85rem)",
          lineHeight: 1.8,
          color: "var(--muted)",
        }}>
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function ReviewsAndFaq() {
  return (
    <section
      id="reviews"
      style={{
        marginTop: "var(--section-gap, 5rem)",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "clamp(1.5rem, 4vw, 2.5rem)",
      }}
      className="reviews-faq-grid"
    >
      {/* Testimonials */}
      <div>
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.4rem" }}>Testimonials</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}>
            Drivers Who Learned<br />with <span className="accent">Confidence.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "clamp(1.25rem, 3vw, 1.75rem)", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              style={{ position: "relative" }}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: "absolute",
                top: "0.85rem",
                right: "0.85rem",
                color: "rgba(204,0,51,0.08)",
              }}>
                <Quote size={28} />
              </div>

              <div style={{ display: "flex", gap: 2, marginBottom: "0.5rem" }}>
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} size={12} style={{ fill: "var(--yellow)", color: "var(--yellow)" }} />
                ))}
              </div>
              <p style={{
                fontSize: "clamp(0.8rem, 1.7vw, 0.85rem)",
                lineHeight: 1.8,
                color: "var(--muted)",
                marginBottom: "0.65rem",
              }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent) 0%, #ff4d6d 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.06em", color: "var(--ink)", textTransform: "uppercase" }}>
                    {r.name}
                  </p>
                  <p style={{ fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faq">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.4rem" }}>FAQs</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}>
            Quick <span className="accent">Answers.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "clamp(1.25rem, 3vw, 1.75rem)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} i={i} />
          ))}
        </div>

        {/* "More questions" prompt */}
        <div style={{
          marginTop: "1.5rem",
          padding: "1rem 1.1rem",
          background: "#fef9e7",
          border: "1.5px solid var(--yellow-dark)",
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--yellow-ink)", lineHeight: 1.4 }}>
            Still have questions?
          </p>
          <a
            href="tel:+917092063335"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              background: "var(--ink)",
              color: "var(--yellow)",
              padding: "0.45rem 1rem",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 3,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
