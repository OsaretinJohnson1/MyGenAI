"use client";

import type React from "react";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Briefcase, Users, X } from "lucide-react";

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
      description: "Harmony Education System - 2nd Place Winner",
      story: "Developed during the Telkom Eastern Cape Hackathon, this inclusive digital learning platform emerged from a mission to democratize education in South Africa. Team Harmony recognized that traditional educational barriers, language, accessibility, and resource availability, disproportionately affected rural and underserved communities. The system was born from a 48-hour intense development sprint where our team tackled the challenge of creating an accessible, multilingual learning environment that could scale across South Africa's diverse linguistic landscape.",
      tech: ["ASP.NET Web Forms", "C#", ".NET Framework 4.7.2", "SQL Server", "Bootstrap 5.3.3", "Web Speech API", "ADO.NET", "DocumentFormat.OpenXml", "iTextSharp"],
      status: "2nd Place Winner - Telkom Eastern Cape Hackathon 2024",
    },
    {
      title: "Swedish-South African Student Virtual Exchange Hackathon 2024",
      description: "Integrated Renewable Energy Solution - 1st Place Winner",
      story: "In many rural areas, communities are trapped between the high costs of diesel generators and the health hazards of kerosene lamps. Our international team designed a conceptual, integrated solution to break this cycle by converting local organic waste into clean biogas, empowering farmers and small business owners with a reliable, self-sustaining energy source. This collaborative project brought together students from Rhodes University (RU), Malmö University (MAU), and the University of Fort Hare (UFH).",
      tech: ["Biogas Technology", "IoT Sensors", "AI Predictive Maintenance", "Pay-As-You-Go Payment System", "Mobile App Interface", "Waste-to-Energy Conversion"],

      status: "1st Place Winner - International Collaboration (Rhodes Univeristy, Malmö University, Univeristy of Fort Hare)",
    },
    {
      title: "MICT-SETA Human Rights Hackathon 2025",
      description: "Pulse-AI: Intelligent Emergency Medical Services Allocation System - 1st Place Winner",
      story: "In a critical hackathon challenge addressing healthcare disparities in rural South Africa, EMS-AI emerged as an innovative solution to optimize emergency medical response in underserved communities. The system tackles the real-world challenge of efficiently allocating limited ambulance resources across vast geographic areas, where response times can mean the difference between life and death. This project was developed during an intensive human rights hackathon focused on leveraging technology to address systemic healthcare inequalities.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "React Leaflet", "OpenAI API", "Botsonic", "Recharts", "React Three Fiber"],
      status: "1st Place Winner - MICT-SETA Human Rights Hackathon 2025",
    },
    {
      title: "ELIDZ STP Hackathon 2025",
      description: "AI-Powered SMME Funding Platform - 1st Place Winner",
      story: "This enterprise-grade platform revolutionizes how small and medium businesses access funding opportunities in South Africa. Built for ELIDZ-STP (a funding intermediary), the system serves as an intelligent bridge between SMMEs and financial institutions, addressing the critical challenge of funding accessibility for underrepresented entrepreneurs. The platform features a sophisticated AI matching algorithm that analyzes business profiles against funding opportunities, achieving 85-95% match accuracy.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Drizzle ORM", "PostgreSQL", "Groq AI", "OpenAI", "NextAuth.js", "Twilio", "Supabase", "Vercel"],

      status: "1st Place Winner - ELIDZ STP Hackathon 2025",
    },
    {
      title: "W&RSETA Hackathon 2025",
      description: "ID Verification & Authentication System - 1st Place Winner",
      story: "Built a full-stack ID verification platform for W&RSETA to verify South African ID numbers and passports against Home Affairs databases. The system streamlines learner registration, automates bulk verification, and provides analytics for compliance and reporting. This comprehensive solution addresses workforce development challenges by ensuring accurate learner data and efficient registration processes.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "ASP.NET Web API 2.0", "VB.NET", ".NET Framework 4.7.2", "SQL Server", "Entity Framework", "OpenAI API", "JWT"],

      status: "1st Place Winner - W&RSETA Hackathon 2025",
    },
  ]

