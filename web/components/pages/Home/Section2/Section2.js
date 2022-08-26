import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";

export default function Section2({ contSect3 }) {
    const [parallax, setParallax] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        if (contSect3 != null && contSection != null) {
            let section = contSection.current;
            setParallax([
                {
                    start: 0,
                    end: contSect3.offsetTop + contSect3.offsetHeight,
                    properties: [
                        {
                            startValue: -(section.offsetHeight * 0.05),
                            endValue: section.offsetHeight * 0.3,
                            property: "translateY",
                        },
                    ],
                },
            ]);
        }
    }, [contSect3, contSection]);

    return (
        <section className="sty-cont-back-img" ref={contSection}>
            <div className="container-fluid sty-home">
                <div className="row justify-content-center">
                    <div className="col-11 sty-home-cont-2-1">
                        <div className="row ">
                            <div className="col-12 col-md-6">
                                {parallax != null && (
                                    <Plx parallaxData={parallax}>
                                        <div className="sty-cont-img-2">
                                            <img src="/static/img/home/home_2.png" />
                                        </div>
                                    </Plx>
                                )}
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="sty-u-sub-1">
                                    <TagLang group={"home"} tag={"sub_2"} />
                                </div>
                                <div className="sty-u-sub-3">
                                    <TagLang group={"home"} tag={"title_2"} />
                                </div>
                                <div className="sty-u-data-2">
                                    <TagLang group={"home"} tag={"cont_2"} />
                                </div>
                                <div className="sty-home-cont-1-1 text-center text-md-left">
                                    <div className="sty-cont-button-1">
                                        <SetLink route={"/about_us"}>
                                            <button className="sty-button-3">
                                                <TagLang
                                                    group={"button"}
                                                    tag={"tag_t_1_1"}
                                                />
                                            </button>
                                        </SetLink>
                                    </div>
                                    <div className="sty-cont-button-2">
                                        <SetLink route={"/app"}>
                                            <button className="sty-button-2">
                                                <TagLang
                                                    group={"button"}
                                                    tag={"tag_t_1_2"}
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
        </section>
    );
}
