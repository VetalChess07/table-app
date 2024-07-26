import type { addSubordinateType } from "./type";
import type { UserI } from "../../types/UserType";

export const addSubordinate = ({
  users,
  parentId,
  newUser,
}: addSubordinateType): UserI[] => {
  return users.map((user: UserI) => {
    if (user.id === parentId) {
      return { ...user, subordinates: [...user.subordinates, newUser] };
    } else if (user.subordinates.length > 0) {
      return {
        ...user,
        subordinates: addSubordinate({
          users: user.subordinates,
          parentId,
          newUser,
        }),
      };
    } else {
      return user;
    }
  });
};
