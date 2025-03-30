import { cn } from '@/libs/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const buttonVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-primary text-white  hover:shadow-md',
    },
    size: {
      default: 'h-10 px-4 py-3',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
}

const Button =
  () =>
  ({
    href,
    children,
    className,
    variant,
    size,
  }: PropsWithChildren<ButtonProps>) => {
    return (
      <Link
        href={href}
        className={cn([
          buttonVariants({
            variant,
            size,
            className,
          }),
        ])}
      >
        {children}
      </Link>
    );
  };

export { Button, buttonVariants };
