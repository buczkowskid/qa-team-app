/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./styles.module.scss";

function Stoper() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const toggleStoper = () => {
    setIsRunning(!isRunning);
  };

  const resetStoper = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div>
      <p>Upłynęło czasu: {elapsedTime} sekund</p>
      <div className={styles.buttonsWrapper}>
        <Button onClick={toggleStoper}>{isRunning ? "Zatrzymaj" : "Start"}</Button>
        <Button onClick={resetStoper}>Resetuj</Button>
      </div>
    </div>
  );
}

export default Stoper;
