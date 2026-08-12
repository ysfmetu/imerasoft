import { references } from "@/app/data";

const iconMap: Record<number, { path: React.ReactNode; gradient: string; color: string; labelBg: string; labelColor: string }> = {
  1: {
    // Construction / Crane
    path: <><path d="M8 22V12h8v10"/><path d="M4 2h16a2 2 0 0 1 2 2v18H2V4a2 2 0 0 1 2-2z"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></>,
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", color: "#EA580C", labelBg: "rgba(234, 88, 12, 0.1)", labelColor: "#EA580C"
  },
  2: {
    // Industrial / Cog
    path: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    gradient: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)", color: "#4B5563", labelBg: "rgba(75, 85, 99, 0.1)", labelColor: "#374151"
  },
  3: {
    // Wrench / Engineering
    path: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>,
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)", color: "#15803D", labelBg: "rgba(21, 128, 61, 0.1)", labelColor: "#15803D"
  },
  4: {
    // Store / Local
    path: <><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></>,
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", color: "#EA580C", labelBg: "rgba(234, 88, 12, 0.1)", labelColor: "#EA580C"
  },
  5: {
    // Education / Book
    path: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
    gradient: "linear-gradient(135deg, #FEF9C3 0%, #FEF3C7 100%)", color: "#D97706", labelBg: "rgba(217, 119, 6, 0.1)", labelColor: "#B45309"
  },
  6: {
    // Home / Building (BS60 Yapı)
    path: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    gradient: "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)", color: "#334155", labelBg: "rgba(51, 65, 85, 0.1)", labelColor: "#334155"
  }
};

export default function ReferencesSection() {
  return (
    <section id="referanslar" className="section-padding" style={{ background: "var(--bg-warm)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="badge-warm">Vitrinimiz</span>
          <h2 className="title-md">Teslim Ettiğimiz Projeler</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "650px" }}>
            Sektör bağımsız, tamamen müşterilerimizin çalışma süreçlerine ve hedeflerine yönelik hazırladığımız modern web çözümlerinin birkaçı.
          </p>
        </div>

        <div className="modern-ref-grid">
          {references.map((ref) => {
            const iconData = iconMap[ref.id] || iconMap[1];
            return (
              <div key={ref.id} className="modern-ref-card group">
                <div className="bg-decoration" style={{ background: iconData.gradient }}></div>
                
                <div className="mrc-header">
                  <div className="mrc-icon" style={{ background: iconData.gradient, color: iconData.color }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {iconData.path}
                    </svg>
                  </div>
                  
                  <div className="mrc-badges">
                    {ref.isActive ? (
                      <div className="mrc-badge-status active">
                        <span className="dot"></span>
                        Canlı
                      </div>
                    ) : (
                      <div className="mrc-badge-status inactive">
                        Yakında
                      </div>
                    )}
                    <div className="mrc-badge-category" style={{ background: iconData.labelBg, color: iconData.labelColor }}>
                      {ref.category}
                    </div>
                  </div>
                </div>

                <div className="mrc-body">
                  <h3 className="mrc-title">{ref.title}</h3>
                  <p className="mrc-desc">{ref.description}</p>
                </div>

                <div className="mrc-footer">
                  <div className="mrc-domain">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    {ref.isActive && ref.href ? (
                      <a href={ref.href} target="_blank" rel="noopener noreferrer">
                        {ref.domain}
                      </a>
                    ) : (
                      <span>{ref.domain}</span>
                    )}
                  </div>
                  
                  {ref.isActive && ref.href ? (
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" className="mrc-btn">
                      Siteyi İncele
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  ) : (
                    <div className="mrc-btn" style={{ background: "var(--bg-gray)", cursor: "not-allowed", color: "var(--text-light)" }}>
                      Yakında Yayında
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "72px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "flex-start", gap: "16px", background: "var(--bg-white)", border: "1.5px solid var(--border-light)", borderRadius: "16px", padding: "28px 36px", maxWidth: "800px", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ flexShrink: 0, width: "48px", height: "48px", background: "var(--orange-light)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-warm)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, textAlign: "left", margin: 0, paddingTop: "2px" }}>
              Bunların yanında, ihtiyaçlara göre geliştirilen ve herkese açık paylaşılmayan özel yazılım projeleri de bulunmaktadır. <strong style={{ color: "var(--text-main)", fontWeight: 700 }}>Talep halinde detaylı bilgi ayrıca paylaşılabilir.</strong>
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .modern-ref-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .modern-ref-card {
          position: relative;
          background: var(--bg-white);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          overflow: hidden;
        }
        
        .modern-ref-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        
        .modern-ref-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.12);
          border-color: var(--orange-light);
        }
        
        .modern-ref-card:hover::before {
          transform: scaleX(1);
        }
        
        .bg-decoration {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(40px);
          z-index: -1;
          transition: all 0.6s ease;
        }
        
        .modern-ref-card:hover .bg-decoration {
          transform: scale(1.3);
          opacity: 0.5;
        }
        
        .mrc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        
        .mrc-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .modern-ref-card:hover .mrc-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        
        .mrc-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        
        .mrc-badge-status {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .mrc-badge-status.active {
          background: rgba(22, 163, 74, 0.1);
          color: var(--green-dark);
        }
        
        .mrc-badge-status.active .dot {
          width: 8px;
          height: 8px;
          background: var(--green);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(22, 163, 74, 0.6);
        }
        
        .mrc-badge-status.inactive {
          background: var(--bg-gray);
          color: var(--text-light);
        }
        
        .mrc-badge-category {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
        }
        
        .mrc-body {
          flex-grow: 1;
          margin-bottom: 32px;
        }
        
        .mrc-title {
          font-size: 1.4rem;
          color: var(--text-main);
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        
        .mrc-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        .mrc-footer {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }
        
        .mrc-domain {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-light);
          font-weight: 500;
        }
        
        .mrc-domain a {
          color: var(--orange-dark);
          font-weight: 600;
          transition: color 0.2s;
        }
        
        .mrc-domain a:hover {
          color: var(--orange);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        
        .mrc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px 24px;
          border-radius: 12px;
          background: var(--bg-gray);
          color: var(--text-main);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .mrc-btn svg {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .modern-ref-card:hover .mrc-btn {
          background: var(--orange);
          color: white;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.25);
        }
        
        .modern-ref-card:hover .mrc-btn svg {
          transform: translateX(4px);
        }
        
        @media (max-width: 768px) {
          .modern-ref-grid {
            grid-template-columns: 1fr;
          }
          .modern-ref-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
