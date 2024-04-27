import { cn } from '@/lib/utils';
import React, { FC, useEffect, useRef, useState } from 'react';
interface IComponentProps extends React.HTMLProps<HTMLHeadingElement> {
  delay?: number;
  children: string;
}
const TypingEffect: FC<IComponentProps> = ({
  delay = 50,
  className,
  children,
  ...props
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (currentText.length !== children.length) {
      intervalId.current = setInterval(() => {
        setCurrentText((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else {
      clearInterval(intervalId.current as NodeJS.Timeout);
      setTimeout(() => {
        setIsDone(true);
      }, 700);
    }
    return () => {
      clearInterval(intervalId.current as NodeJS.Timeout);
    };
  }, [currentText, currentIndex, delay, children]);
  return (
    <p className={cn(className)} {...props}>
      {currentText}
      <span
        className={cn({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'opacity-0': isDone,
          cursor: !isDone,
        })}
      >
        |
      </span>
    </p>
  );
};

export default TypingEffect;
