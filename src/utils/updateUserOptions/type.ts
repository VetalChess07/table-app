import { Dispatch, SetStateAction } from "react";
import type { UserI } from "../../types/UserType";
import { UserSelectI } from "../../types/UserType";

export type updateUserOptionsType = {
  users: UserI[];
  setF: Dispatch<SetStateAction<UserSelectI[]>>;
};
