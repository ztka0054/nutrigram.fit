import React, { useEffect, useRef } from "react";

import Form from "./Forms/FormRecovery";

import { autoHeightNav } from "../../../helper/appearance/autoHeight";

export default function Recovery() {
    const contSection = useRef();
    const contSection1 = useRef();
    useEffect(() => {
        autoHeightNav(contSection.current);
        autoHeightNav(contSection1.current);
    }, []);

    return (
        <section
            className="class-heightNavBar class-autoheight-m sty-cont-back-img sty-login sty-fix-1"
            ref={contSection}
        >
            <div className="sty-back-img-1">
                <img src="/static/img/login/back_login_1.jpg" />
            </div>
            <div className="sty-courtain-b-2"></div>
            <div className="container-fluid">
                <div
                    className="row justify-content-center sty-justify-content class-autoheight-m"
                    ref={contSection1}
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
