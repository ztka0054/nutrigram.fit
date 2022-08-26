import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import SignUp from "../components/pages/SignUp";

function signup() {
    return (
        <BasicLayout header={{ title: "SignUp" }}>
            <SignUp />
        </BasicLayout>
    );
}

export default signup;
