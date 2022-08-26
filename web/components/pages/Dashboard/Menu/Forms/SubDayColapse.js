import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { size } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import TablePag from "../../../../modules/Dashboard/Table/TablePagination";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../helper/core_services/core/requestService";
import recipe from "../../../../../helper/core_services/endpoints/recipes";

import SubMealFields from "./SubMealFields";
import Rows from "./RowRecipes";

let no_image = "/static/img/utility/no_image.png";

const add = "/static/img/favicons/app/add_b.svg";

export default function SubMealColapse({
    formik,
    arrayHelpers,
    index,
    content,
    father,
    day,
    ActiveTable,
}) {
    const { locale } = useApp();

    useEffect(() => {
        if (content[day]) GetRecipe(content[day]);
    }, [content?.[day]]);

    const GetRecipe = async (id) => {
        let req = await request(recipe.get_recipe, null, [id], {
            locale,
        });
        if (req != null) {
            let image = no_image;
            if (size(req?.images) > 0) image = req.images[0].image;
            formik.setFieldValue(`${father}[${index}].${day}_image`, image);
            let name = "";
            if (locale == "es") name = req.name["es"];
            if (locale == "en") name = req.name["en-us"];
            formik.setFieldValue(`${father}[${index}].${day}_name`, name);
        }
    };

    return (
        <>
            <div className="sty-con-day" onClick={() => ActiveTable(day)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={day} />
                </div>
                {!content?.[day] && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
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
                            <div className="sty-text">
                                {content[`${day}_name`]}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {/* <SubMealFields
                formik={formik}
                arrayHelpers={arrayHelpers}
                index={index}
                content={content}
                father={father}
                toogleTable={toogleTable}
                toogleSelect={toogleSelect}
            /> */}
        </>
    );
}
