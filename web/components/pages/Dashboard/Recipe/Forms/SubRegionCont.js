import React, { useState, useEffect } from "react";
import { map, size } from "lodash";

import useApp from "../../../../../hooks/useApp";
import request from "../../../../../helper/core_services/core/requestService";
import recipes from "../../../../../helper/core_services/endpoints/recipes";

import InputSelectForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";

export default function FormRegionCont({
    formik,
    arrayHelpers,
    father,
    flagEditRecipe,
}) {
    const { locale } = useApp();
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        (async () => {
            GetCategories();
        })();
    }, []);

    const GetCategories = async () => {
        let req = await request(recipes.get_regions, null, null, {
            locale,
        });
        if (req != null) setRegions(req.result);
    };

    return (
        <div className="col-12">
            {map(formik.values[father], (content, index) => (
                <div className="row" key={`region_${index}`}>
                    <div className="col-8">
                        <InputSelectForm_1
                            formik={formik}
                            elements={regions}
                            title={"region"}
                            name={`${father}[${index}].region`}
                            value={formik.values[father][index].region}
                            error={formik?.errors[father]?.[index]?.region}
                            disabled={!flagEditRecipe}
                        />
                    </div>
                    {flagEditRecipe && (
                        <div className="col-4 align-self-end sty-cont-buttons-1">
                            <div className="sty-cont-4">
                                {index > 0 && (
                                    <button
                                        className="sty-button-dash-1 fix-icon"
                                        type="button"
                                        onClick={() =>
                                            arrayHelpers.remove(index)
                                        }>
                                        <div className="sty-icon">
                                            <img src="/static/img/favicons/app/rem_w.svg" />
                                        </div>
                                    </button>
                                )}
                            </div>
                            <div className="sty-cont-4">
                                {size(formik.values[father]) - 1 == index && (
                                    <button
                                        className="sty-button-dash-1 fix-icon"
                                        type="button"
                                        onClick={() => arrayHelpers.push({})}>
                                        <div className="sty-icon">
                                            <img src="/static/img/favicons/app/add_w.svg" />
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
