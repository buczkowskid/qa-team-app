import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRenderedStoper } from "./tests-data";

describe("Stoper", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("Should display initial elapsed time as 0", () => {
    const { elapsedTimeElement } = getRenderedStoper();
    expect(elapsedTimeElement).toHaveTextContent("Upłynęło czasu: 0 sekund");
  });

  test("Should toggle start and stop", async () => {
    const { toggleButtonElement, elapsedTimeElement } = getRenderedStoper();

    userEvent.click(toggleButtonElement);

    await waitFor(
      () => {
        expect(toggleButtonElement).toHaveTextContent("Zatrzymaj");
        expect(elapsedTimeElement).not.toHaveTextContent("Upłynęło czasu: 0 sekund");
      },
      { timeout: 2000 }
    );

    userEvent.click(toggleButtonElement);

    await waitFor(() => {
      expect(toggleButtonElement).toHaveTextContent("Start");
    });
  });

  test("Should reset the elapsed time", async () => {
    const { toggleButtonElement, resetButtonElement, elapsedTimeElement } = getRenderedStoper();

    userEvent.click(toggleButtonElement);

    userEvent.click(resetButtonElement);

    await waitFor(() => {
      expect(elapsedTimeElement).toHaveTextContent("Upłynęło czasu: 0 sekund");
      expect(toggleButtonElement).toHaveTextContent("Start");
    });
  });
});
