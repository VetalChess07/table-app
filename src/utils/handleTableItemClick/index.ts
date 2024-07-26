import type { handleUserClickType } from "./type";
export const handleUserClick = ({
  setExpandedUserIds,
  userId,
}: handleUserClickType) => {
  setExpandedUserIds((prev) => {
    const newExpandedUserIds = new Set(prev);
    if (newExpandedUserIds.has(userId)) {
      newExpandedUserIds.delete(userId);
    } else {
      newExpandedUserIds.add(userId);
    }
    return newExpandedUserIds;
  });
};
