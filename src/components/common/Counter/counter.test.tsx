import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRenderedContent } from "./tests-data/index";

describe("Counter", () => {
  test("Should render Counter component", () => {
    const { counterDisplayElement } = getRenderedContent();
    expect(counterDisplayElement).toBeInTheDocument();
  });

  test("Should display initialValue as 0", () => {
    const { counterDisplayElement } = getRenderedContent();
    screen.debug();
    expect(counterDisplayElement).toHaveTextContent("Count: 0");
  });

  test("Should display initialValue as 2", () => {
    const { counterDisplayElement } = getRenderedContent({ initialCount: 2 });
    screen.debug();
    expect(counterDisplayElement).toHaveTextContent("Count: 2");
  });

  test("Should increase displayed value when increase button is clicked", () => {
    const { counterDisplayElement, increaseButtonElement } = getRenderedContent();
    userEvent.click(increaseButtonElement);
    waitFor(() => {
      expect(counterDisplayElement).toHaveTextContent("Count: 1");
    });
  });
});
