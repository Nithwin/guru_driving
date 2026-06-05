"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Plus } from "lucide-react";
import { Reveal } from "./Animations";

const EASE = [0.16, 1, 0.3, 1] as const;

const REVIEWS = [
  { name: "Priya S.", role: "First-time driver", text: "The lessons were practical and calm. I passed my test on the very first attempt. Highly recommend Vignesh!", stars: 5 },
  { name: "Arjun M.", role: "Refresher student", text: "Instructors explained each mistake clearly and helped me build real road confidence. Amazing experience.", stars: 5 },
  { name: "Lakshmi R.", role: "Advanced course", text: "Booking was easy, the dual-control car felt safe even in heavy traffic. Best school near Mettur.", stars: 5 },
];

const FAQS = [
  { q: "Do you offer pickup and drop for lessons?", a: "Yes! Free pickup & drop is available across Mettur, Kolathur, RS, Mecheri, and surrounding areas." },
  { q: "Can I book only a refresher course?", a: "Absolutely. The refresher plan is designed for licensed drivers who want confidence before returning to traffic." },
  { q: "Are the vehicles dual-control?", a: "Yes. All training is conducted in modern dual-control vehicles for maximum safety and instructor support." },
  { q: "How do I get a learner's licence?", a: "We guide you through the entire RTO process — from form-filling to mock tests and the final driving test." },
  { q: "Do you offer weekend classes?", a: "Yes! Weekend batches are available for those who cannot attend on weekdays. Contact us to schedule." },
];

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}
      style={{
        border: `1px solid ${open ? "rgba(0,85,233,0.3)" : "var(--border)"}`,
        borderRadius: 12,
        overflow: "hidden",
        background: open ? "rgba(0,85,233,0.05)" : "var(--surface)",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(0.9rem, 2vw, 1.1rem) clamp(0.9rem, 2vw, 1.25rem)",
          background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: "0.75rem",
        }}
      >
        <span style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600, fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)",
          color: open ? "#fff" : "var(--text-muted)",
          lineHeight: 1.45, transition: "color 0.2s",
        }}>
          {q}
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <Plus size={15} color={open ? "var(--accent)" : "rgba(255,255,255,0.3)"} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <p style={{
          padding: "0 clamp(0.9rem, 2vw, 1.25rem) clamp(0.9rem, 2vw, 1.1rem)",
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.8rem, 1.7vw, 0.87rem)",
          lineHeight: 1.8, color: "var(--text-muted)",
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
        padding: "var(--section-py) 0",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "clamp(2rem, 5vw, 4rem)",
      }}
      className="reviews-faq-outer"
    >
      {/* Testimonials */}
      <div>
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Testimonials</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            Drivers Who Learned<br />with <span className="gradient-text-blue">Confidence.</span>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
              style={{ position: "relative" }}
            >
              <div style={{ position: "absolute", top: "1rem", right: "1rem", color: "rgba(0,85,233,0.12)" }}>
                <Quote size={28} />
              </div>
              <div style={{ display: "flex", gap: 2, marginBottom: "0.5rem" }}>
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} size={12} style={{ fill: "var(--yellow)", color: "var(--yellow)" }} />
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.82rem, 1.7vw, 0.88rem)", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent), #4d8eff)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: "0.72rem", fontWeight: 800, flexShrink: 0,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#fff", textTransform: "uppercase" }}>{r.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", color: "var(--text-dim)" }}>{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faq">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>FAQs</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            Quick <span className="gradient-text-blue">Answers.</span>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {FAQS.map((item, i) => <FaqItem key={item.q} q={item.q} a={item.a} i={i} />)}
        </div>

        {/* CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            padding: "1.1rem 1.25rem",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "0.75rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)" }}>
            Still have questions?
          </p>
          <a
            href="tel:+917092063335"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.3rem",
              background: "var(--accent)", color: "#fff",
              padding: "0.48rem 1.1rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              borderRadius: 8, flexShrink: 0,
            }}
          >
            Call Us
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-faq-outer { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
