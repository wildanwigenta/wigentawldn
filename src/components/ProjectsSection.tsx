'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills and projects.",
      image: "/project-img/porto.png",
      technologies: ["Next.js", "Tailwind CSS", ],
      githubUrl: "https://github.com/wildanwigenta/wigentawldn",
      liveUrl: "wildanwigenta.vercel.app",
      featured: false
    },
    {
      id: 2,
      title: "Online Auction Website",
      description: "A responsive online auction website built with Laravel and Bootstrap CSS, providing a platform for users to create and bid on items.",
      image: "/project-img/lelang.png",
      technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
      githubUrl: "https://github.com/wildanwigenta/lelang_online",
      liveUrl: "https://github.com/wildanwigenta/lelang_online",
      featured: false
    },
    {
      id: 3,
      title: "Foundation Website",
      description: "A responsive foundation website built with CodeIgniter and Bootstrap CSS, providing information about the foundation's mission, vision, and team.",
      image: "/project-img/yayasan.png",
      technologies: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/wildanwigenta/yayasan",
      liveUrl: "https://github.com/wildanwigenta/yayasan",
      featured: false
    },
    {
      id: 4,
      title: "Informatics Student Association website",
      description: "A responsive website for the Informatics Student Association, providing information about events, news, and resources for students.",
      image: "/project-img/himaforka.png",
      technologies: ["Photoshop", "CorelDraw", "Javascript","Bootstrap"],
      githubUrl: "https://github.com/wildanwigenta/himaforka",
      liveUrl: "himaforka.netlify.app",
      featured: false
    },
    {
      id: 5,
      title: "Film Review Website",
      description: "film review website with a user-friendly interface and a responsive design, allowing users to browse and search for movies. using rest-api",
      image: "",
      technologies: ["Laravel", "Bootstrap", "Rest-api", "CorelDraw"],
      githubUrl: "https://github.com/wildanwigenta/film_wei",
      liveUrl: "https://github.com/wildanwigenta/film_wei",
      featured: false
    },
    {
      id: 6,
      title: "Electricity Payment Website",
      description: "A responsive website for electricity payment, providing users with a seamless payment process and payment history.",
      image: "",
      technologies: ["Laravel", "Bootstrap", "MySQL", "Prototyping"],
      githubUrl: "https://github.com/wildanwigenta/pembayaran-listrik",
      liveUrl: "https://github.com/wildanwigenta/pembayaran-listrik",
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
              
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
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
                target="_blank"
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
        <a href="https://github.com/wildanwigenta" target='_blank'>
           <button className="group relative px-8 py-4 border-2 border-accent-cyan rounded-full font-semibold text-accent-cyan transition-all duration-300 hover:bg-accent-cyan hover:text-background hover:scale-105">
            <span className="flex items-center gap-2">
              <Github size={20} />
              View All Projects on GitHub
            </span>
          </button>
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;