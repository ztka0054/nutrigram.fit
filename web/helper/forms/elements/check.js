import React, { useEffect, useState } from "react";
import classnames from "classnames";

export default function check({ formik, name, tag }) {
    const [checkElement, setCheckElement] = useState(false);

    useEffect(() => {
        setCheckElement(formik.values[name]);
    }, [formik.values[name]]);

    const Click = () => {
        formik.setFieldValue(name, !checkElement);
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
                        name={name}
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                </div>
            </div>
            <div className="tag">{tag}</div>
        </div>
    );
}
