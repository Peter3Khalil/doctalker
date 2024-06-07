'use client';
import debounce from '@/lib/debounce';
import { useCallback, useEffect, useState } from 'react';
type Movement = 'up' | 'down';

const useScroll = () => {
  const [move, setMove] = useState<Movement>('up');

  const handleScroll = useCallback(() => {
    let previousScroll = 0;
    let currentScroll = window.scrollY;

    return () => {
      currentScroll = window.scrollY;

      if (currentScroll > previousScroll) {
        setMove('down');
      } else {
        setMove('up');
      }

      previousScroll = currentScroll;
    };
  }, []);
  useEffect(() => {
    const withDebounce = debounce(handleScroll(), 10);
    window.addEventListener('scroll', withDebounce);

    return () => {
      window.removeEventListener('scroll', withDebounce);
    };
  }, [handleScroll]);

  return { move };
};

export default useScroll;
