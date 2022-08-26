import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import food from "../../../../../../helper/core_services/endpoints/foods";

export default function Table() {
    const { query } = useRouter();
    const { locale } = useApp();
    const [elements, setElements] = useState([]);

    useEffect(() => {
        (async () => {
            if (locale && query?.id) GetData();
        })();
    }, [locale, query]);

    const GetData = async () => {
        let params = { category: query.id, ordering: "-name" };
        let req = await request(food.get_food_equivalents, params, null, {
            locale,
        });
        if (req != null) DrawElements(req);
    };

    const DrawElements = (info) => {
        let dataElements = [];
        dataElements = map(info.result, (element, i) => {
            let suggestedQuantity = null;
            let namedeUnit = null;
            if (element.defaultPortion != null) {
                suggestedQuantity = element.defaultPortion.suggestedQuantity;
                namedeUnit = element.defaultPortion.name;
            }

            return (
                <tr className="sty-food" key={`food_${i}`}>
                    <th className="name">{element.name}</th>
                    <th className="value">
                        <div className="text-v">{suggestedQuantity}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{namedeUnit}</div>
                    </th>

                    <th className="value">
                        <div className="text-v">{element.weight}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.grossWeight}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.calories}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.protein}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.lipids}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.carbohydrates}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.fiber}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.vitaminA}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.ascorbicAcid}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.folicAcid}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.hemIron}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.potassium}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.glycemicIndex}</div>
                    </th>
                    <th className="value">
                        <div className="text-v">{element.glycemicLoad}</div>
                    </th>
                </tr>
            );
        });
        setElements(dataElements);
    };

    return (
        <table className="sty-tab-equivalents">
            <thead className="sty-title">
                <tr>
                    <th className="title">
                        <TagLang group={"dashboard"} tag={"tab_1_ti_1"} />
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_1"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_2"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_3"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_4"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_5"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_6"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_7"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_8"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_9"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_10"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang
                                group={"dashboard"}
                                tag={"tab_1_col_11_1"}
                            />
                            <br />
                            <TagLang
                                group={"dashboard"}
                                tag={"tab_1_col_11_2"}
                            />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_12"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang
                                group={"dashboard"}
                                tag={"tab_1_col_13_1"}
                            />
                            <br />
                            <TagLang
                                group={"dashboard"}
                                tag={"tab_1_col_13_2"}
                            />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_14"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_15"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_16"} />
                        </div>
                    </th>
                    <th className="feature">
                        <div className="text-f">
                            <TagLang group={"dashboard"} tag={"tab_1_col_16"} />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>
    );
}
