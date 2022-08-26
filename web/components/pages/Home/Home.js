import React, { useState } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
// import Section5 from "./Section5";
import Section6 from "./Section6";

export default function Home() {
    const [contSect3, setcontSect3] = useState(null);
    const [contSect4, setcontSect4] = useState(null);

    return (
        <>
            <Section1 />
            <Section2 contSect3={contSect3} />
            <Section3 contSect4={contSect4} setcontSect3={setcontSect3} />
            <Section4 setcontSect4={setcontSect4} />
            {/* <Section5 /> */}
            <Section6 />
        </>
    );
}
