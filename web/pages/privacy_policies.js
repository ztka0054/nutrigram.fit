import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import Privacy from "../components/pages/Privacy";

function privacy() {
    return (
        <BasicLayout header={{ title: "Terms" }}>
            <Privacy />
        </BasicLayout>
    );
}

export default privacy;
