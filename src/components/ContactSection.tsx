'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
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
      color: 'hover:text-accent-cyan hover:border-accent-cyan',
      glow: 'hover:glow'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/wildan-wigenta-28a853274/',
      color: 'hover:text-accent-pink hover:border-accent-pink',
      glow: 'hover:glow-pink'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:wildanwigenta52@gmail.com',
      color: 'hover:text-accent-cyan hover:border-accent-cyan',
      glow: 'hover:glow'
    }
  ];
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta)]">
            Get In <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? I had love to hear from you. Lets create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-pink mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-accent-cyan font-[family-name:var(--font-plus-jakarta)]">
                Lets Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I am always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and design. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-card-bg/50 rounded-lg border border-border hover:border-accent-cyan transition-all duration-300"
              >
                <div className="p-3 bg-accent-cyan/20 rounded-full">
                  <Mail className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-foreground font-semibold">wildanwigenta52@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-card-bg/50 rounded-lg border border-border hover:border-accent-pink transition-all duration-300"
              >
                <div className="p-3 bg-accent-pink/20 rounded-full">
                  <MapPin className="text-accent-pink" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-foreground font-semibold">Yogyakarta, Indonesia</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-card-bg/50 rounded-lg border border-border hover:border-accent-cyan transition-all duration-300"
              >
                <div className="p-3 bg-accent-cyan/20 rounded-full">
                  <Phone className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-foreground font-semibold">Within 24 hours</p>
                </div>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-full border border-border transition-all duration-300 ${social.color} ${social.glow} group`}
                    >
                      <IconComponent size={24} className="text-gray-400 group-hover:text-current transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-bg/80 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink font-[family-name:var(--font-plus-jakarta)]">
                Send Message
              </h3>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-border focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-border focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-border focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-cyan to-accent-pink hover:shadow-2xl glow'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;