import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import AboutUs from "../components/pages/AboutUs";

function about_us() {
    return (
        <BasicLayout header={{ title: "About us" }}>
            <AboutUs />
        </BasicLayout>
    );
}

export default about_us;
