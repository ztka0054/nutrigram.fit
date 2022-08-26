import React, { useState, useEffect } from "react";

import Table from "./Table";
import Biochemical from "./Biochemical";

export default function index({ clickBiochemical }) {
    const [indicatedSection, setIndicatedSection] = useState(0);
    // const [selectBiochemical, setSelectBiochemical] = useState(null);

    useEffect(() => {
        setIndicatedSection(0);
    }, [clickBiochemical]);

    const ShowFormBiochemical = (id = null) => {
        setIndicatedSection(1);
        // setSelectBiochemical(id);
    };

    const ShowBiomedical = () => {
        setIndicatedSection(0);
    };

    return (
        <>
            {indicatedSection == 0 && (
                <Table ShowFormBiochemical={ShowFormBiochemical} />
            )}
            {indicatedSection == 1 && (
                <Biochemical ShowBiomedical={ShowBiomedical} />
            )}
        </>
    );
}
