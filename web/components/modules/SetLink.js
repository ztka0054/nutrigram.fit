import React, { useState, useEffect } from "react";
import Link from "next/link";
import { size, map } from "lodash";

// import useLang from "../../hooks/useLang";

import useApp from "../../hooks/useApp";

import { DEFAULTLANG } from "../../utils/constants";

export default function SetLink({
    children,
    route,
    params = {},
    classLink = null,
}) {
    const { locale } = useApp();
    const [urlParams, setUrlParams] = useState("");
    const [localeLink, setLocaleLink] = useState(DEFAULTLANG);

    useEffect(() => {
        if (locale) setLocaleLink(locale);
    }, [locale]);

    useEffect(() => {
        if (size(params) > 0) CreateUrl();
    }, [params]);

    const CreateUrl = () => {
        let array = [];
        map(Object.keys(params), (key, index) => {
            array.push(params[key]);
        });
        setUrlParams(`/${array.join("/")}`);
    };

    return (
        <Link href={`${route}${urlParams}`} locale={localeLink}>
            <a className={classLink}>{children}</a>
        </Link>
    );
}
