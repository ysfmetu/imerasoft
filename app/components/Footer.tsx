import { contactInfo } from "@/app/data";

const navLinks = [
  { href: "#", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#referanslar", label: "Referanslar" },
  { href: "#surec", label: "Çalışma Süreci" },
  { href: "#neden-biz", label: "Neden Biz?" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg-dark)", color: "var(--text-on-dark)" }}>

      {/* Main Footer Content */}
      <div className="container footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "64px", paddingTop: "96px", paddingBottom: "80px" }}>

        {/* Brand & Description */}
        <div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <div style={{ width: "44px", height: "44px", background: "var(--orange)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-orange)", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", letterSpacing: "-0.025em" }}>
              Imera<span style={{ color: "var(--orange)" }}>soft</span>
            </span>
          </a>
          <p style={{ color: "var(--text-on-dark)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "380px", marginBottom: "32px" }}>
            Web tasarım, SEO ve kurumsal sistemlere özel yazılım geliştirme alanında uzman dijital çözüm ortağınız.
          </p>

          {/* WhatsApp CTA in footer */}
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--green)",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(22,163,74,0.25)",
              transition: "all 0.2s ease",
            }}
            className="footer-whatsapp-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp&apos;tan Yazın
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ color: "white", fontWeight: 800, fontSize: "0.8125rem", marginBottom: "28px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Hızlı Erişim
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ color: "var(--text-on-dark)", fontSize: "0.9375rem", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s ease" }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: "white", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.8125rem", marginBottom: "28px" }}>
            İletişim
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <a href={contactInfo.phoneHref} style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--text-on-dark)", fontSize: "1rem", fontWeight: 600, textDecoration: "none" }} className="footer-link">
              <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              {contactInfo.phoneDisplay}
            </a>

            <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--text-on-dark)", fontSize: "1rem", fontWeight: 600, textDecoration: "none" }} className="footer-link">
              <div style={{ width: "36px", height: "36px", background: "rgba(22,163,74,0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              {contactInfo.phoneDisplay} · WhatsApp
            </a>

            <a href={contactInfo.emailHref} style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--text-on-dark)", fontSize: "1rem", fontWeight: 600, textDecoration: "none" }} className="footer-link">
              <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span style={{ wordBreak: "break-all" }}>
                {contactInfo.email}
              </span>
            </a>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* Bottom Bar */}
      <div className="container" style={{ padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <p style={{ color: "var(--text-on-dark-muted)", fontSize: "0.875rem", fontWeight: 500, margin: 0 }}>
          © {year} Imerasoft Web ve Yazılım Çözümleri. Tüm hakları saklıdır.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#" style={{ color: "var(--text-on-dark-muted)", fontSize: "0.875rem", fontWeight: 500 }} className="footer-link">
            Gizlilik Politikası
          </a>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--orange) !important;
        }
        .footer-whatsapp-btn:hover {
          background: var(--green-dark) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </footer>
  );
}
