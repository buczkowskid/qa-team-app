import Button from "components/common/Button/Button";
import Counter from "components/common/Counter/Counter";
import RandomImage from "components/common/RandomImage/RandomImage";
import PersonForm, {
  PersonFormFieldsPropsInterface,
} from "components/pages/PersonalForm/PersonalForm";
import React, { useState } from "react";
import AppWrapper from "./components/page-layout/AppWrapper/AppWrapper";

const App = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = (values: PersonFormFieldsPropsInterface) => {
    setKeyword("nature");
  };

  return (
    <AppWrapper>
      <Button onClick={() => alert("You clicked me")}>Click Me!</Button>
      <Counter />
      <PersonForm onSubmit={handleSubmit} />
      <RandomImage keyword={keyword} />
    </AppWrapper>
  );
};

export default App;
