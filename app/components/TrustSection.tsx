import { trustCards } from "@/app/data";

const cardIcons = [
  // Building / Custom
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
  // Mobile
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  // Chat
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  // Shield
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

export default function TrustSection() {
  return (
    <section id="guven" className="section-padding" style={{ background: "var(--bg-white)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <h2 className="title-md">İhtiyacınıza uygun, sade ve etkili çözümler</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "640px" }}>
            Her projede tek hedefimiz; işletmeniz için gerçekten işe yarayan, yönetilebilir ve uzun ömürlü bir dijital yapı kurmaktır.
          </p>
        </div>

        {/* Grid */}
        <div className="trust-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {trustCards.map((card, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "36px 32px",
                background: "var(--bg-white)",
                border: "1.5px solid var(--border-light)",
                borderRadius: "16px",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
              }}
              className="trust-card"
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--orange), transparent)", borderRadius: "16px 16px 0 0" }} />

              {/* Icon */}
              <div style={{
                width: "52px",
                height: "52px",
                background: "var(--orange-light)",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--orange-dark)",
                marginBottom: "24px",
                border: "1px solid var(--border-warm)",
              }}>
                {cardIcons[index]}
              </div>

              <h3 style={{ fontSize: "1.125rem", color: "var(--text-main)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .trust-card:hover {
          border-color: var(--orange) !important;
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-3px);
        }
        @media (max-width: 600px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
