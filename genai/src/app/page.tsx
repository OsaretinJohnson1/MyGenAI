"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Code,
  Cloud,
  FileCheck,
  Search,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import ChatInterface from "./components/ChatInterface";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "chat"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Floating particles creation
  useEffect(() => {
    const createParticle = () => {
      const container = document.getElementById("hero");
      if (!container) return;

      const particle = document.createElement("div");
      particle.className =
        "absolute rounded-full bg-gradient-to-r from-pink-200/50 to-purple-200/50";

      // Randomize size between 4-12px
      const size = Math.floor(Math.random() * 8) + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Randomize position
      const posX = Math.floor(Math.random() * container.offsetWidth);
      const posY = Math.floor(Math.random() * (container.offsetHeight / 2)); // Only in top half
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;

      // Add blur effect
      particle.style.filter = "blur(1px)";

      // Add to DOM
      container.appendChild(particle);

      // Animate floating
      const duration = Math.floor(Math.random() * 10) + 12; // 12-22 seconds
      const keyframes = [
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 0.4,
        },
        {
          transform: `translate(${Math.random() * 30 - 15}px, ${
            Math.random() * 100 + 50
          }px) rotate(${Math.random() * 180}deg)`,
          opacity: 0,
        },
      ];

      const animation = particle.animate(keyframes, {
        duration: duration * 1000,
        easing: "ease-out",
        fill: "forwards",
      });

      animation.onfinish = () => {
        particle.remove();
      };
    };

    // Create particles periodically
    const interval = setInterval(() => {
      createParticle();
    }, 1500);

    // Create initial batch of particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createParticle(), i * 300);
    }

    return () => clearInterval(interval);
  }, []);

  // Skill icons mapping
  const skillIcons = {
    "Full-Stack Development": <Code size={32} className="text-purple-600" />,
    "AI & Machine Learning": (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-600"
      >
        <path
          d="M12 2C13.1046 2 14 2.89543 14 4C14 4.74031 13.5978 5.38663 13 5.7324V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V5.7324C10.4022 5.38663 10 4.74031 10 4C10 2.89543 10.8954 2 12 2Z"
          fill="currentColor"
        />
        <path
          d="M6.5 4C7.32843 4 8 4.67157 8 5.5C8 6.12859 7.64197 6.67395 7.1166 6.91934L8.23336 8.59636C7.76134 8.8429 7.2246 9 6.66029 9C5.19161 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4Z"
          fill="currentColor"
        />
        <path
          d="M17.5 4C18.8807 4 20 5.11929 20 6.5C20 7.88071 18.8084 9 17.3397 9C16.7754 9 16.2387 8.8429 15.7666 8.59636L16.8834 6.91934C16.358 6.67395 16 6.12859 16 5.5C16 4.67157 16.6716 4 17.5 4Z"
          fill="currentColor"
        />
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
          fill="currentColor"
        />
        <path
          d="M7 14C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15C6 14.4477 6.44772 14 7 14Z"
          fill="currentColor"
        />
        <path
          d="M12 14C12.5523 14 13 14.4477 13 15V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15C11 14.4477 11.4477 14 12 14Z"
          fill="currentColor"
        />
        <path
          d="M17 14C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15C16 14.4477 16.4477 14 17 14Z"
          fill="currentColor"
        />
      </svg>
    ),
    "Cloud Architecture": <Cloud size={32} className="text-purple-600" />,
    "Code Review & Best Practices": (
      <FileCheck size={32} className="text-purple-600" />
    ),
    "Problem Solving": <Search size={32} className="text-purple-600" />,
    "Technical Documentation": (
      <BookOpen size={32} className="text-purple-600" />
    ),
  };

  return (
    <main className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/Osaretin - Cartoon 4.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Osaretin Johnson
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {["hero", "skills", "chat"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? "text-purple-600"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Floating Navigation Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-3 items-center">
          {["hero", "skills", "chat"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-125 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 via-pink-50 to-white pt-32"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              {/* Avatar with glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
              <Image
                src="/assets/Osaretin - Cartoon 4.png"
                alt="Developer Avatar"
                width={140}
                height={140}
                className="mx-auto rounded-full shadow-xl border-4 border-white z-20 relative"
                priority
              />

              {/* Decorative circles around avatar */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-48 h-48 border border-pink-300 rounded-full -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 0.7, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-300 rounded-full -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.7, 0.5, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Meet Osaretin Johnson,
              <div className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 relative z-10">
                  {" "}
                  A Creative AI & Full-Stack Developer
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 to-pink-200 opacity-40 rounded-full z-0"
                  animate={{
                    width: ["0%", "100%", "95%"],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              I'm Osaretin Johnson — a passionate Full-Stack Developer 
              and Aspiring AI Engineer. I specialize in building smart, 
              scalable, and beautiful software solutions, blending cutting-edge 
              technology with creativity. Let’s bring bold ideas to life together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-24"
            >
              <Link
                href="#chat"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Chat with my AI Twin</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 z-0 opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-300" />
              </Link>
              <Link
                href="#skills"
                className="group relative px-8 py-4 bg-white text-gray-700 rounded-full font-medium overflow-hidden shadow-md hover:shadow-lg hover:text-purple-600 transition-all duration-300"
              >
                <span className="relative z-10">View Skills</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link
                href="#skills"
                className="flex flex-col items-center text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pink-50 to-white"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-medium mb-4"
              >
                What I Offer
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
              >
                My Expertise & Passion Areas
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                I thrive at the intersection of technology, innovation, 
                and impact — crafting elegant software and intelligent 
                AI-driven systems to solve real-world problems.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full-Stack Development",
                  description:
                    "I build dynamic, user-focused web applications using C#, JavaScript, ASP.NET, and Next.js. I enjoy creating full systems — from sleek front-end designs to powerful, scalable backends.",
                  icon: "Full-Stack Development",
                },
                {
                  title: "AI & Machine Learning",
                  description:
                    "I'm passionate about artificial intelligence and machine learning. I've worked on AI-driven projects, competed (and won 🏆) at hackathons, and I'm currently deepening my expertise through professional certification.",
                  icon: "AI & Machine Learning",
                },
                {
                  title: "Cloud Architecture",
                  description:
                    "I design cloud-based solutions using tools like Firebase, ensuring applications are scalable, reliable, and efficient. I love bringing ideas to life in the cloud.",
                  icon: "Cloud Architecture",
                },
                {
                  title: "Code Review & Best Practices",
                  description:
                    "Clean code is my superpower! 💻 I follow best practices, optimize performance, and enjoy reviewing and improving codebases — something I practiced a lot during internships and tutoring.",
                  icon: "Code Review & Best Practices",
                },
                {
                  title: "Problem Solving",
                  description:
                    "I thrive on solving complex technical challenges. Whether it's debugging tricky issues or creating real-world solutions during hackathons, I approach every problem with logic, creativity, and persistence.",
                  icon: "Problem Solving",
                },
                {
                  title: "Technical Documentation",
                  description:
                    "I believe good documentation empowers teams and future developers. I’ve created detailed technical reports, system designs, and code documentation during my internships and tutoring sessions.",
                  icon: "Technical Documentation",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center justify-start mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-colors duration-300">
                      {skillIcons[skill.icon as keyof typeof skillIcons]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section
        id="chat"
        className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden flex items-center justify-center"
      >
        {/* Decorative blob shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center py-32 pt-60 pb-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl w-full mx-auto"
          >
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-medium mb-4"
              >
                Let's Chat
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
              >
                Let's Build Something Amazing
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                I'm here to help you with your development challenges. Whether
                you need code review, architecture advice, or help with a
                specific problem, I'm ready to assist.
              </motion.p>
            </div>

            {/* Chat interface wrapper with gradient border */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-center"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 rounded-3xl blur-sm opacity-70"></div>

              {/* Chat component */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/50 w-full">
                <ChatInterface />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Designed with 💜 and professional expertise
          </p>
        </div>
      </footer>
    </main>
  );
}
