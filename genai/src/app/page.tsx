"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  ChevronDown,
} from "lucide-react";
import ChatInterface from "./components/ChatInterface";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import About from "./components/About";

import Currently from "./components/Currently";
import Process from "./components/Process";

// Define sections in order of appearance
const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Expertise" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "currently", label: "Currently" },
  { id: "technical-skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            current = section.id;
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

  // Konami code easter egg
  useEffect(() => {
    let konamiCode: string[] = [];
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode.push(e.code);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      if (konamiCode.join(",") === konamiSequence.join(",")) {
        // Easter egg activated!
        document.body.style.animation = "rainbow 2s infinite";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 5000);
        konamiCode = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 100 + 50
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


  return (
    <main className="relative bg-gradient-to-tr from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="rounded-full p-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow-inner"
              >
                <Image
                  src="/assets/Osaretin - Cartoon 4.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </motion.div>
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Osaretin Johnson
              </span>
            </Link>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-8">
                {sections.map(
                  (section) => (
                    <Link
                      key={section.id}
                      href={`#${section.id}`}
                      className={`text-sm font-medium transition-colors duration-200 ${activeSection === section.id
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        }`}
                    >
                      {section.label}
                    </Link>
                  )
                )}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Navigation Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-3 items-center">
          {sections.map(
            (section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 scale-125 shadow-md"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                aria-label={`Scroll to ${section.label} section`}
              />
            )
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-32">
            {/* Avatar Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex-shrink-0 md:ml-24"
            >
              {/* Avatar with glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
              <video
                src="/assets/372658644871753734.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-[80%] shadow-xl border-4 border-white z-20 relative w-[140px] h-[200px] object-cover"
                style={{ aspectRatio: "0.7/1", objectFit: "cover" }}
              />

              {/* Decorative circles around avatar */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-48 h-[270px] border border-pink-300 rounded-[80%] -translate-x-1/2 -translate-y-1/2"
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
                className="absolute top-1/2 left-1/2 w-64 h-[360px] border border-purple-300 rounded-[80%] -translate-x-1/2 -translate-y-1/2"
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

            {/* Text Content - Right Side */}
            <div className="flex-1 text-left md:mr-24 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Osaretin Johnson
                <div className="relative block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 relative z-10 text-lg sm:text-xl md:text-2xl">
                    Software Engineer | AI Enthusiast
                  </span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                I'm Osaretin Johnson, a software engineer from East London, South Africa.
                What started as curiosity about how apps work led me to win 5 hackathons and
                build solutions that actually matter. When I'm not coding, you'll find me
                teaching Arduino workshops at Cortex Hub or exploring how AI can serve
                communities across South Africa. Let's build something meaningful together!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-24"
              >
                <Link
                  href="#chat"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsChatOpen(true);
                  }}
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
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link
              href="#skills"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors duration-300"
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
      </section>

      {/* Expertise Section */}
      <Expertise />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <Projects />

      {/* Process Section */}
      <Process />

      {/* Currently Section */}
      {/* <Currently /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Technical Skills Section */}
      <Skills />

      {/* Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsChatOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ChatInterface />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Designed with love and flair by Osaretin Johnson!
          </p>
        </div>
      </footer>
    </main>
  );
}
