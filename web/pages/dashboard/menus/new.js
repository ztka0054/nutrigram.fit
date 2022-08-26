import React from "react";

import DashboardLayout from "../../../layouts/BasicLayout/DashboardLayout";

import MenuNew from "../../../components/pages/Dashboard/Menu/New";

function newMenu() {
    return (
        <DashboardLayout>
            <MenuNew />
        </DashboardLayout>
    );
}

export default newMenu;
