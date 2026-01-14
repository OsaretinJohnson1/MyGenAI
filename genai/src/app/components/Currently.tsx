"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Lightbulb, Target } from "lucide-react";

export default function Currently() {
  const currentItems = [
    {
      icon: Code,
      category: "Building",
      items: [
        "Expanding my Next.js skills with server components",
        "Working on a personal AI project for local language support",
      ],
    },
    {
      icon: BookOpen,
      category: "Learning",
      items: [
        "Deep diving into machine learning fundamentals",
        "Exploring multilingual AI systems",
      ],
    },
    {
      icon: Target,
      category: "Focusing On",
      items: [
        "Building more inclusive tech solutions",
        "Mentoring the next generation of developers",
      ],
    },
    {
      icon: Lightbulb,
      category: "Exploring",
      items: [
        "How AI can improve healthcare access in SA",
        "New frameworks and tools in the ecosystem",
      ],
    },
  ];

  return (
    <section id="currently" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Currently
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

