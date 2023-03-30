import { clsx } from "clsx";
import BaseButton from "./base-button";

export default function Button({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return <BaseButton className={clsx("", className)} {...props} />;
}
