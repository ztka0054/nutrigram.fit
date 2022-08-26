import React, { useEffect, useRef } from "react";
import { Parallax, Background } from "react-parallax";

import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";

import constParallax from "../../../../helper/appearance/parallax";
import { autoHeight } from "../../../../helper/appearance/autoHeight";

export default function Section1() {
    const contSection = useRef();
    const contSection2 = useRef();

    useEffect(() => {
        if (contSection != null) autoHeight(contSection.current);
        if (contSection2 != null) autoHeight(contSection2.current);
    }, [contSection, contSection2]);

    return (
        <section
            className="class-heightNavBar class-autoheight-m"
            ref={contSection}
        >
            <Parallax
                strength={constParallax.type_1}
                className="sty-cont-parallax"
            >
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-10">
                            <div
                                className="row sty-justify-content class-autoheight-m"
                                ref={contSection2}
                            >
                                <div className="col-12 col-md-7">
                                    <div className="sty-u-sub-1">
                                        <TagLang group={"home"} tag={"sub_1"} />
                                    </div>
                                    <div className="sty-u-sub-2">
                                        <TagLang
                                            group={"home"}
                                            tag={"title_1_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"home"}
                                            tag={"title_1_2"}
                                        />
                                    </div>
                                    <div className="sty-u-data-1">
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_1_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_1_2"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1 text-center text-md-left">
                                        <div className="sty-cont-button-1">
                                            <SetLink route={"/coming_soon"}>
                                                <div className="sty-button-app">
                                                    <img src="/static/img/favicons/app/app_ios.png" />
                                                </div>
                                            </SetLink>
                                        </div>
                                        <div className="sty-cont-button-2">
                                            <SetLink route={"/coming_soon"}>
                                                <div className="sty-button-app">
                                                    <img src="/static/img/favicons/app/app_android.png" />
                                                </div>
                                            </SetLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-tall">
                    <img src="/static/img/home/home_1.jpg" alt="fill murray" />
                </Background>
            </Parallax>
        </section>
    );
}
