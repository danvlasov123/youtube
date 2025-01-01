import styles from "./player.module.scss";

export const Player = () => {
  return (
    <video
      className={styles.player}
      tabIndex={-1}
      loop
      muted
      width="100%"
      controls
      height="auto"
      autoPlay
      src="https://cdn.pixabay.com/video/2016/10/09/5858-865412786_large.mp4"
    ></video>
  );
};
