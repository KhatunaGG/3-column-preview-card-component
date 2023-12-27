import React from "react";
import style from "./buttontext.module.css";

const ButtonText = ({ btnTxtColor }) => {
  return (
    <span style={{ color: btnTxtColor }} className={style.buttontext}>
      Learn More
    </span>
  );
};

export default ButtonText;
