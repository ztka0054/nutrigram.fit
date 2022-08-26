import React, { useState, useEffect } from "react";
import { NavItem } from "reactstrap";

import useAuth from "../../../hooks/useAuth";
import SetLink from "../../modules/SetLink";
import TagLang from "../../modules/GetTagLang";

import ProfileSesion from "./ProfileSession";

export default function SessionElement() {
    const { flagLogin } = useAuth();
    const [sesionFlag, setSesionFlag] = useState(false);

    useEffect(() => {
        setSesionFlag(flagLogin);
    }, [flagLogin]);

    return (
        <>
            {sesionFlag && <ProfileSesion />}
            {!sesionFlag && (
                <>
                    <NavItem>
                        <SetLink route="/login" classLink={"nav-link"}>
                            <button className="sty-button-log-1">
                                <TagLang
                                    group={"navbar"}
                                    tag={"button_login"}
                                />
                            </button>
                        </SetLink>
                    </NavItem>
                    <NavItem>
                        <SetLink route="/signup" classLink={"nav-link"}>
                            <button className="sty-button-log-2">
                                <TagLang
                                    group={"navbar"}
                                    tag={"button_signin"}
                                />
                            </button>
                        </SetLink>
                    </NavItem>
                </>
            )}
        </>
    );
}
