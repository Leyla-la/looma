"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  outline?: boolean;
  className?: string;
}

export const ButtonLink = ({
  href,
  children,
  primary = false,
  outline = false,
  className = "",
}: ButtonLinkProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href={href} passHref>
      <Button
        size="lg"
        className={cn(
          "rounded-full px-8 py-6 font-bold text-lg shadow-lg transition-all group",
          primary && "bg-linear-to-r from-ghibli-mint to-ghibli-sky text-white hover:shadow-xl",
          outline && "border-2 border-ghibli-mint text-ghibli-charcoal bg-transparent hover:bg-ghibli-mint/10",
          className
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {children}
        </span>
      </Button>
    </Link>
  </motion.div>
);
