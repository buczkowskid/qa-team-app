import { IconsCssClassesEnum } from "@networkraildigitalfactory/react-components";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonPropsInterface {
  onClick: MouseEventHandler;
  children?: ReactNode;
  icon?: IconsCssClassesEnum;
  htmlAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  dataTestId?: string;
}

const Button: React.FC<ButtonPropsInterface> = ({
  onClick,
  children,
  icon,
  htmlAttributes,
  dataTestId,
}: ButtonPropsInterface) => {
  return (
    <button
      type="button"
      {...htmlAttributes}
      onClick={onClick}
      data-testid={dataTestId}
      className={styles.button}
    >
      {icon && <i className={`${styles.iconWr} ${icon}`} />}
      {children && <span className={styles.contentWr}>{children}</span>}
    </button>
  );
};
export default Button;
