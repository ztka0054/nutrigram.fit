import React, { useState, useEffect } from "react";
import { map, size } from "lodash";

import TagLang from "../../../../modules/GetTagLang";

import SubEquivalentCollapse from "./SubEquivalentCollapse";

export default function FormEquivalentsCont({
    formik,
    arrayHelpers,
    father,
    flagEditRecipe,
}) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div
                    className="sty-content-data-1"
                    key={`equivalents_${index}`}>
                    <SubEquivalentCollapse
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        father={father}
                        content={content}
                        index={index}
                    />
                </div>
            ))}
            {flagEditRecipe && (
                <div className="sty-cont-buttons-1">
                    <div className="row justify-content-end">
                        <div className="col-4">
                            <button
                                className="sty-button-dash-1 fix-25"
                                type="button"
                                onClick={() =>
                                    arrayHelpers.push({
                                        equivalent: "",
                                        name: "",
                                        image: "",
                                        ingredients: "",
                                    })
                                }>
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/app/add_w.svg" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang group={"button"} tag={"add"} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
