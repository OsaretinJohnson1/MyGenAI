"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Trophy, Briefcase, Users } from "lucide-react";

const personalProjects: Array<{
  title: string;
  description: string;
  story?: string;
  tech?: string[];
  impact?: string;
  status?: string;
}> = [
    {
      title: "TelkomLearn Hackathon 2024",
      description: "2nd Place Winner",
      story: "Built a solution addressing educational accessibility in South Africa. The challenge was creating something meaningful in 48 hours that could actually help students.",
      tech: ["Next.js", "Firebase", "AI Integration"],
      impact: "Reached 500+ students in initial pilot",
    },
    {
      title: "Swedish-South African Student Virtual Exchange Hackathon 2024",
      description: "1st Place Winner",
      story: "Collaborated with international students to create a cross-cultural learning platform. This was my first international hackathon win!",
      tech: ["React", "Node.js", "WebRTC"],
      impact: "Connected students across two continents",
    },
    {
      title: "MICT-SETA Human Rights Hackathon 2025",
      description: "1st Place Winner",
      story: "Developed an AI-powered tool to help identify and address human rights issues in digital spaces. This project combined my passion for AI and social impact.",
      tech: ["Python", "Machine Learning", "NLP"],
      impact: "Selected for further development by MICT-SETA",
    },
    {
      title: "ELIDZ STP Hackathon 2025",
      description: "1st Place Winner",
      story: "Created a solution for local economic development challenges. The pressure was intense, but seeing the judges' reactions made it all worth it.",
      tech: ["ASP.NET", "SQL Server", "GIS Mapping"],
      impact: "Potential implementation in local development zones",
    },
    {
      title: "W&RSETA Hackathon 2025",
      description: "1st Place Winner",
      story: "Built a workforce development platform that helps match skills with opportunities. This one was personal - I wanted to help others find their path in tech.",
      tech: ["Next.js", "TypeScript", "AI Matching"],
      impact: "In discussions for pilot program",
    },
  ]

const appimateProjects: Array<{
  title: string;
  description: string;
  story?: string;
  tech?: string[];
  challenges?: string;
  status?: string;
}> = [
    {
      title: "Photha Admin Dashboard",
      description: "Admin dashboard and mobile app",
      story: "My first major project at Appimate. I built this from scratch, learning how to handle real-time data updates and complex state management.",
      tech: ["ASP.NET", "C#", "React Native", "SQL Server"],
      challenges: "Managing real-time Bluetooth device monitoring while keeping the UI responsive was tricky, but I learned a lot about async operations.",
    },
    {
      title: "The Waste Takers",
      description: "Web Application",
      story: "A waste management solution that connects communities with waste collection services. This project taught me about building user-friendly interfaces for non-technical users.",
      tech: ["Next.js", "Firebase", "Maps API"],
      challenges: "Integrating location services and ensuring data accuracy was challenging, but seeing it work in real neighborhoods made it worth it.",
    },
    {
      title: "Citizen TV",
      description: "Web Application",
      story: "A platform for citizen journalism and local news. This was exciting because it combined my interest in media and technology.",
      tech: ["React", "Node.js", "Video Streaming"],
      challenges: "Handling video uploads and streaming was new territory for me, but I enjoyed the learning process.",
    },
    {
      title: "Innocom Geospatial",
      description: "Web Application",
      story: "Built GIS analysis features for soil and plant reports. This project showed me how powerful data visualization can be for decision-making.",
      tech: ["ASP.NET", "GIS Libraries", "Data Visualization"],
      challenges: "Working with geospatial data was complex, but creating maps that actually helped farmers was incredibly rewarding.",
    },
    {
      title: "The Voice Lounge Admin",
      description: "Internal Web Application",
      story: "An internal tool for managing content and users. This taught me about building secure admin interfaces and handling permissions.",
      tech: ["ASP.NET", "Authentication", "Role Management"],
      challenges: "Implementing proper security and access controls was crucial here.",
    },
  ]

const cortexHubProjects: Array<{
  title: string
  description: string
  status?: string
}> = [
    {
      title: "The Cortex Hub Student Club",
      description: "Established 2024",
    },
    {
      title: "Arduino Sessions",
      description: "Holiday Camp 2024",
    },
    {
      title: "Dash Robot Session",
      description: "Holiday Camp 2024",
    },
    {
      title: "AI For Good",
      description: "Mentor 2025",
    },
    {
      title: "MCP Hackathon",
      description: "2025",
    },
  ]

interface ProjectColumnProps {
  title: string;
  icon: React.ReactNode;
  projects: Array<{
    title: string;
    description: string;
    story?: string;
    tech?: string[];
    impact?: string;
    challenges?: string;
    status?: string;
  }>;
  delay?: number;
}

function ProjectColumn({ title, icon, projects, delay = 0 }: ProjectColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {/* Category Header */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2"
      >
        <span className="text-purple-600 dark:text-purple-400">{icon}</span>
        {title}
      </motion.h3>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900 group cursor-pointer"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h4>
            {project.description && (
              <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">
                {project.description}
              </p>
            )}
            {project.story && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                {project.story}
              </p>
            )}
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.impact && (
              <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-2">
                💡 {project.impact}
              </p>
            )}
            {project.challenges && (
              <details className="mt-3">
                <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                  Challenges & Learnings
                </summary>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 pl-4 border-l-2 border-purple-200 dark:border-purple-700">
                  {project.challenges}
                </p>
              </details>
            )}
            {project.status && (
              <p className="text-sm text-pink-500 dark:text-pink-400 mt-2 font-medium">
                {project.status}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectColumn
            title="Personal"
            icon={<Trophy className="w-6 h-6" />}
            projects={personalProjects}
            delay={0}
          />
          <ProjectColumn
            title="Appimate"
            icon={<Briefcase className="w-6 h-6" />}
            projects={appimateProjects}
            delay={0.1}
          />
          <ProjectColumn
            title="Cortex Hub"
            icon={<Users className="w-6 h-6" />}
            projects={cortexHubProjects}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
