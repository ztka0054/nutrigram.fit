import React, { useState, useEffect } from "react";

import useApp from "../../../../../../hooks/useApp";

import request from "../../../../../../helper/core_services/core/requestService";
import subscription from "../../../../../../helper/core_services/endpoints/subscription";
import numberWithComas from "../../../../../../helper/text/textWithComas";
import capitalize from "../../../../../../helper/text/capitalize";
import getLanguage from "../../../../../../helper/i18n/getValueTagLang";

export default function PlanSelected() {
    const { locale, objectsSignUp } = useApp();
    const [planSelected, setPlanSelected] = useState(null);

    useEffect(() => {
        if (objectsSignUp?.selectedPlan) GetPlans();
    }, [locale, objectsSignUp]);

    const GetPlans = async () => {
        let req = await request(subscription.get_subcriptions, null, null, {
            locale,
        });
        if (req != null) DrawPlan(req);
    };

    const DrawPlan = (info) => {
        // let select = info.find((obj) => obj.id === getSelectPlan.element);
        let select = info.find(
            (obj) => obj.id === objectsSignUp.selectedPlan.id
        );
        if (typeof select != "undefined") {
            let description = select.description.split("\r\n");
            description = description.map((element, i) => {
                return <div className="sty-feature">{element}</div>;
            });
            let plan = select.prices.find(
                // (obj) => obj.id === getSelectPlan.plan
                (obj) => obj.id === objectsSignUp.selectedSubscritpion.id
            );
            let planSelect = (
                <div className="sty-select-plan">
                    <div className="sty-title-plan sty-color-1">
                        {select.name}
                    </div>
                    <div className="sty-features">{description}</div>
                    <hr />
                    <div className="sty-price">
                        {capitalize(plan.name)}
                        <br />
                        {getLanguage("input", "cost")}: ${" "}
                        {numberWithComas(
                            parseFloat(plan.price.amount).toFixed(2)
                        )}
                    </div>
                </div>
            );
            setPlanSelected(planSelect);
        }
    };

    return <>{planSelected}</>;
}
