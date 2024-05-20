'use client';
import { GlobalContext } from '@/contexts/GlobalContext';
import React from 'react';

const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};

export default useGlobalContext;
