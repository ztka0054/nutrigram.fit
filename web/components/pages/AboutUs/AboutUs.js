import React, { useState } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
// import Section2 from "../components/pages/about_us/Section2";
// import Section3 from "../components/pages/about_us/Section3";
// import Section4 from "../components/pages/about_us/Section4";

export default function AboutUs() {
    const [contSect2, setcontSect2] = useState(null);

    return (
        <>
            <Section1 contSect2={contSect2} />
            <Section2 setcontSect2={setcontSect2} />
            <Section3 />
            <Section4 />
        </>
    );
}
