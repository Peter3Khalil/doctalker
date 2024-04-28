'use client';
import React, { FC, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
interface ComponentProps extends React.ComponentProps<typeof motion.div> {
  delay?: number;
  duration?: number;
}
const Reveal: FC<ComponentProps> = ({
  children,
  className,
  duration = 2,
  delay = 0.1,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    margin: '-10px',
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
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
