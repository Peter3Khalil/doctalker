'use client';
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
interface ComponentProps extends React.ComponentProps<typeof motion.div> {
  delay?: number;
  duration?: number;
  rootMargin?: string;
}

const Reveal: FC<ComponentProps> = ({
  children,
  className,
  duration = 2,
  delay = 0.1,
  rootMargin = '-50px',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  const isInView = useInView(ref, {
    once: true,
    margin: rootMargin,
  });
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial={'hidden'}
      animate={controls}
      transition={{ duration, delay }}
      ref={ref}
      className={cn('h-full w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
