import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(environment.strip_key);

import TagLang from "../../modules/GetTagLang";

import environment from "../../../helper/enviroment/config";

import GetPlan from "./PlanSelected";
import Form from "./Forms/FormStripe";

const logoStripe = "/static/img/favicons/card/logoStripe.svg";

export default function SignUp_Step4() {
    return (
        <Elements stripe={stripePromise}>
            <section className="class-heightNavBar class-autoheight-m sty-cont-back-img sty-login">
                <div className="sty-back-img-1">
                    <img src="/static/img/login/back_login_1.jpg" />
                </div>
                <div className="sty-courtain-b-2"></div>
                <div className="container-fluid">
                    <div className="row justify-content-center sty-justify-content class-autoheight-m">
                        <div className="col-11 col-md-9">
                            <div className="sty-card-login-2">
                                <div className="sty-card-title">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"tit_pay_1"}
                                    />
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
                        </div>
                    </div>
                </div>
            </section>
        </Elements>
    );
}
