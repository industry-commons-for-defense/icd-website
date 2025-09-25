import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icd-defense.org'),
  title: "Industry Commons for Defense",
  description: "A collaborative framework enabling transparent, modular, and sovereign-aligned collaboration across government, FFRDCs, UARCs, and industry partners in defense technology development.",
  keywords: "ICD, Industry Commons for Defense, defense technology, collaboration framework, FFRDC, UARC",
  authors: [{ name: "The ICD Foundation" }],
  icons: {
    icon: [
      { url: '/icd-favicon.png', type: 'image/png', sizes: '832x832' },
    ],
    shortcut: [
      { url: '/icd-favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/icd-logo.jpeg', sizes: '832x832' }
    ],
  },
  openGraph: {
    title: "Industry Commons for Defense",
    description: "Accelerate innovation, enhance security, and build the future of defense technology together.",
    url: "https://icd-defense.org",
    siteName: "Industry Commons for Defense",
    images: [
      {
        url: "/icd-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "ICD Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Commons for Defense",
    description: "Accelerate innovation, enhance security, and build the future of defense technology together.",
    images: ["/icd-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
