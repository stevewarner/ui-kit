import { useEffect, useRef } from "react";
import CloseIcon from "@/svgs/close.svg";
import styles from "./Modal.module.css";
import { useFocusTrap } from "../../hooks/useFocusTrap";

interface ModalProps {
  title: string;
  onClose: () => void;
  content?: React.ReactNode;
}

export const Modal = ({ title, onClose, content }: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // move focus to the close button when the modal opens
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // keep focus trapped within the modal while it is open
  useFocusTrap(modalRef, true);

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        // click outside modal to close
        onClose();
      }}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          // needed for click outside modal to close
          e.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon height={20} width={20} />
            <span className={styles.srOnly}>Close modal</span>
          </button>
        </div>
        <hr className={styles.divider} />
        {content}
      </div>
    </div>
  );
};
