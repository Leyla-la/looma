"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Video, BookOpen, Gamepad2, ArrowRight } from "lucide-react";
import { useAuthStore } from "@/store/auth";
import { SootSprite, Firefly } from "@/components/animations/GhibliCharacters";

export default function HomePage() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ghibli-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-sky)] via-[var(--ghibli-cream)] to-[var(--ghibli-mint)] opacity-40" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-20 bg-white/50 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-40 right-20 w-40 h-24 bg-white/40 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/3 w-36 h-22 bg-white/45 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="animate-fade-in">
          <div className="inline-block animate-float mb-6">
            <Sparkles className="w-16 h-16 text-[var(--ghibli-lavender)]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)] bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="text-[var(--ghibli-charcoal)]">Imagination</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--ghibli-dark)] opacity-80 mb-12 max-w-2xl mx-auto">
            Create stunning comics, anime, and game assets with the power of AI.
            Your creative journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isAuthenticated ? "/generate" : "/register"}
              className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {isAuthenticated ? "Start Creating" : "Get Started Free"}
            </Link>

            <Link
              href="/gallery"
              className="px-8 py-4 rounded-full font-semibold bg-white text-[var(--ghibli-forest)] border-2 border-[var(--ghibli-gray)] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Feature 1: Comics */}
          <div
            className="ghibli-card p-8 text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-block p-4 rounded-full bg-[var(--ghibli-pink)] bg-opacity-20 mb-4">
              <BookOpen className="w-8 h-8 text-[var(--ghibli-pink)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--ghibli-charcoal)] mb-3">
              Text to Comic
            </h3>
            <p className="text-[var(--ghibli-dark)] opacity-70">
              Transform your stories into beautiful comic panels with various
              art styles
            </p>
          </div>

          {/* Feature 2: Anime */}
          <div
            className="ghibli-card p-8 text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block p-4 rounded-full bg-[var(--ghibli-lavender)] bg-opacity-20 mb-4">
              <Video className="w-8 h-8 text-[var(--ghibli-lavender)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--ghibli-charcoal)] mb-3">
              Text to Anime
            </h3>
            <p className="text-[var(--ghibli-dark)] opacity-70">
              Create animated sequences from your imagination with AI assistance
            </p>
          </div>

          {/* Feature 3: Game Assets */}
          <div
            className="ghibli-card p-8 text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-block p-4 rounded-full bg-[var(--ghibli-mint)] bg-opacity-20 mb-4">
              <Sparkles className="w-8 h-8 text-[var(--ghibli-mint)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--ghibli-charcoal)] mb-3">
              Game Assets
            </h3>
            <p className="text-[var(--ghibli-dark)] opacity-70">
              Generate characters, backgrounds, and items for your game projects
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Only show if not authenticated */}
      {!isAuthenticated && (
        <section className="relative z-10 container mx-auto px-4 pb-20">
          <div className="ghibli-card p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-[var(--ghibli-lavender)] to-[var(--ghibli-pink)] border-none">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Magic?
            </h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Join thousands of creators and start your journey today
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-[var(--ghibli-lavender)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Sparkles className="w-5 h-5" />
              Sign Up Now
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
