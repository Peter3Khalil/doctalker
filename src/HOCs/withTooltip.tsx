import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React, { ComponentProps, ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withTooltip = <T extends ComponentType<any>>(Component: T) => {
  type ComponentPropsWithTooltip = ComponentProps<T> &
    ComponentProps<typeof TooltipContent> & {
      tooltipContent: string;
      asChild?: boolean;
    };

  const WithTooltip = (props: ComponentPropsWithTooltip) => {
    const { tooltipContent, side, asChild=true,...rest } = props;
    return (
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild={asChild}>
            <Component {...(rest as ComponentProps<T>)} />
          </TooltipTrigger>
          <TooltipContent className="border-none" side={side}>
            {tooltipContent}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
  return WithTooltip;
};
export default withTooltip;
