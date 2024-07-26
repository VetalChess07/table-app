import { ChangeEvent, CSSProperties } from "react";

export type LabelType = {
  id: string;
  name: string;
  text: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  style?: CSSProperties;
};
