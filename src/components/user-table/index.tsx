import React, { useState, useEffect, useMemo, useCallback } from "react";

import Button from "../../UI/button";
import Table from "../../UI/table";
import Modal from "../../UI/modal";
import Form from "../form";

import { UserI } from "../../types/UserType";
import { UserSelectI } from "../../types/UserType";

import { updateUserOptions } from "../../utils/updateUserOptions";

import style from "./style.module.scss";

const { usertable } = style;

const UserTable = () => {
  console.log(style);
  const [users, setUsers] = useState<UserI[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userOptions, setUserOptions] = useState<UserSelectI[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers) as UserI[];
      setUsers(parsedUsers);
      updateUserOptions({ users, setF: setUserOptions });
    }
  }, []);

  useEffect(() => {
    if (users.length !== 0) {
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
      updateUserOptions({ users, setF: setUserOptions });
    }
  }, [users]);

  const onClcikModalButton = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className={usertable}>
      <Button onClick={onClcikModalButton}>Добавить</Button>
      <Table users={users} />

      <Modal isOpen={modalIsOpen} onClose={onClcikModalButton}>
        <Form
          setModalIsOpen={setModalIsOpen}
          users={users}
          setUsers={setUsers}
          userOptions={userOptions}
        />
      </Modal>
    </div>
  );
};

export default UserTable;
