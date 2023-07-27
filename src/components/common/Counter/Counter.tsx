import React, { useState } from "react";
import Button from "../Button/Button";
import ButtonsWrapper from "../ButtonWrapper/ButtonsWrapper";
import styles from "./styles.module.scss";

interface CounterPropsInterface {
  initialCount?: number;
}

const Counter: React.FC<CounterPropsInterface> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <p className={styles.counter} data-testid="counter-display">
        Count: {count}
      </p>
      <ButtonsWrapper>
        <Button dataTestId="decrease-button" onClick={() => setCount(count - 1)}>
          Decrease
        </Button>
        <Button dataTestId="increase-button" onClick={() => setCount(count + 1)}>
          Increase
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default Counter;
