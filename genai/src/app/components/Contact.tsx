"use client";

import { Mail, Linkedin, Github, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to be part of your vision. Let's chat!
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Let's Talk About
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• New project opportunities</li>
              <li>• Collaborations on AI/ML projects</li>
              <li>• Speaking or workshop opportunities</li>
              <li>• Mentorship or career advice</li>
              <li>• Just saying hi! 👋</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <Clock className="w-4 h-4" />
            <span>I typically respond within 24-48 hours</span>
          </motion.div>

          <div className="flex justify-center space-x-8">
            {[
              {
                icon: Mail,
                href: "mailto:sokrowalindisipho@gmail.com",
                label: "Email",
                color: "text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/osaretinjohnson/",
                label: "LinkedIn",
                color: "text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400",
              },
              {
                icon: Github,
                href: "https://github.com/OsaretinJohnson1",
                label: "GitHub",
                color: "text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400",
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
