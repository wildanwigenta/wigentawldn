'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Heart } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content - Photo */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Photo Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden card-glow relative">
                {/* Placeholder for actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center">
                  {/* <div className="text-6xl gradient-text font-bold">ww</div> */}
                  <Image src="/profile.jpg" width={100} height={100} alt="Profile" />
                </div>
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                🚀 Available for work
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - About Info */}
          <motion.div
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold mb-6 font-plus-jakarta"
            >
              <span className="text-white">About </span>
              <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate Computer Science student with a deep love for creating digital experiences 
              that combine functionality with beautiful design. My journey in tech started with curiosity 
              and has evolved into a dedication to crafting solutions that make a difference.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              When I'm not coding or designing, you'll find me exploring new technologies, 
              contributing to open-source projects, or sketching ideas for my next creative venture.
            </motion.p>

            {/* Passion Points */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <motion.div
                variants={fadeInUp}
                className="card-glow p-4 rounded-xl text-center"
              >
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Clean Code</h3>
                <p className="text-sm text-gray-400">Writing maintainable, efficient code</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="card-glow p-4 rounded-xl text-center"
              >
                <Palette className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Creative Design</h3>
                <p className="text-sm text-gray-400">Crafting beautiful user experiences</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="card-glow p-4 rounded-xl text-center"
              >
                <Coffee className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Problem Solving</h3>
                <p className="text-sm text-gray-400">Finding innovative solutions</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="card-glow p-4 rounded-xl text-center"
              >
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">User Focus</h3>
                <p className="text-sm text-gray-400">Putting users at the center</p>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;