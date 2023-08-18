import { getRenderedButton } from "./tests-data";

describe("Button", () => {
  test("Should render Button component", () => {
    const { buttonElement } = getRenderedButton();
    expect(buttonElement).toBeInTheDocument();
  });

  test("Should display icon", () => {
    const { iconElement } = getRenderedButton();
    expect(iconElement).toBeInTheDocument();
  });

  test("Should not render icon", () => {
    const { iconElement } = getRenderedButton({ icon: undefined });
    expect(iconElement).not.toBeInTheDocument();
  });

  test("Should have proper attribute", () => {
    const { buttonElement } = getRenderedButton();
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
