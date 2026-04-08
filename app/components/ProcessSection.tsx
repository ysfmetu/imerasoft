import { processSteps } from "@/app/data";

const stepIcons = [
  // Ear / Listen
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4 3 6 4 9"/><path d="M12 20h.01"/><path d="M9 16c.5 2 2 3 3 3s2.5-1 3-3"/></svg>,
  // Layout / Plan
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  // Code
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Rocket
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l10-10-3-3Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
];

export default function ProcessSection() {
  return (
    <section id="surec" className="section-padding" style={{ background: "var(--bg-dark)", borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(249,115,22,0.15)", color: "#FB923C", fontSize: "0.75rem", fontWeight: 700, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "20px", border: "1px solid rgba(249,115,22,0.25)" }}>
            Adım Adım
          </span>
          <h2 className="title-md" style={{ color: "white" }}>Çalışma Sürecimiz</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-on-dark)", lineHeight: 1.7, margin: "0 auto", maxWidth: "640px" }}>
            Şeffaf ve planlı bir işleyiş ile süreçteki sürprizleri ortadan kaldırıyoruz.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2px", position: "relative" }} className="process-grid">
          {processSteps.map((step, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "40px 32px",
                background: "var(--bg-dark-secondary)",
                borderRadius: index === 0 ? "16px 0 0 16px" : index === processSteps.length - 1 ? "0 16px 16px 0" : "0",
                border: "1px solid var(--border-dark)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "all 0.3s ease",
              }}
              className="process-step"
            >
              {/* Number Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "rgba(249,115,22,0.12)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--orange)",
                }}>
                  {stepIcons[index]}
                </div>
                <span style={{
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.05)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}>
                  {index + 1}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", color: "white", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-on-dark)", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (not on last item) */}
              {index < processSteps.length - 1 && (
                <div
                  className="step-arrow"
                  style={{
                    position: "absolute",
                    right: "-14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "26px",
                    height: "26px",
                    background: "var(--orange)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    boxShadow: "0 0 0 4px var(--bg-dark)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-step:hover {
          background: var(--bg-dark-card) !important;
          border-color: rgba(249,115,22,0.25) !important;
        }
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .process-grid > div {
            border-radius: 12px !important;
          }
          .step-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
