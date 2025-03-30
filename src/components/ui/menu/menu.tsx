import React from "react";
import { MenuProps } from "./types";

import { Menu as BaseMenu } from "@base-ui-components/react/menu";

import styles from "./menu.module.scss";

export const Menu: React.FC<MenuProps> = ({
  options = [],
  trigger,
  positioner,
}) => {
  return (
    <BaseMenu.Root>
      <BaseMenu.Trigger className={styles.trigger}>{trigger}</BaseMenu.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner
          side="bottom"
          align="start"
          {...positioner}
          className={styles.positioner}
          sideOffset={8}
        >
          <BaseMenu.Popup className={styles.popup}>
            {options.map((option) =>
              option.label === "separator" ? (
                <BaseMenu.Separator
                  key={option.label}
                  className={styles.separator}
                />
              ) : (
                <BaseMenu.Item className={styles.item} key={option.label}>
                  {option?.icon}
                  {option.title}
                </BaseMenu.Item>
              )
            )}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
};
