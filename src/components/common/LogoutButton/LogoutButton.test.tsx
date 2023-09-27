import { fireEvent, screen, waitFor } from "@testing-library/react";
import {
  getRenderedContent,
  modalHeaderTextTest,
  modalContentTest,
  testButtonLabelText,
} from "./tests-data";

describe("Logout Button", () => {
  test("Should handle `onLogout` function", async () => {
    const onLogout = jest.fn();
    const { logoutButtonElement } = getRenderedContent({ onLogout });
    fireEvent.click(logoutButtonElement);
    fireEvent.click(screen.getByTestId("modal-primary-button"));
    await waitFor(() => {
      expect(onLogout).toHaveBeenCalled();
    });
  });

  test("Should display `HeaderText` and `Text` in modalDialog from passed props", async () => {
    const { logoutButtonElement } = getRenderedContent({
      modalHeaderText: modalHeaderTextTest,
      modalContent: modalContentTest,
    });
    fireEvent.click(logoutButtonElement);
    await waitFor(() => {
      expect(screen.getByTestId("modal-element")).toHaveTextContent(modalHeaderTextTest);
      expect(screen.getByTestId("modal-element")).toHaveTextContent(modalContentTest);
    });
  });

  test("Should render custom button label", () => {
    const { logoutButtonElement } = getRenderedContent({ buttonLabel: testButtonLabelText });
    expect(logoutButtonElement).toHaveTextContent(testButtonLabelText);
  });
});
