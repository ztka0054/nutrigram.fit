import React, { useEffect, useRef } from "react";

import { autoHeightNav } from "../../../../helper/appearance/autoHeight";

import TagLang from "../../../modules/GetTagLang";

import Form from "../Forms/FormSignUp";

export default function Section1() {
    const contSection = useRef();
    const contSubSection = useRef();

    useEffect(() => {
        autoHeightNav(contSection.current);
        autoHeightNav(contSubSection.current);
    }, []);

    return (
        <section
            className="class-heightNavBar class-autoheight-m sty-cont-back-img sty-login sty-fix-1"
            ref={contSection}
        >
            <div className="sty-back-img-1">
                <img src="/static/img/login/back_login_2.jpg" />
            </div>
            <div className="sty-courtain-b-2"></div>
            <div className="container-fluid">
                <div
                    className="row justify-content-center sty-justify-content class-autoheight-m"
                    ref={contSubSection}
                >
                    <div className="col-12 col-md-6 sty-cont-data">
                        <div className="">
                            <div className="sty-u-sub-2 sty-w">
                                <TagLang group={"signin"} tag={"title_1_1"} />
                                <br />
                                <TagLang group={"signin"} tag={"title_1_2"} />
                            </div>
                        </div>
                        <div>
                            <div className="sty-u-data-1 sty-w">
                                <TagLang group={"signin"} tag={"sub_1"} />
                            </div>
                        </div>
                    </div>
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
