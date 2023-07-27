import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export enum ButtonsWrapperAlignOptions {
  LEFT = "alignToLeft",
  RIGHT = "alignToRight",
}

export interface IProps {
  children: ReactNode;
  alignTo?: ButtonsWrapperAlignOptions;
  customCssClass?: string;
  dataTestId?: string;
}

const ButtonsWrapper = ({
  children,
  alignTo,
  customCssClass = "",
  dataTestId,
}: IProps): JSX.Element => {
  const _buttonsWrapperClassName = classNames(styles.buttonsWrapper, {
    [styles[alignTo || ""]]: alignTo,
    [customCssClass]: customCssClass,
  });

  return (
    <div data-testid={dataTestId} className={_buttonsWrapperClassName}>
      {children}
    </div>
  );
};

export default ButtonsWrapper;
