// Ghibli-themed error page
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Sad soot sprite animation */}
        <motion.div
          className="mb-8"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="mx-auto"
          >
            {/* Sad soot sprite */}
            <circle cx="60" cy="60" r="50" fill="var(--ghibli-charcoal)" />
            {/* Sad eyes */}
            <ellipse cx="45" cy="55" rx="8" ry="12" fill="white" />
            <ellipse cx="75" cy="55" rx="8" ry="12" fill="white" />
            <circle cx="45" cy="58" r="4" fill="var(--ghibli-charcoal)" />
            <circle cx="75" cy="58" r="4" fill="var(--ghibli-charcoal)" />
            {/* Sad mouth */}
            <path
              d="M 40 75 Q 60 65 80 75"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tear drop */}
            <motion.ellipse
              cx="45"
              cy="70"
              rx="3"
              ry="5"
              fill="var(--ghibli-blue)"
              animate={{
                cy: [70, 85],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[var(--ghibli-charcoal)] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Oops! Something Went Wrong
        </motion.h1>

        <motion.p
          className="text-lg text-[var(--ghibli-dark)] mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Even magic has its moments. Our soot sprites are working to fix this!
        </motion.p>

        {error.message && (
          <motion.div
            className="ghibli-card p-4 mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-[var(--ghibli-dark)] font-mono break-all">
              {error.message}
            </p>
          </motion.div>
        )}

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={reset}
            className="px-8 py-4 rounded-full font-bold text-white bg-[var(--ghibli-sky)] shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </motion.button>

          <Link href="/">
            <motion.button
              className="px-8 py-4 rounded-full font-bold text-[var(--ghibli-charcoal)] bg-white border-2 border-[var(--ghibli-gray)] shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating fireflies for ambiance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                background: "var(--glow-firefly)",
                boxShadow: "0 0 10px var(--glow-firefly)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
