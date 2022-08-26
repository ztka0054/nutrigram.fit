import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map } from "lodash";

import useApp from "../../../../../hooks/useApp";

import request from "../../../../../helper/core_services/core/requestService";
import subscription from "../../../../../helper/core_services/endpoints/subscription";
import numberWithComas from "../../../../../helper/text/textWithComas";

export default function ListPlan() {
    const router = useRouter();
    const { locale, putObjectSignUp, objectsSignUp } = useApp();
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        GetPlans();
    }, [locale]);

    const GetPlans = async () => {
        let req = await request(subscription.get_subcriptions, null, null, {
            locale,
        });
        if (req != null) DrawPlans(req);
    };

    const DrawPlans = (info) => {
        let colorCont = 0;
        let elements = map(info, (element, index) => {
            colorCont++;
            if (colorCont == 5) colorCont = 1;
            let description = element.description.split("\r\n");
            let prices = element.prices;
            let elementsBlank = [];
            let buttons = prices.map((button, indexB) => {
                let price = button.price.amount;
                elementsBlank.push(<div className="blank"></div>);
                return (
                    <button
                        key={`button_${indexB}`}
                        className="sty-button-dash-1 fix-1 color_3"
                        onClick={() => PutPayElement(element, button)}>
                        <div className="sty-icon">
                            <img src="/static/img/favicons/app/shop_w.svg" />
                        </div>
                        <div className="sty-tag">
                            ${numberWithComas(parseFloat(price).toFixed(2))}{" "}
                            {button.name}
                        </div>
                    </button>
                );
            });
            description = description.map((element, i) => {
                return <div className="sty-tag-1">{element}</div>;
            });
            return (
                <div className="col-12 col-md-4" key={`plan_${index}`}>
                    <div className="sty-card-price">
                        <div
                            className={`text-center sty-title sty-color-${colorCont}`}>
                            {element.name}
                        </div>
                        <div className="sty-cont-tag">
                            {description}
                            {elementsBlank}
                        </div>
                        <div className="text-center sty-cont-button">
                            {buttons}
                        </div>
                    </div>
                </div>
            );
        });
        setPlans(elements);
    };

    const PutPayElement = async (plan, subscription) => {
        if (parseInt(subscription.price.amount) == 0) {
            loadElement(true);
            let params = {
                price: subscription.id,
            };
            let req = await request(
                subscription.post_subscription,
                params,
                null,
                {
                    locale,
                },
                true,
                false
            );
            loadElement(false);
            if (req != null) {
                message_1(getTagLang("validation", "pay_message_1"));
                router.push("/dashboard");
            }
        } else {
            putObjectSignUp({
                ...objectsSignUp,
                selectedPlan: plan,
                selectedSubscritpion: subscription,
            });
            router.push("/dashboard/profile/plan/pay");
        }
    };

    return <>{plans}</>;
}
