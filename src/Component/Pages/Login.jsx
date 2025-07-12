import React from "react";
import { CustomInput } from "../Global/CustomInput";
import style from "./Login.module.scss";
import { CustomButton } from "../Global/CustomButton";

export const Login = () => {
  return (
    <div className={style.loginMainCotainer}>
      <div className={style.loginMainCotainerLeft}>
        <h3 className={style.loginMainCotainerLeftTitle}>Vil Crick</h3>
        <span>122</span>
      </div>
      <div className={style.loginMainCotainerRight}>
        <div className={style.loginMainCotainerLoginBox}>
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter Your Email"
          />
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter Your Email"
          />
          <CustomButton title="Login" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
