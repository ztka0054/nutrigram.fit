import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Detail from "../../../components/pages/Dashboard/Quotes/Detail";

function index() {
    return (
        <DashboardLayout>
            <Detail />
        </DashboardLayout>
    );
}

export default index;
