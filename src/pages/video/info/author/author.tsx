import { Avatar } from "src/components";
import styles from "./author.module.scss";
import { Button } from "src/components/ui";

export const VideoInfoAuthor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <Avatar size={32} title="V" />
        <p>Danil Vlasov</p>
      </div>
      <Button size="small" variant="dark">
        Подписаться
      </Button>
    </div>
  );
};
