import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";

import useApp from "../hooks/useApp";

import SignUp_Step2 from "../components/pages/SignUp_Step2";

function signup() {
    const router = useRouter();
    const { objectsSignUp } = useApp();
    const [flagCheck, setflagCheck] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (flagCheck)
            if (objectsSignUp?.step_1) setRender(true);
            else router.push("/signup");
        setflagCheck(true);
    }, [objectsSignUp, flagCheck]);

    return (
        <BasicLayout header={{ title: "SignUp" }}>
            {render && <SignUp_Step2 />}
        </BasicLayout>
    );
}

export default signup;
