import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

import useAuth from "../../../hooks/useAuth";

import SetLink from "../../modules/SetLink";
import TagLang from "../../modules/GetTagLang";

const pic = "/static/img/favicons/app/human.png";

export default function SelectSession() {
    const router = useRouter();
    const [picUser, setPicUser] = useState(pic);
    const { auth, logout } = useAuth();

    useEffect(() => {
        auth?.picture ? setPicUser(auth.picture) : setPicUser(pic);
    }, []);

    const CloseSession = () => {
        logout();
        router.push("/");
    };

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
                <div className="sty-change-session">
                    <div className="sty-indicator">
                        <img src="/static/img/favicons/app/down.svg" />
                    </div>
                    <div className="sty-pic">
                        <img src={picUser} />
                    </div>
                </div>
            </DropdownToggle>
            <DropdownMenu className="sty-select-language fix-1" right>
                <DropdownItem
                    className="style-cont-language"
                    id="es"
                    // onClick={this.handleChange}
                >
                    <SetLink route={"/dashboard/patients"}>
                        <div className="sty-cont-elements">
                            <div className="sty-flag">
                                <img src="/static/img/favicons/dashboard/blog.svg" />
                            </div>
                            <div className="sty-text">Dashboard</div>
                        </div>
                    </SetLink>
                </DropdownItem>
                <DropdownItem
                    className="style-cont-language"
                    id="es"
                    // onClick={this.handleChange}
                >
                    <SetLink route={"/dashboard/profile"}>
                        <div className="sty-cont-elements">
                            <div className="sty-flag">
                                <img src="/static/img/favicons/dashboard/edit.svg" />
                            </div>
                            <div className="sty-text">
                                <TagLang
                                    group={"button"}
                                    tag={"edit_profile"}
                                />
                            </div>
                        </div>
                    </SetLink>
                </DropdownItem>
                <DropdownItem
                    className="style-cont-language"
                    id="en"
                    // onClick={this.handleChange}
                >
                    <div
                        className="sty-cont-elements"
                        onClick={() => CloseSession()}
                    >
                        <div className="sty-flag">
                            <img src="/static/img/favicons/dashboard/close.svg" />
                        </div>
                        <div className="sty-text">
                            <TagLang group={"button"} tag={"close_sesion"} />
                        </div>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
