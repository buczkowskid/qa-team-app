import React, { useState } from "react";
import Button from "../Button/Button";
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
      <div className={styles.buttonsWrapper}>
        <Button dataTestId="decrease-button" onClick={() => setCount(count - 1)}>
          Decrease
        </Button>
        <Button dataTestId="increase-button" onClick={() => setCount(count + 1)}>
          Increase
        </Button>
      </div>
    </>
  );
};

export default Counter;
