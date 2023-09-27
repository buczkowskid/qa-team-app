import { render } from "@testing-library/react";
import React from "react";
import Counter, { CounterPropsInterface } from "../Counter";

type additionalPropsType = CounterPropsInterface;
export const getRenderedCounter = (additionalProps?: additionalPropsType) => {
  const { getByTestId } = render(<Counter {...additionalProps} />);

  const counterElement = getByTestId("counter-display");
  const increaseButtonElement = getByTestId("increase-button");
  const decreaseButtonElement = getByTestId("decrease-button");

  return {
    counterElement,
    increaseButtonElement,
    decreaseButtonElement,
  };
};
