import clsx from "clsx";
import React from "react";

const Select = React.forwardRef<
  HTMLSelectElement,
  JSX.IntrinsicElements["select"]
>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={clsx("select-bordered select", className, !className && "")}
      {...props}
    />
  );
});

export default Select;
