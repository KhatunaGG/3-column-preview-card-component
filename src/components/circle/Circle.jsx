import React from "react";
import Image from "../image/Image";
import style from "./circle.module.css";

const Circle = ({ title, bg, carSrc, textContent }) => {
  return (
    <div className={style.circle}>
      <Image carSrc={carSrc} />
    </div>
  );
};

export default Circle;
