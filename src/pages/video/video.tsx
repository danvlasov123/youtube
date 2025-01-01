import { Player } from "src/components";
import styles from "./video.module.scss";
import { VideoInfo } from "./info/info";
import { VideoComments } from "./comments";

export const VideoPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.media}>
        <Player />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <VideoInfo />
        </div>
        <div className={styles.comments}>
          <VideoComments />
        </div>
      </div>
    </div>
  );
};
