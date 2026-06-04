import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile_placeholder.jpeg';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const typedText = useTypewriter(
    ['MERN Stack Developer', 'React Developer', 'JS Developer'],
    80,
    1800
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.04 },
    }),
  };

  const greeting = "Hello, I'm";

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="home"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#6C63FF] opacity-10 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#FF6584] opacity-10 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        <motion.div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center justify-center rounded-full p-[3px]">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(#6C63FF,#FF6584,#6C63FF)] animate-spin-slow" />
            <div className="relative rounded-full bg-[var(--app-bg)] p-[3px]">
              <img
                src={profileImage}
                alt="Zohaib"
                className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-4 text-[var(--app-muted)] text-base tracking-[0.35em] uppercase">
          {greeting.split('').map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              variants={letterVariants}
              custom={index}
              className={letter === ' ' ? 'inline-block w-2' : 'inline-block'}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
            Zohaib
          </span>
        </motion.h1>

        <motion.div className="text-xl md:text-3xl font-semibold text-[var(--app-text)] mb-6">
          I'm a{' '}
          <span className="text-[#6C63FF]">
            {typedText}
            <span className="border-r-2 border-[#6C63FF] pr-1 cursor-blink" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[var(--app-muted)] max-w-xl mx-auto mb-10"
        >
          Passionate about building immersive digital experiences that balance clarity, personality, and
          performance. I craft user-first interfaces with modern tools and a thoughtful eye for detail.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="px-8 py-3 rounded-full bg-[#6C63FF] hover:bg-[#5A52E0] text-[var(--app-text)] font-medium transition-all duration-200 hover:animate-glow-pulse"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={18} />
              Hire Me
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-full border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF10] font-medium transition-all duration-200"
          >
            View My Work
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="./Zohaib_Resume.pdf"
            download="Zohaib_Resume.pdf"
            className="inline-flex items-center gap-2 text-[var(--app-muted)] hover:text-[var(--app-text)] transition-colors duration-200"
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div className="flex justify-center gap-4 mb-12">
          {[
            { icon: Github, href: 'https://github.com/zohaib-karamat', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/zohaibkaramat/', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-[var(--app-border)] text-[var(--app-muted)] flex items-center justify-center transition-all duration-200 hover:border-[#6C63FF] hover:text-[var(--app-text)]"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 text-[var(--app-muted)]"
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
