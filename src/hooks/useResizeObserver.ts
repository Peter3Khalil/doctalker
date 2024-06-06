'use client';
import React, { useLayoutEffect, useState } from 'react';
interface ResizeObserverProps {
  ref: React.MutableRefObject<HTMLElement | null>;
}
const useResizeObserver = ({ ref }: ResizeObserverProps) => {
  const [hasOverFlow, setHasOverFlow] = useState(false);
  useLayoutEffect(() => {
    const element = ref.current;
    let resizeObserver: ResizeObserver | null = null;
    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (
            Math.floor(element.scrollWidth) >
            Math.floor(entry.contentRect.width + 2)
          ) {
            setHasOverFlow(true);
          } else {
            setHasOverFlow(false);
          }
        }
      });
      resizeObserver.observe(element);
    }
    return () => {
      if (resizeObserver && element) resizeObserver.unobserve(element);
    };
  }, [ref]);
  return { hasOverFlow };
};

export default useResizeObserver;
