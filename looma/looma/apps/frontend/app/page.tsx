"use client";

import { FloatingBlobs, Hero, Features, HowItWorks, Pricing, Newsletter } from "@/components/landing";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Soft floating blobs (page-level). Layout already includes GhibliBackground. */}
      <FloatingBlobs />

      {/* Sections */}
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Newsletter />
    </div>
  );
}
