import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Index from "../../../components/pages/Dashboard/Patients/Index";

function index() {
    return (
        <DashboardLayout>
            <Index />
        </DashboardLayout>
    );
}

export default index;
