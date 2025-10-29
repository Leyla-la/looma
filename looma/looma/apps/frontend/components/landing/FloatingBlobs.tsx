"use client";

import { motion } from "framer-motion";

// === Floating Background Blobs ===
const FloatingBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-10 w-40 h-32 bg-ghibli-lavender/30 rounded-full blur-3xl"
      animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-40 right-20 w-48 h-36 bg-ghibli-pink/20 rounded-full blur-3xl"
      animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute bottom-32 left-1/3 w-44 h-28 bg-ghibli-mint/25 rounded-full blur-3xl"
      animate={{ y: [0, -35, 0], opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4,
      }}
    />
  </div>
);

export default FloatingBlobs;
