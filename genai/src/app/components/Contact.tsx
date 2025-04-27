"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="mailto:sokrowalindisipho@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/osaretinjohnson/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://github.com/OsaretinJohnson1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            <Github className="w-8 h-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
