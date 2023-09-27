import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRenderedCounter } from "./tests-data";

describe("Counter", () => {
  test("Should have initial count number === 0", () => {
    const { counterElement } = getRenderedCounter();

    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("Count: 0");
  });

  test("Should increase count after increase button is clicked", async () => {
    const { counterElement, increaseButtonElement } = getRenderedCounter();
    userEvent.click(increaseButtonElement);
    await waitFor(() => {
      expect(counterElement).toHaveTextContent("Count: 1");
    });
  });

  test("Should decrease count after decrease button is clicked", async () => {
    const { counterElement, decreaseButtonElement } = getRenderedCounter({ initialCount: 5 });
    userEvent.click(decreaseButtonElement);
    await waitFor(() => {
      expect(counterElement).toHaveTextContent("Count: 4");
    });
  });
});
