import React from "react";

import DashboardLayout from "../../../../layouts/BasicLayout/DashboardLayout";

import RecipeList from "../../../../components/pages/Dashboard/Recipe/List/ListType";

function index() {
    return (
        <DashboardLayout>
            <RecipeList />
        </DashboardLayout>
    );
}

export default index;
