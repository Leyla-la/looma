import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { GhibliBackground } from "@/components/animations/GhibliBackground";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoomaGen AI – Where Stories Come Alive in Ghibli Magic",
  description: "Create stunning comics, anime, and game assets with AI. Transform your imagination into beautiful Ghibli-style art.",
  keywords: ["AI art", "Ghibli", "comic generation", "anime creator", "game assets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {/* Ghibli animated background - clouds, sprites, fireflies */}
        <GhibliBackground />
        
        {/* Header with animated Totoro logo */}
        <Header />
        
        {/* Main content with page transitions */}
        <main className="relative z-10">{children}</main>
        
        {/* Toast notifications with Ghibli style */}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--card-bg)',
              color: 'var(--foreground)',
              border: '2px solid var(--ghibli-sky)',
              borderRadius: '24px',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </body>
    </html>
  );
}
