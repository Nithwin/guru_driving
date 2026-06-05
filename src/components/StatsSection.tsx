"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, CheckSquare } from "lucide-react";
import { Reveal } from "./Animations";

function CountUp({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [val, setVal] = useState(0);
  const isNum = typeof target === "number";

  useEffect(() => {
    if (!inView || !isNum) return;
    const end = target as number;
    const dur = 1800;
    const step = 16;
    const inc = (end / dur) * step;
    let start = 0;
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { start = end; clearInterval(timer); }
      setVal(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, isNum]);

  return <span ref={ref}>{isNum ? val : target}{suffix}</span>;
}

const STATS = [
  { value: 5000, suffix: "+", label: "Students Passed", icon: Users },
  { value: 12, suffix: "+", label: "Years Experience", icon: Award },
  { value: "24/7", suffix: "", label: "Support Available", icon: Clock },
  { value: 100, suffix: "%", label: "Pass Guarantee", icon: CheckSquare },
];

export function StatsSection() {
  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon size={16} style={{ color: "var(--text-dim)", marginBottom: "0.6rem" }} />
                <span className="stat-value">
                  <CountUp target={s.value as number} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
