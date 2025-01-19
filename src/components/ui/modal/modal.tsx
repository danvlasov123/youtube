import React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";
import clsx from "clsx";

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  open,
  onChange,
  children,
  className,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Popup className={clsx(styles.popup, className)}>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
