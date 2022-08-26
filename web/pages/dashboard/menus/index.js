import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Menu from "../../../components/pages/Dashboard/Menu/Index";

function index() {
    return (
        <DashboardLayout>
            <Menu />
        </DashboardLayout>
    );
}

export default index;
