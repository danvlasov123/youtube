import React from "react";
import styles from "./player.module.scss";
import clsx from "clsx";

export const Player = React.forwardRef<
  HTMLVideoElement,
  { isShort?: boolean } & React.ComponentProps<"video">
>((props, ref) => {
  const { isShort = false, ...rest } = props;
  return (
    <video
      className={clsx(styles.player, { [styles.short]: isShort })}
      tabIndex={-1}
      loop
      muted
      width="100%"
      controls
      height="auto"
      autoPlay
      src="https://cdn.pixabay.com/video/2016/10/09/5858-865412786_large.mp4"
      ref={ref}
      {...rest}
    ></video>
  );
});
