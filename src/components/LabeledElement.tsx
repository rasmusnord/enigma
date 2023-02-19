import React from "react";
import styles from "../styles/form.module.css";

export interface LabeledElementProps {
  label: string;
  children?: React.ReactNode;
}

export const LabeledElement = (props: LabeledElementProps) => {
  const { label, children } = props;

  return (
    <div className={styles.formColumn}>
      <label>{label}</label>
      {children}
    </div>
  );
};
