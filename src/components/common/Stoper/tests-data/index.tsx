import { render } from "@testing-library/react";
import React from "react";
import Stoper from "../Stoper";

export const getRenderedStoper = () => {
  const { getByTestId } = render(<Stoper />);

  const elapsedTimeElement = getByTestId("elapsed-time");
  const toggleButtonElement = getByTestId("toggle-button");
  const resetButtonElement = getByTestId("reset-button");

  return {
    elapsedTimeElement,
    toggleButtonElement,
    resetButtonElement,
  };
};
