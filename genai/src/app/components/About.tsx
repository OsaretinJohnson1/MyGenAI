"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I started coding because I wanted to understand how the apps I
                used every day actually worked. That curiosity took me from
                learning C# basics to winning hackathons and building real
                solutions for South African communities. Now I'm passionate
                about using tech to solve problems that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What Drives Me
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe technology should be accessible and inclusive. That's
                why I organize tech events and workshops that empower youth with
                digital skills, and build solutions for healthcare, education,
                and public service. Every line of code I write is a step toward
                a more connected South Africa.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl border border-purple-100 dark:border-purple-800"
          >
            <div className="flex items-start gap-4">
              <Coffee className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Beyond the Code
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When I'm not debugging or building features, you'll find me
                  playing tennis, teaching myself to swim, or diving into a good
                  book. I'm passionate about organizing tech events and workshops
                  that empower youth with digital skills, and I love exploring
                  new AI frameworks while staying updated on the latest tech trends.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-700">
                    🎾 Tennis Player
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-700">
                    🏊‍♂️ Learning to Swim
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-700">
                    📚 Avid Reader
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-700">
                    🤖 AI Explorer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



