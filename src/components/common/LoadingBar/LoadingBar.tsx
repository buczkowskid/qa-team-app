import { LoaderVariantsEnum } from "@networkraildigitalfactory/react-components";
import classNames from "classnames";
import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";

export interface IProps {
  customCssClass?: string;
  customStyle?: CSSProperties;
  variant?: LoaderVariantsEnum;
}

const LoadingBar = ({
  customCssClass = "",
  customStyle = {},
  variant = LoaderVariantsEnum.LOADER,
}: IProps): JSX.Element => {
  const _progressCssClasses = classNames(styles[`fullWidth__${variant}`], {
    [customCssClass]: customCssClass,
  });

  return <div data-testid="loading-element" className={_progressCssClasses} style={customStyle} />;
};

export default LoadingBar;
