import React, { useState, useEffect } from "react";
import { size } from "lodash";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import recipes from "../../../../../../../../helper/core_services/endpoints/recipes";

export default function FormDaysMenu({ formik, father, index, content, day }) {
    const { locale } = useApp();

    useEffect(() => {
        if (content[day]) GetRecipe(content[day]);
    }, [content?.[day]]);

    const GetRecipe = async (id) => {
        let localeFix = locale == "en" ? "en-us" : locale;
        let req = await request(recipes.get_recipe, null, [id], {
            locale,
        });
        if (req != null) {
            formik.setFieldValue(
                `${father}[${index}].${day}_image`,
                size(req.images) > 0 ? req.images[0].image : null
            );
            formik.setFieldValue(
                `${father}[${index}].${day}_name`,
                req.name[localeFix]
            );
        }
    };

    return (
        <div className="sty-con-day">
            <div className="sty-con-name">
                <TagLang group={"app"} tag={day} />
            </div>
            {!content?.[day] && (
                <div className="sty-cont-tag-1">
                    <div>
                        <div className="sty-icon" />
                        <div className="sty-text">
                            <TagLang
                                group={"validation"}
                                tag={"not_assigned"}
                            />
                        </div>
                    </div>
                </div>
            )}
            {content?.[day] && (
                <>
                    <div className="sty-cont-pic">
                        <img src={content[`${day}_image`]} />
                    </div>
                    <div className="sty-cont-info">
                        <div className="sty-text">{content[`${day}_name`]}</div>
                    </div>
                </>
            )}
        </div>
    );
}
