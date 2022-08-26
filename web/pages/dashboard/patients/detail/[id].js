import React from "react";

import DashboardLayout from "../../../../layouts/BasicLayout/DashboardLayout";

import Index from "../../../../components/pages/Dashboard/Patients/DashPatientDetail";

function detail() {
    return (
        <DashboardLayout>
            <Index />
        </DashboardLayout>
    );
}

export default detail;
