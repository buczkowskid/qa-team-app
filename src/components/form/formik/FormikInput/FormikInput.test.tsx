import {
  FormElementStatusesEnum,
  InputTypesEnum,
} from "@networkraildigitalfactory/react-components";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikInput, { IFormikInputProps } from "./FormikInput";

const MAX_CHAR_ERROR = "too many characters";
const MIN_CHAR_ERROR = "please type at least 4 characters";

const renderFormikInput = (args?: Partial<IFormikInputProps>) => {
  render(
    <Formik
      initialValues={{
        input: "",
      }}
      onSubmit={jest.fn()}
      validationSchema={Yup.object().shape({
        input: Yup.string().min(4, MIN_CHAR_ERROR).max(10, MAX_CHAR_ERROR).required(),
      })}
    >
      <FormikInput
        type={InputTypesEnum.TEXT}
        name="input"
        label="Label"
        placeholder="Placeholder text"
        {...args}
      />
    </Formik>
  );
};

describe("Formik Input", () => {
  test("Should render formik input without any errors", async () => {
    renderFormikInput();
    await userEvent.type(screen.getByTestId("input-input"), "short text");
    await waitFor(() => {
      expect(screen.queryByTestId("text-container-status")).toBeNull();
    });
  });

  test("Should render formik input with min characters error", async () => {
    renderFormikInput();
    await userEvent.type(screen.getByTestId("input-input"), "abc");
    await waitFor(() => {
      expect(screen.getByText(MIN_CHAR_ERROR)).toBeInTheDocument();
    });
  });

  test("Should render formik input with max characters error", async () => {
    renderFormikInput();
    await userEvent.type(screen.getByTestId("input-input"), "some long teskst");
    await waitFor(() => {
      expect(screen.getByText(MAX_CHAR_ERROR)).toBeInTheDocument();
    });
  });

  test("Should render formik input with custom error", async () => {
    renderFormikInput({
      statusesTexts: {
        error: "custom error",
      },
      status: FormElementStatusesEnum.ERROR,
    });
    await userEvent.type(screen.getByTestId("input-input"), "some long text");
    await waitFor(() => {
      expect(screen.queryByText(MAX_CHAR_ERROR)).not.toBeInTheDocument();
      expect(screen.getByText("custom error")).toBeInTheDocument();
    });
  });
});
