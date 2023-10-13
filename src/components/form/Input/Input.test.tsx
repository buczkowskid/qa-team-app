import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { createRef } from "react";
import { InputTypesEnum } from "./Input";
import { getRenderedContent, propsData, testOnChange, testOnClick } from "./tests-data";

describe("Input", () => {
  test("Should render 'input' tag with proper props", () => {
    const { inputElement, textAfterInputElement } = getRenderedContent();
    expect(inputElement).toBeTruthy();
    expect(textAfterInputElement).toBeFalsy();
    expect(inputElement).toHaveAttribute("type", propsData.type);
    expect(inputElement).toHaveAttribute("value", propsData.value);
    expect(inputElement).toHaveAttribute("name", propsData.name);
    expect(inputElement).toHaveAttribute("data-cy", `${propsData.name}-input`);
    expect(inputElement).toHaveAttribute("data-testid", `${propsData.name}-input`);
    expect(inputElement).toHaveAttribute("id", propsData.id);
    expect(inputElement).toHaveAttribute("placeholder", propsData.placeholder);
    expect(inputElement).toHaveAttribute("class", propsData.customCssClass);
    expect(inputElement).toHaveAttribute("minlength", String(propsData.minLength));
    expect(inputElement).toHaveAttribute("maxlength", String(propsData.maxLength));
    expect(inputElement).toHaveAttribute("style", "margin-bottom: 30px;");
    expect(inputElement).toHaveAttribute("tabindex", String(propsData.tabIndex));
    expect(inputElement).toHaveAttribute("accept", propsData.htmlAttributes.accept);
    expect(inputElement).toHaveAttribute("alt", propsData.htmlAttributes.alt);
    expect(inputElement).toHaveAttribute("autoComplete", propsData.htmlAttributes.autoComplete);
    expect(inputElement).not.toHaveAttribute("pattern");
    expect(inputElement).not.toHaveAttribute("inputMode");
  });

  test("Should handle 'onClick' prop", () => {
    const { inputElement } = getRenderedContent();
    userEvent.click(inputElement);
    waitFor(() => {
      expect(testOnClick).toHaveBeenCalled();
      expect(testOnClick).toHaveBeenCalledTimes(1);
    });
  });

  test("Should handle 'onChange' prop", () => {
    const { inputElement } = getRenderedContent();
    userEvent.type(inputElement, "123");
    waitFor(() => {
      expect(testOnChange).not.toHaveBeenCalledWith(`${propsData.value}1`);
      expect(testOnChange).toHaveBeenCalledTimes(3);
    });
  });

  test("Should have proper 'customRef' prop", () => {
    const _textInputRef = createRef() as React.RefObject<HTMLInputElement>;
    const _onClickSpy = jest.fn();
    getRenderedContent({ onClick: _onClickSpy, customRef: _textInputRef });
    waitFor(() => {
      userEvent.click(_textInputRef.current as Element);
      expect(_onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  test("Should be disabled", () => {
    const { inputElement } = getRenderedContent({ disabled: true });
    expect(inputElement).toHaveAttribute("disabled");
  });

  test("Should have type 'email'", () => {
    const { inputElement } = getRenderedContent(undefined, { type: InputTypesEnum.EMAIL });
    expect(inputElement).toHaveAttribute("type", InputTypesEnum.EMAIL);
    expect(inputElement).not.toHaveAttribute("pattern");
    expect(inputElement).not.toHaveAttribute("inputMode");
  });

  test("Should have type 'text' if given type 'number'", () => {
    const { inputElement } = getRenderedContent(undefined, { type: InputTypesEnum.NUMBER });
    expect(inputElement).toHaveAttribute("type", InputTypesEnum.TEXT);
    expect(inputElement).toHaveAttribute("pattern", "[0-9]*");
    expect(inputElement).toHaveAttribute("inputMode", "numeric");
  });

  test("Should have type 'password'", () => {
    const { inputElement } = getRenderedContent(undefined, { type: InputTypesEnum.PASSWORD });
    expect(inputElement).toHaveAttribute("type", InputTypesEnum.PASSWORD);
    expect(inputElement).not.toHaveAttribute("pattern");
    expect(inputElement).not.toHaveAttribute("inputMode");
  });

  test("Should render 'textAfterInputElement' with proper content", () => {
    const _testTxt = "test";
    const { textAfterInputElement } = getRenderedContent({ textAfterInput: _testTxt });
    expect(textAfterInputElement).toBeTruthy();
    expect(textAfterInputElement).toHaveTextContent(_testTxt);
  });
});
