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
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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
