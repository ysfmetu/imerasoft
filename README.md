# Imerasoft – Web Tasarım, SEO ve Kurumsal Yazılım

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## Geliştirme ortamı

```bash
npm install
npm run dev       # http://localhost:3000
```

## Production build testi

```bash
npm run build
npm run start
```

## Proje yapısı

```
app/
  components/       # Tüm section bileşenleri
  data.ts           # Site içeriği (referanslar, hizmetler, vb.)
  globals.css       # Design token'lar ve utility class'lar
  layout.tsx        # Root layout + metadata + viewport
  page.tsx          # Ana sayfa (section sıralaması)
  sitemap.ts        # /sitemap.xml (otomatik)
  robots.ts         # /robots.txt (otomatik)
public/             # Static assets (favicon vb.)
next.config.ts      # Next.js + güvenlik başlıkları
vercel.json         # Vercel deploy konfigürasyonu
```

## Deploy: GitHub → Vercel

### 1. GitHub'a push

```bash
git init                        # eğer henüz yoksa
git remote add origin <repo-url>
git add .
git commit -m "chore: production-ready"
git push -u origin main
```

### 2. Vercel'e import

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
2. Repo'yu seç → **Framework: Next.js** (otomatik algılanır)
3. Build ayarları `vercel.json`'dan gelir, değiştirme
4. **Deploy** → build ~30 sn içinde tamamlanır

### 3. Domain ekleme (Vercel)

Vercel Dashboard → Proje → **Settings → Domains**

Şu iki adresi ekle:
- `imerasoft.com`
- `www.imerasoft.com`

Vercel her domain için DNS kaydı gösterecek → bunları Cloudflare'a gir.

---

## Cloudflare DNS kayıtları (Vercel sonrası)

Vercel'in gösterdiği değerler esas alınmalı. Tipik yapı:

| Tip   | Name  | Value                      | Proxy    |
|-------|-------|----------------------------|----------|
| A     | @     | `76.76.21.21`              | **DNS only** |
| CNAME | www   | `cname.vercel-dns.com`     | **DNS only** |

> ⚠️ Cloudflare proxy (turuncu bulut) **kapalı** (DNS only / gri) bırakılmalı —  
> Vercel kendi CDN'ini kullanır, çift proxy SSL sorununa yol açar.

---

## Cutover planı (WordPress → Vercel geçişi)

```
1. Vercel deploy tamamla        → build yeşil, *.vercel.app URL'i test et
2. Vercel'e domain ekle         → imerasoft.com + www.imerasoft.com
3. SSL sertifikası bekle        → Vercel otomatik sağlar (~2 dk)
4. Cloudflare DNS güncelle      → A ve CNAME kayıtlarını Vercel değerleriyle değiştir
5. TTL propagasyonunu bekle     → 5-30 dk (Cloudflare ile genelde hızlı)
6. Test et                      → https://imerasoft.com açılıyor mu?
7. Eski Natro/WordPress         → domain bağlantısını kes, gerekirse yedek al
```

---

## Ortam değişkenleri

Bu proje şu an `.env` gerektirmiyor. Gelecekte form entegrasyonu (Resend, Formspree vb.) eklenirse `.env.local` ile yönetilecek.

---

## Önemli notlar

- Tüm sayfa içeriği `app/data.ts` üzerinden yönetilir
- Yeni referans eklemek için `data.ts` → `references` dizisine yeni obje ekle
- Aktif/pasif kart durumu `isActive: true/false` ile kontrol edilir
- `npm run build` her deploy öncesi lokal test için çalıştırılmalı
