'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]"
          >
            <span className="bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              Wildan
            </span>
            <br />
            <span className="text-foreground">Wigenta</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 font-light"
          >
            <span className="text-accent-cyan">Web Developer</span> |{' '}
            <span className="text-accent-pink">Graphic Designer</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Passionate Computer Science student crafting digital experiences through innovative web development and creative design solutions.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <a href="/Wildan_Wigenta-CV.pdf" target="_blank">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 glow hover:shadow-2xl">
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download CV
              </span>
            </button>
            </a>
            
            <a href="mailto:wildanwigenta52@gmail.com">
            <button className="group relative px-8 py-4 border-2 border-accent-cyan rounded-full font-semibold text-accent-cyan transition-all duration-300 hover:bg-accent-cyan hover:text-background hover:scale-105">
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </span>
            </button>
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <a href="#" className="p-3 rounded-full border border-border hover:border-accent-cyan transition-all duration-300 hover:glow group">
              <Github size={24} className="text-gray-400 group-hover:text-accent-cyan transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full border border-border hover:border-accent-pink transition-all duration-300 hover:glow-pink group">
              <Linkedin size={24} className="text-gray-400 group-hover:text-accent-pink transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full border border-border hover:border-accent-cyan transition-all duration-300 hover:glow group">
              <Mail size={24} className="text-gray-400 group-hover:text-accent-cyan transition-colors" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Hero Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Placeholder for illustration - you can replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-accent-cyan/20 to-accent-pink/20 rounded-full flex items-center justify-center glow-purple">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-accent-cyan">WW</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-16 h-16 bg-accent-cyan/20 rounded-lg glow"
            ></motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-12 h-12 bg-accent-pink/20 rounded-full glow-pink"
            ></motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;