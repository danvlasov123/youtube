import styles from "./video-card.module.scss";
import { Avatar } from "../avatar";
import React from "react";
import clsx from "clsx";

import { Link } from "react-router";
import { Shorts } from "../shorts";

export const VideoCard: React.FC<{ isShort?: boolean }> = ({
  isShort = false,
}) => {
  const triggerOpenShorts = React.useRef<HTMLButtonElement | null>(null);

  const handleOpenShorts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isShort) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    triggerOpenShorts.current?.click();
  };
  const src = isShort
    ? "https://i.vimeocdn.com/video/1963574657-631176f0ffd56c75a37e9e4d36aadde1f68be7802ca7fc252fe3e028d6ed558b-d_960x540?r=pad"
    : "https://i.vimeocdn.com/video/1957290247-3140aed174179564abc51fb042be59740284a17c140560522d196a4af7efde9f-d_960x540?r=pad";
  return (
    <React.Fragment>
      <Shorts trigger={<button hidden ref={triggerOpenShorts} />} />
      <Link onClick={handleOpenShorts} className={styles.card} to="/video">
        <div className={clsx(styles.preview, { [styles.short]: isShort })}>
          <img src={src} alt="" />
          <span>03:32</span>
        </div>
        <div className={styles.body}>
          <Avatar size={24} title="M" />
          <div className={styles.info}>
            <p className={styles.title}>
              {isShort ? "The Tornado Outside" : "Instruments of a Beating"}
            </p>
            <span className={styles.author}>Рушан Привет</span>
            <span className={styles.views}>3,402 пр. • 16 дней тому</span>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};
