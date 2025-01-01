import React from "react";
import { ButtonProps } from "./types";

import styles from "./button.module.scss";

import clsx from "clsx";

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  const {
    className,
    variant = "default",
    type = "button",
    size = "medium",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      type={type}
      className={clsx(styles.button, className, {
        [styles.default]: variant === "default",
        [styles.dark]: variant === "dark",
        [styles.icon]: variant === "icon",
        [styles.small]: size === "small",
      })}
    >
      {children}
    </button>
  );
};
