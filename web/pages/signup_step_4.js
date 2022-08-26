import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";

import useApp from "../hooks/useApp";

import SignUp_Step4 from "../components/pages/SignUp_Step4";

function signup() {
    const router = useRouter();
    const { objectsSignUp } = useApp();
    const [flagCheck, setflagCheck] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (flagCheck)
            if (objectsSignUp?.selectedPlan) setRender(true);
            else router.push("/signup_step_3");
        setflagCheck(true);
    }, [objectsSignUp, flagCheck]);

    return (
        <BasicLayout header={{ title: "SignUp" }}>
            {render && <SignUp_Step4 />}
        </BasicLayout>
    );
}

export default signup;
