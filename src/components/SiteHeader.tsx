"use client";

import { useState } from "react";
import { CarFront, Menu, Phone, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home", active: true },
  { label: "Training Plans", href: "#plans" },
  { label: "Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <div
            style={{
              width: 38,
              height: 38,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          >
            <CarFront size={20} color="#fff" />
          </div>
          <div>
            <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.2 }}>
              Sri Guru Driving School
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              Master the Road
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                color: item.active ? "var(--accent)" : "var(--ink)",
                borderBottom: item.active ? "2px solid var(--accent)" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color 0.15s",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="tel:+919000000000"
            className="hidden sm:inline-flex"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "var(--accent)",
              color: "#ffffff",
              border: "none",
              borderRadius: 4,
              padding: "0.55rem 1.1rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Phone size={14} />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            style={{
              background: "none",
              border: "2px solid var(--ink)",
              padding: "0.4rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "1rem 1.25rem",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  color: item.active ? "var(--accent)" : "var(--ink)",
                  border: "1px solid #e5e7eb",
                  background: item.active ? "#fff5f7" : "#ffffff",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+919000000000"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                marginTop: "0.5rem",
                background: "var(--accent)",
                color: "#ffffff",
                padding: "0.75rem",
                fontWeight: 800,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}