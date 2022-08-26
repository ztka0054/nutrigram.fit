import React from "react";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

export default function InputTextForm_1({
    formik,
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
                <div className={style.input}>
                    <input
                        name={name}
                        type={"number"}
                        value={value}
                        onChange={formik.handleChange}
                        placeholder={placeholder}
                        step="0.01"
                        min="0"
                        disabled={disabled}
                    />
                    <Validation error={error} />
                </div>
            </div>
        </>
    );
}
