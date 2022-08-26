import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

export default function SubEquivalentFields({
    formik,
    arrayHelpers,
    father,
    index,
}) {
    const router = useRouter();
    const { locale } = useApp();
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");
    let ArrayValues = formik.values[father][index];

    useEffect(() => {
        if (ArrayValues?.ingredients) DrawIngredients(ArrayValues.ingredients);
    }, [ArrayValues?.ingredients]);

    useEffect(() => {
        if (locale == "es") setName(ArrayValues.name["es"]);
        if (locale == "en") setName(ArrayValues.name["en-us"]);
    }, [locale]);

    const DrawIngredients = (ingredients) => {
        let count = Math.ceil(ingredients.length / 3);
        let array1 = ingredients.slice(0, count);
        let arrayResult1 = [];
        let array2 = ingredients.slice(count, count * 2);
        let arrayResult2 = [];
        let array3 = ingredients.slice(count * 2, count * 3);
        let arrayResult3 = [];

        arrayResult1 = array1.map((element, index) => {
            let name = element?.food?.name;
            return <li key={`first_${index}`}>{name}</li>;
        });
        arrayResult2 = array2.map((element, index) => {
            let name = element?.food?.name;
            return <li key={`second_${index}`}>{name}</li>;
        });
        arrayResult3 = array3.map((element, index) => {
            let name = element?.food?.name;
            return <li key={`third_${index}`}>{name}</li>;
        });

        let result = (
            <div className="row sty-list">
                <div className="col-4">
                    <ul>{arrayResult1}</ul>
                </div>
                <div className="col-4">
                    <ul>{arrayResult2}</ul>
                </div>
                <div className="col-4">
                    <ul>{arrayResult3}</ul>
                </div>
            </div>
        );
        setIngredients(result);
    };

    return (
        <div className="row sty-cont-equivalent-1">
            <div className="col-3">
                <div className="sty-u-cont-pic">
                    <div className="sty-pic" id="id_pic">
                        <img src={ArrayValues?.image} />
                    </div>
                </div>
            </div>
            <div className="col-7">
                <div className="row">
                    <div className="col-12">
                        <div className="sty-info-tag">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"name"} />
                            </div>
                            <div className="sty-data">{name}</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="sty-info-tag">
                            <div className="sty-tag">
                                <TagLang
                                    group={"dashboard"}
                                    tag={"tit_euivalent_3_1"}
                                />
                            </div>
                            {ingredients}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 align-self-center">
                <button
                    className="sty-button-dash-1 fix-icon"
                    type="button"
                    onClick={() => arrayHelpers.remove()}>
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/rem_w.svg" />
                    </div>
                </button>
            </div>
        </div>
    );
}
