import styles from "./sign-in.module.scss";
import { Button, Input } from "src/components/ui";

export const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Вход в учетную запись</h2>
      <p className={styles.description}>
        Отсканируйте камерой телефона <br /> для быстрого входа.
      </p>
      <div className={styles.qr}>
        <img
          width={140}
          height={140}
          src="https://cdn.me-qr.com/qr/158129267.png?v=1736608144"
          alt="qr"
        />
      </div>
      <div className={styles.or}>
        <span></span>
        <p>или введите номер</p>
        <span></span>
      </div>

      <Input
        className={styles.input}
        placeholder="+7 (999) 99-99-999"
        type="number"
      />
      <Button className="justify-center" variant="dark">
        Продолжить
      </Button>
    </div>
  );
};
