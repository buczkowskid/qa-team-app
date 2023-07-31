import Input, { InputPropsInterface } from "components/form/Input/Input";
import { Field, FieldProps } from "formik";
import React from "react";

export interface IFormikInputProps extends Omit<InputPropsInterface, "value" | "onChange"> {
  onChange?: (...args: any[]) => void;
}

const FormikInput = ({ name, onChange, ...args }: IFormikInputProps): JSX.Element => (
  <Field name={name}>
    {({ field, form }: FieldProps) => {
      const errorMessage = form.errors[name] as string;
      const isTouched = form.touched[name];
      return (
        <Input
          {...args}
          name={name}
          value={field.value}
          onChange={(e: any) => {
            form.setFieldTouched(name, true);
            field.onChange(e);

            if (onChange) {
              onChange();
            }
          }}
          statusText={isTouched && errorMessage ? errorMessage : undefined}
        />
      );
    }}
  </Field>
);

export default FormikInput;
