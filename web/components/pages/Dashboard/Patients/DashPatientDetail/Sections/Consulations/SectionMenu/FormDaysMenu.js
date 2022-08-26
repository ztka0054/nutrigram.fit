import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { size } from "lodash";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import recipes from "../../../../../../../../helper/core_services/endpoints/recipes";

export default function FormDaysMenu({ idRecipe, day }) {
    const router = useRouter();

    const [flagSet, setFlagSet] = useState(false);
    const [picElement, setPicElement] = useState(null);
    const [nameElement, setNameElement] = useState("");

    useEffect(() => {
        if (idRecipe) GetRecipe();
    }, [idRecipe]);

    const GetRecipe = async () => {
        let req = await request(recipes.get_recipe, null, [idRecipe], {
            locale: router.locale,
        });
        if (req != null) {
            let name = "";
            if (router.locale == "es") name = req.name["es"];
            if (router.locale == "en") name = req.name["en-us"];
            setFlagSet(true);
            setNameElement(name);
            if (size(req.images) > 0) setPicElement(req.images[0]?.image);
        }
    };

    return (
        <div className="sty-con-day">
            <div className="sty-con-name">
                <TagLang group={"app"} tag={day} />
            </div>
            {!flagSet && (
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
            {flagSet && (
                <>
                    <div className="sty-cont-pic">
                        {picElement != null && <img src={picElement} />}
                    </div>
                    <div className="sty-cont-info">
                        <div className="sty-text">{nameElement}</div>
                    </div>
                </>
            )}
        </div>
    );
}
