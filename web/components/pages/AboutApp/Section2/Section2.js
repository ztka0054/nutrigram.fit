import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import TagLang from "../../../modules/GetTagLang";

import useApp from "../../../../hooks/useApp";

const app_es = "/static/img/app/ejercicio.png";
const app_en = "/static/img/app/ejercicio_en.png";

export default function Section2({ contSect3, setcontSect2 }) {
    const { locale } = useApp();
    const [parallax, setParallax] = useState(null);
    const [img_app, setImg_app] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        locale == "es" ? setImg_app(app_es) : setImg_app(app_en);
    }, [locale]);

    useEffect(() => {
        setcontSect2(contSection.current);
    }, [contSection]);

    useEffect(() => {
        if (contSection != null && contSect3 != null) {
            let section = contSection.current;
            setParallax([
                {
                    start: 0,
                    end: contSect3.offsetTop + contSect3.offsetHeight,
                    properties: [
                        {
                            startValue: -(section.offsetHeight * 0.1),
                            endValue: section.offsetHeight * 0.1,
                            property: "translateX",
                        },
                    ],
                },
            ]);
        }
    }, [contSection, contSect3]);

    return (
        <section className="class-height-b-3 sty-app sty-2" ref={contSection}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row sty-justify-content sty-cont-app-1-1">
                            <div className="sty-icon">
                                {parallax != null && (
                                    <Plx parallaxData={parallax}>
                                        <img src="/static/img/favicons/app/icon_nu_2.png" />
                                    </Plx>
                                )}
                            </div>
                            <div className="col-12 col-md-6 sty-padding-side-0 align-self-center">
                                <div className="sty-app-cont color-2 class-height-b-3">
                                    <div className="sty-cont-app sty-left">
                                        <img src={img_app} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-right">
                                <div className="">
                                    <div className="sty-u-sub-1-2 fix-1">
                                        <TagLang group={"app"} tag={"sub_2"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-sub-3">
                                        <TagLang
                                            group={"app"}
                                            tag={"title_2"}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-data-2">
                                        <TagLang group={"app"} tag={"cont_2"} />
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
