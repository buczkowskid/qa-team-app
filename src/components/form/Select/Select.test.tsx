import userEvent from "@testing-library/user-event";
import React, { createRef } from "react";
import { getRenderedContent, propsData, testOnChange, testOnClick } from "./tests-data";

describe("Select", () => {
  const _selectDataTestId = `${propsData.name}-select`;
  const _placeholderDataTestId = `${_selectDataTestId}-placeholder`;

  test("Should render 'select' tag with proper props", () => {
    const { selectElement } = getRenderedContent();
    expect(selectElement).toBeTruthy();
    expect(selectElement).toHaveAttribute("name", propsData.name);
    expect(selectElement).toHaveAttribute("data-cy", _selectDataTestId);
    expect(selectElement).toHaveAttribute("data-testid", _selectDataTestId);
    expect(selectElement).toHaveAttribute("id", propsData.id);
    expect(selectElement).toHaveAttribute("class", propsData.customCssClass);
    expect(selectElement).toHaveAttribute("style", "margin-bottom: 30px;");
    expect(selectElement).toHaveAttribute("tabindex", String(propsData.tabIndex));
    expect(selectElement).toHaveAttribute("form", propsData.htmlAttributes.form);
    expect(selectElement).toHaveAttribute("autoComplete", propsData.htmlAttributes.autoComplete);
    expect(selectElement).not.toHaveAttribute("disabled");
  });

  test("Should handle 'onClick' prop", () => {
    const { selectElement } = getRenderedContent();
    userEvent.click(selectElement);
    expect(testOnClick).toHaveBeenCalled();
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });

  test("Should handle 'onChange' prop with true 'returnOnlyValue'", () => {
    const { selectElement, optionsElements } = getRenderedContent();
    const _optionElement = optionsElements[1].value;
    userEvent.selectOptions(selectElement, _optionElement);
    expect(testOnChange).toHaveBeenCalledWith(_optionElement);
    expect(testOnChange).toHaveBeenCalledTimes(1);
  });

  test("Should handle 'onChange' prop with false 'returnOnlyValue'", () => {
    const { selectElement, optionsElements } = getRenderedContent({ returnOnlyValue: false });
    const _optionElement = optionsElements[1].value;
    userEvent.selectOptions(selectElement, _optionElement);
    expect(testOnChange).not.toHaveBeenCalledWith(_optionElement);
    expect(testOnChange).toHaveBeenCalledTimes(1);
  });

  test("Should have proper 'customRef' prop", () => {
    const _selectRef = createRef() as React.RefObject<HTMLSelectElement>;
    const _onClickSpy = jest.fn();
    getRenderedContent({ onClick: _onClickSpy, customRef: _selectRef });
    userEvent.click(_selectRef.current as Element);
    expect(_onClickSpy).toHaveBeenCalledTimes(1);
  });

  test("Should be disabled", () => {
    const { selectElement } = getRenderedContent({ disabled: true });
    expect(selectElement).toHaveAttribute("disabled");
  });

  test("Should have first 'option' tag as 'placeholder'", () => {
    const { optionsElements } = getRenderedContent();
    const _optionElement = optionsElements[0];
    expect(optionsElements.length).toBe(propsData.options.length + 1);
    expect(_optionElement).toHaveAttribute("disabled");
    expect(_optionElement).toHaveAttribute("value", "");
    expect(_optionElement).toHaveTextContent(propsData.placeholder);
    expect(_optionElement).toHaveAttribute("data-cy", _placeholderDataTestId);
    expect(_optionElement).toHaveAttribute("data-testid", _placeholderDataTestId);
  });

  test("Should NOT have first 'option' tag as 'placeholder'", () => {
    const { optionsElements } = getRenderedContent({ placeholder: undefined });
    const _optionElement = optionsElements[0];
    expect(optionsElements.length).toBe(propsData.options.length);
    expect(_optionElement).not.toHaveAttribute("disabled");
    expect(_optionElement).not.toHaveAttribute("value", "");
    expect(_optionElement).not.toHaveTextContent(propsData.placeholder);
    expect(_optionElement).not.toHaveAttribute("data-cy", _placeholderDataTestId);
    expect(_optionElement).not.toHaveAttribute("data-testid", _placeholderDataTestId);
  });

  test("Should have proper 'option' tags", () => {
    const { optionsElements } = getRenderedContent({ placeholder: undefined });
    optionsElements.forEach((optionItem, idx) => {
      const _value = propsData.options[idx].value;
      const _label = propsData.options[idx].label;
      const _optionItemDataTestId = `${_selectDataTestId}-${_value}`;
      expect(optionItem).not.toHaveAttribute("disabled");
      expect(optionItem).toHaveAttribute("value", _value);
      expect(optionItem).toHaveTextContent(_label ?? _value);
      expect(optionItem).toHaveAttribute("data-cy", _optionItemDataTestId);
      expect(optionItem).toHaveAttribute("data-testid", _optionItemDataTestId);
    });
  });
});
