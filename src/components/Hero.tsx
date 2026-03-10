"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe, IndianRupee, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent-2/5" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-8 border border-primary/20">
              <Globe className="w-4 h-4" />
              India-based · Serving Worldwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            World-Class Talent,{" "}
            <span className="bg-gradient-to-r from-primary via-accent-3 to-accent bg-clip-text text-transparent">
              Starting at $2/hr
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From social media management to financial analysis — we provide
            expert outsourcing services at rates that make global businesses
            thrive. Quality work, unbeatable prices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/919674479949"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 text-base"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground font-semibold rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-base"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-8 sm:gap-10 bg-white/60 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-5 shadow-sm"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <IndianRupee className="w-4 h-4 text-primary" />
                <span className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  $2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted">Starting/hr</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Globe className="w-4 h-4 text-accent-2" />
                <span className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  50+
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted">Countries</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-accent" />
                <span className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  4.9
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted">Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
