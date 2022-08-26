import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import TagLang from "../../../modules/GetTagLang";

import useApp from "../../../../hooks/useApp";

const app_es = "/static/img/app/dieta.png";
const app_en = "/static/img/app/dieta_en.png";

export default function Section1({ contSect2, setcontSect1 }) {
    const { locale } = useApp();
    const [parallax, setParallax] = useState(null);
    const [img_app, setImg_app] = useState(null);

    const conSection = useRef();

    useEffect(() => {
        locale == "es" ? setImg_app(app_es) : setImg_app(app_en);
    }, [locale]);

    useEffect(() => {
        setcontSect1(conSection.current);
    }, [conSection]);

    useEffect(() => {
        if (conSection != null && contSect2 != null) {
            let section = conSection.current;
            setParallax([
                {
                    start: 0,
                    end: contSect2.offsetTop + contSect2.offsetHeight,
                    properties: [
                        {
                            startValue: -(section.offsetHeight * 0.1),
                            endValue: section.offsetHeight * 0.35,
                            property: "translateY",
                        },
                    ],
                },
            ]);
        }
    }, [conSection, contSect2]);

    return (
        <section
            className="class-heightNavBar class-height-b-3 sty-app sty-1"
            ref={conSection}
        >
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row sty-justify-content sty-cont-app-1-1">
                            <div className="sty-icon">
                                {parallax != null && (
                                    <Plx parallaxData={parallax}>
                                        <img src="/static/img/favicons/app/icon_nu_1.png" />
                                    </Plx>
                                )}
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="">
                                    <div className="sty-u-sub-1 fix-1">
                                        <TagLang group={"app"} tag={"sub_1"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-sub-3">
                                        <TagLang
                                            group={"app"}
                                            tag={"title_1"}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-data-2">
                                        <TagLang group={"app"} tag={"cont_1"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 sty-padding-side-0 align-self-center">
                                <div className="sty-app-cont color-1 class-height-b-3">
                                    <div className="sty-cont-app sty-right">
                                        <img src={img_app} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
