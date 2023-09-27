import { render, screen } from "@testing-library/react";
import React from "react";
import LoadingBar, { IProps } from "../LoadingBar";

export const getRenderedContent = (propsData?: IProps) => {
  render(<LoadingBar {...propsData} />);
  const loadingElement = screen.getByTestId("loading-element");
  return { loadingElement };
};
