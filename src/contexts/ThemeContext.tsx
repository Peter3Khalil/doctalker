'use client';
import React, { createContext, useLayoutEffect } from 'react';
type ThemeContextType = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);
  const countRender = React.useRef(0);
  useLayoutEffect(() => {
    countRender.current += 1;
    if (countRender.current === 1) {
      const localTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (localTheme) {
        setTheme(localTheme);
      }
    } else {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
