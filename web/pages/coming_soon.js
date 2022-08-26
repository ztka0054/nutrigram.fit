import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import Coming_soon from "../components/pages/Coming_soon";

function index({}) {
    return (
        <BasicLayout header={{}}>
            <Coming_soon />
        </BasicLayout>
    );
}

export default index;
