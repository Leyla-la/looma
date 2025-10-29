"use client";

import Link from "next/link";

const footerLinks = [
  { name: "Generate Art", href: "/generate" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Documentation", href: "/docs" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
];

const Footer = () => (
  <footer className="relative bg-ghibli-cream/80 py-16 text-center text-ghibli-dark text-sm font-inter overflow-hidden">
    {/* Animated Catbus running across footer */}
    <div className="absolute bottom-0 left-0 w-32 h-16 pointer-events-none opacity-30">
      <img src="/ghibli-assets/catbus-run.gif" alt="Catbus" className="object-contain w-full h-full" />
    </div>
    {/* Soot Sprites floating */}
    {[...Array(5)].map((_, i) => (
      <img
        key={`sprite-${i}`}
        src="/ghibli-assets/soot-sprite.gif"
        alt="Soot Sprite"
        className="absolute w-6 h-6 opacity-20 pointer-events-none"
        style={{ left: `${10 + i * 16}%`, bottom: `${18 + (i % 2) * 12}px` }}
      />
    ))}
    <div className="container mx-auto px-4 relative z-10">
      <p className="mb-4 max-w-md mx-auto">
        Transform your imagination into beautiful Ghibli-style art with AI magic.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-ghibli-charcoal">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-ghibli-mint transition-colors duration-300 font-semibold px-2 py-1 rounded-full hover:bg-ghibli-mint/10"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-6">
        <span className="flex items-center gap-1">
          Made with <span className="text-red-400">❤️</span> by Looma Team
        </span>
        <span>·</span>
        <span>© {new Date().getFullYear()} LoomaGen AI. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
