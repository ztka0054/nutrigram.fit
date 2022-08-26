import React, { useState, useEffect, useRef } from "react";
import Plx from "react-plx";

import TagLang from "../../../modules/GetTagLang";

export default function Section3({ contSect4, setcontSect3 }) {
    const [parallax, setParallax] = useState(null);

    const contSection = useRef();

    useEffect(() => {
        setcontSect3(contSection.current);
    }, [contSection]);

    useEffect(() => {
        if (contSect4 != null && contSection != null) {
            let section = contSection.current;
            setParallax([
                {
                    start: 0,
                    end:
                        section.offsetTop +
                        section.offsetHeight +
                        contSect4.offsetHeight,
                    properties: [
                        {
                            startValue: -(section.offsetHeight * 0.2),
                            endValue: section.offsetHeight * 0.6,
                            property: "translateY",
                        },
                    ],
                },
            ]);
        }
    }, [contSect4, contSection]);

    return (
        <section className="sty-cont-back-img" ref={contSection}>
            <div className="container-fluid sty-home">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11 sty-home-cont-3-4">
                        <div className="row sty-justify-content">
                            <div className="col-12 col-md-8">
                                <div className="sty-home-cont-3-1">
                                    <div className="sty-u-sub-1 sty-w">
                                        <TagLang group={"home"} tag={"sub_3"} />
                                    </div>
                                    <div className="sty-u-sub-3 sty-w fix-1">
                                        <TagLang
                                            group={"home"}
                                            tag={"title_3"}
                                        />
                                    </div>
                                    <div className="sty-u-data-3 sty-w">
                                        <TagLang
                                            group={"home"}
                                            tag={"cont_3"}
                                        />
                                    </div>
                                    <div className="sty-home-cont-3-2">
                                        <div className="sty-cont-step-1 sty-l sty-justify-content">
                                            <div className="sty-tag-num">
                                                <div className="sty-number-1 sty-justify-content">
                                                    <div className="sty-num">
                                                        1
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sty-u-data-2 fix-1 sty-w sty-tag-text">
                                                <TagLang
                                                    group={"home"}
                                                    tag={"cont_3_p_1"}
                                                />
                                            </div>
                                        </div>
                                        <div className="sty-cont-step-1 sty-l sty-justify-content">
                                            <div className="sty-tag-num">
                                                <div className="sty-number-1 sty-justify-content">
                                                    <div className="sty-num">
                                                        2
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sty-u-data-2 fix-1 sty-w sty-tag-text">
                                                <TagLang
                                                    group={"home"}
                                                    tag={"cont_3_p_2"}
                                                />
                                            </div>
                                        </div>
                                        <div className="sty-cont-step-1 sty-justify-content">
                                            <div className="sty-tag-num">
                                                <div className="sty-number-1 sty-justify-content">
                                                    <div className="sty-num">
                                                        3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sty-u-data-2 fix-1 sty-w sty-tag-text">
                                                <TagLang
                                                    group={"home"}
                                                    tag={"cont_3_p_3"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="sty-home-cont-3-3">
                                    {parallax != null && (
                                        <Plx
                                            parallaxData={parallax}
                                            className="sty-hide-resp-1"
                                        >
                                            <div className="cont-img-3-1">
                                                <img src="/static/img/home/home_3.jpg" />
                                            </div>
                                        </Plx>
                                    )}
                                    <div className="cont-img-3-2">
                                        <img src="/static/img/home/home_3_1.png" />
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
