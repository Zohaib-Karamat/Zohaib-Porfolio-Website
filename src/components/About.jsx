import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import profileImage from '../assets/profile_placeholder.jpeg';

const About = () => {
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

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' });

  const stats = [
    { value: 1, suffix: '+', label: 'Years' },
    { value: 5, suffix: '+', label: 'Projects' },
    { value: 1, suffix: '', label: 'Clients' },
  ];

  const StatCard = ({ value, suffix, label }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      if (inView) {
        const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' });
        return controls.stop;
      }
      return undefined;
    }, [count, inView, value]);

    return (
      <motion.div
        ref={ref}
        className="bg-[var(--app-elevated)] rounded-xl p-5 border border-[var(--app-border)] text-center"
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
          <motion.span>{rounded}</motion.span>
          {suffix}
        </div>
        <p className="text-sm text-[var(--app-muted)] mt-2">{label}</p>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-6 bg-[var(--app-surface)]"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={sectionVariants} className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              About Me
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: headingInView ? 60 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 -bottom-3 h-0.5 -translate-x-1/2 bg-[#6C63FF]"
            />
          </h2>
          <p className="mt-4 text-[var(--app-muted)] max-w-2xl mx-auto">
            Curious, detail-driven, and focused on building thoughtful interfaces that feel effortless to use.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div variants={sectionVariants} className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#6C63FF] opacity-10 blur-[80px] rounded-full -z-10" />
              <div className="relative inline-flex items-center justify-center rounded-full p-[3px]">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(#6C63FF,#FF6584,#6C63FF)] animate-spin-slow" />
                <div className="relative rounded-full bg-[var(--app-bg)] p-[3px]">
                  <img
                    src={profileImage}
                    alt="Zohaib"
                    className="h-64 w-64 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-[var(--app-text)] mb-4">Story & Focus</h3>
            <div className="space-y-4 text-[var(--app-muted)] leading-relaxed">
              <p>
                I'm a creative frontend developer who blends visual storytelling with solid engineering. I love
                shaping ideas into immersive experiences that feel polished, clear, and human.
              </p>
              <p>
                My process is equal parts design sense and technical precision, from systems thinking to the last
                pixel. I care about usability, accessibility, and the moments that make a product memorable.
              </p>
              <p>
                Whether I'm building a new brand experience or refining an existing product, I aim to bring calm
                clarity and confident execution to every screen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
