'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-400 to-purple-500",
      items: [
        { name: "Flutter", level: 82 },
        { name: "Dart", level: 80 },
        { name: "React Native", level: 75 }
      ]
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      items: [
        { name: "Node.js", level: 78 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      category: "Design & Tools",
      icon: <Palette className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
      items: [
        { name: "Figma", level: 90 },
        { name: "Adobe Photoshop", level: 88 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Canva", level: 92 }
      ]
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      color: "from-violet-400 to-purple-500",
      items: [
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 68 }
      ]
    },
    {
      category: "Other Tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Firebase", level: 78 }
      ]
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            <span className="text-white">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-glow p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategory.color} text-white`}>
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-semibold text-white font-plus-jakarta">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skillCategory.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="card-glow p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development and design. 
              My passion for learning drives me to take on new challenges and expand my skill set continuously.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;