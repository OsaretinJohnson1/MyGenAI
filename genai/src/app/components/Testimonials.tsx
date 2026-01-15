"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Osaretin brought incredible energy and technical skills to our hackathon team. Her problem-solving approach helped us win first place!",
    author: "Hackathon Teammate",
    event: "MICT-SETA Human Rights Hackathon 2025",
    role: "Team Member",
  },
  {
    quote: "Osaretin's Arduino workshops were engaging and accessible. She has a real gift for breaking down complex concepts.",
    author: "Student",
    organization: "Cortex Hub Holiday Camp",
    role: "Workshop Participant",
  },
  {
    quote: "Working with Osaretin at Appimate has been great. She's always willing to learn and brings fresh ideas to every project.",
    author: "Colleague",
    organization: "Appimate Pty Ltd",
    role: "Team Member",
  },
];

export default function Testimonials() {
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
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 relative"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-purple-100 dark:border-purple-800 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {testimonial.event || testimonial.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



