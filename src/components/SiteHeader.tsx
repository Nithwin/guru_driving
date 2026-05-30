"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Training Plans", href: "#plans" },
  { label: "Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 60], ["0 0 0 rgba(0,0,0,0)", "0 4px 28px rgba(0,0,0,0.07)"]);

  // Close drawer on escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <motion.header
        style={{ boxShadow: shadow }}
        className="site-header"
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "clamp(60px, 8vw, 72px)",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setActive("Home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div style={{ width: 34, height: 34, position: "relative", flexShrink: 0 }}>
              <Image src="/logo-icon.png" alt="Sri Guru Logo" fill sizes="34px" style={{ objectFit: "contain" }} />
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <p style={{
                fontSize: "clamp(0.5rem, 1.2vw, 0.58rem)",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}>
                Master the Road
              </p>
              <p style={{
                fontSize: "clamp(0.82rem, 2vw, 1rem)",
                fontWeight: 900,
                color: "var(--accent)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}>
                Sri Guru Driving School
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ gap: "clamp(1.25rem, 2.5vw, 2.2rem)", alignItems: "center", flex: 1, justifyContent: "center" }}
          >
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

          {/* CTA Row */}
          <div style={{ display: "flex", gap: "0.65rem", alignItems: "center", flexShrink: 0 }}>
            {/* Call button - hidden on very small screens */}
            <motion.a
              href="tel:+917092063335"
              whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(245,200,0,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex btn-shimmer"
              style={{
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--yellow)",
                color: "var(--yellow-ink)",
                padding: "0.5rem 1.1rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "2px solid var(--yellow-dark)",
              }}
            >
              <Phone size={12} strokeWidth={2.5} />
              Call Now
            </motion.a>

            {/* Enroll CTA — desktop only */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "0.5rem 1.1rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                border: "none",
              }}
            >
              Enroll Now
            </motion.a>

            {/* Hamburger */}
            <motion.button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
              style={{
                background: open ? "var(--ink)" : "none",
                border: `1.5px solid ${open ? "var(--ink)" : "var(--border-dark)"}`,
                padding: "0.45rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                color: open ? "#fff" : "var(--ink)",
                transition: "all 0.2s",
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
                background: "#fff",
                position: "relative",
                zIndex: 99,
              }}
              className="md:hidden"
            >
              <div style={{ padding: "0.5rem var(--container-px) 1.25rem", display: "flex", flexDirection: "column" }}>
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    onClick={() => { setActive(item.label); setOpen(false); }}
                    style={{
                      padding: "0.85rem 0",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      color: active === item.label ? "var(--accent)" : "var(--ink)",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                    {active === item.label && (
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
                    )}
                  </motion.a>
                ))}

                {/* Mobile CTA buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem", marginTop: "1rem" }}>
                  <a
                    href="tel:+917092063335"
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      background: "var(--yellow)",
                      color: "var(--yellow-ink)",
                      padding: "0.85rem",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderRadius: 3,
                      border: "1.5px solid var(--yellow-dark)",
                    }}
                  >
                    <Phone size={13} />
                    Call Now
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      background: "var(--accent)",
                      color: "#fff",
                      padding: "0.85rem",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderRadius: 3,
                      border: "none",
                    }}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}