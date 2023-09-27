import { Select } from "@networkraildigitalfactory/react-components";
import getFormikStatuses from "@networkraildigitalfactory/react-components/dist/shared/utils/getFormikStatuses";
import { ISelectProps } from "@networkraildigitalfactory/react-components/dist/stories/forms/Select/Select";
import { OnChangeCommonType } from "@networkraildigitalfactory/react-components/dist/stories/helpers/types/onChangeCommon.type";
import { Field, FieldProps } from "formik";
import React from "react";

export interface IFormikSelectProps extends Omit<ISelectProps, "value" | "onChange"> {
  onChange?: OnChangeCommonType;
}

const FormikSelect = ({
  name,
  onChange,
  statusesTexts,
  status,
  ...args
}: IFormikSelectProps): JSX.Element => (
  <Field name={name}>
    {({ field, meta, form }: FieldProps) => {
      const { statusValue, statuses } = getFormikStatuses({
        name,
        meta,
        form,
        status,
        statusesTexts,
      });

      return (
        <Select
          {...args}
          name={name}
          value={field.value}
          statusesTexts={statuses}
          status={statusValue}
          onChange={(e) => {
            form.setFieldTouched(name, true);
            field.onChange(e);

            if (onChange) {
              onChange();
            }
          }}
        />
      );
    }}
  </Field>
);

export default FormikSelect;
