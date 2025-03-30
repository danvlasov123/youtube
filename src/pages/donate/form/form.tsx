import React from "react";
import { Button, Checkbox, Input } from "src/components/ui";

import styles from "./form.module.css";

export const DonationForm: React.FC<{
  onSubmit: (value: number, name: string) => void;
}> = ({ onSubmit }) => {
  const sumRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const number = formData.get("value") as unknown as number;
    const name = formData.get("name") as unknown as string;

    onSubmit(number, name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="email">Е-мейл</label>
        <Input placeholder="alfred@email.com" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Имя</label>
        <Input name="name" required placeholder="Alfred" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Сумма</label>
        <Input
          name="value"
          type="number"
          required
          placeholder="1 million dollar"
          ref={sumRef}
        />
        <div className={styles.variants}>
          <Button
            size="small"
            onClick={() => {
              if (sumRef.current) {
                sumRef.current.value = "10";
              }
            }}
          >
            10 $
          </Button>
          <Button
            size="small"
            onClick={() => {
              if (sumRef.current) {
                sumRef.current.value = "25";
              }
            }}
          >
            25 $
          </Button>
          <Button
            size="small"
            onClick={() => {
              if (sumRef.current) {
                sumRef.current.value = "100";
              }
            }}
          >
            100 $
          </Button>
        </div>
      </div>
      <div className={styles.field}>
        <Checkbox label={<span>Анонимный донат</span>} />
      </div>
      <div className={styles.action}>
        <p className={styles.privacy}>
          Оплачивая, вы соглашаетесь <br /> с условиями использования и
          политикой возвратов.
        </p>
        <Button type="submit" className="w-full" variant="dark" size="large">
          Подтвердить
        </Button>
      </div>
    </form>
  );
};
