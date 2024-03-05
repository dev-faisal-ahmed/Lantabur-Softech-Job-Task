import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, className, disabled }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-md bg-blue-500 px-5 py-2 text-white disabled:bg-gray-400 disabled:text-black',
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
