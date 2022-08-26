import React from "react";

import MessageValidation from "../../../../../modules/Forms/MessageValidation";
import FieldCheck from "../../../../../../helper/forms/elements/check_array";

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
                tag={formik.values[father][index].question}
                index={index}
                father={father}
            />
            <MessageValidation
                error={formik.errors[father]?.[index]?.question}
            />
        </div>
    );
}
