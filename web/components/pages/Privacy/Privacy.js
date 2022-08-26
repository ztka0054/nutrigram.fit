import React from "react";

import GetLanguage from "../../../helper/i18n/getValueTagLang";

import Title from "../../../components/modules/Title_1";
import Section1 from "./Section1";

export default function Privacy() {
    return (
        <>
            <Title title={GetLanguage("policy", "title")} />
            <Section1 />
        </>
    );
}
