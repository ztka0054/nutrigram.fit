import React, { useEffect, useRef } from "react";

import TagLang from "../../../modules/GetTagLang";

export default function Section2({ setcontSect2 }) {
    const contSection = useRef();

    useEffect(() => {
        setcontSect2(contSection.current);
    }, [contSection]);

    return (
        <section className="sty-aboutus" id="id-cont-2-2" ref={contSection}>
            <div className="container-fluid sty-about-cont-1">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_1"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_1"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_2"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_2"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_3"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_3"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_4"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_4"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_5"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_5"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="sty-card">
                                    <div className="sty-cont-icon sty-justify-content">
                                        <div className="sty-icon">
                                            <img src="/static/img/about_us/icon_1.svg" />
                                        </div>
                                    </div>
                                    <div className="sty-title">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_t_6"}
                                        />
                                    </div>
                                    <div className="sty-data">
                                        <TagLang
                                            group={"about_us"}
                                            tag={"sec_2_c_6"}
                                        />
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
