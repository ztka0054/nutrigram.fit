import React from "react";
import { Parallax, Background } from "react-parallax";

import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";

import constParallax from "../../../../helper/appearance/parallax";

export default function Section6() {
    return (
        <section className="class-height-b-1">
            <Parallax
                strength={constParallax.type_1}
                className="sty-cont-parallax"
            >
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-10">
                            <div className="row sty-justify-content class-height-b-1">
                                <div className="col-12">
                                    <div className="sty-home-cont-6-1">
                                        <div className="sty-logo-1">
                                            <img src="/static/img/favicons/app/logo.png" />
                                        </div>
                                    </div>
                                    <div className="sty-u-sub-3">
                                        <TagLang
                                            group={"home"}
                                            tag={"title_6_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"home"}
                                            tag={"title_6_2"}
                                        />
                                    </div>
                                    <div className="sty-u-data-1">
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_6_1"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1 text-center text-md-left">
                                        <div className="sty-cont-button-1">
                                            <SetLink route="/about_us">
                                                <button className="sty-button-1">
                                                    <TagLang
                                                        group={"button"}
                                                        tag={"tag_t_1_1"}
                                                    />
                                                </button>
                                            </SetLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg class-autoheight-p">
                    <img src="/static/img/home/home_6.jpg" alt="fill murray" />
                </Background>
            </Parallax>
        </section>
    );
}
