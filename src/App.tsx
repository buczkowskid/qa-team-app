import {
  LoaderVariantsEnum,
  LoadingBar,
  LogoutButton,
} from "@networkraildigitalfactory/react-components";
import Counter from "components/common/Counter/Counter";
import RandomImage from "components/common/RandomImage/RandomImage";
import Stoper from "components/common/Stoper/Stoper";
import PersonForm, {
  PersonFormFieldsPropsInterface,
} from "components/pages/PersonalForm/PersonalForm";
import React, { useState } from "react";
import AppWrapper from "./components/page-layout/AppWrapper/AppWrapper";

const App = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = (values: PersonFormFieldsPropsInterface) => {
    setKeyword(values.keyword);
  };

  return (
    <AppWrapper>
      <LoadingBar variant={LoaderVariantsEnum.PROGRESS} />
      <LogoutButton onLogout={async () => alert("Logout blocked!")} />
      <Counter />
      <PersonForm onSubmit={handleSubmit} />
      <RandomImage keyword={keyword} />
      <Stoper />
    </AppWrapper>
  );
};

export default App;
