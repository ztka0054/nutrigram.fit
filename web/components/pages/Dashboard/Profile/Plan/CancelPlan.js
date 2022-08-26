import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

import request from "../../../../../helper/core_services/core/requestService";
import subscription from "../../../../../helper/core_services/endpoints/subscription";

export default function CancelPlan() {
    const router = useRouter();
    const { locale } = useApp();
    const [flagPlan, setFlagPlan] = useState(null);

    useEffect(() => {
        GetSubscription();
    }, [locale]);

    const GetSubscription = async () => {
        let req = await request(subscription.get_subscription, null, null, {
            locale,
        });
        if (req != null) {
            if (parseInt(req?.price?.price?.amount) != 0)
                setFlagPlan(req?.price);
        }
    };

    const CancelPlan = async () => {
        let req = await request(subscription.delete_subscription, null, null, {
            locale,
        });
        if (req != null) {
            router.push("/dashboard/profile");
        }
    };

    return (
        <>
            {flagPlan != null && (
                <>
                    <hr />
                    <div className="sty-cont-cancel">
                        <div className="row">
                            <div className="col-6 align-self-center">
                                <div className="sty-tag-text">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"tit_select_plan_2"}
                                    />
                                </div>
                                <div className="sty-tag-name">
                                    {flagPlan?.subscription?.name}
                                    {" ----- "}
                                    {flagPlan?.name}
                                </div>
                            </div>
                            <div className="text-right col-6">
                                <button
                                    className="sty-button-dash-1 fix-2 color-2"
                                    onClick={() => CancelPlan()}>
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/rem_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"finish"}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
