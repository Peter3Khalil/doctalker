'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import autosize from 'autosize';
import React, { useCallback, useEffect, useRef, useState } from 'react';
interface ChatTextareaProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatTextarea = React.forwardRef<HTMLDivElement, ChatTextareaProps>(
  ({ className, ...props }, ref) => {
    const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
    const textareaRef = useRef(null);
    const handleFocus = useCallback(() => {
      setIsTextAreaFocused(true);
    }, []);
    const handleBlur = useCallback(() => {
      setIsTextAreaFocused(false);
    }, []);
    useEffect(() => {
      if (textareaRef.current) {
        autosize(textareaRef.current);
        (textareaRef.current as HTMLTextAreaElement).focus();
      }
    }, []);
    return (
      <div className={cn('shrink-0 p-3', className)} ref={ref} {...props}>
        <div
          className={cn(
            'flex items-center rounded border border-muted-foreground/50 bg-accent-foreground px-3',
            {
              'border-primary': isTextAreaFocused,
            },
          )}
        >
          <Textarea
            ref={textareaRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Ask my any questions?"
            className="max-h-[150px] min-h-[30px] resize-y rounded-[inherit] border-none bg-transparent text-lg outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:max-h-[200px]"
          />
          <Button className="rounded-[inherit]">Send</Button>
        </div>
      </div>
    );
  },
);

ChatTextarea.displayName = 'ChatTextarea';
export default ChatTextarea;
