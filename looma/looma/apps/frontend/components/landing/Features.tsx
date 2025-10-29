"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Video, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Text to Comic",
    desc: "Transform your stories into beautiful comic panels with customizable art styles and layouts",
    gradient: "from-ghibli-pink to-pink-300",
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Text to Anime",
    desc: "Create stunning anime character art and scenes from simple text descriptions",
    gradient: "from-ghibli-sky to-blue-300",
  },
  {
    icon: <Gamepad2 className="w-10 h-10" />,
    title: "Text to Game Assets",
    desc: "Generate pixel art sprites, backgrounds, and game items for your projects",
    gradient: "from-ghibli-mint to-green-300",
  },
];

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-ghibli-cream/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-ghibli-charcoal">
            Three Ways to Create
          </h2>
          <p className="text-lg md:text-xl text-ghibli-dark font-inter max-w-3xl mx-auto">
            Choose your creative path and bring your imagination to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-8 h-full text-center bg-white/90 backdrop-blur border border-ghibli-gray/50 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${f.gradient} mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-playfair text-ghibli-charcoal">
                  {f.title}
                </h3>
                <p className="text-ghibli-dark font-inter">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
