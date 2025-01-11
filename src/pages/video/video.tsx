import React from "react";
import styles from "./video.module.scss";
import { VideoInfo } from "./info/info";
import { VideoCollections } from "./collection";
import { VideoComments } from "./comments";
import { VideoMedia } from "./media";
import { LuListVideo } from "react-icons/lu";
import { VscCommentDiscussion } from "react-icons/vsc";
import { Tabs } from "src/components/ui";
import { FiUsers } from "react-icons/fi";
import { VideoChat } from "./chat";
import { VideoUsers } from "./users";

export type Tabs = {
  right: "chat" | "videos";
  bottom: "users" | "comments";
};

const RIGHT_TABS = [
  {
    label: "Потоки",
    value: "videos",
    icon: <LuListVideo />,
  },
  {
    label: "Чат",
    value: "chat",
    icon: <VscCommentDiscussion />,
  },
];

const BOTTOM_TABS = [
  {
    label: "Комментарии",
    value: "comments",
    icon: <VscCommentDiscussion />,
  },
  {
    label: "Пользователи",
    value: "users",
    icon: <FiUsers />,
  },
];

export const VideoPage: React.FC = () => {
  const [tabs, setTabs] = React.useState<Tabs>({
    right: "videos",
    bottom: "comments",
  });

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
          <Tabs
            onChange={({ value }) =>
              setTabs((prev) => ({ ...prev, right: value as Tabs["right"] }))
            }
            value={RIGHT_TABS.find((tab) => tab.value === tabs.right)}
            options={RIGHT_TABS}
          />
          {tabs.right === "videos" && <VideoCollections />}
          {tabs.right === "chat" && <VideoChat />}
        </div>
        <div className={styles.collection}>
          <Tabs
            options={BOTTOM_TABS}
            onChange={({ value }) =>
              setTabs((prev) => ({ ...prev, bottom: value as Tabs["bottom"] }))
            }
            value={BOTTOM_TABS.find((tab) => tab.value === tabs.bottom)}
          />
          {tabs.bottom === "comments" && <VideoComments />}
          {tabs.bottom === "users" && <VideoUsers />}
        </div>
      </div>
    </div>
  );
};
