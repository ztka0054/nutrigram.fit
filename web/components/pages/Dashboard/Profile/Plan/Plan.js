import React from "react";

import TagLang from "../../../../modules/GetTagLang";

import ListPlans from "./ListPlans";
import CancelPlan from "./CancelPlan";

export default function Plan() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_select_plan_1"} />
            </div>
            <div className="col-12 sty-login">
                <div className="sty-card-cont-content sty-card-login-2 fix-1">
                    <div className="row justify-content-center">
                        <ListPlans />
                    </div>
                </div>
                <CancelPlan />
            </div>
        </div>
    );
}
