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
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [showPassowrd, setShowPassowrd] = useState();
  console.log(errors);

  function onSubmit(e) {
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
      <h3 className={styled.text}>لطفا اطلاعات زیر را تکمیل نمایید</h3>
      <div className={styled.container_input}>
        <input
          className={`${styled.input} ${
            errors?.firstName && styled.input_Error
          }`}
          type="text"
          {...register("firstName", {
            required: "وارد کردن نام اجباری است",
            pattern: {
              value: /^([a-z|ا-ی|A-Z]\s?)*$/,
              message: "نام به صورت صحیح وارد شود",
            },
          })}
        />
        <label
          className={`${styled.label} ${
            errors?.firstName && styled.labelError
          }`}
        >
          نام
        </label>
        {errors?.firstName && (
          <span className={styled.error}>{errors.firstName.message}</span>
        )}
        <PiUser className={styled.icon} size={25} />
      </div>

      <div className={styled.container_input}>
        <input
          className={`${styled.input} ${
            errors?.lastName && styled.input_Error
          }`}
          type="text"
          {...register("lastName", {
            required: "وارد کردن نام خانوادگی اجباری است",
            pattern: {
              value: /^([a-z|ا-ی|A-Z]\s?)*$/,
              message: "نام خانوادگی به صورت صحیح وارد شود",
            },
          })}
        />
        <label
          className={`${styled.label} ${errors?.lastName && styled.labelError}`}
        >
          نام خانوادگی
        </label>
        {errors?.lastName && (
          <span className={styled.error}>{errors.lastName.message}</span>
        )}
        <PiUserBold className={styled.icon} size={25} />
      </div>
      <div className={styled.container_input}>
        <input
          className={`${styled.input} ${errors?.email && styled.input_Error}`}
          type="text"
          {...register("email", {
            required: "وارد کردن ایمیل اجباری است",
            pattern: {
              value: /^.+@.+\..+$/,
              message: "ایمیل به صورت صحیح وارد شود",
            },
          })}
        />
        <label
          className={`${styled.label} ${errors?.email && styled.labelError}`}
        >
          ایمیل
        </label>
        {errors?.email && (
          <span className={styled.error}>{errors.email.message}</span>
        )}
        <HiOutlineMail className={styled.icon} size={25} />
      </div>
      <div className={styled.container_input}>
        <input
          className={`${styled.input} ${
            errors?.password && styled.input_Error
          }`}
          type={showPassowrd ? "text" : "password"}
          {...register("password", {
            required: "وارد کردن رمز عبور اجباری است",
            maxLength: {
              value: 8,
              message: "رمز عبور باید هشت رقم باشد",
            },
          })}
        />
        <label
          className={`${styled.label} ${errors?.password && styled.labelError}`}
        >
          رمز عبور
        </label>
        {errors?.password && (
          <span className={styled.error}>{errors.password.message}</span>
        )}
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
          className={`${styled.input} ${
            errors?.replayPassword && styled.input_Error
          }`}
          type={showPassowrd ? "text" : "password"}
          {...register("replayPassword", {
            validate: (value) => {
              if (getValues("password") !== value)
                return "تکرار رمز عبو اشتباه است";
              return true;
            },
          })}
        />
        <label
          className={`${styled.label} ${
            errors?.replayPassword && styled.labelError
          }`}
        >
          تکرار رمز عبور
        </label>
        {errors?.replayPassword && (
          <span className={styled.error}>{errors.replayPassword.message}</span>
        )}
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
