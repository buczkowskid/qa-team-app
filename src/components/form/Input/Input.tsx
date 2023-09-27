import TextFormElementContainer from "@networkraildigitalfactory/react-components/dist/stories/helpers/components/text-form-element-container/TextFormElementContainer";
import { TextFormElementCommonPropsInterface } from "@networkraildigitalfactory/react-components/dist/stories/helpers/interfaces/textFormElementCommonProps.interface";
import { TextFormElementContainerPropsInterface } from "@networkraildigitalfactory/react-components/dist/stories/helpers/interfaces/textFormElementContainerProps.interface";
import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

export enum InputTypesEnum {
  EMAIL = "email",
  NUMBER = "number",
  PASSWORD = "password",
  TEXT = "text",
}

export interface IInputProps
  extends TextFormElementContainerPropsInterface,
    TextFormElementCommonPropsInterface<HTMLInputElement> {
  type?: InputTypesEnum;
  allowedRegex?: RegExp;
  htmlAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  textAfterInput?: string;
}

const Input = ({
  type = InputTypesEnum.TEXT,
  value,
  onChange,
  name,
  label,
  assistiveText,
  leadingIcon,
  trailingIcon,
  leadingIconOnClick,
  trailingIconOnClick,
  id,
  placeholder,
  customCssClass,
  status,
  statusesTexts,
  labelHtmlAttributes,
  returnOnlyValue,
  onClick,
  required = false,
  minLength,
  maxLength,
  disabled,
  style,
  tabIndex,
  customRef,
  allowedRegex,
  htmlAttributes,
  textAfterInput,
  inlineLayout,
}: IInputProps): JSX.Element => {
  const _handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const isAllowed = allowedRegex ? allowedRegex.test(event.target.value) : true;
    if (isAllowed) {
      onChange(returnOnlyValue ? event.target.value : event);
    }
  };

  const _isNumber = type === InputTypesEnum.NUMBER;
  const _type = _isNumber ? InputTypesEnum.TEXT : type;
  const _pattern = _isNumber ? "[0-9]*" : undefined;
  const _inputMode = _isNumber ? "numeric" : undefined;
  const _inputDataTestId = `${name}-input`;

  return (
    <TextFormElementContainer
      name={name}
      label={label}
      assistiveText={assistiveText}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      leadingIconOnClick={leadingIconOnClick}
      trailingIconOnClick={trailingIconOnClick}
      status={status}
      statusesTexts={statusesTexts}
      labelHtmlAttributes={labelHtmlAttributes}
      disabled={disabled}
      required={required}
      inlineLayout={inlineLayout}
    >
      <div className={styles.inputWr}>
        <input
          {...htmlAttributes}
          type={_type}
          value={value}
          onChange={_handleOnChange}
          name={name}
          id={id}
          placeholder={placeholder}
          className={customCssClass}
          onClick={onClick}
          ref={customRef}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          style={style}
          tabIndex={tabIndex}
          pattern={_pattern}
          inputMode={_inputMode}
          data-cy={_inputDataTestId}
          data-testid={_inputDataTestId}
        />
        {textAfterInput && <span className={styles.textAfterInput}>{textAfterInput}</span>}
      </div>
    </TextFormElementContainer>
  );
};

export default Input;
