import React, { useEffect, useState } from "react";
import classnames from "classnames";

export default function check({ formik, name, tag, father, index }) {
    const [checkElement, setCheckElement] = useState(false);

    useEffect(() => {
        setCheckElement(formik.values[father][index][name]);
    }, [formik.values[father]?.[index]?.[name]]);

    const Click = () => {
        formik.setFieldValue(`${father}[${index}][${name}]`, !checkElement);
    };

    return (
        <div className="check-content">
            <div>
                <div
                    className={`check-1 ${classnames({
                        active: checkElement,
                    })}`}
                    onClick={() => Click()}
                >
                    <span className="input_inside"></span>
                    <input
                        name={`${father}[${index}][${name}]`}
                        value={formik.values[father][index][name]}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                </div>
            </div>
            <div className="tag">{tag}</div>
        </div>
    );
}
