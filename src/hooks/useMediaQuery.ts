"use client";
import React, { useEffect } from 'react';

const useMediaQuery = ({ width }: { width: number }) => {
  const [isMatched, setIsMatched] = React.useState(false);
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    if (media.matches) {
      setIsMatched(true);
    }
    const listener = () => {
      if (!media.matches) {
        setIsMatched(false);
      } else {
        setIsMatched(true);
      }
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [width]);
  return { isMatched };
};

export default useMediaQuery;
