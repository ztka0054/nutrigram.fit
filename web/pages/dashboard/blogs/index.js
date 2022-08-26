import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import Blog from "../../../components/pages/Dashboard/Blog/Index";

function blogs() {
    return (
        <DashboardLayout>
            <Blog />
        </DashboardLayout>
    );
}

export default blogs;
