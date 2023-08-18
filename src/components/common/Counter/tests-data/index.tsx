import { render } from "@testing-library/react";
import React from "react";
import Counter, { CounterPropsInterface } from "../Counter";

const propsData = {
  initialCount: 0,
};

// type additionalPropsType = Partial<CounterPropsInterface>;
export const getRenderedContent = (additionalProps?: Partial<CounterPropsInterface>) => {
  const { getByTestId } = render(<Counter {...propsData} {...additionalProps} />);

  const counterDisplayElement = getByTestId("counter-display");
  const increaseButtonElement = getByTestId("increase-button");
  const decreaseButtonElement = getByTestId("decrease-button");

  return {
    counterDisplayElement,
    increaseButtonElement,
    decreaseButtonElement,
  };
};
