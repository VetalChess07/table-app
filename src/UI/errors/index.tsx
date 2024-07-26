import React, { FC } from "react";

import type { ErrorsMessageType } from "./type";

import styles from "./style.module.scss";

const ErrorsMessage: FC<ErrorsMessageType> = ({ children, style }) => {
  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
};

export default ErrorsMessage;
