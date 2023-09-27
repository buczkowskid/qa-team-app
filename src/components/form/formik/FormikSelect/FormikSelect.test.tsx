import { FormElementStatusesEnum } from "@networkraildigitalfactory/react-components";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OPTIONS, WRONG_OPTION_ERROR, renderFormikSelect } from "./tests-data";

describe("Formik Select", () => {
  test("Should render formik select without any errors", async () => {
    renderFormikSelect({});
    await act(async () => {
      userEvent.selectOptions(screen.getByTestId("select-select"), OPTIONS[2].value);
    });
    expect(screen.queryByTestId("text-container-status")).toBeNull();
  });

  test("Should render formik select with max characters error", async () => {
    renderFormikSelect({});
    await act(async () => {
      userEvent.selectOptions(screen.getByTestId("select-select"), OPTIONS[1].value);
    });
    await waitFor(() => {
      expect(screen.getByText(WRONG_OPTION_ERROR)).toBeInTheDocument();
    });
  });

  test("Should render formik select with custom error", async () => {
    renderFormikSelect({
      statusesTexts: {
        error: "custom error",
      },
      status: FormElementStatusesEnum.ERROR,
    });
    await act(async () => {
      userEvent.selectOptions(screen.getByTestId("select-select"), OPTIONS[0].value);
    });
    expect(screen.queryByText(WRONG_OPTION_ERROR)).not.toBeInTheDocument();
    expect(screen.getByText("custom error")).toBeInTheDocument();
  });
});
