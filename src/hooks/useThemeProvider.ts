'use client';
import { ThemeContext } from '@/contexts/ThemeContext';
import React from 'react';

const useThemeProvider = () => {
  return React.useContext(ThemeContext);
};

export default useThemeProvider;
