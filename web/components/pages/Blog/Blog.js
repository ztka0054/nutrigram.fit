import React from "react";

import Title1 from "../../modules/Title_1";
import Section1 from "./Section1";

import GetLanguage from "../../../helper/i18n/getValueTagLang";

export default function Blog() {
    return (
        <>
            <Title1 title={GetLanguage("blog", "title")} />
            <Section1 />
        </>
    );
}
