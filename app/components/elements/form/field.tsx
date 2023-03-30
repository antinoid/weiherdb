import { clsx } from "clsx";

export default function Field({
  className,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return <div className={clsx("form-control", className)} {...props} />;
}
