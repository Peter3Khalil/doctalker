'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { InputFieldType } from '@/types';
import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ErrorIcon } from './Icons';
interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  field: InputFieldType;
  errorMessage?: string;
  register?: UseFormRegisterReturn<string>;
}
const InputField: FC<InputFieldProps> = ({
  field,
  className,
  errorMessage,
  register,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const hasError = errorMessage && errorMessage?.length > 0;
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
    if (register) {
      register?.onBlur(e);
    }
  };
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div
        className={cn(
          'transition-class relative flex h-14 w-full flex-col rounded-md border border-background/40 bg-muted px-3',
          className,
          {
            'border-primary lg:border-primary': isFocused,
            'border-destructive lg:border-destructive': hasError,
          },
        )}
        {...props}
      >
        <Label
          htmlFor={field.name}
          className={cn(
            'transition-class absolute left-10 top-[50%] z-20 translate-y-[-50%] rounded-md border border-transparent text-xs capitalize',
            {
              'left-3 top-0 border-primary bg-inherit px-2': isFocused,
              'border-background/40': !isFocused,
              'border-destructive': hasError && isFocused,
              'text-destructive': hasError,
            },
          )}
        >
          {field.label}
        </Label>
        <div className="flex h-full items-center gap-2">
          {field.icon && (
            <field.icon
              size={20}
              className={cn('text-accent-foreground/80', {
                'text-destructive': hasError,
              })}
            />
          )}
          <Input
            ref={ref}
            type={field.type}
            id={field.name}
            {...register}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="h-full border-none bg-transparent px-0 placeholder:capitalize focus-visible:border-none lg:placeholder:text-accent-foreground/80"
          />
        </div>
      </div>
      {errorMessage && (
        <p className="flex w-full break-before-avoid items-center gap-2 text-wrap break-words text-sm text-destructive">
          <ErrorIcon size={16} />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
