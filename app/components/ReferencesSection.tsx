import { references } from "@/app/data";

const iconMap: Record<number, { path: React.ReactNode; bg: string; color: string; labelBg: string; labelColor: string }> = {
  1: {
    // Construction / Crane
    path: <><path d="M8 22V12h8v10"/><path d="M4 2h16a2 2 0 0 1 2 2v18H2V4a2 2 0 0 1 2-2z"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></>,
    bg: "#FFEDD5", color: "#EA580C", labelBg: "rgba(234, 88, 12, 0.1)", labelColor: "#EA580C"
  },
  2: {
    // Industrial / Cog
    path: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    bg: "#F9FAFB", color: "#4B5563", labelBg: "rgba(75, 85, 99, 0.1)", labelColor: "#374151"
  },
  3: {
    // Wrench / Engineering
    path: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>,
    bg: "#DCFCE7", color: "#15803D", labelBg: "rgba(21, 128, 61, 0.1)", labelColor: "#15803D"
  },
  4: {
    // Store / Local
    path: <><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></>,
    bg: "#FFEDD5", color: "#EA580C", labelBg: "rgba(234, 88, 12, 0.1)", labelColor: "#EA580C"
  },
  5: {
    // Education / Book
    path: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
    bg: "#FEF3C7", color: "#D97706", labelBg: "rgba(217, 119, 6, 0.1)", labelColor: "#B45309"
  },
};

export default function ReferencesSection() {
  return (
    <section id="referanslar" className="section-padding" style={{ background: "var(--bg-warm)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="badge-warm" style={{ background: "rgba(249, 115, 22, 0.1)", color: "var(--orange-dark)" }}>Vitrinimiz</span>
          <h2 className="title-md">Teslim Ettiğimiz Projeler</h2>
          <p className="subtitle" style={{ margin: "0 auto", maxWidth: "650px" }}>
            Sektör bağımsız, tamamen müşterilerimizin çalışma süreçlerine ve hedeflerine yönelik hazırladığımız modern web çözümlerinin birkaçı.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", maxWidth: "1150px", margin: "0 auto" }}>
          {references.map((ref) => {
            const iconData = iconMap[ref.id] || iconMap[1];
            return (
              <div key={ref.id} className="reference-card" style={{ display: "flex", flexDirection: "column", background: "var(--bg-white)", borderRadius: "16px", border: "1.5px solid var(--border-light)", overflow: "hidden", transition: "all 0.3s ease" }}>

                {/* Top Icon Area */}
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: iconData.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderBottom: "1px solid rgba(0,0,0,0.05)"
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={iconData.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {iconData.path}
                  </svg>

                  {/* Category Badge */}
                  <div style={{ position: "absolute", top: "16px", right: "16px", background: iconData.labelBg, color: iconData.labelColor, fontSize: "0.75rem", fontWeight: 700, padding: "4px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {ref.category}
                  </div>

                  {/* Active/Inactive badge */}
                  {ref.isActive ? (
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(22,163,74,0.12)", color: "#15803D", fontSize: "0.7rem", fontWeight: 700, padding: "3px 8px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "6px", height: "6px", background: "#16A34A", borderRadius: "50%", display: "inline-block" }} />
                      Canlı
                    </div>
                  ) : (
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(100,116,139,0.1)", color: "#64748B", fontSize: "0.7rem", fontWeight: 700, padding: "3px 8px", borderRadius: "6px" }}>
                      Yakında
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: "32px 28px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-main)", fontWeight: 800, marginBottom: "10px", letterSpacing: "-0.02em" }}>
                    {ref.title}
                  </h3>

                  <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65, flexGrow: 1, margin: "0 0 24px 0" }}>
                    {ref.description}
                  </p>

                  {/* Domain row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    {ref.isActive && ref.href ? (
                      <a href={ref.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "var(--orange-dark)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        {ref.domain}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.875rem", color: "var(--text-light)", fontWeight: 500, margin: 0 }}>
                        {ref.domain}
                      </p>
                    )}
                  </div>

                  {/* CTA Button — only for active projects */}
                  {ref.isActive && ref.href ? (
                    <a
                      href={ref.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      Siteyi İncele
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px" }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        background: "var(--bg-gray)",
                        border: "1.5px solid var(--border-light)",
                        color: "var(--text-light)",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        textAlign: "center",
                        cursor: "default",
                      }}
                    >
                      Yakında Yayında
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: "64px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "flex-start", gap: "16px", background: "var(--bg-white)", border: "1.5px solid var(--border-light)", borderRadius: "14px", padding: "24px 32px", maxWidth: "760px", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "var(--orange-light)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-warm)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7, textAlign: "left", margin: 0 }}>
              Bunların yanında, ihtiyaçlara göre geliştirilen ve herkese açık paylaşılmayan özel yazılım projeleri de bulunmaktadır. <strong style={{ color: "var(--text-main)" }}>Talep halinde detaylı bilgi ayrıca paylaşılabilir.</strong>
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .reference-card {
           box-shadow: var(--shadow-sm);
        }
        .reference-card:hover {
           transform: translateY(-4px);
           box-shadow: var(--shadow-lg);
           border-color: var(--orange) !important;
        }
        .reference-card:hover .btn-primary {
           background-color: var(--orange-dark);
        }
      `}</style>
    </section>
  );
}
