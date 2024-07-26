import { ChangeEvent, CSSProperties } from "react";

export type InputType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id?: string;

  placeholder?: string;
  type?: string;
  style?: CSSProperties;
};
