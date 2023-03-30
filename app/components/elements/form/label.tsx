import clsx from "clsx";

export default function Label({
  className,
  ...props
}: JSX.IntrinsicElements["label"]) {
  return (
    <label className={clsx("label", className, !className && "")} {...props} />
  );
}
