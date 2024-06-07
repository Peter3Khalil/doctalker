import useTypeWriter from '@/hooks/useTypeWriter';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface IComponentProps extends React.HTMLProps<HTMLHeadingElement> {
  speed?: number;
  children: string;
}

const TypingEffect: FC<IComponentProps> = ({
  speed = 50,
  className,
  children,
  ...props
}) => {
  const { currentText: text, isDone } = useTypeWriter({
    text: children,
    speed,
  });

  return (
    <p className={cn(className)} {...props}>
      {text}
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
