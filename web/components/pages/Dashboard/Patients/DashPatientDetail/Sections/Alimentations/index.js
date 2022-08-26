import React, { useState, useEffect } from "react";

import TagLang from "../../../../../../modules/GetTagLang";

import Data from "./Data";
import Hydratation from "./Hydratation/Hydratation";
import Menu from "./Menu/Menu";

export default function index({ clickAlimentation }) {
    const [indicatedSection, setIndicatedSection] = useState(0);

    useEffect(() => {
        setIndicatedSection(0);
    }, [clickAlimentation]);

    const ShowData = () => {
        setIndicatedSection(0);
    };

    const ShowMenu = () => {
        setIndicatedSection(1);
    };

    const ShowHydratation = () => {
        setIndicatedSection(2);
    };

    return (
        <>
            {indicatedSection == 0 && (
                <Data ShowMenu={ShowMenu} ShowHydratation={ShowHydratation} />
            )}
            {indicatedSection == 1 && <Menu ShowData={ShowData} />}
            {indicatedSection == 2 && <Hydratation ShowData={ShowData} />}
        </>
    );
}
