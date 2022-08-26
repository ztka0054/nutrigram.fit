import { useState, useEffect } from "react";
import { map } from "lodash";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

export default function InputSelectForm_1({
    formik,
    title,
    name,
    value,
    placeholder = "",
    elements,
    error,
    required = false,
    disabled,
}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        createOptions();
    }, [elements]);

    const createOptions = () => {
        let options = [];
        options = map(elements, (element, index) => {
            return (
                <option value={element?.id} key={`option_${name}_${index}`}>
                    {element?.name}
                </option>
            );
        });
        options.unshift(
            <option value="" key={`option_${name}__0`}>
                {placeholder}
            </option>
        );
        setOptions(options);
    };

    return (
        <div className={style.content} id={error ? "field_error" : ""}>
            <div className={style.tag}>
                {required && <>* </>}
                <TagLang group={"input"} tag={title} />
            </div>
            <div className={style.input}>
                <select
                    name={name}
                    value={value}
                    onChange={formik.handleChange}
                    disabled={disabled}>
                    {options}
                </select>
                <Validation error={error} />
            </div>
        </div>
    );
}
