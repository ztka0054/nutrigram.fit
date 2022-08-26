import React from "react";

import GetLanguage from "../../../helper/i18n/getValueTagLang";

import Title from "../../modules/Title_1";
import Section1 from "./Section1";

export default function Terms() {
    return (
        <>
            <Title title={GetLanguage("terms", "title")} />
            <Section1 />
        </>
    );
}
