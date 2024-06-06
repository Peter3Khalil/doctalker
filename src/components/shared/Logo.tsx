import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
const logoVariants = cva('', {
  variants: {
    variant: {
      default: 'gradient to-background bg-clip-text text-transparent',
      primary: 'gradient to-primary bg-clip-text text-transparent',
      normal: 'text-primary dark:text-secondary-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
interface ComponentProps
  extends React.HTMLProps<HTMLAnchorElement>,
    VariantProps<typeof logoVariants> {}
const Logo: FC<ComponentProps> = ({
  className,
  variant,
  href = '/',
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 text-lg font-bold md:text-xl',
        className,
      )}
      {...props}
    >
      <span className="rounded-full bg-primary p-2 px-4 text-base text-primary-foreground">
        DOC
      </span>
      <span className={cn(logoVariants({ variant }))}>Talker</span>
    </Link>
  );
};

export default Logo;
