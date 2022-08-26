import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";

import { autoHeightNav } from "../../helper/appearance/autoHeight";

import SetLink from "../../components/modules/SetLink";
import TagLang from "../../components/modules/GetTagLang";
import Icon from "../../components/modules/Icons";

export default function DashboardMenu({ children }) {
    const { pathname } = useRouter();
    const [activeMenu, setActiveMenu] = useState(false);
    const [indicatedElement, setIndicatedElement] = useState(0);

    const Content = useRef();

    useEffect(() => {
        autoHeightNav(Content.current);
    }, []);

    useEffect(() => {
        if (pathname) PutPathElement(pathname);
    }, [pathname]);

    const ShowMenu = () => {
        setActiveMenu(!activeMenu);
    };

    const PutPathElement = (pathname) => {
        let value = 0;
        let section = pathname.split("/");
        switch (section[2]) {
            case "patients":
                value = 1;
                break;
            case "equivalents":
                value = 2;
                break;
            case "recipes":
                value = 3;
                break;
            case "menus":
                value = 4;
                break;
            case "quotes":
                value = 5;
                break;
            case "blogs":
                value = 6;
                break;

            default:
                value = 0;
                break;
        }
        setIndicatedElement(value);
    };

    return (
        <div className="container-fluid class-heightNavBar">
            <div className="row">
                <div
                    className={`col-10 col-md-2 sty-menu-dashboard ${classnames(
                        { active: activeMenu === true }
                    )}`}
                >
                    <div className="sty-button-show-menu sty-show-resp-1">
                        <div
                            className={`sty-cont-button ${classnames({
                                active: activeMenu === true,
                            })}`}
                            onClick={() => ShowMenu()}
                        >
                            <Icon
                                className={"sty-icon"}
                                viewBox={"0 0 492.004 492.004"}
                                name="icon-next"
                            />
                        </div>
                    </div>
                    <div className="sty-cont-menu" ref={Content}>
                        <SetLink route="/dashboard/patients">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 1,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_1.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_1"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                        <SetLink route="/dashboard/equivalents">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 2,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_2.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_2"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                        <SetLink route="/dashboard/recipes">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 3,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_3.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_3"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                        <SetLink route="/dashboard/menus">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 4,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_4.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_4"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                        <SetLink route="/dashboard/quotes">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 5,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_5.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_5"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                        <SetLink route="/dashboard/blogs">
                            <div
                                className={`sty-cont-section ${classnames({
                                    active: indicatedElement === 6,
                                })}`}
                            >
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/dashboard/icon_6.png" />
                                </div>
                                <div className="sty-tag">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"menu_6"}
                                    />
                                </div>
                            </div>
                        </SetLink>
                    </div>
                </div>
                <div className="col-12 col-md-10 sty-dashboard">{children}</div>
            </div>
        </div>
    );
}
