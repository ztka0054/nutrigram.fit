import React from "react";
import { Parallax, Background } from "react-parallax";

import TagLang from "../../../modules/GetTagLang";
import SetLink from "../../../modules/SetLink";

import constParallax from "../../../../helper/appearance/parallax";

export default function Section3() {
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
                                <div className="col-12 col-md-9 text-center">
                                    <div className="sty-u-data-3 sty-home-about-1-1">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"cont_3_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"about_us"}
                                            tag={"cont_3_2"}
                                        />
                                    </div>
                                    <div className="sty-u-sub-2">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"title_3"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1">
                                        <SetLink route="/signup">
                                            <button className="sty-button-1">
                                                <TagLang
                                                    group={"button"}
                                                    tag={"tag_t_1_3"}
                                                />
                                            </button>
                                        </SetLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg fix-1 class-height-b-1">
                    <img
                        src="/static/img/about_us/back_1.jpg"
                        alt="fill murray"
                    />
                </Background>
            </Parallax>
        </section>
    );
}
