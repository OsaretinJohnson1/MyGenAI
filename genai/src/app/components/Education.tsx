"use client";

import { motion } from "framer-motion";

const degrees = [
  {
    degree: "Bachelor of Commerce Honours in Information Systems",
    institution: "University of Fort Hare",
    status: "Completed",
  },
  {
    degree: "Bachelor of Commerce in Information Systems",
    institution: "University of Fort Hare",
    status: "Completed",
  },
];

const certificates = [
  {
    degree: "Certificate in AI and Machine Learning",
    institution: "MICT-SETA",
    status: "Completed",
  },
  {
    degree: "Certificate in Introduction to Data Science",
    institution: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    degree: "Certificate in Basics of JavaScript",
    institution: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    degree: "Certificate in Cybersecurity",
    institution: "EBL Institute of Business and Technology",
    status: "Completed",
  },
  {
    degree: "Arduino Certification on Electronics and Physical Computing",
    institution: "Cortex Hub",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Education
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degrees Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white"
            >
              Degrees
            </motion.h3>
            {degrees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative pl-8"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500"></div>
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-1">
                    {item.institution}
                  </p>
                  <p
                    className={`text-sm font-medium ${item.status === "Pursuing"
                      ? "text-pink-500 dark:text-pink-400"
                      : "text-purple-500 dark:text-purple-400"
                      }`}
                  >
                    {item.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white"
            >
              Certificates
            </motion.h3>
            {certificates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative pl-8"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500"></div>
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-1">
                    {item.institution}
                  </p>
                  <p
                    className={`text-sm font-medium ${item.status === "Pursuing"
                      ? "text-pink-500 dark:text-pink-400"
                      : "text-purple-500 dark:text-purple-400"
                      }`}
                  >
                    {item.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
