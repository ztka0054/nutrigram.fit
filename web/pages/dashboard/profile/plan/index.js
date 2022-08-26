import React from "react";

import DashboardLayout from "../../../../layouts/BasicLayout/DashboardLayout";

import Plan from "../../../../components/pages/Dashboard/Profile/Plan";

function index() {
    return (
        <DashboardLayout>
            <Plan />
        </DashboardLayout>
    );
}

export default index;
