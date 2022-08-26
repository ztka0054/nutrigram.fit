import React from "react";
import { map } from "lodash";

import TagLang from "../../../../../modules/GetTagLang";

import FormSubFieldSuplement from "./FormSubFieldSuplement";

export default function FormSubContMedication({
    formik,
    arrayHelpers,
    father,
}) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <FormSubFieldSuplement
                    key={`suplement_${index}}`}
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    father={father}
                    content={content}
                    index={index}
                />
            ))}
            <div className="text-right">
                <button
                    className="sty-button-dash-1 color-3"
                    type="button"
                    onClick={() => arrayHelpers.push({ name: "", dose: "" })}>
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/add_w.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"button"} tag={"add"} />
                    </div>
                </button>
            </div>
        </>
    );
}
