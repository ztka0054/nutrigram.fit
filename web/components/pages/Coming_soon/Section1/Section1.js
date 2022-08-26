import React, { useEffect, useRef } from "react";
import { Parallax, Background } from "react-parallax";

import TagLang from "../../../modules/GetTagLang";

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
            <Parallax strength={300} className="sty-cont-parallax">
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-5">
                            <div
                                className="row sty-justify-content class-autoheight-m"
                                ref={contSection2}
                            >
                                <div className="col-12 text-center">
                                    <div className="sty-u-sub-1-1">
                                        <TagLang
                                            group={"app"}
                                            tag={"com_title_1"}
                                        />
                                    </div>
                                    <div className="sty-u-sub-2">
                                        <TagLang
                                            group={"app"}
                                            tag={"com_title_2"}
                                        />
                                    </div>
                                    <div className="sty-u-data-1">
                                        <TagLang
                                            group={"app"}
                                            tag={"com_title_3"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1 text-center">
                                        <div className="sty-cont-button-1">
                                            <div className="sty-cont-button-1">
                                                <div className="sty-button-app">
                                                    <img src="/static/img/app/store.png" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sty-cont-button-2">
                                            <div className="sty-cont-button-2">
                                                <div className="sty-button-app">
                                                    <img src="/static/img/app/google.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg class-autoheight-p">
                    <img
                        src="/static/img/app/comingsoon.jpg"
                        alt="fill murray"
                    />
                </Background>
            </Parallax>
        </section>
    );
}
