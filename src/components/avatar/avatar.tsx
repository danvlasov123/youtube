import React from "react";

import styles from "./avatar.module.scss";
import { AvatarProps } from "./types";
import clsx from "clsx";

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { size = 32, title, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={clsx(styles.avatar, props.className)}
      style={{
        height: size,
        width: size,
        fontSize: size / 2,
        ...props.style,
      }}
    >
      {title.charAt(0)}
    </div>
  );
};
