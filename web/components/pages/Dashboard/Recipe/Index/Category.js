import React, { useState, useEffect } from "react";
import { map } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import SetLink from "../../../../modules/SetLink";

import request from "../../../../../helper/core_services/core/requestService";
import recipes from "../../../../../helper/core_services/endpoints/recipes";

export default function Catgory() {
    const { locale } = useApp();
    const [elements, setelements] = useState([]);

    useEffect(() => {
        (async () => {
            if (locale) GetElements();
        })();
    }, [locale]);

    const GetElements = async () => {
        let req = await request(recipes.get_categories, null, null, {
            locale,
        });
        if (req != null) DrawElements(req);
    };

    const DrawElements = (info) => {
        let elements = map(info.result, (element, index) => {
            return (
                <div className="col-12 col-md-3" key={`category_${index}`}>
                    <SetLink
                        route={`/dashboard/recipes/list_category/${element.id}`}>
                        <div className="sty-card-section sty-justify-content">
                            <div className="sty-tag">{element.name}</div>
                        </div>
                    </SetLink>
                </div>
            );
        });
        setelements(elements);
    };

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_recipe_1_1"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <div className="row">{elements}</div>
            </div>
        </div>
    );
}
