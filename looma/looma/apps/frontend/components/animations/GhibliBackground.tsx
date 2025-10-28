// Ghibli 8-bit animated background - Floating elements with parallax
"use client";

import { motion } from "framer-motion";

export function GhibliBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-sky)] via-[var(--ghibli-cream)] to-[var(--ghibli-blue)] opacity-30" />

      {/* Animated clouds - Drifting slowly */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-32 bg-white/40 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-80 h-40 bg-white/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/3 w-72 h-36 bg-white/35 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Soot sprites - Small floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sprite-${i}`}
          className="absolute w-3 h-3 bg-[var(--ghibli-charcoal)] rounded-full opacity-20"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Fireflies - Glowing pulsing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${30 + (i % 3) * 25}%`,
            background: "var(--glow-firefly)",
            boxShadow: "0 0 10px var(--glow-firefly), 0 0 20px var(--glow-firefly)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Drifting leaves - SVG with rotation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `-10%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--ghibli-forest)" opacity="0.3">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
