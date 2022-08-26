import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Equivalent from "../../../components/pages/Dashboard/Equivalents/Index";

function index() {
    return (
        <DashboardLayout>
            <Equivalent />
        </DashboardLayout>
    );
}

export default index;
