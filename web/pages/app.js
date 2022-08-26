import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import AboutApp from "../components/pages/AboutApp";

function app() {
    return (
        <BasicLayout header={{ title: "App" }}>
            <AboutApp />
        </BasicLayout>
    );
}

export default app;
