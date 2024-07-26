import { UserI } from "../../types/UserType";

export type addSubordinateType = {
  users: UserI[];
  parentId: number;
  newUser: UserI;
};
