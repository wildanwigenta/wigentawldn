'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Palette, Zap, Database, Rocket, Wind, PenTool, Sparkles, Image, Brush } from 'lucide-react';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'HTML', icon: <Globe size={24} />, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: <Palette size={24} />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: <Zap size={24} />, color: 'from-yellow-500 to-orange-500' },
    { name: 'MySQL', icon: <Database size={24} />, color: 'from-blue-600 to-blue-800' },
    { name: 'Laravel', icon: <Rocket size={24} />, color: 'from-red-500 to-pink-500' },
    { name: 'Tailwind', icon: <Wind size={24} />, color: 'from-cyan-400 to-blue-500' },
  ];
  
  
  const designSkills = [
    { name: 'Figma', icon: <PenTool size={24} />, color: 'from-purple-500 to-pink-500' },
    { name: 'CorelDraw', icon: <Sparkles size={24} />, color: 'from-green-500 to-teal-500' },
    { name: 'Photoshop', icon: <Image size={24} />, color: 'from-blue-600 to-purple-600' },
    { name: 'Canva', icon: <Brush size={24} />, color: 'from-pink-500 to-rose-500' },
  ];
  
  
  const SkillCard = ({ skill, index, delay }: { skill: any, index: number, delay: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay }}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 10,
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
        className="group relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl scale-110 from-accent-cyan to-accent-pink"></div>
        
        <div className="relative bg-card-bg/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 group-hover:border-accent-cyan group-hover:shadow-2xl">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
          </div>
          
          {/* Skill name */}
          <h3 className="text-center font-semibold text-lg text-foreground group-hover:text-accent-cyan transition-colors duration-300">
            {skill.name}
          </h3>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-cyan bg-[length:200%_100%] animate-pulse"></div>
            <div className="absolute inset-[1px] rounded-xl bg-card-bg"></div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]">
            My <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A comprehensive toolkit of technologies and design tools that I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-pink mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Programming Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-accent-cyan" size={28} />
            <h3 className="text-2xl sm:text-3xl font-bold text-accent-cyan font-[family-name:var(--font-plus-jakarta)]">
              Programming
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {programmingSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Design Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Palette className="text-accent-pink" size={28} />
            <h3 className="text-2xl sm:text-3xl font-bold text-accent-pink font-[family-name:var(--font-plus-jakarta)]">
              Design
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {designSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card-bg/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-accent-cyan">
              Always Learning, Always Growing
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and design trends 
              to stay at the forefront of web development and design. My passion for learning drives me to experiment 
              with emerging technologies and incorporate them into my workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;