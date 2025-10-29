"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type AnimationType =
  | "float"
  | "bounce"
  | "sway"
  | "pulse"
  | "rotate"
  | "hop"
  | "none";

interface GhibliPixelArtProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  fit?: "contain" | "cover";
  animation?: AnimationType;
  className?: string;
  delay?: number;
}

const animationVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  bounce: {
    y: [0, -20, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
  sway: {
    x: [0, 10, 0, -10, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
  hop: {
    y: [0, -30, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  none: {},
};

/**
 * GhibliPixelArt - A component for displaying pixel art images with optional animations
 * Includes intelligent fallback to emoji/placeholder when image fails to load
 */
export function GhibliPixelArt({
  src,
  alt,
  width,
  height,
  fill = false,
  fit = "contain",
  animation = "none",
  className = "",
  delay = 0,
}: GhibliPixelArtProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback emoji mapping based on alt text keywords
  const getFallbackEmoji = (altText: string): string => {
    const lowerAlt = altText.toLowerCase();
    if (lowerAlt.includes("totoro")) return "🍃";
    if (lowerAlt.includes("rain")) return "🌧️";
    if (lowerAlt.includes("train") || lowerAlt.includes("spirited"))
      return "🚂";
    if (lowerAlt.includes("kodama")) return "👻";
    if (lowerAlt.includes("no-face")) return "🎭";
    if (lowerAlt.includes("comic")) return "📚";
    if (lowerAlt.includes("anime")) return "🎨";
    if (lowerAlt.includes("game")) return "🎮";
    return "✨"; // Default sparkle
  };

  const animationProps =
    animation !== "none"
      ? {
          animate: animationVariants[animation],
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { delay },
        }
      : {};

  if (imageError) {
    // Emoji fallback
    return (
      <motion.div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
        {...animationProps}
      >
        <span className="text-6xl">{getFallbackEmoji(alt)}</span>
      </motion.div>
    );
  }

  const imageProps = fill
    ? {
        fill: true,
        style: { objectFit: fit },
      }
    : {
        width: width || 100,
        height: height || 100,
      };

  return (
    <motion.div
      className={`relative ${className}`}
      style={fill ? undefined : { width, height }}
      {...animationProps}
    >
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        className="pixel-art"
        onError={() => setImageError(true)}
        unoptimized
      />
    </motion.div>
  );
}
