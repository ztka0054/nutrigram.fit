import React from "react";

import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";

import FieldPic from "../../../../../helper/forms/elements/pic_1_array";

export default function SubContent({
    formik,
    arrayHelpers,
    index,
    content,
    father,
}) {
    return (
        <>
            {content.type == 1 && (
                <div className="row" key={index}>
                    <div className="col-10">
                        <FieldPic
                            formik={formik}
                            father={father}
                            name={"image"}
                            index={index}
                        />
                        {/* <Field
                            component={renderFile}
                            type="content"
                            className=""
                            name={`${element}.image`}
                        /> */}
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
            )}
            {content.type == 2 && (
                <div className="row" key={index}>
                    <div className="col-10">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"text"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].text`}
                                    value={formik.values[father][index].text}
                                    onChange={formik.handleChange}
                                />
                                <MessageValidation
                                    error={formik.errors[father]?.[index]?.text}
                                />
                                {/* <Field
                                    component={renderText}
                                    type="content"
                                    className=""
                                    name={`${element}.text`}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-2 sty-cont-sub-1">
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
            )}
        </>
    );
}
