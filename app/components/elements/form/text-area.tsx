import React from "react";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements["textarea"]
>((props, ref) => (
  <textarea
    ref={ref}
    className="block w-full text-gray-800 border-gray-300 rounded-md shadow-sm sm-text-sm focus:border-purple-50"
    rows={5}
    {...props}
  />
));

export default TextArea;
