import { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

/**
 * Projects section with portfolio items and modal details
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A modern e-commerce platform built with React and Node.js',
      longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with React, Node.js, Express, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management',
        'Responsive design for all devices'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'A collaborative task management application with real-time updates',
      longDescription: 'A productivity app that helps teams manage their tasks efficiently with real-time collaboration features, drag-and-drop interface, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Real-time collaboration',
        'Drag and drop task management',
        'Team member assignment',
        'Progress tracking and analytics',
        'Dark/Light theme support',
        'Mobile responsive design'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'A beautiful weather application with location-based forecasts',
      longDescription: 'An elegant weather dashboard that provides current weather conditions, 7-day forecasts, and weather maps with location-based services and beautiful animations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      technologies: ['React', 'API Integration', 'Charts.js', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Current weather conditions',
        '7-day weather forecast',
        'Location-based weather data',
        'Interactive weather maps',
        'Weather charts and graphs',
        'Beautiful animations and transitions'
      ]
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Full Stack',
      description: 'Analytics dashboard for social media management',
      longDescription: 'A comprehensive social media management platform with analytics, post scheduling, and engagement tracking across multiple social platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Multi-platform social media integration',
        'Analytics and reporting dashboard',
        'Post scheduling and automation',
        'Engagement tracking and metrics',
        'Team collaboration tools',
        'Custom reporting and exports'
      ]
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'Full Stack',
      description: 'Educational platform for online courses and assessments',
      longDescription: 'A complete learning management system with course creation, student enrollment, assessments, and progress tracking for educational institutions.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Course creation and management',
        'Student enrollment and tracking',
        'Interactive assessments and quizzes',
        'Progress tracking and analytics',
        'Discussion forums and messaging',
        'Certificate generation'
      ]
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'Modern and responsive portfolio website',
      longDescription: 'A sleek and modern portfolio website built with React and Framer Motion, featuring smooth animations, dark mode, and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Modern and clean design',
        'Smooth animations with Framer Motion',
        'Dark/Light theme toggle',
        'Fully responsive design',
        'Contact form integration',
        'SEO optimized'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: 0.1, 
            margin: "-100px 0px -100px 0px",
            root: null 
          }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid-fallback">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="project-card-fallback bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col min-h-[400px]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 sm:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 mt-auto">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="mr-1" size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink className="mr-1" size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex flex-row sm:flex-row space-x-4 w-full sm:w-auto">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 flex-1 sm:flex-none justify-center text-sm"
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 flex-1 sm:flex-none justify-center text-sm"
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
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
    </section>
  );
};

export default Projects;
