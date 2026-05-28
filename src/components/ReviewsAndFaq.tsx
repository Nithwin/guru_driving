"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { Reveal } from "./Animations";

const EASE = [0.76, 0, 0.24, 1] as const;

const reviews = [
  { name: "Priya S.", text: "The lessons were practical and calm. I passed my test on the very first attempt. Highly recommend!", stars: 5 },
  { name: "Arjun M.", text: "Instructors explained each mistake clearly and helped me build real road confidence. Amazing experience.", stars: 5 },
  { name: "Lakshmi R.", text: "Booking was easy, and the dual-control car felt safe even in heavy traffic. Best school in the city.", stars: 5 },
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
      style={{ border: "1.5px solid var(--border)", borderRadius: 4, overflow: "hidden", background: "#fff" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--ink)", lineHeight: 1.4 }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <Plus size={16} color="var(--accent)" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ padding: "0 1.1rem 1rem", fontSize: "0.84rem", lineHeight: 1.8, color: "var(--muted)" }}>{a}</p>
      </motion.div>
    </motion.div>
  );
}

export function ReviewsAndFaq() {
  return (
    <section id="reviews" style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "2rem" }} className="reviews-faq-grid">
      {/* Testimonials */}
      <div>
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.4rem" }}>Testimonials</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
            Drivers Who Learned<br />with <span className="accent">Confidence.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: "0.6rem" }}>
                {[...Array(r.stars)].map((_, j) => <Star key={j} size={13} style={{ fill: "var(--yellow)", color: "var(--yellow)" }} />)}
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "0.6rem" }}>"{r.text}"</p>
              <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.08em", color: "var(--ink)", textTransform: "uppercase" }}>— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faq">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.4rem" }}>FAQs</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
            Quick <span className="accent">Answers.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
