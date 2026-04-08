"use client";
import { useState } from "react";
import { contactInfo } from "@/app/data";

export default function HeroSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="hero" style={{ background: "var(--bg-gray)", borderBottom: "1px solid var(--border-light)", position: "relative", overflow: "hidden" }}>
      {/* Background Graphic elements to make it premium */}
      <div style={{ position: "absolute", top: "-15%", right: "-5%", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(249,115,22,0.03) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(22,163,74,0.03) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "80px", alignItems: "center" }} className="hero-grid">
          
          {/* Left Content */}
          <div>
            <span className="badge-warm" style={{ marginBottom: "24px" }}>
              Web Tasarım, SEO ve Özel Yazılım Çözümleri
            </span>
            <h1 className="title-lg">
              İşletmenizi dijitalde <br/>
              <span style={{ color: "var(--orange)" }}>daha güçlü</span> hale getiriyoruz
            </h1>
            <p className="subtitle" style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "580px", marginBottom: "40px" }}>
              Imerasoft olarak modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; SEO çalışmalarıyla görünürlüğünüzü artırıyor, ihtiyaç halinde size özel yazılım ve mobil uygulama çözümleri geliştiriyoruz.
            </p>
            
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <a href="#iletisim" className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "1.125rem" }}>
                Teklif Al
              </a>
              <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-green" style={{ padding: "16px 32px", fontSize: "1.125rem", display: "flex", gap: "8px" }}>
                WhatsApp&apos;tan Yazın
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Mobil uyumlu ve hızlı altyapı",
                "SEO odaklı kurulum",
                "İhtiyaca özel geliştirme",
              ].map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-main)", fontWeight: 600, fontSize: "1rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="card-premium" style={{ borderTop: "6px solid var(--orange)", padding: "48px 40px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "64px", height: "64px", background: "var(--green-light)", borderRadius: "50%", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="title-md" style={{ marginBottom: "12px", fontSize: "1.75rem" }}>Talebiniz Alındı</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
                  Projenizle ilgili kısa bir ön değerlendirme yapıp, belirttiğiniz telefon numarası üzerinden geri dönüş sağlayacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                  Projenizi Kısaca Anlatın
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", marginBottom: "32px", lineHeight: 1.5 }}>
                  Size en uygun çözüm için bilgilerinizi bırakın, kısa sürede dönüş sağlayalım.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label htmlFor="hero-name" className="label-clean">Ad Soyad</label>
                    <input id="hero-name" required type="text" className="input-clean" placeholder="Adınız Soyadınız" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="label-clean">Telefon</label>
                    <input id="hero-phone" required type="tel" className="input-clean" placeholder="0555 XXXXXXX" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="hero-service" className="label-clean">Hizmet Türü</label>
                    <select id="hero-service" required className="input-clean" style={{ cursor: "pointer" }} value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})}>
                      <option value="">Seçiniz...</option>
                      <option value="web-seo">Kurumsal Web Tasarım & SEO</option>
                      <option value="software">Özel Yazılım Geliştirme</option>
                      <option value="mobile">Mobil Uygulama</option>
                      <option value="corporate">Kurumsal Sistemler (B2B vb.)</option>
                      <option value="other">Emin Değilim / Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hero-message" className="label-clean">Kısa Mesaj (Opsiyonel)</label>
                    <textarea id="hero-message" className="input-clean" placeholder="Özetle neye ihtiyacınız var?" rows={2} style={{ resize: "vertical" }} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "8px", padding: "16px", fontSize: "1.0625rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }} disabled={loading}>
                    {loading ? "Gönderiliyor..." : "Gönder"}
                  </button>

                  <div style={{ display: "flex", alignItems: "center", background: "var(--green-light)", borderRadius: "8px", padding: "12px 16px", marginTop: "16px", gap: "12px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <p style={{ fontSize: "0.875rem", color: "var(--green-dark)", margin: 0 }}>
                      <b>Hızlı dönüş için WhatsApp&apos;tan da yazabilirsiniz.</b>
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
