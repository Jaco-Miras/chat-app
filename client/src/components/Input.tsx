import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";

const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-2 px-3 border border-gray-300 focus:border-blue-600 outline-none rounded w-full`}
      {...rest}
      ref={ref}
    />
  );
});

export default Input;
