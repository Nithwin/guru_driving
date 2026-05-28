"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Training Plans", href: "#plans" },
  { label: "Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 60], ["0 0 0 rgba(0,0,0,0)", "0 2px 24px rgba(0,0,0,0.08)"]);
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <motion.header
      style={{ boxShadow: shadow }}
      className="site-header"
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, position: "relative", flexShrink: 0 }}>
            <Image src="/logo-icon.png" alt="Sri Guru Logo" fill sizes="36px" style={{ objectFit: "contain" }} />
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <p style={{ fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
              Sri Guru Driving School
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.01em" }}>
              Master the Road
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: "2.2rem", alignItems: "center" }}>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`nav-link${active === item.label ? " active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <motion.a
            href="tel:+919000000000"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              alignItems: "center",
              gap: "0.4rem",
              background: "var(--accent)",
              color: "#fff",
              padding: "0.55rem 1.15rem",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 3,
              border: "none",
            }}
            className="hidden sm:inline-flex"
          >
            <Phone size={13} />
            Call Now
          </motion.a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: "none", border: "1.5px solid var(--border-dark)", padding: "0.4rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{ overflow: "hidden", borderTop: open ? "1px solid var(--border)" : "none", background: "#fff" }}
        className="md:hidden"
      >
        <div style={{ padding: "0.75rem 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => { setActive(item.label); setOpen(false); }}
              style={{
                padding: "0.75rem 0",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                color: active === item.label ? "var(--accent)" : "var(--ink)",
                borderBottom: "1px solid var(--border)",
                display: "block",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+919000000000"
            style={{
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              background: "var(--accent)",
              color: "#fff",
              padding: "0.85rem",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 3,
            }}
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}