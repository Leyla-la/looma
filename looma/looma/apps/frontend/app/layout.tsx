import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GhibliBackground } from "@/components/animations/GhibliBackground";
import { Providers } from "@/components/providers/Providers";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LoomaGen AI – Where Stories Come Alive in Ghibli Magic",
  description:
    "Create stunning comics, anime, and game assets with AI. Transform your imagination into beautiful Ghibli-style art with our powerful AI generation tools.",
  keywords: [
    "AI art generator",
    "Ghibli style",
    "comic generation",
    "anime creator",
    "game assets",
    "text to image",
    "AI illustration",
  ],
  authors: [{ name: "Looma Team" }],
  openGraph: {
    title: "LoomaGen AI – Ghibli-Style AI Art Generator",
    description: "Transform your imagination into beautiful Ghibli-style art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased min-h-screen flex flex-col bg-[var(--ghibli-cream)]">
        <Providers>
          {/* Enhanced Ghibli background with more elements */}
          <GhibliBackground />

          {/* Header with improved navigation */}
          <Header />

          {/* Main content */}
          <main className="relative z-10 flex-1">{children}</main>

          {/* Footer with animations */}
          <Footer />

          {/* Customized Toaster */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "rgba(255, 255, 255, 0.95)",
                color: "#2C2C2C",
                border: "2px solid #B0C4DE",
                borderRadius: "32px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                padding: "16px 24px",
                fontSize: "16px",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
