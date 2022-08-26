import React, { useState, useEffect, useRef } from "react";
import { Parallax, Background } from "react-parallax";

import TagLang from "../../../modules/GetTagLang";
import SetLink from "../../../modules/SetLink";

import useApp from "../../../../hooks/useApp";

const app_es = "/static/img/app/iniciar.png";
const app_en = "/static/img/app/iniciar_en.png";

export default function Section5({ setcontSect5 }) {
    const { locale } = useApp();
    const [img_app, setImg_app] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        locale == "es" ? setImg_app(app_es) : setImg_app(app_en);
    }, [locale]);

    useEffect(() => {
        setcontSect5(contSection.current);
    }, [contSection]);

    return (
        <section className="class-height-b-1 sty-app" ref={contSection}>
            <Parallax strength={300} className="sty-cont-parallax">
                <div className="sty-courtain-b-1"></div>
                <div className="sty-cont-movil-1">
                    <img src={img_app} />
                </div>
                <div className="container-fluid sty-home">
                    <div className="row justify-content-center">
                        <div className="col-11 sty-cont-info">
                            <div className="row sty-justify-content class-height-b-1">
                                <div className="col-12 col-md-6">
                                    <div className="sty-u-sub-3 sty-w">
                                        <TagLang
                                            group={"app"}
                                            tag={"title_5"}
                                        />
                                    </div>
                                    <div className="sty-u-data-3 sty-w">
                                        <TagLang
                                            group={"app"}
                                            tag={"title_5_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"app"}
                                            tag={"title_5_2"}
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
                                        </div>
                                        <div className="sty-cont-button-2">
                                            {/* <a href={urlsApp.app_android} target="_blank"> */}
                                            <SetLink route="/coming_soon">
                                                <div className="sty-button-app">
                                                    <img src="/static/img/favicons/app/app_android.png" />
                                                </div>
                                            </SetLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg fix-1">
                    <img src="/static/img/app/back_1.jpg" alt="fill murray" />
                </Background>
            </Parallax>
        </section>
    );
}
