import { UserSelectI } from "../../types/UserType"; // Импортируйте типы опций пользователя

export interface SelectType {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: UserSelectI[];
  id?: string;
}
