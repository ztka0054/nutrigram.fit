import React from "react";

import NavBarNoDash from "./NavBarNoDash";
import NavBarDash from "./NavBarDash";

export default function NavBar({ type = 1 }) {
    return (
        <>
            {type === 1 && <NavBarNoDash />}
            {type === 2 && <NavBarDash />}
        </>
    );
}
