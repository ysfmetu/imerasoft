import { services } from "@/app/data";

const serviceIcons = [
  // Globe / Web Design
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  // Search / SEO
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  // Code / Software
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Smartphone / Mobile
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  // Layout / Corporate Systems
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  // Tool / Maintenance
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="section-padding" style={{ background: "var(--bg-gray)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="badge-warm">Hizmetlerimiz</span>
          <h2 className="title-md">Dijitalde büyümek isteyen işletmeler için doğru çözümler</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "760px" }}>
            Ana odağımız web tasarım ve SEO hizmetleri olmakla birlikte, ihtiyaç duyan işletmeler için özel yazılım, mobil uygulama ve kurumsal sistem çözümleri de sunuyoruz.
          </p>
        </div>

        {/* First Row: Primary Services — Web & SEO */}
        <div className="services-grid-primary" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "24px" }}>
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "40px 36px",
                background: "var(--bg-white)",
                border: "1.5px solid var(--border-light)",
                borderRadius: "16px",
                boxShadow: "var(--shadow-md)",
                borderTop: "4px solid var(--orange)",
                transition: "all 0.25s ease",
              }}
              className="service-card-primary"
            >
              {/* Primary label */}
              <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: "var(--orange-light)",
                  border: "1px solid var(--border-warm)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--orange-dark)",
                }}>
                  {serviceIcons[index]}
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--orange-dark)", textTransform: "uppercase", letterSpacing: "0.07em", background: "var(--orange-light)", padding: "4px 10px", borderRadius: "6px" }}>
                  Ana Hizmet
                </span>
              </div>
              <h3 style={{ fontSize: "1.375rem", color: "var(--text-main)", fontWeight: 800, marginBottom: "14px", letterSpacing: "-0.025em" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, flexGrow: 1 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: Secondary Services */}
        <div className="services-grid-secondary" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {services.slice(2).map((service, index) => (
            <div
              key={index + 2}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "28px",
                background: "var(--bg-white)",
                border: "1.5px solid var(--border-light)",
                borderRadius: "14px",
                transition: "all 0.25s ease",
              }}
              className="service-card-secondary"
            >
              <div style={{
                width: "44px",
                height: "44px",
                background: "var(--bg-gray)",
                border: "1px solid var(--border-light)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}>
                {serviceIcons[index + 2]}
              </div>
              <h3 style={{ fontSize: "1.0625rem", color: "var(--text-main)", fontWeight: 800, marginBottom: "10px", letterSpacing: "-0.015em", lineHeight: 1.3 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65, flexGrow: 1 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .service-card-primary:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-float) !important;
          border-color: var(--orange) !important;
        }
        .service-card-secondary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-light) !important;
          background: var(--bg-gray) !important;
        }
        @media (max-width: 600px) {
          .services-grid-primary, .services-grid-secondary {
            grid-template-columns: 1fr !important;
          }
          .service-card-primary {
            padding: 28px 24px !important;
          }
          .service-card-secondary {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
