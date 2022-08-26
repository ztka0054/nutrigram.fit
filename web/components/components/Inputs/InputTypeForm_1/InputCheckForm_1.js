import React from "react";

import TagLang from "../../../modules/GetTagLang";
import MessageValidation from "../../../modules/Forms/MessageValidation";

import style from "./checkbox.module.scss";

export default function InputCheckForm_1({
    formik,
    title,
    name,
    value,
    disabled,
}) {
    return (
        <>
            <div className="check-content">
                <div className={style.chechbox}>
                    <input
                        name={name}
                        onChange={formik.handleChange}
                        type="checkbox"
                        checked={value}
                        disabled={disabled}
                    />
                </div>
                <div className="tag">
                    <TagLang group={"input"} tag={title} />
                </div>
            </div>
        </>
    );
}
