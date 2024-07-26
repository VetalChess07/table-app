import { Dispatch, SetStateAction } from "react";

export type handleUserClickType = {
  userId: number;
  setExpandedUserIds: Dispatch<SetStateAction<Set<number>>>;
};
