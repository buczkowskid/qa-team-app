/* eslint-disable no-console */
import Button from "components/common/Button/Button";
import FormikInput from "components/form/formik/FormikInput/FormikInput";
import { Form, Formik } from "formik";
import React from "react";
import { validationSchema } from "./personalForm.schema";
import styles from "./styles.module.scss";

export interface PersonFormFieldsPropsInterface {
  name: string;
  surname: string;
  age: number | string;
  keyword: string;
}
export interface PersonFormPropsInterface {
  onSubmit: (values: PersonFormFieldsPropsInterface) => void;
}

const initialValues: PersonFormFieldsPropsInterface = {
  name: "",
  surname: "",
  age: "",
  keyword: "",
};

const PersonForm: React.FC<PersonFormPropsInterface> = ({ onSubmit }: PersonFormPropsInterface) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <FormikInput name="name" label="Name" required />
        <FormikInput name="surname" label="Surname" required />
        <FormikInput name="age" label="Age" required />
        <FormikInput name="keyword" label="Your keyword" required />

        <Button htmlAttributes={{ type: "submit" }} onClick={() => onSubmit}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default PersonForm;
