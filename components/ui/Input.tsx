import { InputHTMLAttributes } from "react";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-5
      py-4
      text-lg
      outline-none
      transition-all
      focus:border-blue-600
      focus:ring-4
      focus:ring-blue-100
      "
    />
  );
}