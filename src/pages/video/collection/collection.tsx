import React from "react";

import styles from "./collection.module.scss";
import { Switch } from "src/components/ui";
import { VideoCard } from "src/components";

export const VideoCollections: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h2 className={styles.title}>Коллекции</h2>
        <div className={styles.autoplay}>
          <span>Авто</span>
          <Switch />
        </div>
      </div>
      <div className={styles.list}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};
