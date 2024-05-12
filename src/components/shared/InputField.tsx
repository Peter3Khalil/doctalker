'use client';
import React, { FC } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InputFieldType } from '@/types';
import { cn } from '@/lib/utils';
interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  field: InputFieldType;
}
const InputField: FC<InputFieldProps> = ({ field, className, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={cn(
        'transition-class relative flex h-14 w-full flex-col rounded-md border border-background/40 bg-muted px-3',
        className,
        {
          'border-primary lg:border-primary': isFocused,
        },
      )}
      {...props}
    >
      <Label
        htmlFor={field.name}
        className={cn(
          'transition-class absolute top-[50%] z-20 translate-y-[-50%] rounded-md border border-transparent text-xs capitalize',
          {
            'top-0 border-primary bg-inherit px-2':
              isFocused || value.length > 0,
            'border-background/40': value.length > 0 && !isFocused,
          },
        )}
      >
        {field.label}
      </Label>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={field.type}
        id={field.name}
        className="h-full border-none bg-transparent px-0 placeholder:capitalize focus-visible:border-none lg:placeholder:text-accent-foreground/80"
      />
    </div>
  );
};

export default InputField;
