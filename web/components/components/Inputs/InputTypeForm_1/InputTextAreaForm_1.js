import React from "react";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

export default function InputTextAreaForm_1({
    formik,
    title,
    name,
    value,
    placeholder = "",
    error,
    required = false,
    rows = 3,
}) {
    return (
        <>
            <div className={style.content} id={error ? "field_error" : ""}>
                <div className={style.tag}>
                    {required && <>* </>}
                    <TagLang group={"input"} tag={title} />
                </div>
                <div className={`${style.input} ${style.contPicker}`}>
                    <textarea
                        name={name}
                        value={value}
                        onChange={formik.handleChange}
                        placeholder={placeholder}
                        rows={rows}
                    />
                    <Validation error={error} />
                </div>
            </div>
        </>
    );
}
