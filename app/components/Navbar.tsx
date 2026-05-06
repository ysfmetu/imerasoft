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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "76px", padding: "0" }}>
          
          {/* Logo — locked block, flex-shrink:0 so it always dominates */}
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textDecoration: "none",
              flexShrink: 0,
              gap: "3px",
            }}
          >
            {/* Icon + Wordmark Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
              {/* SVG Icon */}
              <svg width="34" height="40" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
                <rect x="0" y="0" width="14" height="6" rx="1" fill="#FF5F00"/>
                <rect x="0" y="0" width="6" height="14" rx="1" fill="#FF5F00"/>
                <rect x="24" y="0" width="14" height="6" rx="1" fill="#FF5F00"/>
                <rect x="32" y="0" width="6" height="14" rx="1" fill="#FF5F00"/>
                <rect x="15" y="10" width="8" height="24" rx="2" fill="#FF5F00"/>
                <rect x="0" y="38" width="14" height="6" rx="1" fill="#E04E00"/>
                <rect x="0" y="30" width="6" height="14" rx="1" fill="#E04E00"/>
                <rect x="24" y="38" width="14" height="6" rx="1" fill="#E04E00"/>
                <rect x="32" y="30" width="6" height="14" rx="1" fill="#E04E00"/>
              </svg>

              {/* Wordmark */}
              <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
                <span style={{
                  fontSize: "1.875rem",
                  fontWeight: 800,
                  color: "#0D1B2E",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  lineHeight: 1,
                }}>Imera</span>
                <span style={{
                  fontSize: "1.875rem",
                  fontWeight: 800,
                  color: "#FF5F00",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  lineHeight: 1,
                }}>soft</span>
              </div>
            </div>

            {/* Slogan — indented to align under wordmark */}
            <span style={{
              fontSize: "0.625rem",
              fontWeight: 500,
              color: "#8A97B0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              paddingLeft: "45px",
              lineHeight: 1,
            }}>
              Yeni Günün Çözümü
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav style={{ display: "flex", gap: "24px", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                style={{
                  color: "var(--text-secondary, #4B5563)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact CTAs - Right */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }} className="desktop-nav">
            <a
              href={contactInfo.phoneHref}
              className="btn btn-outline"
              style={{ padding: "8px 16px", fontSize: "0.8125rem", fontWeight: 700 }}
            >
              Ara: {contactInfo.phone}
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
              style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
            >
              WhatsApp
            </a>
            <a
              href="#iletisim"
              className="btn btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.8125rem" }}
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
