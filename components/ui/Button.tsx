import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
      rounded-2xl
      bg-blue-600
      px-7
      py-4
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:bg-blue-700
      hover:shadow-2xl
      active:scale-95
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}