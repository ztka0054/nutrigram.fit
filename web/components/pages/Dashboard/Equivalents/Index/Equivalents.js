import React, { useState, useEffect } from "react";
import { map } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import SetLink from "../../../../modules/SetLink";

import request from "../../../../../helper/core_services/core/requestService";
import foods from "../../../../../helper/core_services/endpoints/foods";

export default function Equivalents() {
    const { locale } = useApp();
    const [elements, setElements] = useState([]);

    useEffect(() => {
        (async () => {
            if (locale) GetData();
        })();
    }, [locale]);

    const GetData = async () => {
        let req = await request(foods.get_food_categories, null, null, {
            locale,
        });
        if (req != null) DrawElements(req);
    };

    const DrawElements = (info) => {
        let elements = map(info.result, (element, index) => {
            return (
                <div className="col-12 col-md-3" key={`equivalent_${index}`}>
                    <SetLink
                        route={`/dashboard/equivalents/data/${element.id}`}>
                        <div className="sty-card-section sty-justify-content">
                            <div className="sty-tag">{element.name}</div>
                        </div>
                    </SetLink>
                </div>
            );
        });
        setElements(elements);
    };

    return (
        <>
            <div className="style_add_button">
                <SetLink route={"/dashboard/equivalents/new"}>
                    <button className="sty-button-dash-1">
                        <div className="sty-icon">
                            <img src="/static/img/favicons/app/add_w.svg" />
                        </div>
                        <div className="sty-tag">
                            <TagLang
                                group={"button"}
                                tag={"tag_new_equivalent"}
                            />
                        </div>
                    </button>
                </SetLink>
            </div>
            <div className="sty-content-data-1">
                <div className="sty-card-title">
                    <TagLang group={"dashboard"} tag={"tit_euivalent_1_1"} />
                </div>
                <div className="col-12 sty-cont-form-1">
                    <div className="row">{elements}</div>
                </div>
            </div>
        </>
    );
}
