import React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  open,
  onChange,
  children,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Popup className={styles.popup}>{children}</Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
