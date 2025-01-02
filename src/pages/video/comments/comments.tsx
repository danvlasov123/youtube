import { Avatar } from "src/components";
import styles from "./comments.module.scss";

const VideoComment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <Avatar size={32} title="A" />
        <p>Anton Pavlov</p>
        <span> 30 мин.</span>
      </div>
      <div className={styles.text}>
        <p>very interesting.</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.reply}>Ответить</button>
      </div>
    </div>
  );
};

export const VideoComments = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Комментарии <span>24</span>
      </p>
      <div className={styles.list}>
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
      </div>
    </div>
  );
};
