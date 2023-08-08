import { Yup } from "@networkraildigitalfactory/react-components";

export const validationSchema = Yup.object().shape({
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
  keyword: Yup.string().required("Keyword is required"),
});
