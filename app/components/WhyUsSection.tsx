import { whyUs, contactInfo } from "@/app/data";

export default function WhyUsSection() {
  return (
    <section id="neden-biz" className="section-padding" style={{ background: "var(--bg-white)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="badge-warm">Bizi Tanıyın</span>
          <h2 className="title-md">Neden Imerasoft ile Çalışmalısınız?</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "660px" }}>
            Biz sadece kod yazan bir şirket değil, iş hedeflerinizi anlayan ve teknik mükemmeliyeti organizasyon kültürünüze entegre eden bir teknoloji partneriyiz.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "64px", alignItems: "start" }} className="why-us-grid">

          {/* Left: Why Us Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {whyUs.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid transparent",
                  transition: "all 0.25s ease",
                  marginBottom: "8px",
                }}
                className="why-item"
              >
                {/* Number/Icon */}
                <div style={{
                  flexShrink: 0,
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--orange-light)",
                  border: "1px solid var(--border-warm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "10px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA Card */}
          <div>
            <div
              style={{
                background: "var(--bg-dark)",
                borderRadius: "20px",
                padding: "48px 40px",
                position: "sticky",
                top: "120px",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 48px -12px rgba(15,23,42,0.35)",
              }}
            >
              {/* Orange top accent */}
              <div style={{ width: "40px", height: "4px", background: "var(--orange)", borderRadius: "2px", marginBottom: "32px" }} />

              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "white", marginBottom: "16px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                Birlikte Yönetelim
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-on-dark)", lineHeight: 1.75, marginBottom: "36px" }}>
                Projenizi detaylandırmak ve bütçe planlaması yapmak için çekinmeden bizimle iletişime geçin. Tamamen şeffaf ve bağlayıcı olmayan ilk değerlendirmemizi paylaşalım.
              </p>

              {/* Contact Info */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 24px", marginBottom: "20px" }}>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-on-dark-muted)", fontWeight: 700, marginBottom: "8px" }}>
                  Doğrudan Arayın
                </p>
                <a href={contactInfo.phoneHref} style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "white", textDecoration: "none", letterSpacing: "-0.02em" }}>
                  {contactInfo.phoneDisplay}
                </a>
              </div>

              <a
                href="#iletisim"
                className="btn btn-primary"
                style={{ width: "100%", padding: "16px", fontSize: "1rem", justifyContent: "center", marginBottom: "12px", boxShadow: "var(--shadow-orange)" }}
              >
                Proje Anlat
              </a>

              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
                style={{ width: "100%", padding: "16px", fontSize: "1rem", justifyContent: "center", display: "flex", gap: "8px" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp&apos;tan Yazın
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .why-item:hover {
          background: var(--bg-gray) !important;
          border-color: var(--border-light) !important;
        }
        @media (max-width: 900px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
