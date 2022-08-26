import React from "react";

import DashboardLayout from "../../../../../../layouts/BasicLayout/DashboardLayout";

import RecipeDetail from "../../../../../../components/pages/Dashboard/Recipe/Detail";

function index() {
    return (
        <DashboardLayout>
            <RecipeDetail />
        </DashboardLayout>
    );
}

export default index;
