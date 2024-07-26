import { Dispatch, SetStateAction } from "react";
import { UserI } from "../../types/UserType";
import { UserSelectI } from "../../types/UserType";

export type FormType = {
  users: UserI[];
  setUsers: Dispatch<SetStateAction<UserI[]>>;
  userOptions: UserSelectI[];
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};
