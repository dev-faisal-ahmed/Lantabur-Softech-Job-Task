import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, className, disabled }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-blue-500 px-5 py-2 rounded-md text-white disabled:bg-gray-400 disabled:text-black",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
