import React from "react";

import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/GetTagLang";

export default function FormSubFieldMedication({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="row cont-array-field">
            <div className="col-5">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"name"} />
                    </div>
                    <div className="sty-input">
                        <input
                            name={`${father}[${index}].name`}
                            value={formik.values[father][index].name}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        {/* <MessageValidation
                            error={formik.errors[father]?.[index]?.name}
                        /> */}
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"dose"} />
                    </div>
                    <div className="sty-input">
                        <input
                            name={`${father}[${index}].dose`}
                            value={formik.values[father][index].dose}
                            onChange={formik.handleChange}
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="col-1 sty-cont-buttons-1 padding_all_0">
                <button
                    className="sty-button-dash-1 fix-icon color-2"
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
