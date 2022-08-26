import React from "react";

import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";
import FieldCheck from "../../../../../../helper/forms/elements/check_array";
import { size } from "lodash";

export default function FormArrayQuestion({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="sty-input">
            <FieldCheck
                name={"isHidden"}
                formik={formik}
                tag={formik.values[father][index].name}
                index={index}
                father={father}
            />
            {/* <input
                name={`${father}[${index}].question`}
                value={formik.values[father][index].question}
                onChange={formik.handleChange}
                type="text"
            /> */}
            <MessageValidation
                error={formik.errors[father]?.[index]?.question}
            />
        </div>
    );
}
