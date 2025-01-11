import React from "react";
import { TabsProps } from "./types";

import styles from "./tabs.module.scss";
import clsx from "clsx";

export const Tabs: React.FC<TabsProps> = ({
  options,
  value,
  onChange,
  place = "left",
}) => {
  const currentValue = value ? value : options[0];

  console.log(value);

  return (
    <div className={clsx(styles.tabs, { [styles.right]: place === "right" })}>
      {options.map((option) => {
        return (
          <div
            onClick={() => onChange && onChange(option)}
            key={option.value}
            className={clsx(styles.tab, {
              [styles.selected]: option.label === currentValue.label,
            })}
          >
            {option.icon}
            <span>{option.label}</span>
          </div>
        );
      })}
    </div>
  );
};
