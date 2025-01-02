import styles from "./video-card.module.scss";
import { Avatar } from "../avatar";

export const VideoCard = () => {
  return (
    <a className={styles.card} href="#">
      <div className={styles.preview}>
        <img
          src="https://i.vimeocdn.com/video/1957290247-3140aed174179564abc51fb042be59740284a17c140560522d196a4af7efde9f-d_960x540?r=pad"
          alt=""
        />
        <span>03:32</span>
      </div>
      <div className={styles.body}>
        <Avatar size={24} title="M" />
        <div className={styles.info}>
          <p className={styles.title}>Instruments of a Beating</p>
          <span className={styles.author}>Рушан Привет</span>
          <span className={styles.views}>3,402 пр. • 16 дней тому</span>
        </div>
      </div>
    </a>
  );
};
