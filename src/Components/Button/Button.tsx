import { ReactNode } from "react";
import classes from "./Button.module.css";

interface IButton {
  children: ReactNode | ReactNode[];
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<IButton> = ({ children, isActive, ...props }) => {
  return (
    <>
      <button
        {...props}
        type="button"
        className={
          isActive ? `${classes.button} ${classes.active}` : classes.button
        }
      >
        {children}
      </button>
    </>
  );
};
