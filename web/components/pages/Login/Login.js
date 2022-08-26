import React, { useEffect, useRef } from "react";

import { autoHeightNav } from "../../../helper/appearance/autoHeight";

import Form from "./Forms/FormLogin";

export default function Login() {
    const contSection = useRef();
    const contSubSection = useRef();

    useEffect(() => {
        autoHeightNav(contSection.current);
        autoHeightNav(contSubSection.current);
    }, []);

    return (
        <section
            className="class-heightNavBar sty-cont-back-img sty-login sty-fix-1"
            ref={contSection}
        >
            <div className="sty-back-img-1">
                <img src="/static/img/login/back_login_1.jpg" />
            </div>
            <div className="sty-courtain-b-2"></div>
            <div className="container-fluid">
                <div
                    className="row justify-content-center sty-justify-content "
                    ref={contSubSection}
                >
                    <div className="col-12 col-md-4">
                        <div className="sty-card-login">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
