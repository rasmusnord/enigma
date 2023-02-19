import React from "react";
import styles from "../styles/form.module.css";

export const FormRow = (props: React.PropsWithChildren) => {
  const { children } = props;

  return <div className={styles.formRow}>{children}</div>;
};
