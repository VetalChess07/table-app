import type { UserI } from "../../types/UserType";
import { UserSelectI } from "../../types/UserType";
import type { updateUserOptionsType } from "./type";

export const updateUserOptions = ({ users, setF }: updateUserOptionsType) => {
  const extractUsers = (users: UserI[]) => {
    let allUsers: UserSelectI[] = [];
    users.forEach((user) => {
      allUsers.push({ id: user.id, name: user.name });
      if (user.subordinates.length > 0) {
        allUsers = [...allUsers, ...extractUsers(user.subordinates)];
      }
    });
    return allUsers;
  };
  setF(extractUsers(users));
};
