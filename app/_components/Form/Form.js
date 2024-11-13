"use client";
import styled from "./Form.module.css";
import {
  PiEyeSlashThin,
  PiEyeThin,
  PiPasswordThin,
  PiUser,
  PiUserBold,
} from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Form({ children }) {
  const { register, handleSubmit } = useForm();
  const [showPassowrd, setShowPassowrd] = useState();
  function onSubmit(e) {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
      <h3 className={styled.text}>لطفا اطلاعات زیر را تکمیل نمایید</h3>
      <div className={styled.container_input}>
        <input
          className={styled.input}
          type="text"
          {...register("first-name")}
        />
        <label className={styled.label}>نام</label>
        <PiUser className={styled.icon} size={25} />
      </div>

      <div className={styled.container_input}>
        <input
          className={styled.input}
          type="text"
          {...register("last-name")}
        />
        <label className={styled.label}>نام خانوادگی</label>
        <PiUserBold className={styled.icon} size={25} />
      </div>
      <div className={styled.container_input}>
        <input className={styled.input} type="text" {...register("email")} />
        <label className={styled.label}>ایمیل</label>
        <HiOutlineMail className={styled.icon} size={25} />
      </div>
      <div className={styled.container_input}>
        <input
          className={styled.input}
          type={showPassowrd ? "text" : "password"}
          {...register("password")}
        />
        <label className={styled.label}>رمز عبور</label>
        {showPassowrd ? (
          <PiEyeSlashThin
            className={`${styled.icon} ${styled.eye}`}
            onClick={() => {
              setShowPassowrd((s) => !s);
            }}
            size={25}
          />
        ) : (
          <PiEyeThin
            className={`${styled.icon} ${styled.eye}`}
            onClick={() => {
              setShowPassowrd((s) => !s);
            }}
            size={25}
          />
        )}
      </div>
      <div className={styled.container_input}>
        <input
          className={styled.input}
          type={showPassowrd ? "text" : "password"}
          {...register("replay-password")}
        />
        <label className={styled.label}>تکرار رمز عبور</label>
        <PiPasswordThin className={styled.icon} size={25} />
      </div>
      <button className={styled.btn} type="submit">
        ثبت نام
      </button>
      {children}
    </form>
  );
}

export default Form;
