import React, { Dispatch, FC, memo, SetStateAction, useEffect } from "react";
import ReactDOM from "react-dom";

import Input from "../input";

import { ModalType } from "./type";

import style from "./style.module.scss";

const { modalOverlay, modalOpen, modalContent, closeButton } = style;

const Modal: FC<ModalType> = memo(({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`${modalOverlay} ${isOpen ? modalOpen : ""}`}
      onClick={onClose}
    >
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("root")!
  );
});

export default Modal;
