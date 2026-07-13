import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Senew Tech',
    location: 'Lahore, Pakistan',
    period: 'Jun 2026 – Present',
    type: 'Full-time', // Feel free to change to 'Contract' or 'Part-time' if applicable
    bullets: [
      'Engineered and maintained robust full-stack web applications utilizing the MERN stack alongside Next.js and Nest.js within a high-performing development team.',
      'Architected scalable RESTful APIs, optimized CRUD operations, and seamlessly integrated complex frontend components with secure backend services.',
      'Collaborated closely with senior engineers using Git version control and Agile methodologies to deliver high-quality features on strict production schedules.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Next.js', 'Nest.js', 'Node.js', 'REST APIs', 'Git', 'Agile'],
  },
  {
    role: 'MERN Stack Intern',
    company: 'Amrood Labs',
    location: 'Lahore, Pakistan',
    period: 'Apr 2026 – Jun 2026',
    type: 'Internship',
    bullets: [
      'Gained hands-on experience with the MERN stack (MongoDB, Express.js, React, and Node.js) through structured training and practical assignments.',
      'Practiced building RESTful APIs, implementing CRUD operations, and connecting frontend applications with backend services.',
      'Learned industry-standard development workflows, including Git version control, code reviews, and collaborative software development practices.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Git'],
  },
];
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Experience = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="py-24 px-6 bg-[var(--app-bg)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              Experience
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: headingInView ? 60 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 -bottom-3 h-0.5 -translate-x-1/2 bg-[#6C63FF]"
            />
          </h2>
          <p className="mt-6 text-[var(--app-muted)] max-w-xl mx-auto">
            Real-world experience that shaped my understanding of full-stack development and professional workflows.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF] via-[#FF6584] to-transparent opacity-30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-5 h-5 rounded-full border-2 border-[#6C63FF] bg-[var(--app-bg)] flex items-center justify-center animate-glow-pulse"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-full">
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(108,99,255,0.18)' }}
                  transition={{ duration: 0.25 }}
                  className="relative bg-[var(--app-elevated)] border border-[var(--app-border)] rounded-2xl p-7 overflow-hidden group"
                >
                  {/* Glow accent */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#6C63FF] opacity-[0.06] blur-[60px] rounded-full group-hover:opacity-10 transition-opacity duration-500" />

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      {/* Icon badge */}
                      <div className="mt-1 flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center shadow-lg">
                        <Briefcase size={20} className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[var(--app-text)]">{exp.role}</h3>
                        <p className="text-[#6C63FF] font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                    </div>

                    {/* Badge */}
                    <span className="self-start sm:self-auto text-xs font-medium px-3 py-1 rounded-full border border-[#6C63FF]/40 text-[#6C63FF] bg-[#6C63FF]/10">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-xs text-[var(--app-muted)] mb-5">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} className="text-[#6C63FF]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#FF6584]" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm text-[var(--app-muted)] leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5 text-[#6C63FF]"
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.06 }}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--app-surface)] border border-[var(--app-border)] text-[var(--app-muted)] hover:border-[#6C63FF]/50 hover:text-[var(--app-text)] transition-colors duration-200 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
