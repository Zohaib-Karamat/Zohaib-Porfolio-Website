import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--app-surface)] border-t border-[var(--app-border)]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-[var(--app-muted)] text-sm">© 2025 Zohaib — Built with React</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/zohaib-karamat', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/zohaibkaramat/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full border border-[var(--app-border)] text-[var(--app-muted)] flex items-center justify-center transition-all duration-200 hover:border-[#6C63FF] hover:text-[var(--app-text)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
