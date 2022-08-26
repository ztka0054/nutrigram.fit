import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useAuth from "../../../../../hooks/useAuth";
import TagLang from "../../../../modules/GetTagLang";

import request from "../../../../../helper/core_services/core/requestService";
import apiRecipes from "../../../../../helper/core_services/endpoints/recipes";

import Form from "../Forms/FormRecipe";

export default function Detail() {
    const { auth } = useAuth();
    const router = useRouter();
    const { query } = router;

    const [flagEditRecipe, setFlagEditRecipe] = useState(false);
    const [activeRefresh, setActiveRefresh] = useState(false);
    const [dataRecipe, setDataRecipe] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        setActiveRefresh(true);
        // codes using router.query
    }, [router.isReady]);

    useEffect(() => {
        if (activeRefresh) {
            GetDataRecipe();
            setActiveRefresh(false);
        }
    }, [activeRefresh]);

    const GetDataRecipe = async () => {
        let resultRecipe = await request(
            apiRecipes.get_recipe,
            null,
            [router?.query.id],
            {
                locale: router.locale,
            }
        );
        if (resultRecipe != null) {
            setDataRecipe(resultRecipe);
            GetEditRecipe(resultRecipe);
        }
    };

    const GetEditRecipe = (resultRecipe) => {
        console.log(resultRecipe);
        if (`${auth.idNutritionist}` == `${resultRecipe.nutritionist.id}`)
            setFlagEditRecipe(true);
    };

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group="dashboard" tag="tit_recipe_1_5" />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form
                    idElement={query.id}
                    type={query.type}
                    idList={query.id_list}
                    dataRecipe={dataRecipe}
                    flagEditRecipe={flagEditRecipe}
                />
            </div>
        </div>
    );
}
