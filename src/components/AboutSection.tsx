'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]">
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-pink mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/30 to-accent-pink/30 rounded-full blur-xl scale-110"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-gradient-to-br from-accent-cyan to-accent-pink glow-purple">
                {/* Placeholder for actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-card-bg to-primary flex items-center justify-center">
                    <Image src="/wildan_crop.png" alt="Profile" width={170} height={170} className="absolute z-10 object-contain" />
                    <div className="w-48 h-48 bg-gradient-to-br from-accent-cyan to-accent-pink rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                </div>
              </div>

            {/* Tombol Lihat Sertifikat */}
            <div className="mt-10 text-center lg:text-left float-end">
  <a
    href="/certificates"
    className="relative inline-block px-8 py-3 font-medium text-white group"
  >
    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="relative flex items-center justify-center gap-2">
      <span>My Certificate</span>
    </span>
  </a>
</div>
  
              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent-cyan rounded-lg"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-pink rounded-full glow-pink"
              ></motion.div>
            </div>



          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-accent-cyan font-[family-name:var(--font-plus-jakarta)]">
                Hello, I am Wildan Wigenta
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a Computer Science student with a strong passion for creating meaningful digital experiences. 
                My journey in the world of technology began with curiosity and has grown into a dedicated pursuit of excellence in 
                web development and graphic design.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                As a <span className="text-accent-cyan font-semibold">Web Developer</span>, I specialize in building modern, 
                responsive applications using technologies such as React, Next.js, Laravel, and Tailwind CSS. 
                I believe in writing clean, maintainable code that not only performs well but also delivers an 
                outstanding user experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My skill in <span className="text-accent-pink font-semibold">Graphic Design</span> perfectly complement my development expertise.
                By leveraging tools like Figma, Adobe Photoshop, and CorelDRAW, I design visually compelling interfaces 
                that are both functional and aesthetically pleasing.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I am committed to continuous learning and staying up-to-date with the latest technologies and industry trends.
                My goal is to bridge the gap between design and development, creating seamless, innovative digital solutions 
                that exceed expectations.
              </p>
            </div>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-card-bg/50 rounded-lg border border-border hover:border-accent-cyan transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent-cyan mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-card-bg/50 rounded-lg border border-border hover:border-accent-pink transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent-pink mb-2">30+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;