import React from "react";

import SetLink from "../../modules/SetLink";
import TagLang from "../../modules/GetTagLang";

import Icon from "../../modules/Icons";
import { scrollTop } from "../../../helper/appearance/scroll";

const logo = "/static/img/favicons/app/logo_w.png";
import { urlsSocial } from "../../../helper/constants/externalUrl";

export default function Footer() {
    const TopPage = () => {
        scrollTop();
    };

    return (
        <footer className="sty-footer">
            <div
                className="sty-content-up sty-justify-content"
                onClick={() => TopPage()}>
                <div className="sty-circle sty-justify-content">
                    <Icon
                        className={"sty-icon"}
                        viewBox={"0 0 292.4 292.4"}
                        name="icon-up"
                    />
                </div>
            </div>
            <div className="container-fluid sty-cont-f-1">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="sty-logo-1">
                                    <img src={logo} />
                                </div>
                                <div>
                                    <SetLink route="/privacy_policies">
                                        <TagLang
                                            group={"footer"}
                                            tag={"cont_f_1"}
                                        />
                                    </SetLink>
                                </div>
                                <div>
                                    <SetLink route="/terms">
                                        <TagLang
                                            group={"footer"}
                                            tag={"cont_f_2"}
                                        />
                                    </SetLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <div className="sty-cont-f-1-1">
                                    <a href={`mailto:${urlsSocial.s_email}`}>
                                        <div className="sty-cont-contact">
                                            <Icon
                                                className={"sty-icon"}
                                                viewBox={"0 0 512 512"}
                                                name="icon-email"
                                            />
                                            <div className="sty-text">
                                                contacto@nutrigram.fit
                                            </div>
                                        </div>
                                    </a>
                                    <a href={`tel:${urlsSocial.s_phone}`}>
                                        <div className="sty-cont-contact">
                                            <Icon
                                                className={"sty-icon"}
                                                viewBox={"0 0 512 512"}
                                                name="icon-phone"
                                            />
                                            <div className="sty-text">
                                                (55) 4144 2874
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center text-md-right">
                                <div className="sty-cont-f-1-2">
                                    <div className="sty-cont-social">
                                        <a
                                            href={urlsSocial.s_facebook}
                                            target="_blank">
                                            <div className="sty-social sty-justify-content">
                                                <Icon
                                                    viewBox={
                                                        "0 0 96.124 96.123"
                                                    }
                                                    name="icon-facebook"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sty-cont-social">
                                        <a
                                            href={urlsSocial.s_twitter}
                                            target="_blank">
                                            <div className="sty-social sty-justify-content">
                                                <Icon
                                                    viewBox={"0 0 512 512"}
                                                    name="icon-twitter"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sty-cont-social">
                                        <a
                                            href={urlsSocial.s_instagram}
                                            target="_blank">
                                            <div className="sty-social sty-justify-content">
                                                <Icon
                                                    viewBox={
                                                        "0 0 169.063 169.063"
                                                    }
                                                    name="icon-instagram"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sty-cont-f-2">
                <div className="sty-cont-links-2">
                    <SetLink route="/privacy_policies">
                        <div className="sty-link">
                            <TagLang group={"footer"} tag={"politics_1"} />
                        </div>{" "}
                    </SetLink>
                </div>
            </div>
        </footer>
    );
}
