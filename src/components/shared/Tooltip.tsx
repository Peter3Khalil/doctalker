'use client';
import React, { FC } from 'react';
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
interface TooltipProps {
  children: React.ReactNode;
  title: string;
  asChild?: boolean;
}
const Tooltip: FC<TooltipProps> = ({ children, title, asChild = false }) => {
  return (
    <TooltipProvider delayDuration={50}>
      <TooltipPrimitive>
        <TooltipTrigger asChild={asChild}>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent className="border-muted/30 bg-secondary-foreground text-secondary">
          <p>{title}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};

export default Tooltip;
