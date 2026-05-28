"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ScaleIn } from "./Animations";

function CountUp({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [val, setVal] = useState(0);
  const isNum = typeof target === "number";

  useEffect(() => {
    if (!inView || !isNum) return;
    let start = 0;
    const end = target as number;
    const dur = 1600;
    const step = 16;
    const inc = (end / dur) * step;
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { start = end; clearInterval(timer); }
      setVal(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, isNum]);

  return (
    <span ref={ref} style={{ display: "inline-block", minWidth: "3ch" }}>
      {isNum ? val : target}{suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Students Passed" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: "24/7", suffix: "", label: "Online Support" },
  { value: 100, suffix: "%", label: "Pass Guarantee" },
];

export function StatsSection() {
  return (
    <section className="stats-section" style={{ marginTop: "4rem" }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <ScaleIn key={s.label} delay={i * 0.1}>
              <div className="stat-item">
                <span className="stat-value">
                  <CountUp target={s.value as number} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
