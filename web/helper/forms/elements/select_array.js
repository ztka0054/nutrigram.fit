import React, { useState, useEffect } from "react";
import { map } from "lodash";

export default function select({
    formik,
    father,
    name,
    index,
    elements,
    placeholder,
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
        <select
            name={`${father}[${index}].${name}`}
            value={formik.values[father][index][name]}
            onChange={formik.handleChange}
            disabled={disabled}
        >
            {options}
        </select>
    );
}
