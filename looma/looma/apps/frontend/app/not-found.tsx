// Ghibli-themed 404 page
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              background: "var(--glow-firefly)",
              boxShadow: "0 0 10px var(--glow-firefly)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Large 404 with soot sprites */}
        <div className="relative mb-8">
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold text-[var(--ghibli-sky)] opacity-20"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            404
          </motion.h1>

          {/* Soot sprites floating around the 404 */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-12 h-12"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="var(--ghibli-charcoal)" />
              <circle cx="18" cy="20" r="4" fill="white" />
              <circle cx="30" cy="20" r="4" fill="white" />
              <circle cx="18" cy="20" r="2" fill="var(--ghibli-charcoal)" />
              <circle cx="30" cy="20" r="2" fill="var(--ghibli-charcoal)" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/4 w-10 h-10"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" fill="var(--ghibli-charcoal)" />
              <circle cx="18" cy="20" r="3" fill="white" />
              <circle cx="30" cy="20" r="3" fill="white" />
              <circle cx="18" cy="20" r="1.5" fill="var(--ghibli-charcoal)" />
              <circle cx="30" cy="20" r="1.5" fill="var(--ghibli-charcoal)" />
            </svg>
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--ghibli-charcoal)] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Lost in the Spirit World?
        </motion.h2>

        <motion.p
          className="text-lg text-[var(--ghibli-dark)] mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The page you're looking for has wandered off into the enchanted forest.
          Let's help you find your way back!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/">
            <motion.button
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(to right, var(--ghibli-sky), var(--ghibli-blue))",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </Link>

          <Link href="/gallery">
            <motion.button
              className="px-8 py-4 rounded-full font-bold text-[var(--ghibli-charcoal)] bg-white border-2 border-[var(--ghibli-gray)] shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
              Explore Gallery
            </motion.button>
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          className="mt-12 ghibli-card p-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-bold text-[var(--ghibli-charcoal)] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--ghibli-lavender)]" />
            Popular Destinations
          </h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/register"
              className="block text-[var(--ghibli-dark)] hover:text-[var(--ghibli-sky)] transition-colors"
            >
              → Create Account
            </Link>
            <Link
              href="/login"
              className="block text-[var(--ghibli-dark)] hover:text-[var(--ghibli-sky)] transition-colors"
            >
              → Sign In
            </Link>
            <Link
              href="/generate"
              className="block text-[var(--ghibli-dark)] hover:text-[var(--ghibli-sky)] transition-colors"
            >
              → Generate Art
            </Link>
            <Link
              href="/profile"
              className="block text-[var(--ghibli-dark)] hover:text-[var(--ghibli-sky)] transition-colors"
            >
              → My Profile
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
