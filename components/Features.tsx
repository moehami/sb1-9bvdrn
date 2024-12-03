"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Storage",
    description: "24/7 surveillance and advanced security systems to protect your belongings"
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Access your storage unit any time of day or night with our flexible access hours"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Find the best storage rates in your area with our price match guarantee"
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    description: "Multiple locations across the country for easy access to your storage unit"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Bin Stores?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer the best storage solutions with top-notch security and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}