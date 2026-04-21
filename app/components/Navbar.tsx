"use client";
import { useState } from "react";
import { contactInfo } from "@/app/data";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#referanslar", label: "Referanslar" },
  { href: "#surec", label: "Süreç" },
  { href: "#neden-biz", label: "Neden Biz?" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header 
      style={{ 
        position: "sticky", 
        top: 0, 
        zIndex: 50, 
        background: "rgba(255, 255, 255, 0.95)", 
        backdropFilter: "blur(12px)", 
        borderBottom: "1px solid var(--border-light)",
        boxShadow: "var(--shadow-sm)"
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "88px", padding: "8px 0" }}>
          
          {/* Logo */}
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
            <img 
              src="/logo.png" 
              alt="Imerasoft Logo" 
              style={{ height: "68px", width: "auto", objectFit: "contain" }} 
            />
            <span style={{ 
              fontSize: "0.75rem", 
              fontWeight: 600, 
              color: "var(--orange)", 
              letterSpacing: "0.03em",
              marginTop: "-6px",
              fontStyle: "italic"
            }}>
              Yeni Günün Çözümü
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav style={{ display: "flex", gap: "32px" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                style={{
                  color: "var(--text-main)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  transition: "color 0.2s ease"
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact CTAs - Right */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-nav">
            <a
              href={contactInfo.phoneHref}
              className="btn btn-outline"
              style={{ padding: "10px 20px", fontSize: "0.875rem", fontWeight: 700 }}
            >
              Ara: {contactInfo.phone}
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              WhatsApp
            </a>
            <a
              href="#iletisim"
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", color: "var(--text-main)" }}
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü Aç"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Open State */}
      {menuOpen && (
        <div style={{ position: "absolute", top: "88px", left: 0, width: "100%", background: "var(--bg-white)", borderBottom: "1px solid var(--border-light)", boxShadow: "var(--shadow-md)" }}>
          <div className="container" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                style={{ color: "var(--text-main)", fontSize: "1.0625rem", fontWeight: 600, padding: "8px 0", borderBottom: "1px solid var(--border-light)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <a href="#iletisim" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>Teklif Al</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 901px) {
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
