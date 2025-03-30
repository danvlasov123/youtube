import { Input as BaseInput } from "@base-ui-components/react/input";
import styles from "./input.module.scss";
import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <BaseInput {...rest} className={clsx(styles.input, className)} ref={ref} />
  );
});

export const TextArea: React.FC<React.ComponentProps<"textarea">> = (props) => {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      className={clsx(styles.input, styles.textarea, className)}
    />
  );
};
