import React from "react";

import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";
import { size } from "lodash";

export default function FormArrayQuestion({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="row cont-array-field">
            <div className="col-11 padding_all_left_0">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"question"} />
                    </div>
                    <div className="sty-input">
                        <input
                            name={`${father}[${index}].question`}
                            value={formik.values[father][index].question}
                            onChange={formik.handleChange}
                            type="text"
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index]?.question}
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
                {/* <div className="sty-cont-3">
                    {size(formik.values[father]) - 1 == index && (
                        <button
                            className="sty-button-dash-1 fix-icon"
                            type="button"
                            onClick={() => arrayHelpers.push({ question: "" })}
                        >
                            <div className="sty-icon">
                                <img src="/static/img/favicons/app/add_w.svg" />
                            </div>
                        </button>
                    )}
                </div> */}
            </div>
        </div>
    );
}
