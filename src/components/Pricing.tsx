"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2",
    period: "/hr",
    description: "Perfect for small tasks and getting started",
    features: [
      "Social Media Management",
      "Basic Content Creation",
      "Email Support",
      "Weekly Reports",
      "1 Platform Coverage",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5",
    period: "/hr",
    description: "Best for growing businesses and campaigns",
    features: [
      "Everything in Starter",
      "Marketing Campaigns",
      "Project Management",
      "Brand Management",
      "Multi-platform Coverage",
      "Dedicated Manager",
      "Daily Reports",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$10",
    period: "/hr",
    description: "Full-service outsourcing for established businesses",
    features: [
      "Everything in Growth",
      "Financial Analysis",
      "Legal Documentation",
      "Personal Brand Management",
      "Priority Support 24/7",
      "Custom Workflows",
      "Strategic Consulting",
      "White-label Services",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 border border-primary/20">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Unbeatable Rates,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Quality
            </span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Pay only for what you need —
            scale up or down anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 to-white shadow-xl shadow-primary/10 md:scale-105 ring-1 ring-primary/20"
                  : "border-border/50 bg-white hover:shadow-lg hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-accent-3 text-white text-xs font-bold rounded-full shadow-lg shadow-primary/25">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted text-lg">{plan.period}</span>
                </div>
                <p className="text-sm text-muted mt-2">{plan.description}</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-primary/10" : "bg-surface"}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    </div>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919674479949"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    : "bg-surface text-foreground hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {plan.cta}{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
