import React from "react";
import { Player } from "src/components";

import { SignIn } from "src/components/auth";

import styles from "./media.module.scss";

export const VideoMedia = () => {
  const ref = React.useRef<HTMLVideoElement | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const [time, setTime] = React.useState(0);

  const handleTimeUpdate = () => {
    setTime(ref.current?.currentTime || 0);
  };

  React.useEffect(() => {
    if (time > 5) {
      setIsOpen(true);
      ref.current?.pause();
    }
  }, [time]);

  return (
    <div className={styles.media}>
      <Player ref={ref} onTimeUpdate={handleTimeUpdate} />
      {isOpen && (
        <div className={styles.auth}>
          <div className={styles.auth__content}>
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};
