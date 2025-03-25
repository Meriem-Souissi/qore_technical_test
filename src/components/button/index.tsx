import React from "react";
import "./style.css";
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "tertiary";
};

function Button({ className, variant, ...props }: Props) {
  return <button className={clsx("btn", variant, className)} {...props} />;
}

export default Button;
