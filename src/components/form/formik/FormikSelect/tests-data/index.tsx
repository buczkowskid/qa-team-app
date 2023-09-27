import { Yup, FormikSelect } from "@networkraildigitalfactory/react-components";
import { render } from "@testing-library/react";
import { Formik, Form } from "formik";
import React from "react";
import { IFormikSelectProps } from "../FormikSelect";

export const OPTIONS = [
  { value: "option01", label: "option no. 1" },
  { value: "option02", label: "option no. 2" },
  { value: "option03", label: "option no. 3" },
  { value: "option04", label: "option no. 4" },
];

export const WRONG_OPTION_ERROR = "wrong option";

export const renderFormikSelect = (args: Partial<IFormikSelectProps>) => {
  render(
    <Formik
      initialValues={{
        select: "",
      }}
      onSubmit={jest.fn()}
      validationSchema={Yup.object().shape({
        select: Yup.string()
          .oneOf(OPTIONS.map((opt) => opt.value).slice(2, OPTIONS.length), WRONG_OPTION_ERROR)
          .required(),
      })}
    >
      <Form>
        <FormikSelect
          name="select"
          label="Label"
          options={OPTIONS}
          placeholder="Placeholder text"
          {...args}
        />
      </Form>
    </Formik>
  );
};
