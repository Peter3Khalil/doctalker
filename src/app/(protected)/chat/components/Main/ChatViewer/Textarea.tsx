import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React from 'react';
interface TextareaProps extends React.HTMLAttributes<HTMLDivElement> {}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className }, ref) => {
    const { isPdfShown } = useGlobalContext();
    return (
      <div
        className={cn(
          'mx-auto flex h-16 w-full shrink-0 items-center justify-center px-6 pb-3',
          className,
          {
            'mx-auto w-full max-w-[800px]': !isPdfShown,
          },
        )}
      >
        <textarea
          ref={ref}
          className={cn(
            'max-h-[120px] min-h-[60px] w-full bg-transparent p-3 text-accent',
          )}
          placeholder="Type a message..."
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
export default Textarea;
