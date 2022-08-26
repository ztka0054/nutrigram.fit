import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import BlogNew from "../../../components/pages/Dashboard/Blog/New";

function newBlog() {
    return (
        <DashboardLayout>
            <BlogNew />
        </DashboardLayout>
    );
}

export default newBlog;
