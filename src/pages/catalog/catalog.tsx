import React from "react";

import styles from "./catalog.module.scss";
import { Badge, Button, Input } from "src/components/ui";
import { VideoCard } from "src/components";
import clsx from "clsx";

import { FaFire, FaMusic } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";

const CATEGORIES = [
  "Все",
  "Музыка",
  "Новое для вас",
  "Шортс",
  "Просмотрено",
  "Новости",
  "Шоу",
];

export const CatalogPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <section className={styles.actions}>
        <div className={styles.categories}>
          {CATEGORIES.map((c, index) => (
            <Badge
              size="large"
              color={index === 0 ? "blue" : "default"}
              key={index}
            >
              {c}
            </Badge>
          ))}
        </div>
        <div className={styles.search}>
          <Input
            className={styles.search__input}
            onFocus={(e) => (e.target.style.width = "400px")}
            onBlur={(e) => (e.target.style.width = "203px")}
            placeholder="Поиск..."
          />{" "}
          <Button>
            <IoIosSearch fontSize={20} />
          </Button>
        </div>
      </section>
      <section className={styles.poster}>
        <img
          height={400}
          width="100%"
          src="https://i.vimeocdn.com/video/1963574657-631176f0ffd56c75a37e9e4d36aadde1f68be7802ca7fc252fe3e028d6ed558b-d_960x540?r=pad"
        />
        <div className={styles.poster__content}>
          <h1>
            Оформите пробную версию Premium для <br /> просмотра платных видео.
          </h1>
          <Button variant="default">Месяц бесплатно</Button>
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.section__title}>
          Рекомендации <FaFire color="#ff9a00" />
        </p>
        <ul className={styles.section__videos}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </ul>
      </section>
      <section className={styles.section}>
        <p className={styles.section__title}>
          Шорты <SiYoutubeshorts color="#8ED2CC" />
        </p>
        <ul className={clsx(styles.section__videos, styles.shorts)}>
          <VideoCard isShort />
          <VideoCard isShort />
          <VideoCard isShort />
          <VideoCard isShort />
          <VideoCard isShort />
          <VideoCard isShort />
        </ul>
      </section>
      <section className={styles.section}>
        <p className={styles.section__title}>
          Музыка <FaMusic color="#ED5565" />
        </p>
        <ul className={styles.section__videos}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </ul>
      </section>
    </div>
  );
};
