import { clsx } from "clsx";

export default function BaseButton({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return <button className={clsx("btn", className)} {...props} />;
}
