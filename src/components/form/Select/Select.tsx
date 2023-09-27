import { IconsCssClassesEnum } from "@networkraildigitalfactory/react-components";
import TextFormElementContainer from "@networkraildigitalfactory/react-components/dist/stories/helpers/components/text-form-element-container/TextFormElementContainer";
import { TextFormElementCommonPropsInterface } from "@networkraildigitalfactory/react-components/dist/stories/helpers/interfaces/textFormElementCommonProps.interface";
import { TextFormElementContainerPropsInterface } from "@networkraildigitalfactory/react-components/dist/stories/helpers/interfaces/textFormElementContainerProps.interface";
import classNames from "classnames";
import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

export interface ISelectProps
  extends Omit<TextFormElementContainerPropsInterface, "trailingIcon" | "trailingIconOnClick">,
    Omit<TextFormElementCommonPropsInterface<HTMLSelectElement>, "minLength" | "maxLength"> {
  options: { value: string; label?: string }[];
  htmlAttributes?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

const Select = ({
  value,
  onChange,
  name,
  label,
  options,
  assistiveText,
  leadingIcon,
  id,
  placeholder,
  customCssClass = "",
  status,
  statusesTexts,
  labelHtmlAttributes,
  onClick,
  required = false,
  disabled,
  style,
  tabIndex,
  customRef,
  htmlAttributes,
}: ISelectProps): JSX.Element => {
  const _handleOnChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    onChange(event.target.value);

  const _selectDataTestId = `${name}-select`;
  const _placeholderDataTestId = `${_selectDataTestId}-placeholder`;
  const _isPlaceholderShown = value === "" && placeholder;

  const selectCssClasses = classNames({
    [styles.placeholderShown]: _isPlaceholderShown,
    [customCssClass]: customCssClass,
  });

  return (
    <TextFormElementContainer
      name={name}
      label={label}
      assistiveText={assistiveText}
      leadingIcon={leadingIcon}
      trailingIcon={IconsCssClassesEnum.ARROW_DROP_DOWN}
      status={status}
      statusesTexts={statusesTexts}
      labelHtmlAttributes={labelHtmlAttributes}
      disabled={disabled}
      required={required}
    >
      <select
        {...htmlAttributes}
        onChange={_handleOnChange}
        value={value}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        onClick={onClick}
        className={selectCssClasses}
        style={style}
        tabIndex={tabIndex}
        ref={customRef}
        data-cy={_selectDataTestId}
        data-testid={_selectDataTestId}
        placeholder={placeholder}
      >
        {placeholder && (
          <option
            value=""
            disabled
            data-cy={_placeholderDataTestId}
            data-testid={_placeholderDataTestId}
          >
            {placeholder}
          </option>
        )}

        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
            data-cy={`${_selectDataTestId}-${value}`}
            data-testid={`${_selectDataTestId}-${value}`}
          >
            {label ?? value}
          </option>
        ))}
      </select>
    </TextFormElementContainer>
  );
};

export default Select;
