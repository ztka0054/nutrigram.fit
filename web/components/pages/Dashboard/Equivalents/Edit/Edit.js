import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../modules/GetTagLang";

import request from "../../../../../helper/core_services/core/requestService";
import apiFood from "../../../../../helper/core_services/endpoints/foods";

import Form from "./NewForm";

export default function Edit() {
    const router = useRouter();

    const [dataFood, setDataFood] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        GetDataFood();
        // codes using router.query
    }, [router.isReady]);

    const GetDataFood = async () => {
        let result = await request(apiFood.get_food, null, [
            router.query.id_food,
        ]);
        if (result != null) {
            setDataFood(result);
        }
    };

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"button"} tag={"tag_new_equivalent"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form dataFood={dataFood} />
            </div>
        </div>
    );
}
