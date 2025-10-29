"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "./ButtonLink";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    features: [
      "10 credits/month",
      "Basic quality",
      "Community support",
      "Watermarked images",
    ],
    cta: "Get Started",
    href: "/register",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ per month",
    features: [
      "500 credits/month",
      "HD quality",
      "Priority support",
      "No watermarks",
      "Commercial license",
    ],
    cta: "Start Pro Trial",
    href: "/register?plan=pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/ per month",
    features: [
      "Unlimited credits",
      "4K quality",
      "Dedicated support",
      "API access",
      "Custom models",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="py-20 bg-ghibli-cream/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-ghibli-charcoal">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-ghibli-dark font-inter">
            Start free, upgrade when you're ready
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className={`relative flex ${p.popular ? "lg:-my-6" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold text-white rounded-full bg-linear-to-r from-ghibli-mint to-ghibli-sky shadow z-10">
                  MOST POPULAR
                </div>
              )}
              <Card
                className={`p-8 w-full flex flex-col text-center bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl ${p.popular ? "border-4 border-ghibli-mint" : "border border-ghibli-gray/50"}`}
              >
                <h3 className="text-2xl font-bold mb-3 font-playfair text-ghibli-charcoal">
                  {p.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-ghibli-mint">
                    {p.price}
                  </span>
                  <span className="text-ghibli-dark ml-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left grow">
                  {p.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-ghibli-dark font-inter"
                    >
                      <Check className="w-5 h-5 text-ghibli-mint shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={p.href}
                  primary={p.popular}
                  outline={!p.popular}
                  className="w-full mt-auto"
                >
                  {p.cta}
                </ButtonLink>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
