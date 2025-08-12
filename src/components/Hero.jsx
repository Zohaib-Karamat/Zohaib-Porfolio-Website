/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState, useEffect, useMemo } from 'react';
import profileImage from '../assets/profile_placeholder.jpeg'; 

/**
 * Hero section with animated text and call-to-action buttons
 */
const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Texts to cycle through - memoized to avoid dependency issues
  const texts = useMemo(() => [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ], []);

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex pt-20 items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary-200 to-primary-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
            >
              <img src={profileImage} alt="Zohaib" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Zohaib</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              I'm a{' '}
              <span className="text-primary-500 dark:text-primary-400">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating beautiful, functional, and user-friendly digital experiences.
            I specialize in modern web technologies and love bringing ideas to life through code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2"
            >
              <FiMail />
              Hire Me
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-secondary flex items-center gap-2"
            >
              View My Work
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Zohaib_Resume.pdf"
              download
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              <FiDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pl-5 space-x-6 pb-12"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/zohaib-karamat', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/zohaibkaramat/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
