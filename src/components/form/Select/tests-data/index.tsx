import { render, screen } from "@testing-library/react";
import React from "react";
import Select, { ISelectProps } from "../Select";

const _options = [
  { value: "option01", label: "option no. 1" },
  { value: "option02", label: "option no. 2" },
  { value: "option03", label: "option no. 3" },
  { value: "option04" },
];

export const testOnChange = jest.fn();
export const testOnClick = jest.fn();

export const propsData = {
  value: "Select Test Value",
  onChange: testOnChange,
  name: "Select Test Name",
  label: "Select Test Label",
  options: _options,
  id: "Select Test Id",
  placeholder: "Select Test Placeholder",
  customCssClass: "SelectTestClassName",
  onClick: testOnClick,
  style: { marginBottom: "30px" },
  tabIndex: 3,
  htmlAttributes: {
    form: "Select Test Form",
    autoComplete: "Select Test AutoComplete",
  },
};

type additionalPropsType = Partial<ISelectProps>;
export const getRenderedContent = (additionalProps?: additionalPropsType) => {
  const { container } = render(<Select {...propsData} {...additionalProps} />);
  const selectElement = screen.getByTestId(`${propsData.name}-select`);
  const optionsElements = container.querySelectorAll("option");
  return {
    selectElement,
    optionsElements,
  };
};
