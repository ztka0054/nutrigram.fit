import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(environment.strip_key);

import TagLang from "../../../../modules/GetTagLang";

import environment from "../../../../../helper/enviroment/config";

import GetPlan from "./PlanSelected";
import Form from "./Forms/FormStripe";

const logoStripe = "/static/img/favicons/card/logoStripe.svg";

export default function SignUp_Step4() {
    return (
        <Elements stripe={stripePromise}>
            <div className="sty-content-data-1">
                <div className="sty-card-title">
                    <TagLang group={"dashboard"} tag={"tit_pay_1"} />
                </div>
                <div className="sty-card-cont-content sty-dashboard sty-content-data-1">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <GetPlan />
                        </div>
                        <div className="col-6">
                            <div className="sty-logo-sripe">
                                <div className="sty-icon">
                                    <img src={logoStripe} />
                                </div>
                            </div>
                            <div className="sty-cont-pay-stripe">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Elements>
    );
}
