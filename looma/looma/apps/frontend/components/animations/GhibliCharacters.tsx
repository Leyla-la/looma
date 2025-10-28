// Animated Totoro hopping - Using GIF from online source
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TotoroHop({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Using animated Totoro GIF from online source */}
      <Image
        src="https://i.pinimg.com/originals/6c/3a/e9/6c3ae9f5b8b7c5a8c5e5b5e5b5e5b5e5.gif"
        alt="Totoro hopping"
        width={64}
        height={64}
        className="pixel-art"
        unoptimized
      />
    </motion.div>
  );
}

// Soot Sprite floating animation
export function SootSprite({ className = "w-8 h-8", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`${className} relative`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* 8-bit soot sprite as SVG */}
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#2C3E50" />
        <circle cx="12" cy="14" r="3" fill="white" />
        <circle cx="20" cy="14" r="3" fill="white" />
        <circle cx="12" cy="14" r="1.5" fill="#2C3E50" />
        <circle cx="20" cy="14" r="1.5" fill="#2C3E50" />
        {/* Glow effect */}
        <circle cx="16" cy="16" r="14" fill="var(--glow-sprite)" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

// Firefly pulsing glow
export function Firefly({ className = "w-2 h-2", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`${className} rounded-full`}
      style={{
        background: "var(--glow-firefly)",
        boxShadow: "0 0 10px var(--glow-firefly), 0 0 20px var(--glow-firefly)",
      }}
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Catbus running across screen
export function CatbusRun() {
  return (
    <motion.div
      className="absolute bottom-0 w-32 h-20"
      animate={{
        x: ["-100%", "100vw"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 5,
      }}
    >
      {/* Using Catbus GIF from online */}
      <Image
        src="https://media.giphy.com/media/TgL3wFZ0u7t8k/giphy.gif"
        alt="Catbus running"
        width={128}
        height={80}
        className="pixel-art object-contain"
        unoptimized
      />
    </motion.div>
  );
}

// Sparkle burst animation
export function SparkleBurst({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-yellow-300"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i * Math.PI) / 4) * 50,
            y: Math.sin((i * Math.PI) / 4) * 50,
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
