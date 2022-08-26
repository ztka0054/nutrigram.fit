import React from "react";

import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";
import SelectLanguage from "../../../../components/SelectLanguage";

export default function SubDirectionsFields({
    formik,
    arrayHelpers,
    father,
    content,
    index,
    statusLanguage,
    setStatusLanguage,
    flagEditRecipe,
}) {
    let ArrayValues = formik.values[father][index];

    return (
        <>
            <div className="col-1">
                <div className="sty-number-table">{`${index + 1} - `}</div>
            </div>
            <div className="col-10">
                <SelectLanguage
                    formik={formik}
                    statusLanguage={statusLanguage}
                    setStatusLanguage={setStatusLanguage}
                    error={formik.errors[father]?.[index]?.directionsLanguage}>
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"name"} />
                        </div>
                        {statusLanguage == 1 && (
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].direction_es`}
                                    value={ArrayValues.direction_es}
                                    onChange={formik.handleChange}
                                    rows={4}
                                    disabled={!flagEditRecipe}
                                />
                            </div>
                        )}
                        {statusLanguage == 2 && (
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].direction_en`}
                                    value={ArrayValues.direction_en}
                                    onChange={formik.handleChange}
                                    rows={4}
                                    disabled={!flagEditRecipe}
                                />
                            </div>
                        )}
                    </div>
                </SelectLanguage>
                {/* <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"spanish"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].direction_es`}
                                    value={ArrayValues.direction_es}
                                    onChange={formik.handleChange}
                                    rows={4}
                                />
                                <MessageValidation
                                    error={
                                        formik.errors[father]?.[index]
                                            ?.direction_es
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-input">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"english"} />
                                </div>
                                <textarea
                                    name={`${father}[${index}].direction_en`}
                                    value={ArrayValues.direction_en}
                                    onChange={formik.handleChange}
                                    rows={4}
                                />
                                <MessageValidation
                                    error={
                                        formik.errors[father]?.[index]
                                            ?.direction_en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="col-1">
                {flagEditRecipe && (
                    <button
                        className="sty-button-dash-1 fix-icon"
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}>
                        <div className="sty-icon">
                            <img src="/static/img/favicons/app/rem_w.svg" />
                        </div>
                    </button>
                )}
            </div>
        </>
    );
}
