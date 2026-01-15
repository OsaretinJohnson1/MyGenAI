"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Understand",
    description: "I start by really understanding the problem. Who are we helping? What's the real challenge?",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    description: "Brainstorm solutions, sketch ideas, and think about what technology fits best.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Code with clean architecture, test as I go, and iterate based on feedback.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Get it out there, monitor how it performs, and keep improving.",
  },
  {
    icon: CheckCircle,
    title: "Learn",
    description: "Reflect on what worked, what didn't, and how I can do better next time.",
  },
];

export default function Process() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          How I Work
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


