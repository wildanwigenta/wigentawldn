'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
      githubUrl: "https://github.com/wildanwigenta/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/wildanwigenta/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      category: "Web Development",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "A Flutter-based fitness tracking app with workout plans, progress tracking, and social features for fitness enthusiasts.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      githubUrl: "https://github.com/wildanwigenta/fitness-app",
      liveUrl: "#",
      category: "Mobile Development",
      featured: false
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete brand identity design for a tech startup including logo, color palette, typography, and brand guidelines.",
      image: "/api/placeholder/600/400",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      githubUrl: "#",
      liveUrl: "https://behance.net/wildanwigenta",
      category: "Graphic Design",
      featured: false
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com/wildanwigenta/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      category: "Web Development",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/wildanwigenta/portfolio",
      liveUrl: "https://wildanwigenta.vercel.app",
      category: "Web Development",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-plus-jakarta">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and graphic design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`card-glow rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 overflow-hidden">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-4xl gradient-text font-bold">{project.title.charAt(0)}</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-plus-jakarta group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary px-4 py-2 rounded-lg text-center text-sm hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary px-4 py-2 rounded-lg text-center text-sm hover:scale-105 transition-transform"
                    >
                      <Eye className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="card-glow p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects and contributions to open-source communities.
            </p>
            <a
              href="https://github.com/wildanwigenta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 rounded-full inline-flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;