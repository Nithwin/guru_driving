import { ArrowRight, BadgeCheck, CarFront, CheckCircle2, Clock3, Phone, ShieldCheck, Star } from "lucide-react";

const strengths = [
  {
    icon: ShieldCheck,
    title: "Advanced Safety Training",
    description:
      "Beyond the basics. We teach defensive maneuvers, hazard prevention, and specialty protocols used by professional chauffeurs.",
    highlight: true,
  },
  {
    icon: Clock3,
    title: "Flexible Slots",
    description: "Morning, late-night, or weekend lessons tailored to your busy lifestyle.",
    tone: "yellow",
  },
  {
    icon: CarFront,
    title: "Top Fleet",
    description: "Learn more care current vehicles.",
    tone: "red",
  },
  {
    icon: BadgeCheck,
    title: "Local Pros",
    description: "RTO local procs",
    tone: "light",
  },
];

const stats = [
  { value: "5000+", label: "Students Passed" },
  { value: "15+", label: "Expert Trainers" },
  { value: "24/7", label: "Online Support" },
  { value: "100%", label: "Pass Guarantee" },
];

const plans = [
  {
    badge: "Starter",
    badgeTone: "dark",
    name: "Beginner Prep",
    price: "₹12,000",
    features: ["15 Core Lessons", "Simulator Basics", "Theory Materials"],
    cta: "Select Plan",
    tone: "yellow",
  },
  {
    badge: "Most Popular",
    badgeTone: "red",
    name: "Pro Mastery",
    price: "₹18,500",
    features: ["25 Advanced Lessons", "Defensive Maneuvers", "Night Drive Special", "Unlimited Mock Tests"],
    cta: "Select Plan",
    tone: "featured",
  },
  {
    badge: "Crash Course",
    badgeTone: "dark",
    name: "Refresher",
    price: "₹7,000",
    features: ["5 Intensive Sessions", "Confidence Building", "License Prep"],
    cta: "Select Plan",
    tone: "light",
  },
];

const faqs = [
  {
    question: "Do you offer pickup and drop for lessons?",
    answer: "Yes. Pickup and drop can be arranged based on your area and the lesson schedule.",
  },
  {
    question: "Can I book only a refresher course?",
    answer: "Yes. The refresher plan is designed for licensed drivers who want confidence before returning to traffic.",
  },
  {
    question: "Are the vehicles dual-control?",
    answer: "Yes. Training is conducted in modern dual-control vehicles for better safety and instructor support.",
  },
];

