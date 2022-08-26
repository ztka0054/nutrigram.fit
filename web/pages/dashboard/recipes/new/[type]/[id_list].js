import React from "react";

import DashboardLayout from "../../../../../layouts/BasicLayout/DashboardLayout";

import RecipeNew from "../../../../../components/pages/Dashboard/Recipe/New";

function index() {
    return (
        <DashboardLayout>
            <RecipeNew />
        </DashboardLayout>
    );
}

export default index;
