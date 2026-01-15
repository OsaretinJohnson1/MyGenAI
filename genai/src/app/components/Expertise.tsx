"use client";

import { motion } from "framer-motion";
import { Code, Cloud, FileCheck, Search, BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

const skills = [
    {
        title: "Full-Stack Development",
        description:
            "I build dynamic, user-focused web applications using C#, JavaScript, ASP.NET, and Next.js. I enjoy creating full systems from sleek front-end designs to powerful, scalable backends.",
        icon: Code,
        color: "from-purple-500 to-purple-600",
        bgColor: "from-purple-500/10 to-purple-600/10",
    },
    {
        title: "AI & Machine Learning",
        description:
            "I'm passionate about artificial intelligence and machine learning. I've worked on AI-driven projects, competed (and won) at hackathons, and I'm currently deepening my expertise through professional certification.",
        icon: Sparkles,
        color: "from-pink-500 to-pink-600",
        bgColor: "from-pink-500/10 to-pink-600/10",
    },
    {
        title: "Cloud Architecture",
        description:
            "I design cloud-based solutions using tools like Firebase, ensuring applications are scalable, reliable, and efficient. I love bringing ideas to life in the cloud.",
        icon: Cloud,
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
        title: "Code Review & Best Practices",
        description:
            "Clean code is my superpower! I follow best practices, optimize performance, and enjoy reviewing and improving codebases, something I practiced a lot during internships and tutoring.",
        icon: FileCheck,
        color: "from-pink-500 to-purple-500",
        bgColor: "from-pink-500/10 to-purple-500/10",
    },
    {
        title: "Problem Solving",
        description:
            "I thrive on solving complex technical challenges. Whether it's debugging tricky issues or creating real-world solutions during hackathons, I approach every problem with logic, creativity, and persistence.",
        icon: Search,
        color: "from-purple-600 to-pink-600",
        bgColor: "from-purple-600/10 to-pink-600/10",
    },
    {
        title: "Technical Documentation",
        description:
            "I believe good documentation empowers teams and future developers. I've created detailed technical reports, system designs, and code documentation during my internships and tutoring sessions.",
        icon: BookOpen,
        color: "from-pink-600 to-purple-600",
        bgColor: "from-pink-600/10 to-purple-600/10",
    },
];

export default function Expertise() {
    return (
        <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6 border border-purple-200/50 dark:border-purple-700/50"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            What I Offer
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance"
                        >
                            My Expertise &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                                Passion Areas
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                        >
                            I thrive at the intersection of technology, innovation, and impact, crafting elegant software and
                            intelligent AI-driven systems to solve real-world problems.
                        </motion.p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="group relative"
                                >
                                    <div className="relative h-96 p-6 lg:p-8 bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col">
                                        {/* Gradient overlay on hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Icon */}
                                            <div
                                                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} mb-5 shadow-lg flex-shrink-0`}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Title with arrow */}
                                            <div className="flex items-center gap-2 mb-3 flex-shrink-0">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                                                    {skill.title}
                                                </h3>
                                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                                            </div>

                                            {/* Description */}
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                                                    {skill.description.length > 200 ? `${skill.description.substring(0, 200)}...` : skill.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div
                                            className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${skill.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

