import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className={styles.contentWrapper}>
      <main className={styles.insideWrapper}>
        <section className={styles.content}>{children}</section>
      </main>
    </div>
  );
};
export default AppWrapper;
