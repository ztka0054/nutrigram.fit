import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Recipe from "../../../components/pages/Dashboard/Recipe/Index";

function index() {
    return (
        <DashboardLayout>
            <Recipe />
        </DashboardLayout>
    );
}

export default index;
