import React from "react";
import styles from "./headerButtons.module.css";

const HeaderButtons = (props) => {
  return (
    <button
      className={
        props.selected ? styles.headerButtons_selected : styles.headerButtons
      }
    >
      {props.buttonTitle}
    </button>
  );
};

export default HeaderButtons;
