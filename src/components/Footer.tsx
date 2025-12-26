'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/wigenta_wldn/',
      color: 'hover:text-accent-pink'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/wildanwigenta',
      color: 'hover:text-accent-cyan'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/wildan-wigenta-28a853274/',
      color: 'hover:text-accent-pink'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:wildanwigenta52@gmail.com',
      color: 'hover:text-accent-cyan'
    }
  ];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-gradient-to-t from-background via-card-bg/50 to-transparent border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-pink rounded-lg flex items-center justify-center font-bold text-white text-xl glow p-1.5">
                <img src="/logo.png" width="" height="" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-plus-jakarta)]">
                  Wildan Wigenta
                </h3>
                <p className="text-sm text-gray-400">Web Developer | Graphic Designer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Crafting digital experiences through innovative web development and creative design solutions.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-accent-cyan font-[family-name:var(--font-plus-jakarta)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-accent-pink font-[family-name:var(--font-plus-jakarta)]">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-accent-cyan">Email:</span><br />
                wildanwigenta52@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-accent-pink">Location:</span><br />
                Yogyakarta, Indonesia
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full border border-border transition-all duration-300 ${social.color} hover:border-current group`}
                  >
                    <IconComponent size={20} className="text-gray-400 group-hover:text-current transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border my-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            © {currentYear} Wildan Wigenta
      
          </motion.p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg glow"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-border/50"
        >
          {/* <p className="text-gray-500 text-xs">
            This website is open source and available on{' '}
            <a 
              href="https://github.com/wildanwigenta/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-accent-pink transition-colors duration-300"
            >
              GitHub
            </a>
          </p> */}
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-pink/5 rounded-full blur-2xl"></div>
    </footer>
  );
};
export default Footer;