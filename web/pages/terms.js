import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import Terms from "../components/pages/Terms";

function terms() {
    return (
        <BasicLayout header={{ title: "Terms" }}>
            <Terms />
        </BasicLayout>
    );
}

export default terms;
