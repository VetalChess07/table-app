import React, { FC } from "react";

import style from "./style.module.scss";

import type { InputType } from "./type";

const { input } = style;

const Input: FC<InputType> = ({
  id,
  onChange,
  value,
  placeholder,
  type = "text",
  style,
}) => {
  return (
    <input
      id={id}
      style={style}
      className={input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
