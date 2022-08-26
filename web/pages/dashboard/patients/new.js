import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Index from "../../../components/pages/Dashboard/Patients/PatientDetail";

function newPatient() {
    return (
        <DashboardLayout>
            <Index />
        </DashboardLayout>
    );
}

export default newPatient;
