import clsx from "clsx";
import React from "react";

const Radio = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>(({ type = "radio", className, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={clsx(
      "h-4 w-4 rounded-full",
      className,
      !className && "border-gray-300, text-pink-500"
    )}
    {...props}
  />
));

export default Radio;
