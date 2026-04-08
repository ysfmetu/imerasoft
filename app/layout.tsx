import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://imerasoft.com"),
  title: "Imerasoft – Web Tasarım, SEO ve Kurumsal Yazılım Çözümleri",
  description:
    "Imerasoft olarak modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; SEO çalışmalarıyla görünürlüğünüzü artırıyor, ihtiyaç halinde özel yazılım ve mobil uygulama geliştiriyoruz.",
  keywords:
    "web tasarım, SEO, özel yazılım geliştirme, kurumsal web sitesi, mobil uygulama, Imerasoft",
  authors: [{ name: "Imerasoft" }],
  creator: "Imerasoft",
  publisher: "Imerasoft",
  openGraph: {
    title: "Imerasoft – Web Tasarım, SEO ve Kurumsal Yazılım Çözümleri",
    description:
      "Modern web siteleri, SEO ve özel yazılım çözümleriyle işletmenizi dijitalde güçlendiriyoruz.",
    url: "https://imerasoft.com",
    siteName: "Imerasoft",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imerasoft – Web Tasarım, SEO ve Kurumsal Yazılım Çözümleri",
    description:
      "Modern web siteleri, SEO ve özel yazılım çözümleriyle işletmenizi dijitalde güçlendiriyoruz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://imerasoft.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
