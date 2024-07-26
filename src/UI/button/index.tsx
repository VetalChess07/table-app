import React, { FC } from "react";

import style from "./style.module.scss";

import type { ButtonType } from "./type";

const { button } = style;

const Button: FC<ButtonType> = ({
  children,
  onClick,
  style,
  type = "button",
}) => {
  return (
    <button type={type} className={button} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
