import BasicHTML from "components/common/BasicHTML/BasicHTML";
import Button from "components/common/Button/Button";
import Counter from "components/common/Counter/Counter";
import PersonForm from "components/pages/PersonalForm/PersonalForm";
import React from "react";
import AppWrapper from "./components/page-layout/AppWrapper/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Button onClick={() => null}>Click Me!</Button>
      <Counter></Counter>
      <PersonForm />
    </AppWrapper>
  );
}

export default App;
