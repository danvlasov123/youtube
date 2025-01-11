import React from "react";

import styles from "./add.module.scss";
import { Avatar } from "src/components/avatar";
import { Button, TextArea } from "src/components/ui";
import { CommentAddProps } from "./types";

export const CommentAdd: React.FC<CommentAddProps> = ({
  isViewAction = true,
  button,
  placeholder,
  textarea,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Avatar size={38} title="D" />
        <TextArea
          placeholder={placeholder}
          className="w-full"
          {...textarea}
        />
      </div>
      {isViewAction && (
        <div className={styles.action}>
          <Button variant="dark" {...button}>
            Send
          </Button>
        </div>
      )}
    </div>
  );
};
