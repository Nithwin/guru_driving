"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "100% First-Time Pass Rate",
  "5000+ Graduates",
  "Doorstep Pickup Available",
  "Dual-Control Safety Vehicles",
  "RTO-Focused Curriculum",
  "Weekend Classes",
  "Mettur · Kolathur · RS · Mecheri",
];

export function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      background: "var(--yellow)",
      borderTop: "1px solid rgba(0,0,0,0.08)",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      padding: "0.85rem 0",
    }}>
      <motion.div
        style={{ display: "inline-flex", gap: "3rem" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--yellow-ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              flexShrink: 0,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(0,0,0,0.25)", flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
