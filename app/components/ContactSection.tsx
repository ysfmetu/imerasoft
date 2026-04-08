import { contactInfo } from "@/app/data";

export default function ContactSection() {
  return (
    <section id="iletisim" className="section-padding" style={{ background: "var(--bg-gray)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="badge-warm">İletişim Kurun</span>
          <h2 className="title-md">Nasıl Yardımcı Olabiliriz?</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
            Aklınızdaki projeyi konuşmak, var olan yazılımınızı güçlendirmek veya doğrudan ekibimizle tanışmak için iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "1100px", margin: "0 auto" }} className="contact-grid">

          {/* WhatsApp — Hero Card */}
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              alignItems: "center",
              gap: "40px",
              padding: "48px 56px",
              background: "var(--green)",
              borderRadius: "20px",
              textDecoration: "none",
              boxShadow: "var(--shadow-green)",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",
            }}
            className="whatsapp-hero-card"
          >
            {/* Background decoration */}
            <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "240px", height: "240px", background: "rgba(255,255,255,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: "40px", bottom: "-60px", width: "180px", height: "180px", background: "rgba(255,255,255,0.04)", borderRadius: "50%", pointerEvents: "none" }} />

            {/* Icon */}
            <div style={{ flexShrink: 0, width: "88px", height: "88px", background: "rgba(255,255,255,0.15)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>

            {/* Text */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "rgba(255,255,255,0.75)", marginBottom: "8px" }}>
                WhatsApp Desteği
              </p>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: "8px", lineHeight: 1.1 }}>
                Hemen Mesaj Gönderin
              </h3>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: "520px" }}>
                Hızlı yanıt almak için projelerinizi veya sorularınızı doğrudan WhatsApp üzerinden iletebilirsiniz.
              </p>
            </div>

            {/* Arrow */}
            <div style={{ marginLeft: "auto", flexShrink: 0, width: "56px", height: "56px", background: "rgba(255,255,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={contactInfo.phoneHref}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              padding: "40px",
              background: "var(--bg-white)",
              borderRadius: "20px",
              border: "1.5px solid var(--border-light)",
              textDecoration: "none",
              boxShadow: "var(--shadow-md)",
              transition: "all 0.25s ease",
            }}
            className="contact-info-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--orange-light)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-warm)", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-light)", marginBottom: "4px" }}>
                  Telefon Hattımız
                </p>
                <p style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                  {contactInfo.phoneDisplay}
                </p>
              </div>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65, flexGrow: 1, marginBottom: "28px" }}>
              Projenizi ve ihtiyaçlarınızı kısaca anlattığınızda kısa sürede geri dönüş sağlıyoruz.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--orange-dark)", fontWeight: 700, fontSize: "0.9375rem" }}>
              Hemen Ara
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={contactInfo.emailHref}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              padding: "40px",
              background: "var(--bg-white)",
              borderRadius: "20px",
              border: "1.5px solid var(--border-light)",
              textDecoration: "none",
              boxShadow: "var(--shadow-md)",
              transition: "all 0.25s ease",
            }}
            className="contact-info-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
              <div style={{ width: "64px", height: "64px", background: "#F0F4FF", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #D6E0FF", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F6EF7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-light)", marginBottom: "4px" }}>
                  E-posta Adresimiz
                </p>
                <p style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.015em", lineHeight: 1.2, wordBreak: "break-all" }}>
                  {contactInfo.email}
                </p>
              </div>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65, flexGrow: 1, marginBottom: "28px" }}>
              Sorularınızı, proje özetlerinizi veya dosyalarınızı e-posta ile de iletebilirsiniz.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#4F6EF7", fontWeight: 700, fontSize: "0.9375rem" }}>
              E-posta Gönder
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </a>

        </div>
      </div>

      <style>{`
        .whatsapp-hero-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -8px rgba(22, 163, 74, 0.4) !important;
        }
        .contact-info-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-float) !important;
          border-color: var(--orange) !important;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > a:first-child {
            grid-column: 1 !important;
            flex-direction: column !important;
            padding: 32px 24px !important;
            gap: 20px !important;
          }
          .contact-grid > a:first-child > div:last-child {
            display: none !important;
          }
          .whatsapp-hero-card h3 {
            font-size: 1.5rem !important;
          }
          .contact-info-card {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
