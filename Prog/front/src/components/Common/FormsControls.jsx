import React from "react";
import s from "./FormsControls.module.css"

export const Input = ({input, meta, ...props}) => {


  return (
    <div>
      <div className={s.formControl + " " + (meta.touched && meta.error ? s.error : "")}>
        <input {...input} {...props} />
        {meta.touched && meta.error &&
        <span> {meta.error}</span>
        }
      </div>
    </div>
  )
};