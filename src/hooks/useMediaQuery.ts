'use client';
import React, { useEffect } from 'react';
// Write a documentation for this component props

/**
 * useMediaQuery hook
 * @param {number} maxWidth - The maximum width of the screen
 * @param {number} minWidth - The minimum width of the screen
 * @returns {boolean} isMatched - The boolean value of the media query
 * @example
 * const { isMatched } = useMediaQuery({ maxWidth: 768 });
 * if (isMatched) {
 *  console.log('The screen is less than 768px');
 * }
 */

const useMediaQuery = ({
  maxWidth,
  minWidth,
}: {
  maxWidth?: number;
  minWidth?: number;
}) => {
  const [isMatched, setIsMatched] = React.useState(false);
  useEffect(() => {
    const media = window.matchMedia(
      `${minWidth ? `(min-width: ${minWidth}px)` : ''} ${maxWidth ? `(max-width: ${maxWidth}px)` : ''}`,
    );
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
  }, [maxWidth, minWidth]);
  return { isMatched };
};

export default useMediaQuery;
