"use client";

import { motion } from "motion/react";
import {
  Share2,
  FolderKanban,
  Megaphone,
  Calculator,
  Scale,
  Palette,
  UserCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation, scheduling, community management, and analytics across all major platforms.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "End-to-end project coordination, Agile/Scrum support, timeline tracking, and team collaboration.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description:
      "Full-cycle campaign management from strategy to execution — digital ads, email marketing, and more.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Analysis",
    description:
      "Bookkeeping, financial reporting, budgeting, forecasting, and data-driven financial insights.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Scale,
    title: "Legal Documentation",
    description:
      "Contract drafting, compliance reviews, legal research, and document preparation by trained professionals.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Palette,
    title: "Brand Management",
    description:
      "Brand strategy, visual identity systems, guidelines, and consistent brand voice across all channels.",
    color: "from-cyan-500 to-sky-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: UserCircle,
    title: "Personal Brand Management",
    description:
      "Build your personal brand with thought leadership content, LinkedIn optimization, and PR strategies.",
    color: "from-fuchsia-500 to-pink-500",
    bgColor: "bg-fuchsia-50",
    iconColor: "text-fuchsia-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-2/10 text-accent-2 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">
              One Partner
            </span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Expert teams ready to handle your business needs — so you can focus
            on what matters most: growing your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="https://wa.me/919674479949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
