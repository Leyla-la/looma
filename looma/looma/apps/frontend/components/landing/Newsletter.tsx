"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background: floating blobs, firefly, soot sprite */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-ghibli-mint/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-36 h-28 bg-ghibli-sky/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {[...Array(4)].map((_, i) => (
        <motion.img
          key={`sprite-${i}`}
          src="/ghibli-assets/soot-sprite.gif"
          alt="Soot Sprite"
          className="absolute w-8 h-8 opacity-30 pointer-events-none"
          style={{ left: `${20 + i * 18}%`, top: `${60 + (i % 2) * 18}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.img
          key={`firefly-${i}`}
          src="/ghibli-assets/butterfly.gif"
          alt="Firefly"
          className="absolute w-4 h-4 opacity-40 pointer-events-none"
          style={{ left: `${30 + i * 22}%`, top: `${40 + (i % 2) * 30}%` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
        />
      ))}
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-12 text-center bg-linear-to-br from-ghibli-mint/20 to-ghibli-sky/20 backdrop-blur-md border-4 border-ghibli-sky/30 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-20 -z-10">
              <Image
                src="/ghibli-assets/no-face.png"
                alt="No-Face"
                width={140}
                height={140}
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-ghibli-charcoal">
                Stay in the Loop
              </h2>
              <p className="text-lg mb-8 text-ghibli-dark font-inter">
                Get the latest updates, tips, and exclusive offers
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 py-6 text-lg rounded-full border-2 border-ghibli-sky focus:border-ghibli-mint focus:ring-ghibli-mint"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="py-6 px-8 rounded-full bg-linear-to-r from-ghibli-mint to-ghibli-sky text-white font-bold text-lg"
                >
                  Subscribe <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
