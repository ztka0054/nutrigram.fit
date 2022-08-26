import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import TagLang from "../../../modules/GetTagLang";

import useApp from "../../../../hooks/useApp";

const app_es = "/static/img/app/blog.png";
const app_en = "/static/img/app/blog_en.png";

export default function Section3({ contSect2, contSect4, setcontSect3 }) {
    const { locale } = useApp();
    const [parallax, setParallax] = useState(null);
    const [img_app, setImg_app] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        locale == "es" ? setImg_app(app_es) : setImg_app(app_en);
    }, [locale]);

    useEffect(() => {
        setcontSect3(contSection.current);
    }, [contSection]);

    useEffect(() => {
        if (contSect2 != null && contSect4 != null) {
            setParallax([
                {
                    start: contSect2.offsetTop,
                    end: contSect4.offsetTop + contSect4.offsetHeight,
                    properties: [
                        {
                            startValue: -30,
                            endValue: 30,
                            property: "rotate",
                        },
                    ],
                },
            ]);
        }
    }, [contSect2, contSect4]);

    return (
        <section className="class-height-b-3 sty-app sty-3" ref={contSection}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row sty-justify-content sty-cont-app-1-1">
                            <div className="sty-icon">
                                {parallax != null && (
                                    <Plx parallaxData={parallax}>
                                        <img src="/static/img/favicons/app/icon_nu_3.png" />
                                    </Plx>
                                )}
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="">
                                    <div className="sty-u-sub-1 fix-1">
                                        <TagLang group={"app"} tag={"sub_3"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-sub-3">
                                        <TagLang
                                            group={"app"}
                                            tag={"title_3"}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="sty-u-data-2">
                                        <TagLang group={"app"} tag={"cont_3"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 sty-padding-side-0 align-self-center">
                                <div className="sty-app-cont color-3 class-height-b-3">
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
