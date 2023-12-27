import React from "react";
import Text from "../text/Text";
import Title from "../title/Title";
import style from "./section.module.css";
import Button from "../button/Button";

const Section = ({ hover, bg, carSrc, title, textContent, btnTxtColor }) => {
  return (
    <div className={style.section}>
      <Title title={title} />
      <Text textContent={textContent} />
      <Button btnTxtColor={btnTxtColor} />
    </div>
  );
};

export default Section;
