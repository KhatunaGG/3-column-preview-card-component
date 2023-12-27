import React from "react";
import style from "./image.module.css";

const Image = ({ title, bg, carSrc, textContent }) => {
  return <img src={carSrc} alt="" className={style.image} />;
};

export default Image;