const appimateProjects: Array<{
  title: string;
  description: string;
  story?: string;
  tech?: string[];
  challenges?: string;
  impact?: string;
  status?: string;
}> = [
    {
      title: "Photha - Advanced Braiding Device Management Platform",
      description: "IoT Platform for Professional Hairstyling Technology",
      story: "Client project: Photha is an IoT platform that bridges traditional hairstyling craftsmanship with cutting-edge technology. As the lead developer, I built this comprehensive web platform that provides professional hairstylists with intelligent control over advanced braiding devices, combining real-time data analytics, device management, and community collaboration features.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "Socket.io", "Radix UI", "Three.js", "React Three Fiber", "Google Maps React API", "NextAuth.js"],


    },
    {
      title: "WasteTakers - Smart Waste Management Platform",
      description: "Full-Stack Smart Waste Collection Solution",
      story: "Client project: WasteTakers addresses the growing need for efficient waste management solutions in urban South African communities. As the lead developer, I built this comprehensive platform to digitize and optimize waste collection operations, connecting residents, businesses, and waste management companies through technology for sustainable urban development.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React", "Framer Motion", "MapLibre GL", "NextAuth.js", "class-variance-authority"],


    },
    {
      title: "CitizenTV - Modern News & Content Platform",
      description: "Full-Stack News Platform for Citizen Journalism",
      story: "Client project: CitizenTV is a comprehensive news and content platform that empowers citizen journalists. As the lead developer, I built this full-stack platform with enterprise-level features supporting multiple user roles, advanced content management, real-time interactions, and personalized experiences with location-based content.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "Supabase", "PostgreSQL", "Drizzle ORM", "Zustand", "React Query", "Vercel"],


    },
    {
      title: "InnoCom-GeoSpatial: Pioneering Sustainable Geospatial Intelligence",
      description: "Enterprise-Grade Environmental Intelligence Platform",
      story: "Client project: InnoCom-GeoSpatial democratizes geospatial intelligence for sustainable development. As the lead developer, I built this comprehensive platform that bridges cutting-edge satellite technology with practical field applications, serving organizations across agriculture, forestry, mining, and infrastructure sectors with real-time, actionable geospatial insights.",
      tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Firebase", "Google Earth Engine API", "Google Maps API", "Leaflet", "Node.js"],


    },
    {
      title: "The Voice Lounge Admin Web Application",
      description: "Comprehensive Media Operations Dashboard",
      story: "Client project: The Voice Lounge is a dynamic media hub in East London combining online radio, podcast studio, and recording studio operations. As the lead developer, I built their comprehensive admin web application to manage all aspects of their media operations, from scheduling live shows and content management to tracking analytics and user administration.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "Supabase", "PostgreSQL", "NextAuth.js v5"],

    },
  ]

const cortexHubProjects: Array<{
  title: string
  description: string
  story?: string
  status?: string
}> = [
    {
      title: "The Cortex Hub Student Club",
      description: "Community Building & Student Engagement",
      story: "I started the student club to get everyone talking and involved at the hub. I made sure to share all the latest updates, opportunities, and event info with the students. It really helped create a stronger student community and made everyone feel like they belonged.",
      status: "Established 2024",
    },
    {
      title: "Arduino Sessions",
      description: "Arduino Programming for Young Innovators",
      story: "I planned and ran Arduino workshops for primary and high school kids during the school holidays. It was great introducing young learners to programming and electronics.",
      status: "Holiday Camp 2024",
    },
    {
      title: "Dash Robot Sessions",
      description: "Hands-On Robotics Learning Experience",
      story: "I led hands-on sessions with Dash robots, teaching kids the basics of robotics. I also helped out at holiday camps, keeping students engaged and making sure everything ran smoothly.",
      status: "Holiday Camp 2024",
    },
    {
      title: "AI For Good 2025",
      description: "AI & Robotics Youth Development Program",
      story: "I was selected as a mentor for the AI for Good – Robotics for Good Youth Challenge. I helped young teams work through problems and develop their robotics projects.",
      status: "Mentor 2025",
    },
    {
      title: "MCP Hackathon Africa 2025",
      description: "Hackathon Planning & Digital Marketing",
      story: "I helped plan and coordinate the MCP Hackathon, and I also created social media videos to get more people excited and involved in the event.",
      status: "Organiser 2025",
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
        {projects.map((project, index) => {
          const hasDetails = project.story || project.tech || project.impact || project.challenges || project.status;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.description && (
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mt-1">
                        {project.description}
                      </p>
                    )}
                  </div>
                  {hasDetails && (
                    <button
                      onClick={() => openModal(project)}
                      className="ml-4 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors duration-200 flex-shrink-0"
                    >
                      See More
                    </button>
                  )}
                </div>

                {/* Preview content */}
                <div className="mb-4">
                  {project.story && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.story.length > 150 ? `${project.story.substring(0, 150)}...` : project.story}
                    </p>
                  )}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.description && (
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {selectedProject.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  {selectedProject.story && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Details</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.story}
                      </p>
                    </div>
                  )}

                  {selectedProject.tech && selectedProject.tech.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.impact && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Impact & Outcomes</h4>
                      <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
                        <p className="text-pink-700 dark:text-pink-300 font-medium">
                          💡 {selectedProject.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedProject.challenges && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Challenges & Learnings</h4>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedProject.status && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Status</h4>
                      <div className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {selectedProject.status}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
