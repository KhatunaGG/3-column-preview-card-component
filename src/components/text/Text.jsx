import React from "react";
import style from "./text.module.css";

const Text = ({ title, bg, carSrc, textContent }) => {
  return <p className={style.text}>{textContent}</p>;
};

export default Text;
