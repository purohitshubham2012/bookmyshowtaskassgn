import React from "react";
import styles from "./selectInput.module.css";

const SelectInput = (props) => {
  return (
    <select
      className={styles.select}
      onChange={props.onChange && props.onChange}
      defaultValue="default"
    >
      <option value="default">{props.default}</option>
      {props.options &&
        props.options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
    </select>
  );
};

export default SelectInput;
