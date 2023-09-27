import { render } from "@testing-library/react";
import React from "react";
import LogoutButton, { LogoutButtonProps } from "../LogoutButton";

export const modalHeaderTextTest = "Test Header";
export const modalContentTest = "Test Text";
export const testButtonLabelText = "Test ABC";

export const testData = {
  onLogout: () =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 3000);
    }),
  buttonLabel: testButtonLabelText,
  modalHeaderText: modalHeaderTextTest,
  modalContent: modalContentTest,
};

export const getRenderedContent = (propsData?: Partial<LogoutButtonProps>) => {
  const { getByTestId } = render(<LogoutButton {...testData} {...propsData} />);
  return {
    logoutButtonElement: getByTestId("logoutButton"),
  };
};
