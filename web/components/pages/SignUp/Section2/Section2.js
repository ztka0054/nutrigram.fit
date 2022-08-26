import React from "react";
import { Parallax, Background } from "react-parallax";

import TagLag from "../../../modules/GetTagLang";
import SetLink from "../../../modules/SetLink";

import constParallax from "../../../../helper/appearance/parallax";

export default function Section2() {
    return (
        <section className="class-height-b-1">
            <Parallax
                strength={constParallax.type_1}
                className="sty-cont-parallax"
            >
                <div className="sty-courtain-b-1"></div>
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-10">
                            <div className="row sty-justify-content class-height-b-1">
                                <div className="col-12 col-md-6 text-center">
                                    <div className="sty-u-sub-2 sty-w">
                                        <TagLag
                                            group={"signin"}
                                            tag={"title_3"}
                                        />
                                    </div>
                                    <div className="sty-u-data-3 sty-w">
                                        <TagLag
                                            group={"signin"}
                                            tag={"sub_3_1"}
                                        />
                                        <br />
                                        <TagLag
                                            group={"signin"}
                                            tag={"sub_3_2"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1">
                                        <SetLink route="/about_us">
                                            <button className="sty-button-1">
                                                <TagLag
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
                <Background className="sty-custom-bg fix-1 class-autoheight-p">
                    <img
                        src="/static/img/signin/back_1.jpg"
                        alt="fill murray"
                    />
                </Background>
            </Parallax>
            {/* <div className="sty-back-img-1">
      <img src="/static/img/home/home_1.jpg"/>
    </div> */}
        </section>
    );
}
