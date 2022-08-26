import React, { useState, useEffect, useRef } from "react";
import { Parallax, Background } from "react-parallax";

import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";

import useApp from "../../../../hooks/useApp";
import constParallax from "../../../../helper/appearance/parallax";

const app_es = "/static/img/app/iniciar.png";
const app_en = "/static/img/app/iniciar_en.png";

export default function Section4({ setcontSect4 }) {
    const { locale } = useApp();
    const [AppPic, setAppPic] = useState(app_es);

    const contSection = useRef();

    useEffect(() => {
        locale == "es" ? setAppPic(app_es) : setAppPic(app_en);
    }, [locale]);

    useEffect(() => {
        setcontSect4(contSection.current);
    }, [contSection]);

    return (
        <section className="class-height-b-1 sty-home-cont-4" ref={contSection}>
            <Parallax
                strength={constParallax.type_1}
                className="sty-cont-parallax"
            >
                <div className="sty-courtain-b-1"></div>
                <div className="sty-cont-movil-1">
                    <img src={AppPic} />
                </div>
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 sty-cont-info">
                            <div className="row sty-justify-content class-height-b-1">
                                <div className="col-12 col-md-6">
                                    <div className="sty-u-sub-3 sty-w">
                                        <TagLang
                                            group={"home"}
                                            tag={"title_4"}
                                        />
                                    </div>
                                    <div className="sty-u-data-3 sty-w">
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_4_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_4_2"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-1-1">
                                        <div className="sty-cont-button-1">
                                            {/* <a href={urlsApp.app_ios} target="_blank"> */}
                                            <SetLink route="/coming_soon">
                                                <div className="sty-button-app">
                                                    <img src="/static/img/favicons/app/app_ios.png" />
                                                </div>
                                            </SetLink>
                                            {/* </a> */}
                                        </div>
                                        <div className="sty-cont-button-2">
                                            {/* <a href={urlsApp.app_android} target="_blank"> */}
                                            <SetLink route="/coming_soon">
                                                <div className="sty-button-app">
                                                    <img src="/static/img/favicons/app/app_android.png" />
                                                </div>
                                            </SetLink>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg class-autoheight-p">
                    <img src="/static/img/home/home_4.jpg" alt="fill murray" />
                </Background>
            </Parallax>
        </section>
    );
}
