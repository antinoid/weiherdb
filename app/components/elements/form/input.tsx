import { clsx as cx } from "clsx";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>(({ type = "text", className, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cx("input-bordered input", className, !className && "")}
    {...props}
  />
));

export default Input;
