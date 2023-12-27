import React from "react";
import ButtonText from "../buttonText/ButtonText";
import style from "./button.module.css";

const Button = ({ btnTxtColor }) => {
  console.log(btnTxtColor);
  return (
    <button className={style.btn}>
      <ButtonText btnTxtColor={btnTxtColor} />
    </button>
  );
};

export default Button;
