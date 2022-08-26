import React from "react";

import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import FieldTime from "../../../../../../helper/forms/elements/time_array";

export default function FormSubFieldHabitual({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="row">
            <div className="col-4">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"hour"} />
                    </div>
                    <div className="sty-input">
                        <FieldTime
                            formik={formik}
                            name={"time"}
                            father={father}
                            index={index}
                        />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"foods_1"} />
                    </div>
                    <div className="sty-input">
                        <textarea
                            name={`${father}[${index}].diet`}
                            value={formik.values[father][index].diet}
                            onChange={formik.handleChange}
                            rows={3}
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index].diet}
                        />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"place"} />
                    </div>
                    <div className="sty-input">
                        <textarea
                            name={`${father}[${index}].place`}
                            value={formik.values[father][index].place}
                            onChange={formik.handleChange}
                            rows={3}
                        />
                        <MessageValidation
                            error={formik.errors[father]?.[index].place}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
