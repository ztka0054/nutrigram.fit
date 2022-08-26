import React, { useState, useEffect } from "react";
import { map, size } from "lodash";

import TagLang from "../../../../modules/GetTagLang";

import SubDirectionsFields from "./SubDirectionsFields";

export default function FormIngredientsCont({
    formik,
    arrayHelpers,
    father,
    statusLanguage,
    setStatusLanguage,
    flagEditRecipe,
}) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div
                    className="row sty-cont-option-1"
                    key={`direction_${index}`}>
                    <SubDirectionsFields
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        father={father}
                        content={content}
                        index={index}
                        statusLanguage={statusLanguage}
                        setStatusLanguage={setStatusLanguage}
                        flagEditRecipe={flagEditRecipe}
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
                                    arrayHelpers.push({ direction: "" })
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
