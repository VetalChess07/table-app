import React, { useState, FC, memo, FormEvent } from "react";

import Select from "../../UI/select";
import Input from "../../UI/input";
import Button from "../../UI/button";
import ErrorsMessage from "../../UI/errors";

import { UserI } from "../../types/UserType";
import { validateMinLenStr } from "../../utils/validateMinLenStr";
import { validatePhone } from "../../utils/validatePhone";

import type { FormType } from "./type";

import style from "./style.module.scss";

const { form, label } = style;

const styleError = {
  color: "red",
  border: "1px solid red",
  "&::placeholder": {
    backgroundColor: "darkred",
  },
};

const Form: FC<FormType> = memo(
  ({ users, setUsers, setModalIsOpen, userOptions }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [parentId, setParentId] = useState("");

    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

    const handleAddUser = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Reset errors
      setErrors({});

      // Validate inputs
      const newErrors: { name?: string; phone?: string } = {};

      if (!validateMinLenStr(name, 2)) {
        newErrors.name = "Имя должно содержать минимум 2 символа!";
      }

      if (!validatePhone(phone)) {
        newErrors.phone = "Введите корректный номер телефона.";
      }

      console.log(newErrors);
      // If there are errors, update state and prevent form submission
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name,
        phone,
        parentId,
        subordinates: [],
      };

      // Add new user to the list
      const updatedUsers = parentId
        ? addSubordinate(users, parseInt(parentId, 10), newUser)
        : [...users, newUser];

      setUsers(updatedUsers);
      setName("");
      setPhone("");
      setParentId("");
      setModalIsOpen(false);
    };

    const addSubordinate = (
      users: UserI[],
      parentId: number,
      newUser: UserI
    ): UserI[] => {
      return users.map((user: UserI) => {
        if (user.id === parentId) {
          return { ...user, subordinates: [...user.subordinates, newUser] };
        } else if (user.subordinates.length > 0) {
          return {
            ...user,
            subordinates: addSubordinate(user.subordinates, parentId, newUser),
          };
        } else {
          return user;
        }
      });
    };

    return (
      <form className={form} onSubmit={handleAddUser}>
        <label className={label} htmlFor="name">
          Имя:
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            style={errors.name ? styleError : undefined}
          />
          {errors.name && <ErrorsMessage>{errors.name}</ErrorsMessage>}
        </label>
        <label className={label} htmlFor="phone">
          Телефон:
          <Input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Формат: +7,7,8 без пробелов и других символов"
            style={errors.phone ? styleError : undefined}
          />
          {errors.phone && <ErrorsMessage>{errors.phone}</ErrorsMessage>}
        </label>
        <label className={label} htmlFor="boss">
          Начальник:
          <Select
            id="boss"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            options={userOptions}
          />
        </label>

        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
);

export default Form;
