// Ghibli-themed loading states and skeletons
"use client";

import { motion } from "framer-motion";

// Loading spinner with Ghibli aesthetic
export function GhibliLoader({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--ghibli-sky)"
            strokeWidth="8"
            strokeDasharray="60 200"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Inner soot sprite */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="w-6 h-6 rounded-full bg-[var(--ghibli-charcoal)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Page loading overlay
export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ghibli-cream)]/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <GhibliLoader size="lg" />
        <motion.p
          className="mt-6 text-lg text-[var(--ghibli-charcoal)] font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading magic...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Card skeleton with Ghibli animation
export function GhibliCardSkeleton() {
  return (
    <div className="ghibli-card p-8 space-y-4">
      <motion.div
        className="h-12 w-12 rounded-full skeleton mx-auto"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="h-6 w-3/4 skeleton mx-auto"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
      />
      <motion.div
        className="h-4 w-full skeleton"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-4 w-5/6 skeleton"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );
}

// Image loading placeholder
export function GhibliImagePlaceholder({ aspectRatio = "square" }: { aspectRatio?: "square" | "video" | "portrait" }) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} w-full relative overflow-hidden rounded-2xl bg-[var(--ghibli-gray)]`}>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Soot sprite bouncing */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--ghibli-charcoal)]/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// List skeleton
export function GhibliListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-4 p-4 ghibli-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full skeleton"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="flex-1 space-y-2">
            <motion.div
              className="h-4 w-1/2 skeleton"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            />
            <motion.div
              className="h-3 w-3/4 skeleton"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Asset loading indicator
export function AssetLoadingIndicator({ assetName }: { assetName: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ghibli-sky)]/20 text-[var(--ghibli-charcoal)] text-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <motion.div
        className="w-3 h-3 rounded-full bg-[var(--ghibli-sky)]"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span>Loading {assetName}...</span>
    </motion.div>
  );
}
