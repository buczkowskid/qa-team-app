import { LogoutButton } from "@networkraildigitalfactory/react-components";
import Counter from "components/common/Counter/Counter";
import RandomImage from "components/common/RandomImage/RandomImage";
import Stoper from "components/common/Stoper/Stoper";
import Select from "components/form/Select/Select";
import PersonForm, {
  PersonFormFieldsPropsInterface,
} from "components/pages/PersonalForm/PersonalForm";
import React, { useState } from "react";
import AppWrapper from "./components/page-layout/AppWrapper/AppWrapper";

const App = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [value, setValue] = useState("");
  const handleChange = (newValue: string): void => {
    setValue(newValue);
  };

  const handleSubmit = (values: PersonFormFieldsPropsInterface) => {
    setKeyword(values.keyword);
  };

  const selectOptions = [
    {
      label: "Option 1",
      value: "1",
    },
    {
      label: "Option 2",
      value: "2",
    },
  ];

  return (
    <AppWrapper>
      <LogoutButton onLogout={async () => alert("Logout blocked!")} />
      <Counter />
      <PersonForm onSubmit={handleSubmit} />
      <RandomImage keyword={keyword} />
      <Stoper />
      <Select
        label="select"
        name="select"
        options={selectOptions}
        onChange={handleChange}
        value={value}
      />
    </AppWrapper>
  );
};

export default App;
