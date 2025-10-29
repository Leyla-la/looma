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
            {["Craft", "Worlds", "with"].map((w, i) => (
              <motion.span
                key={i}
                className="block bg-linear-to-r from-ghibli-mint to-ghibli-sky bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                {w}
              </motion.span>
            ))}
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
            Transform your imagination into stunning Ghibli-style art.
            <br className="hidden md:block" />
            Create comics, anime, and game assets with AI magic.
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
              <Sparkles className="w-5 h-5 mr-2" />
              Start Creating
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </ButtonLink>
            <ButtonLink href="/gallery" outline>
              Explore Gallery
            </ButtonLink>
          </motion.div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "10K+", label: "Creators" },
              { value: "50K+", label: "Artworks" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
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
