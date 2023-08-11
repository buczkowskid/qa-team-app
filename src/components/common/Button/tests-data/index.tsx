import { IconsCssClassesEnum } from "@networkraildigitalfactory/react-components";
import { render } from "@testing-library/react";
import React from "react";
import Button, { ButtonPropsInterface } from "../Button";

const testOnClick = jest.fn();
const propsData = {
  onClick: testOnClick,
  children: "test-children",
  icon: IconsCssClassesEnum.ADD,
  htmlAttributes: {
    type: "submit" as const,
  },
  dataTestId: "button-testid",
};

type additionalPropsType = Partial<ButtonPropsInterface>;
export const getRenderedButton = (additionalProps?: additionalPropsType) => {
  const { getByTestId, queryByTestId } = render(<Button {...propsData} {...additionalProps} />);

  const buttonElement = getByTestId("button-testid");
  const iconElement = queryByTestId("button-icon");

  return { buttonElement, iconElement };
};
