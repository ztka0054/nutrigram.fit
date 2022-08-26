import React, { useState } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

export default function AboutApp() {
    const [contSect1, setcontSect1] = useState(null);
    const [contSect2, setcontSect2] = useState(null);
    const [contSect3, setcontSect3] = useState(null);
    const [contSect4, setcontSect4] = useState(null);
    const [contSect5, setcontSect5] = useState(null);

    return (
        <>
            <Section1 contSect2={contSect2} setcontSect1={setcontSect1} />
            <Section2 contSect3={contSect3} setcontSect2={setcontSect2} />
            <Section3
                contSect2={contSect1}
                contSect4={contSect4}
                setcontSect3={setcontSect3}
            />
            <Section4
                contSect5={contSect5}
                contSect3={contSect2}
                setcontSect4={setcontSect4}
            />
            <Section5 setcontSect5={setcontSect5} />
        </>
    );
}
