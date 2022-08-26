import React from "react";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

export default function InputTextForm_1({
    formik,
    type = "text",
    title,
    name,
    value,
    placeholder = "",
    error,
    required = false,
    disabled = false,
}) {
    return (
        <>
            <div className={style.content} id={error ? "field_error" : ""}>
                <div className={style.tag}>
                    {required && <>* </>}
                    <TagLang group={"input"} tag={title} />
                </div>
                <div className={`${style.input} ${style.contPicker}`}>
                    <input
                        name={name}
                        type={type}
                        value={value}
                        onChange={formik.handleChange}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                    <Validation error={error} />
                </div>
            </div>
        </>
    );
}
