import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user prefers dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Check local storage or use system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (prefersDarkMode ? 'theme-dark' : 'theme-light');
  });

  // Update theme in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme to body element
    document.body.className = theme;
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};