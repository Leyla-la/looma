"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-[var(--ghibli-gray)] bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold text-[var(--ghibli-charcoal)]"
              style={{ fontFamily: "var(--font-playfair)" }}
              whileHover={{ scale: 1.05 }}
            >
              LoomaGen AI
            </motion.h3>
            <p className="text-sm text-[var(--ghibli-dark)] opacity-80">
              Transform your imagination into beautiful Ghibli-style art with AI magic.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-[var(--ghibli-charcoal)] mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/generate" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Generate Art
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[var(--ghibli-charcoal)] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-blue)] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-[var(--ghibli-charcoal)] mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--ghibli-gray)] flex items-center justify-center text-[var(--ghibli-charcoal)] hover:bg-[var(--ghibli-blue)] hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--ghibli-gray)] flex items-center justify-center text-[var(--ghibli-charcoal)] hover:bg-[var(--ghibli-blue)] hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--ghibli-gray)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--ghibli-dark)] opacity-70 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Looma Team
          </p>
          <p className="text-sm text-[var(--ghibli-dark)] opacity-70">
            © {new Date().getFullYear()} LoomaGen AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animated Catbus running across footer */}
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-12 opacity-30"
        animate={{
          x: ["-100%", "100vw"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 8,
        }}
      >
        <div className="text-4xl">🐱</div>
      </motion.div>
    </footer>
  );
}
