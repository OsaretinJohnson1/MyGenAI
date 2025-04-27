"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C#", level: "Intermediate" },
  { name: "ASP.NET", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "ReactJS", level: "Beginner" },
  { name: "NextJS", level: "Beginner" },
  { name: "SQL", level: "Intermediate" },
  { name: "HTML", level: "Proficient" },
  { name: "Figma", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                {skill.level}
              </p>
              <div className="mt-4 h-2 bg-purple-100 dark:bg-purple-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
                  style={{
                    width:
                      skill.level === "Beginner"
                        ? "33%"
                        : skill.level === "Intermediate"
                        ? "66%"
                        : "100%",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
