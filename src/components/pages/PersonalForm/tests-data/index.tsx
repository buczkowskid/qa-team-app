import { render } from "@testing-library/react";
import React from "react";
import PersonForm from "../PersonalForm";

export const handleSubmit = jest.fn();

export const getPersonForm = () => {
  const { container, getByTestId } = render(<PersonForm onSubmit={handleSubmit} />);

  const nameInputElement = getByTestId("name-input");
  const surnameInputElement = getByTestId("surname-input");
  const ageInputElement = getByTestId("age-input");
  const keywordInputElement = getByTestId("keyword-input");

  return {
    container,
    nameInputElement,
    surnameInputElement,
    ageInputElement,
    keywordInputElement,
  };
};
