"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useAuthStore } from "@/store/auth";
import { useRef } from "react";
import { ButtonLink } from "./ButtonLink";

// === Hero Section ===
const Hero = () => {
  const { isAuthenticated } = useAuthStore();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative pt-24 md:pt-32 pb-20 text-center overflow-hidden">
      {/* Animated Catbus running across footer */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-20 pointer-events-none opacity-40"
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
      >
        <Image src="/ghibli-assets/catbus-run.gif" alt="Catbus" width={128} height={80} className="object-contain pixel-art" unoptimized />
      </motion.div>

      {/* Soot Sprites floating */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sprite-${i}`}
          className="absolute w-6 h-6 bg-ghibli-charcoal rounded-full opacity-20"
          style={{ left: `${10 + i * 14}%`, top: `${30 + (i % 3) * 18}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* Totoro hop animation */}
      <motion.div
        className="absolute right-8 bottom-24 w-20 h-20 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/ghibli-assets/totoro-hop.gif" alt="Totoro hopping" width={80} height={80} className="object-contain pixel-art" unoptimized />
      </motion.div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 -z-10">
          <Image
            src="/ghibli-assets/totoro-rain.png"
            alt="Totoro"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-playfair">
            <motion.span
              className="block bg-linear-to-r from-ghibli-mint to-ghibli-sky bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Craft Worlds with
            </motion.span>
            <motion.span
              className="block text-ghibli-charcoal"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              LoomaGen AI
            </motion.span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-10 font-light text-ghibli-dark font-inter max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            Transform your imagination into stunning Ghibli-style art.<br className="hidden md:block" />
            Create comics, anime, and game assets with AI magic.<br className="hidden md:block" />
            <span className="inline-block mt-2 text-ghibli-mint font-bold">Let your story come alive!</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <ButtonLink
              href={isAuthenticated ? "/generate" : "/register"}
              primary
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
              </span>
            </ButtonLink>
            <ButtonLink href="/gallery" outline>
              <span className="flex items-center justify-center gap-2">
                Explore Gallery
              </span>
            </ButtonLink>
          </motion.div>

          {/* Stats section with animation */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[{ value: "10K+", label: "Creators" }, { value: "50K+", label: "Artworks" }, { value: "99%", label: "Satisfaction" }].map((stat, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md text-center border-2 border-ghibli-mint/30"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ scale: 1.07 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-ghibli-mint">
                  {stat.value}
                </div>
                <div className="text-sm text-ghibli-dark font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
