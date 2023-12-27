import React from "react";
import Circle from "../circle/Circle";
import Section from "../section/Section";
import style from "./card.module.css";

const Card = ({ hover, bg, carSrc, title, textContent, btnTxtColor }) => {
  return (
    <div
      style={{ background: bg }}
      className={`${style.card}  ${hover == "orange" ? style.orange : ""}`}
    >
      <Circle carSrc={carSrc} />
      <Section
        title={title}
        textContent={textContent}
        btnTxtColor={btnTxtColor}
      />
    </div>
  );
};

export default Card;
