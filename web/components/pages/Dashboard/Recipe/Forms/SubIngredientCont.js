import React, { useState, useEffect } from "react";
import { map, size } from "lodash";

import TagLang from "../../../../modules/GetTagLang";

import SubIngredientCollapse from "./SubIngredientCollapse";

export default function FormIngredientsCont({
    formik,
    arrayHelpers,
    father,
    flagEditRecipe,
}) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div className="sty-content-data-1" key={`ingredient_${index}`}>
                    <SubIngredientCollapse
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        father={father}
                        content={content}
                        index={index}
                        flagEditRecipe={flagEditRecipe}
                    />
                </div>
            ))}
            <div className="sty-cont-buttons-1">
                <div className="row justify-content-end">
                    <div className="col-4">
                        {flagEditRecipe && (
                            <button
                                className="sty-button-dash-1 fix-25"
                                type="button"
                                onClick={() =>
                                    arrayHelpers.push({
                                        food: "",
                                        portion: "",
                                        quantity: "",
                                        name: "",
                                        category: "",
                                    })
                                }>
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/app/add_w.svg" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang group={"button"} tag={"add"} />
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
