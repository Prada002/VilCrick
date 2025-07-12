import React from "react";
import style from "./CustomInput.module.scss";
export const CustomInput = props => {
  const { label, onChange, type, placeholder } = props;
  return (
    <div className={style.CustomInputMain}>
      <label>{label}</label>
      <input
        className={style.CustomInput}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
