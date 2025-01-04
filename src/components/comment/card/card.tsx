import { Avatar } from "src/components/avatar";

import styles from "./card.module.scss";
import React from "react";
import { CommentAdd } from "../add";

export const CommentCard = () => {
  const [reply, setReply] = React.useState(false);

  const [value, setValue] = React.useState("");

  return (
    <div className={styles.card}>
      <div className={styles.author}>
        <Avatar size={32} title="A" />
        <p>Anton Pavlov</p>
        <span> 30 мин.</span>
      </div>
      <div className={styles.text}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={styles.actions}>
        {reply ? (
          <CommentAdd
            textarea={{
              rows: 4,
              autoFocus: true,
              onChange: (e) => setValue(e.target.value),
              onBlur: () => !value && setReply(false),
              value,
            }}
          />
        ) : (
          <button className={styles.reply} onClick={() => setReply(true)}>
            Ответить
          </button>
        )}
      </div>
    </div>
  );
};
