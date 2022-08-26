import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { map } from "lodash";

export default function check({ formik, name, values = [] }) {
    const [elements, setElements] = useState([]);
    const [valueRadio, setValueRadio] = useState(null);

    useEffect(() => {
        DrawValues();
    }, [values, valueRadio]);

    const DrawValues = () => {
        let elements = map(values, (element, index) => {
            return (
                <div
                    key={`radio_${name}_${index}`}
                    className={"col-6 col-md-3"}
                    index={`radio_${name}_${index}`}
                >
                    <div className="radio-content">
                        <div>
                            <div
                                className={`radio-1 ${classnames({
                                    active: valueRadio == element?.value,
                                })}`}
                                onClick={() => Click(element?.value)}
                            >
                                <span className="input_inside"></span>
                                <input
                                    type="radio"
                                    name={name}
                                    value={element?.value}
                                />
                            </div>
                        </div>
                        <div className="tag">{element?.tag}</div>
                    </div>
                </div>
            );
        });
        setElements(elements);
    };

    useEffect(() => {
        setValueRadio(formik.values[name]);
    }, [formik.values[name]]);

    const Click = (value) => {
        // formik.setFieldValue(name, !checkElement);
        formik.setFieldValue(name, value);
    };

    return <div className="row">{elements}</div>;
}
