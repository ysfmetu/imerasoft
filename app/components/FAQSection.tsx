"use client";
import { useState } from "react";
import { faqs } from "@/app/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="sss"
      className="section-padding"
      style={{ background: "white" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-badge">❓ Sık Sorulan Sorular</div>
          <h2 className="section-title">Aklınızdaki Sorular</h2>
          <p className="section-subtitle">
            Karar vermeden önce en çok sorulan soruları ve dürüst yanıtları
            burada bulabilirsiniz.
          </p>
        </div>

        {/* FAQ list */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: openIndex === index ? "var(--bg-warm)" : "white",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: openIndex === index ? "var(--orange)" : "var(--border)",
                overflow: "hidden",
                transition: "all 0.25s ease",
                boxShadow: openIndex === index ? "var(--shadow-md)" : "none",
              }}
            >
              <button
                id={`faq-${index}`}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: openIndex === index ? "var(--orange-dark)" : "var(--text-heading)",
                    lineHeight: 1.4,
                    transition: "color 0.2s ease",
                  }}
                >
                  {faq.question}
                </span>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: openIndex === index ? "var(--orange)" : "var(--bg-section)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={openIndex === index ? "white" : "var(--text-secondary)"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    padding: "0 24px 24px",
                    borderTop: "1px solid rgba(249,115,22,0.15)",
                  }}
                >
                  <p
                    style={{
                      paddingTop: "20px",
                      fontSize: "0.9375rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              marginBottom: "16px",
            }}
          >
            Yanıt bulamadığınız başka sorularınız mı var?
          </p>
          <a
            href="#iletisim"
            id="faq-cta"
            className="btn-secondary"
          >
            Bize sorabilirsiniz
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
