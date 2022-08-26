import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useAuth from "../../../../../hooks/useAuth";
import TagLang from "../../../../modules/GetTagLang";

import request from "../../../../../helper/core_services/core/requestService";
import apiRecipes from "../../../../../helper/core_services/endpoints/recipes";

import Form from "../Forms/FormRecipe";

export default function New() {
    const { auth } = useAuth();
    const router = useRouter();
    const { query } = router;

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_recipe_1_3"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form
                    type={query.type}
                    idList={query.id_list}
                    dataRecipe={null}
                    flagEditRecipe={true}
                />
            </div>
        </div>
    );
}
