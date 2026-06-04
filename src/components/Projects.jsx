import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import clsx from 'clsx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Design', 'Other'];

  const projects = [
    {
      id: 1,
      title: 'Maternal Mental Health Monitoring System',
      category: 'Full Stack / AI',
      description: 'AI-powered maternal mental health system with ML models and NLP-based suicide risk detection.',
      longDescription:
        'Developed a maternal mental health monitoring system integrating machine learning and NLP. Built models using Logistic Regression, Random Forest, and SMOTE achieving 85% accuracy on PHQ-9 dataset. Implemented suicide risk detection for Roman Urdu text to improve accessibility for low-literacy users. Integrated Whisper AI for speech-to-text and developed a Flask backend in a collaborative team environment.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500',
      technologies: ['React', 'Tailwind CSS', 'Flask', 'Machine Learning', 'PostgreSQL', 'Whisper AI'],
      githubUrl: 'https://github.com/Zohaib-Karamat/FYP-Frontend.git',
      liveUrl: 'https://fyp-frontend-beta-pearl.vercel.app',
      featured: true,
      features: [
        'ML models with 85% accuracy (Logistic Regression, Random Forest, SMOTE)',
        'NLP-based suicide risk detection (Roman Urdu)',
        'Speech-to-text integration using Whisper AI',
        'Flask backend with API integration',
        'Team-based development (3 developers)',
        'Grade A (85%) FYP evaluation',
      ],
    },
    {
      id: 2,
      title: 'SkyCast Weather Dashboard',
      category: 'Frontend',
      description: 'Modern weather dashboard with real-time data, forecasts, and dynamic UI.',
      longDescription:
        'Built a responsive weather dashboard using React and Vite that provides real-time weather conditions and multi-day forecasts. Implemented a custom useWeather hook to manage API states and ensure stable UI rendering. Designed a glassmorphic interface with dynamic backgrounds based on weather conditions and added localStorage support for recent searches.',
      image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=500',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'WeatherAPI'],
      githubUrl: 'https://github.com/Zohaib-Karamat/Weather-App.git',
      liveUrl: 'https://weather-app-seven-roan-13.vercel.app/',
      featured: true,
      features: [
        'Real-time weather and multi-day forecasts',
        'City search with geolocation support',
        'Custom state management (useWeather)',
        'Dynamic UI based on weather conditions',
        'Glassmorphic modern design',
        'Recent searches stored in localStorage',
      ],
    },
    {
      id: 3,
      title: 'China Student Consultancy Platform',
      category: 'Frontend',
      description: 'Responsive consultancy platform for exploring universities, scholarships, and programs.',
      longDescription:
        'Developed responsive frontend interfaces for exploring universities, programs, scholarships, FAQs, gallery, and blog content. Designed scalable and reusable UI components and applied modern CSS techniques like Flexbox, Grid, and media queries. Also gained exposure to PHP file structure and templating.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      githubUrl: 'https://github.com/Zohaib-Karamat/China-Consultants-Website-Internship-Project.git',
      liveUrl: 'https://umerconsultant.dwcdesigners.online/',
      features: [
        'Responsive UI for multiple sections',
        'Reusable and scalable UI components',
        'Modern CSS (Flexbox, Grid, Media Queries)',
        'Adaptive layouts for all devices',
        'Exposure to PHP structure and templating',
      ],
    },
    {
      id: 4,
      title: 'UserHub - Complete User Management System',
      category: 'Full Stack',
      description:
        'A full-stack MERN application for comprehensive user data management with modern CRUD operations and professional UI/UX.',
      longDescription:
        'UserHub is a complete user management system built with the MERN stack featuring comprehensive CRUD operations, modern UI/UX with smooth animations, form validation with real-time feedback, toast notifications, and confirmation dialogs. The application includes loading states, comprehensive error handling, and responsive design that works seamlessly on both desktop and mobile devices.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500',
      technologies: ['React 19.1.1', 'Node.js', 'Express.js 5.1', 'MongoDB', 'Mongoose', 'Bootstrap 5.3', 'Vite'],
      githubUrl: 'https://github.com/Zohaib-Karamat/UserHub-Full-Stack-Web-App.git',
      liveUrl: 'https://user-hub-full-stack-web-app-z3an.vercel.app/',
      features: [
        'Complete CRUD operations (Create, Read, Update, Delete)',
        'Modern UI/UX with professional and responsive design',
        'Form validation with real-time error feedback',
        'Toast notifications for user-friendly messages',
        'Confirmation dialogs for safe deletion',
        'Loading states and enhanced UX indicators',
        'Comprehensive error handling on client and server',
        'Responsive design for desktop and mobile devices',
      ],
    },
    {
      id: 5,
      title: 'React Portfolio Website',
      category: 'Frontend',
      description:
        'Modern, fully responsive portfolio website using React.js and Tailwind CSS to showcase projects and achievements.',
      longDescription:
        'Developed a modern, fully responsive portfolio website using React.js and Tailwind CSS to showcase my projects and achievements. Integrated EmailJS to handle contact form submissions and deliver messages directly to email without a backend. Designed with reusable components, smooth animations, and a mobile-first approach, and deployed on Vercel for optimized performance and fast global access.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500',
      technologies: ['React.js', 'Tailwind CSS', 'EmailJS', 'Vercel', 'Framer Motion'],
      githubUrl: 'https://github.com/Zohaib-Karamat/Zohaib-Porfolio-Website.git',
      liveUrl: 'https://zohaib-porfolio-website.vercel.app/',
      features: [
        'Modern and clean design',
        'Smooth animations with Framer Motion',
        'Dark/Light theme toggle',
        'Fully responsive design',
        'Contact form integration with EmailJS',
        'SEO optimized and deployed on Vercel',
      ],
    },
    {
      id: 6,
      title: 'Interview Conductor',
      category: 'Frontend',
      description:
        'A Next.js web application that conducts MERN stack interview quizzes and provides feedback with learning resources.',
      longDescription:
        'Built a web application using Next.js and Tailwind CSS that conducts MERN stack interview quizzes, evaluates answers, and provides feedback with learning resources and recommendations. Deployed on Vercel for seamless access. Currently frontend-focused, with planned integration of Node.js, Express.js, and MongoDB to enable backend functionality such as question storage, candidate tracking, and result management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'React'],
      githubUrl: 'https://github.com/Zohaib-Karamat/Interview-Conductor-MERN-Stack.git',
      liveUrl: 'https://interview-conductor-mern-stack.vercel.app/',
      features: [
        'MERN stack interview quizzes',
        'Real-time answer evaluation',
        'Feedback with learning resources',
        'Recommendations for improvement',
        'Modern UI with Tailwind CSS',
        'Planned backend integration',
      ],
    },
    {
      id: 7,
      title: 'Netflix Clone',
      category: 'Frontend',
      description: 'Pixel-perfect, fully responsive Netflix landing page using HTML5, CSS3, and modern CSS techniques.',
      longDescription:
        'Developed a pixel-perfect, fully responsive Netflix landing page using HTML5, CSS3, and modern CSS Grid/Flexbox. Designed with a mobile-first approach, incorporating smooth animations and cross-browser compatibility to ensure seamless performance on all devices. Optimized images and CSS for fast load times, resulting in an enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500',
      technologies: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox', 'Responsive Design'],
      githubUrl: 'https://github.com/Zohaib-Karamat/Netflix-Clone.git',
      liveUrl: 'https://netflix-clone-liard-chi.vercel.app/',
      features: [
        'Pixel-perfect Netflix design recreation',
        'Fully responsive and mobile-first approach',
        'Modern CSS Grid and Flexbox layout',
        'Smooth animations and transitions',
        'Cross-browser compatibility',
        'Optimized performance and fast load times',
      ],
    },
    {
      id: 8,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Coming Soon',
      longDescription:
        'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management',
        'Responsive design for all devices',
      ],
    },
  ];

  const getProjectFilter = (project) => {
    const category = project.category.toLowerCase();
    if (category.includes('design')) return 'Design';
    if (category.includes('frontend') || category.includes('full stack') || category.includes('web')) {
      return 'Web';
    }
    return 'Other';
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => getProjectFilter(project) === activeFilter);

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

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '-100px 0px -100px 0px' }}
      className="py-24 bg-[var(--app-surface)]"
    >
      <motion.div variants={containerVariants} className="max-w-7xl mx-auto px-6">
        <motion.div variants={sectionVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-[var(--app-muted)] max-w-2xl mx-auto">
            A curated selection of builds that highlight my range across strategy, interface, and execution.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeFilter === filter
                  ? 'bg-[#6C63FF] text-[var(--app-text)] shadow-[0_10px_30px_rgba(108,99,255,0.25)]'
                  : 'border border-[var(--app-border)] text-[var(--app-muted)] hover:border-[#6C63FF] hover:text-[var(--app-text)]'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-[var(--app-elevated)] rounded-2xl overflow-hidden border border-[var(--app-border)] cursor-pointer transition-all duration-200 hover:border-[#6C63FF] hover:shadow-[0_0_30px_rgba(108,99,255,0.13)]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6584] text-white text-xs rounded-full px-3 py-1">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-white/40 text-white flex items-center justify-center"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-white/40 text-white flex items-center justify-center"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--app-muted)] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--app-text)] mb-2">{project.title}</h3>
                    <p className="text-sm text-[var(--app-muted)] line-clamp-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#6C63FF15] text-[#6C63FF] text-xs rounded-full px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

        <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--app-surface)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[var(--app-border)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--app-text)] mb-2">{selectedProject.title}</h3>
                    <span className="bg-[#6C63FF] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-[#6C63FF] text-[#6C63FF] text-sm"
                    >
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#6C63FF] text-white text-sm"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                <p className="text-[var(--app-muted)] leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--app-text)] mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[var(--app-elevated)] text-[var(--app-muted)] px-3 py-1 rounded-full text-xs border border-[var(--app-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--app-text)] mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[var(--app-muted)]"
                      >
                        <span className="w-2 h-2 bg-[#6C63FF] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
