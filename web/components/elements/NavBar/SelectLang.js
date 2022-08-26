import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

import useApp from "../../../hooks/useApp";

import GetLanguage from "../../../helper/i18n/getValueTagLang";

const flag_es = "/static/img/favicons/lang/es.png";
const flag_en = "/static/img/favicons/lang/en.png";

export default function SelectLang() {
    const router = useRouter();
    const { pathname, asPath, query } = useRouter();
    const { locale } = useApp();
    const [flagIcon, setFlagIcon] = useState(flag_es);

    useEffect(() => {
        locale == "es" ? setFlagIcon(flag_es) : setFlagIcon(flag_en);
    }, [locale]);

    const ChangeLocale = (localeChange) => {
        router.push(pathname, asPath, {
            locale: localeChange,
        });
    };

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
                <div className="sty-change-language">
                    <div className="sty-indicator">
                        <img src="/static/img/favicons/app/down.svg" />
                    </div>
                    <div className="sty-flag">{<img src={flagIcon} />}</div>
                </div>
            </DropdownToggle>
            <DropdownMenu className="sty-select-language" right>
                <DropdownItem
                    className="style-cont-language"
                    onClick={() => ChangeLocale("es")}
                >
                    <div className="sty-cont-elements">
                        <div className="sty-flag">
                            <img src={flag_es} />
                        </div>
                        <div className="sty-text">
                            {GetLanguage("navbar", "select_es")}
                        </div>
                    </div>
                </DropdownItem>
                <DropdownItem
                    className="style-cont-language"
                    onClick={() => ChangeLocale("en")}
                >
                    <div className="sty-cont-elements">
                        <div className="sty-flag">
                            <img src={flag_en} />
                        </div>
                        <div className="sty-text">
                            {GetLanguage("navbar", "select_en")}
                        </div>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
