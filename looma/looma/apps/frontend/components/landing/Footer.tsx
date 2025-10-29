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
  <footer className="bg-ghibli-cream/80 py-12 text-center text-ghibli-dark text-sm font-inter">
    <div className="container mx-auto px-4">
      <p className="mb-4 max-w-md mx-auto">
        Transform your imagination into beautiful Ghibli-style art with AI
        magic.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-ghibli-charcoal">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-ghibli-mint transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p>Made with ❤️ by Looma Team</p>
      <p>© {new Date().getFullYear()} LoomaGen AI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
