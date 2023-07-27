/* eslint-disable no-console */
import { Yup } from "@networkraildigitalfactory/react-components";
import Button from "components/common/Button/Button";
import FormikInput from "components/common/formik/FormikInput/FormikInput";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import styles from "./styles.module.scss";

interface FormFields {
  name: string;
  surname: string;
  age: number | string;
}
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .test("first-letter-uppercase", "First letter must be uppercase", function (value = "") {
      const firstLetter = value.charAt(0);
      return firstLetter === firstLetter.toUpperCase();
    })
    .required("Name is required"),
  surname: Yup.string()
    .test("first-letter-uppercase", "First letter must be uppercase", function (value = "") {
      const firstLetter = value.charAt(0);
      return firstLetter === firstLetter.toUpperCase();
    })
    .required("Surname is required"),
  age: Yup.number().min(18, "You must be over 18").required("Age is required"),
});

const initialValues: FormFields = {
  name: "",
  surname: "",
  age: "",
};

const PersonForm: React.FC = () => {
  const handleSubmit = (values: FormFields, { resetForm }: FormikHelpers<FormFields>) => {
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormikInput name="name" label="Name" required />
        <FormikInput name="surname" label="Surname" required />
        <FormikInput name="age" label="Age" required />

        <Button htmlAttributes={{ type: "submit" }} onClick={() => handleSubmit}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default PersonForm;
