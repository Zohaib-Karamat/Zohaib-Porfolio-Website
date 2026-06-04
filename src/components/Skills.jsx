import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import clsx from 'clsx';
import { Code2, Figma, GitBranch, Layers, Palette, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const tabs = ['Frontend', 'Backend',  'Tools'];
  const [activeTab, setActiveTab] = useState('Frontend');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skillGroups = useMemo(
    () => ({
      Frontend: [
        { name: 'React', level: 90 },
        { name: 'HTML', level: 92 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 82 },
      ],
      Backend: [
        { name: 'Node.js', level: 78 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 74 },
        { name: 'PostgreSQL', level: 72 },
        { name: 'REST APIs', level: 76 },
      ],
      
      Tools: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 82 },
        { name: 'Vite', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
      ],
    }),
    []
  );

  const tools = [
    // MERN stack tools
    { name: 'Node.js', icon: Code2 },
    { name: 'Express', icon: Terminal },
    { name: 'MongoDB', icon: Layers },
    { name: 'Mongoose', icon: Wrench },
    { name: 'REST APIs', icon: GitBranch },
    // General tools
    { name: 'Figma', icon: Figma },
    { name: 'Git', icon: GitBranch },
    { name: 'Vite', icon: Layers },
    { name: 'CLI', icon: Terminal },
    { name: 'Workflow', icon: Wrench },
    { name: 'Branding', icon: Palette },
    { name: 'Components', icon: Code2 },
  ];

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
      id="skills"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-[var(--app-bg)]"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.div variants={sectionVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--app-text)]">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mt-3 text-[var(--app-muted)] max-w-2xl mx-auto">
            A balanced mix of interface craftsmanship, frontend engineering, backend development, and the tools that keep it all moving.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeTab === tab
                  ? 'bg-[#6C63FF] text-white shadow-[0_10px_30px_rgba(108,99,255,0.25)]'
                  : 'border border-[var(--app-border)] text-[var(--app-muted)] hover:border-[#6C63FF] hover:text-[var(--app-text)]'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab !== 'Tools' && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {skillGroups[activeTab].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--app-text)] font-medium">{skill.name}</span>
                    <span className="text-[var(--app-muted)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--app-elevated)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: Math.max(0.3, skill.level / 100), ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#6C63FF] to-[#FF6584]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 rounded-full bg-[var(--app-elevated)] border border-[var(--app-border)] px-4 py-2 text-sm text-[var(--app-muted)] transition-all duration-200 hover:border-[#6C63FF] hover:text-[var(--app-text)]"
                >
                  <tool.icon className="h-4 w-4 text-[#6C63FF]" />
                  {tool.name}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
