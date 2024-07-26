import { CSSProperties, ReactNode } from "react";

export type ButtonType = {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
};
