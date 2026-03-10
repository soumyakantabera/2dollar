"use client";

import { motion } from "motion/react";
import {
  Globe,
  Clock,
  ShieldCheck,
  Users,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Based in India, serving businesses across 50+ countries worldwide.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our teams work across time zones to ensure round-the-clock support.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Rigorous quality checks and dedicated project managers for every engagement.",
  },
  {
    icon: Users,
    title: "Expert Teams",
    description: "Skilled professionals with industry-specific experience and training.",
  },
  {
    icon: Sparkles,
    title: "Modern Tools",
    description: "We use the latest tools and technologies to deliver exceptional results.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Start small and scale up — our teams grow with your business needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Why 2Dollar
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              India&apos;s Talent,{" "}
              <span className="bg-gradient-to-r from-accent to-accent-3 bg-clip-text text-transparent">
                World&apos;s Standard
              </span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              We bridge the gap between world-class talent and affordable
              pricing. India&apos;s vast pool of skilled professionals combined with
              our rigorous quality standards means you get premium services
              without the premium price tag.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-primary">70%</p>
                <p className="text-sm text-muted mt-1">Cost Savings</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-accent-2">500+</p>
                <p className="text-sm text-muted mt-1">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-border/50 hover:shadow-lg transition-all"
              >
                <feature.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
