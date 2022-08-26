import React, { useState, useEffect } from "react";

import Table from "./Table";
import Consulation from "./Consulation";
import SectionMenu from "./SectionMenu";

export default function index({
    clickConsulation,
    dataPatient,
    setRefreshPatient,
}) {
    const [indicatedSection, setIndicatedSection] = useState(2);
    const [selectConsulation, setSelectConsulation] = useState(null);
    const [idConsult, setIdConsult] = useState();

    useEffect(() => {
        setIndicatedSection(0);
    }, [clickConsulation]);

    const ShowFormConsult = (id = null) => {
        setIndicatedSection(1);
        setSelectConsulation(id);
    };

    const ShowConsults = () => {
        setIndicatedSection(0);
    };

    return (
        <>
            {indicatedSection == 0 && (
                <Table ShowFormConsult={ShowFormConsult} />
            )}
            {indicatedSection == 1 && (
                <Consulation
                    ShowConsults={ShowConsults}
                    selectConsulation={selectConsulation}
                    dataPatient={dataPatient}
                    setRefreshPatient={setRefreshPatient}
                />
            )}
            {indicatedSection == 2 && <SectionMenu />}
        </>
    );
}
