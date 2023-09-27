import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getPersonForm, handleSubmit } from "./tests-data";

describe("Person Form", () => {
  test("Should render initial values", () => {
    const { nameInputElement, surnameInputElement, ageInputElement, keywordInputElement } =
      getPersonForm();

    expect(nameInputElement).toHaveValue("");
    expect(surnameInputElement).toHaveValue("");
    expect(ageInputElement).toHaveValue("");
    expect(keywordInputElement).toHaveValue("");
  });

  test("Should render and submit formik values", async () => {
    const { nameInputElement, surnameInputElement, ageInputElement, keywordInputElement } =
      getPersonForm();

    await userEvent.type(nameInputElement, "Johnny");
    await userEvent.type(surnameInputElement, "Test");
    await userEvent.type(ageInputElement, "25");
    await userEvent.type(keywordInputElement, "Test");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      // onSubmit provides two arguments - values and formikHelpers
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          name: "Johnny",
          surname: "Test",
          age: "25",
          keyword: "Test",
        },
        expect.anything()
      );
    });
  });

  test("Should render error message", async () => {
    const { nameInputElement } = getPersonForm();

    act(() => {
      userEvent.type(nameInputElement, "johnny");
    });

    await waitFor(() => {
      expect(nameInputElement).toHaveValue("johnny");
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
    });
  });
});
