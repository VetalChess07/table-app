export interface UserI {
  id: number;
  name: string;
  phone: string;
  subordinates: UserI[];
}

export interface UserSelectI {
  id: number;
  name: string;
}
