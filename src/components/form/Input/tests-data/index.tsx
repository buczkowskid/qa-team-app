import { render, screen } from "@testing-library/react";
import React from "react";
import Input, { IInputProps, InputTypesEnum } from "../Input";

export const testOnChange = jest.fn();
export const testOnClick = jest.fn();

export const propsData = {
  type: InputTypesEnum.TEXT,
  value: "Input Test Value",
  onChange: testOnChange,
  name: "Input Test Name",
  label: "Input Test Label",
  id: "Input Test Id",
  placeholder: "Input Test Placeholder",
  customCssClass: "Input Test className",
  onClick: testOnClick,
  minLength: 3,
  maxLength: 50,
  style: { marginBottom: "30px" },
  tabIndex: 3,
  htmlAttributes: {
    accept: "Input Test Accept",
    alt: "Input Test Alt",
    autoComplete: "Input Test AutoComplete",
  },
};

type additionalPropsType = Partial<IInputProps>;
export const getRenderedContent = (
  additionalProps?: additionalPropsType,
  typeData?: { type: InputTypesEnum }
) => {
  const { container } = render(<Input {...propsData} {...additionalProps} {...typeData} />);
  const inputElement = screen.getByTestId(`${propsData.name}-input`);
  const textAfterInputElement = container.querySelector(".textAfterInput");

  return {
    inputElement,
    textAfterInputElement,
  };
};
