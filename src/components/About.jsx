/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

/**
 * About section with profile information and skills
 */
const About = () => {
  // Skills data with categories
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiLayout,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 82 }
      ]
    },
    {
      title: 'Backend',
      icon: FiServer,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 78 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      title: 'Tools',
      icon: FiCode,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Who am I?
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer with a strong focus on creating 
                    exceptional digital experiences. With expertise in modern web technologies, 
                    I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                  </p>
                  
                  <p>
                    My journey in web development started with curiosity about how websites work, 
                    and it has evolved into a passion for creating applications that not only look 
                    great but also provide seamless user experiences.
                  </p>
                  
                  <p>
                    I'm constantly learning and staying up-to-date with the latest technologies 
                    and best practices in the field. I believe in writing clean, maintainable code 
                    and following industry standards.
                  </p>
                </div>

                {/* Personal Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Skills
              </h3>
              
              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <category.icon className="text-primary-500 mr-3" size={24} />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              variants={skillBarVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              custom={skill.level}
                              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interested in working together? Let's create something amazing!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
