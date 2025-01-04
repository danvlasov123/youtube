import React from "react";

import styles from "./sign-in.module.scss";
import { Button, Input } from "src/components/ui";

export const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Вход в учетную запись</h2>
      <p className={styles.description}>
        Ввойди в систему используя ваш <br /> емейл адресс и пароль
      </p>
      <form className={styles.form}>
        <Input className={styles.input} placeholder="Емейл" />
        <Input className={styles.input} placeholder="Пароль" />
        <span className={styles.forget}>Забыли пароль?</span>
        <div className={styles.action}>
          <Button
            variant="dark"
            size="medium"
            className="w-full justify-center"
          >
            Вход
          </Button>
        </div>
      </form>
    </div>
  );
};
