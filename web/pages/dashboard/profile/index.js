import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Profile from "../../../components/pages/Dashboard/Profile";

function index() {
    return (
        <DashboardLayout>
            <Profile />
        </DashboardLayout>
    );
}

export default index;
