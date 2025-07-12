import React from "react";
import style from "./customButton.module.scss";

export const CustomButton = props => {
  const { onClick, title } = props;
  return (
    <div>
      <button className={style.CustomButton} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
