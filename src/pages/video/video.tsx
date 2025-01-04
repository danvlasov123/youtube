import styles from "./video.module.scss";
import { VideoInfo } from "./info/info";
import { VideoCollections } from "./collection";
import { VideoComments } from "./comments";
import { VideoMedia } from "./media";

export const VideoPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.media}>
        <VideoMedia />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <VideoInfo />
        </div>
        <div className={styles.comments}>
          <VideoComments />
        </div>
        <div className={styles.collection}>
          <VideoCollections />
        </div>
      </div>
    </div>
  );
};
