import { Checkbox as CheckboxComponent } from "@base-ui-components/react/checkbox";
import styles from "./checkbox.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";

export const Checkbox: React.FC<{ label?: React.ReactNode }> = ({ label }) => {
  return (
    <label className={styles.Label}>
      <CheckboxComponent.Root className={styles.Checkbox}>
        <CheckboxComponent.Indicator className={styles.Indicator}>
          <IoCheckmarkOutline className={styles.Icon} />
        </CheckboxComponent.Indicator>
      </CheckboxComponent.Root>
      {label}
    </label>
  );
};
