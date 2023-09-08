import React from "react";
import styles from "./styles.module.scss";

export interface InputPropsInterface {
  value: string | number;
  label: string;
  name: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  statusText?: string;
}

const Input: React.FC<InputPropsInterface> = ({
  value,
  label,
  name,
  onChange,
  placeholder,
  required,
  statusText,
}) => {
  const inputTestId = `${name}-input`;
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        onChange={onChange}
        required={required}
        data-testid={inputTestId}
      />
      {statusText && <p>{statusText}</p>}
    </div>
  );
};

export default Input;
