import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonPropsType> = (props) => {
  const { className, children } = props;

  return <button {...props}>{children}</button>;
};
