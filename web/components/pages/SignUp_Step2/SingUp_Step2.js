import React from "react";

import TagLang from "../../modules/GetTagLang";

import Form from "./Forms/FormStep2";

export default function SingUp() {
    return (
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
                                    group={"signin"}
                                    tag={"title_step_1"}
                                />
                            </div>
                            <div className="sty-card-cont-content">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
