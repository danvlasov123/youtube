import React from "react";

import styles from "./catalog.module.scss";
import { Badge, Button, Input } from "src/components/ui";
import { VideoCard } from "src/components";
import clsx from "clsx";

import { FaFire, FaMusic } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";

const CATEGORIES = ["Все", "Музыка", "Новое для вас", "Шортс", "Просмотрено"];

export const CatalogPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <section className={styles.poster}>
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
