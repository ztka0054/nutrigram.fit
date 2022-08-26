import React from "react";

import TagLang from "../../../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../../../modules/Forms/MessageValidation";

import FieldTime from "../../../../../../../../helper/forms/elements/time_array";

export default function FormFieldHydratation({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="row">
            <div className="col-3">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">De:</div>
                    <div className="sty-input">
                        <FieldTime
                            formik={formik}
                            name={"fromTime"}
                            father={father}
                            index={index}
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index]?.fromTime}
                        />
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">A:</div>
                    <div className="sty-input">
                        <FieldTime
                            formik={formik}
                            name={"toTime"}
                            father={father}
                            index={index}
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index]?.fromTime}
                        />
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"quantity"} /> (L):
                    </div>
                    <div className="sty-input">
                        <input
                            name={`${father}[${index}].quantity`}
                            value={formik.values[father][index].quantity}
                            onChange={formik.handleChange}
                            type="number"
                            step="0.01"
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index]?.quantity}
                        />
                    </div>
                </div>
            </div>
            <div className="col-2">
                <button
                    className="sty-button-dash-1 fix-icon"
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                >
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/rem_w.svg" />
                    </div>
                </button>
            </div>
        </div>
    );
}
