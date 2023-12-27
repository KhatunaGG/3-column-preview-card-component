import React from "react";
import style from "./title.module.css";

const Title = ({ title, bg, carSrc, textContent }) => {
  return <h1 className={style.title}>{title}</h1>;
};

export default Title;
