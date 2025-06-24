'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "test",
      description: "test2",
      image: "/logo.png",
      technologies: ["Next.js", "Tailwind CSS", "MySQL", "Laravel"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and smooth animations using Framer Motion and modern CSS techniques.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Framer Motion", "CSS3", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, typography, and marketing materials for a tech startup.",
      image: "/api/placeholder/400/300",
      technologies: ["Figma", "Photoshop", "CorelDraw", "Canva"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "A beautiful restaurant website with online reservation system, menu showcase, and location integration.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Mobile App UI Design",
      description: "Modern mobile application UI/UX design with intuitive navigation, clean interface, and engaging user experience.",
      image: "/api/placeholder/400/300",
      technologies: ["Figma", "Photoshop", "UI/UX", "Prototyping"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];
  
  const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-pink/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-105"></div>
        
        <div className="relative bg-card-bg/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-accent-cyan group-hover:shadow-2xl group-hover:scale-[1.02]">
          {/* Project Image */}
          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          
            {/* Placeholder image with gradient */}
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <p className="text-gray-400 text-sm">Project Preview</p>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              <motion.a
                href={project.githubUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-accent-cyan rounded-full text-white hover:bg-accent-cyan/80 transition-colors glow"
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href={project.liveUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-accent-pink rounded-full text-white hover:bg-accent-pink/80 transition-colors glow-pink"
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent-cyan transition-colors duration-300 font-[family-name:var(--font-plus-jakarta)]">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-2 py-1 bg-gradient-to-r from-accent-cyan to-accent-pink text-white text-xs rounded-full font-semibold">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-border/50 text-gray-300 text-xs rounded-full border border-border group-hover:border-accent-cyan/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-gray-300 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 flex-1 justify-center"
              >
                <Github size={16} />
                Code
              </a>
              
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-pink text-white rounded-lg text-sm hover:shadow-lg transition-all duration-300 flex-1 justify-center glow"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]">
            Featured <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my best work in web development and design, demonstrating creativity, technical skills, and attention to detail
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-pink mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
           <button className="group relative px-8 py-4 border-2 border-accent-cyan rounded-full font-semibold text-accent-cyan transition-all duration-300 hover:bg-accent-cyan hover:text-background hover:scale-105">
            <span className="flex items-center gap-2">
              <Github size={20} />
              View All Projects on GitHub
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;