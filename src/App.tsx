import Button from "components/common/Button/Button";
import Counter from "components/common/Counter/Counter";
import PersonForm from "components/pages/PersonalForm/PersonalForm";
import React from "react";
import AppWrapper from "./components/page-layout/AppWrapper/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Button onClick={() => alert("You clicked me")}>Click Me!</Button>
      <Counter />
      <PersonForm />
    </AppWrapper>
  );
}

export default App;
