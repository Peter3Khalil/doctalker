import Reveal from '@/components/animation/Reveal';
import React, { FC } from 'react';

interface RevealDesktopProps extends React.ComponentProps<typeof Reveal> {}
const RevealDesktop: FC<RevealDesktopProps> = ({ children, ...props }) => (
  <Reveal
    delay={2}
    duration={1}
    variants={{
      hidden: {
        opacity: 0,
        y: -20,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    {...props}
  >
    {children}
  </Reveal>
);

export default RevealDesktop;
