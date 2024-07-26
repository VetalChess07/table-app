import React, { FC } from "react";

import style from "./style.module.scss";

import type { SelectType } from "./type";

const { select, option } = style;

const Select: FC<SelectType> = ({ value, onChange, options, id }) => {
  return (
    <select className={select} id={id} value={value} onChange={onChange}>
      <option className={option} value="">
        Нет
      </option>
      {options.map((el) => (
        <option className={option} key={el.id} value={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
