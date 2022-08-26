import React from "react";
import { Parallax, Background } from "react-parallax";

export default function Title_1({ title = "" }) {
    return (
        <section className="class-heightNavBar class-height-b-2">
            <Parallax strength={300} className="sty-cont-parallax">
                <div className="sty-courtain-b-3"></div>
                <div className="container-fluid sty-home">
                    <div className="row sty-justify-content class-height-b-2">
                        <div className="sty-u-sub-2 sty-w sty-u-u-title">
                            {title}
                        </div>
                    </div>
                </div>
                <Background className="sty-custom-bg fix-2 class-autoheight-p">
                    <img
                        src="/static/img/utility/title.jpg"
                        alt="fill murray"
                    />
                </Background>
            </Parallax>
        </section>
    );
}
