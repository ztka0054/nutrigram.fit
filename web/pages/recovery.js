import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import Recovery from "../components/pages/Recovery";

function recovery() {
    return (
        <BasicLayout header={{ title: "Recovery" }}>
            <Recovery />
        </BasicLayout>
    );
}

export default recovery;
