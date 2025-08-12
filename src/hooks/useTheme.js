import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark/light theme
 * Persists theme preference in localStorage
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if theme is stored in localStorage
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    // Always default to dark mode regardless of system preference
    return true;
  });

  useEffect(() => {
    // Update document class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
