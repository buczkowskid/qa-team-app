import { IconsCssClassesEnum } from "@networkraildigitalfactory/react-components";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonPropsInterface {
  onClick: MouseEventHandler;
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconsCssClassesEnum;
  htmlAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  dataTestId?: string;
}

const Button = ({
  onClick,
  children,
  disabled,
  icon,
  htmlAttributes,
  dataTestId,
}: ButtonPropsInterface): JSX.Element => {
  return (
    <button
      type="button"
      {...htmlAttributes}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
      className={styles.button}
    >
      {icon && <i className={`${styles.iconWr} ${icon}`} />}
      {children && <span className={styles.contentWr}>{children}</span>}
    </button>
  );
};
export default Button;
