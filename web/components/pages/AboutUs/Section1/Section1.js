import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import TagLang from "../../../modules/GetTagLang";

export default function Section1({ contSect2 }) {
    const [parallax, setParallax] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        if (contSection != null && contSect2 != null) {
            let section = contSection.current;
            setParallax([
                {
                    start: 0,
                    end: contSect2.offsetTop + contSect2.offsetHeight,
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
    }, [contSection, contSect2]);

    return (
        <section
            className="class-heightNavBar sty-cont-back-img"
            id="id-cont-1-2"
            ref={contSection}
        >
            <div className="container-fluid sty-home">
                <div className="row justify-content-center">
                    <div className="col-11 sty-home-cont-2-1">
                        <div className="row ">
                            <div className="col-12 col-md-6">
                                {parallax != null && (
                                    <Plx parallaxData={parallax}>
                                        <div className="sty-cont-img-3">
                                            <img src="/static/img/about_us/about_1.jpg" />
                                        </div>
                                    </Plx>
                                )}
                            </div>
                            <div className="col-12 col-md-6 align-self-center">
                                <div className="sty-u-sub-1">
                                    <TagLang group={"about_us"} tag={"sub_1"} />
                                </div>
                                <div className="sty-u-sub-3 fix-2">
                                    <TagLang
                                        group={"about_us"}
                                        tag={"title_1"}
                                    />
                                </div>
                                <div className="sty-u-data-2">
                                    <TagLang
                                        group={"about_us"}
                                        tag={"cont_1"}
                                    />
                                </div>
                                <div className="sty-home-cont-1-1">
                                    <div className="sty-cont-button-1">
                                        <a href="mailto:contacto@nutrigram.fit">
                                            <button className="sty-button-3">
                                                <TagLang
                                                    group={"button"}
                                                    tag={"tag_t_1_6"}
                                                />
                                            </button>
                                        </a>
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
