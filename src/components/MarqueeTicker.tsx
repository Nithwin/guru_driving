"use client";

const ITEMS = [
  "100% First-Time Pass Rate",
  "5000+ Graduates & Counting",
  "15+ Expert Certified Trainers",
  "Dual-Control Safety Vehicles",
  "RTO-Focused Curriculum",
  "24/7 Booking Available",
  "Flexible Morning & Night Slots",
  "Professional Highway Training",
];

export function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