export function MainContent() {
  return (
    <>
      {/* ── Why Choose Sri Guru ── */}
      <section style={{ marginTop: "3rem" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--ink)",
              lineHeight: 1.08,
            }}
          >
            Why Choose <br />
            <span style={{ color: "var(--accent)" }}>Sri Guru?</span>
          </h2>
          <div style={{ width: 56, height: 3, background: "var(--accent)", marginTop: "0.6rem" }} />
        </div>

        {/* 2x2 grid matching original */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "2px solid var(--ink)",
          }}
          className="strengths-grid"
        >
          {/* Card 1 – Large, white, Advanced Safety */}
          <article
            style={{
              gridRow: "span 2",
              background: "#ffffff",
              borderRight: "2px solid var(--ink)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 320,
            }}
          >
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "2px solid var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  background: "#fff",
                  color: "var(--accent)",
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}
              >
                Advanced Safety
                <br />
                Training
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--muted)" }}>
                Beyond the basics. We teach defensive maneuvers, hazard prevention, and specialty protocols used by
                professional chauffeurs.
              </p>
            </div>
            <a
              href="#plans"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--ink)",
                marginTop: "1.5rem",
                borderTop: "2px solid var(--ink)",
                paddingTop: "0.75rem",
              }}
            >
              Learn More <ArrowRight size={14} />
            </a>
          </article>

          {/* Card 2 – Yellow, Flexible Slots */}
          <article
            style={{
              background: "var(--secondary)",
              borderBottom: "2px solid var(--ink)",
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: "2px solid var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              <Clock3 size={18} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "0.3rem",
                }}
              >
                Flexible Slots
              </h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--secondary-ink)" }}>
                Morning, late-night, or weekend lessons tailored to your busy lifestyle.
              </p>
            </div>
          </article>

          {/* Card 3 – Red, Top Fleet */}
          <article
            style={{
              background: "var(--accent)",
              borderTop: "0",
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
            className="strength-card-bottom"
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: "2px solid rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              <CarFront size={18} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "0.3rem",
                }}
              >
                Top Fleet
              </h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
                Learn with our well-maintained dual-control vehicles.
              </p>
            </div>
          </article>

          {/* Card 4 – Light, Local Pros */}
          <article
            style={{
              background: "#f0f4ff",
              borderTop: "0",
              borderLeft: "2px solid var(--ink)",
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: "2px solid var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              <BadgeCheck size={18} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "0.3rem",
                }}
              >
                Local Pros
              </h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--muted)" }}>
                RTO-aware instructors who know the roads and test routes.
              </p>
            </div>
          </article>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .strengths-grid {
              grid-template-columns: 1fr !important;
            }
            .strengths-grid article:first-child {
              grid-row: span 1 !important;
              border-right: none !important;
              border-bottom: 2px solid var(--ink) !important;
            }
            .strength-card-bottom {
              border-top: 2px solid var(--ink) !important;
            }
          }
        `}</style>
      </section>

      {/* ── Stats Bar ── */}
      <section
        style={{
          marginTop: "3rem",
          background: "var(--ink)",
          padding: "2.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
          className="stats-grid"
        >
          {stats.map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "var(--secondary)",
                  lineHeight: 1,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: "0.4rem",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid {
              grid-template-columns: repeat(2,1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ── Pricing Section ── */}
      <section id="plans" style={{ marginTop: "3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "0.5rem",
            }}
          >
            Training Plans
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--ink)",
              lineHeight: 1.05,
            }}
          >
            Precision <span style={{ color: "var(--accent)" }}>Programs</span>
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Choose a plan that matches your current skill level. We don&apos;t just teach you to drive; we teach you to
            own the road.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
          className="plans-grid"
        >
          {plans.map((plan) => {
            const isFeatured = plan.tone === "featured";
            return (
              <article
                key={plan.name}
                style={{
                  border: "2px solid var(--ink)",
                  background: isFeatured ? "var(--accent)" : plan.tone === "yellow" ? "var(--secondary)" : "#f9f9f9",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  position: "relative",
                  transform: isFeatured ? "translateY(-6px)" : "none",
                  boxShadow: isFeatured ? "0 8px 24px rgba(204,0,51,0.22)" : "none",
                }}
              >
                {/* Badge */}
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.6rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: isFeatured ? "#ffffff" : "var(--ink)",
                    color: isFeatured ? "var(--accent)" : "#ffffff",
                    alignSelf: "flex-start",
                    marginBottom: "0.75rem",
                  }}
                >
                  {plan.badge}
                </span>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: isFeatured ? "#ffffff" : "var(--ink)",
                    lineHeight: 1.1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.name}
                </h3>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: isFeatured ? "#ffffff" : "var(--ink)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {plan.price}
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: isFeatured ? "rgba(255,255,255,0.92)" : "var(--ink)",
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        style={{ flexShrink: 0, color: isFeatured ? "#fff" : "var(--accent)" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  style={{
                    marginTop: "1.5rem",
                    display: "block",
                    textAlign: "center",
                    padding: "0.8rem",
                    border: "2px solid var(--ink)",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    background: isFeatured ? "var(--secondary)" : "var(--ink)",
                    color: isFeatured ? "var(--ink)" : "#ffffff",
                    transition: "opacity 0.15s",
                  }}
                >
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .plans-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── Testimonials + FAQ ── */}
      <section id="reviews" style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "1.5rem" }} className="reviews-grid">
        {/* Testimonials */}
        <div
          style={{
            border: "2px solid var(--ink)",
            background: "#ffffff",
            padding: "2rem",
          }}
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.4rem" }}>
            Testimonials
          </p>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, textTransform: "uppercase", color: "var(--ink)", marginBottom: "1.25rem" }}>
            Drivers who learned with confidence.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "The lessons were practical and calm. I passed my test on the first attempt.",
              "The instructors explained each mistake clearly and helped me build real road confidence.",
              "Booking was easy, and the training car felt safe even during heavy traffic hours.",
            ].map((review) => (
              <div
                key={review}
                style={{
                  border: "1px solid #e5e7eb",
                  background: "#f9fafb",
                  padding: "1rem 1.1rem",
                }}
              >
                <div style={{ display: "flex", gap: "2px", marginBottom: "0.5rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} style={{ fill: "var(--secondary)", color: "var(--secondary)" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--muted)" }}>{review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <aside
          id="faq"
          style={{
            border: "2px solid var(--ink)",
            background: "#fff5f7",
            padding: "2rem",
          }}
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.4rem" }}>
            FAQs
          </p>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, textTransform: "uppercase", color: "var(--ink)", marginBottom: "1.25rem" }}>
            Quick answers.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((item) => (
              <details
                key={item.question}
                style={{ border: "2px solid var(--ink)", background: "#ffffff", padding: "1rem" }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    listStyle: "none",
                  }}
                >
                  {item.question}
                </summary>
                <p style={{ marginTop: "0.6rem", fontSize: "0.82rem", lineHeight: 1.75, color: "var(--muted)" }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </aside>

        <style>{`
          @media (max-width: 768px) {
            .reviews-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── CTA Section ── */}
      <section
        id="contact"
        style={{
          marginTop: "3.5rem",
          background: "var(--secondary)",
          border: "2px solid var(--ink)",
          padding: "2.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="cta-grid"
      >
        {/* Background watermark */}
        <div
          style={{
            position: "absolute",
            right: -30,
            top: -20,
            opacity: 0.06,
            transform: "rotate(12deg)",
            pointerEvents: "none",
          }}
        >
          <CarFront size={200} />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--secondary-ink)",
              lineHeight: 1.05,
              maxWidth: 400,
            }}
          >
            Ready to Take the{" "}
            <span style={{ color: "var(--accent)" }}>Wheel?</span>
          </h2>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--secondary-ink)", opacity: 0.8, marginTop: "0.5rem", maxWidth: 420 }}>
            Join the thousands of confident drivers who started their journey with Sri Guru. High-energy training for
            high-performance people.
          </p>
        </div>

        <form
          style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", minWidth: 260 }}
          className="cta-form"
        >
          <label className="sr-only" htmlFor="phone-cta">
            Phone number
          </label>
          <input
            id="phone-cta"
            type="tel"
            placeholder="Phone Number"
            style={{
              border: "2px solid var(--ink)",
              background: "#ffffff",
              padding: "0.8rem 1rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              outline: "none",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              background: "var(--accent)",
              color: "#ffffff",
              border: "2px solid var(--ink)",
              padding: "0.8rem 1.2rem",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <Phone size={14} />
            Call Me Back
          </button>
        </form>

        <style>{`
          @media (max-width: 640px) {
            .cta-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
