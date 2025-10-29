"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Describe Your Vision",
    desc: "Write what you want in simple words.",
    icon: <img src="/ghibli-assets/step1.gif" alt="Soot Sprite" className="w-8 h-8" />,
  },
  {
    step: 2,
    title: "AI Creates Magic",
    desc: "Our AI transforms your words into art.",
    icon: <img src="/ghibli-assets/step2.gif" alt="Firefly" className="w-8 h-8" />,
  },
  {
    step: 3,
    title: "Remix & Edit",
    desc: "Customize, remix, and edit your artwork instantly.",
    icon: <img src="/ghibli-assets/step3.gif" alt="No-Face" className="w-8 h-8" />,
  },
  {
    step: 4,
    title: "Download & Share",
    desc: "Get your artwork instantly and share with friends.",
    icon: <img src="/ghibli-assets/catbus-run.gif" alt="Catbus" className="w-8 h-8" />,
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-ghibli-charcoal">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-ghibli-dark font-inter">
            Create stunning art in just a few magical steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-ghibli-mint to-ghibli-sky flex items-center justify-center text-3xl font-bold text-white shadow-lg border-2 border-ghibli-mint/40">
                  {s.step}
                </div>
                <div className="absolute -top-3 -right-3 text-ghibli-lavender text-3xl">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-playfair text-ghibli-charcoal">
                {s.title}
              </h3>
              <p className="text-ghibli-dark font-inter min-h-[48px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
