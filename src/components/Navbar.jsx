import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;
      let currentSection = '#home';

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--app-surface)]/90 backdrop-blur-md border-b border-[var(--app-border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent"
          >
            Zohaib
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={clsx(
                  'relative text-sm font-medium transition-colors duration-200',
                  activeSection === item.href
                    ? 'text-[var(--app-text)]'
                    : 'text-[var(--app-muted)] hover:text-[var(--app-text)]'
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#6C63FF]"
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--app-border)] px-4 text-[var(--app-muted)] hover:text-[var(--app-text)] hover:border-[#6C63FF] transition-colors duration-200"
            >
              <motion.span
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--app-border)] px-4 text-[var(--app-muted)]"
            >
              <motion.span
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-[var(--app-text)]"
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 180 : 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-2 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl mt-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 6 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-[var(--app-muted)] hover:text-[var(--app-text)] transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
