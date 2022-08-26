import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";

import useAuth from "../hooks/useAuth";

import SignUp_Step3 from "../components/pages/SignUp_Step3";

function signup() {
    const router = useRouter();
    const { auth } = useAuth();
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (typeof auth != "undefined")
            if (auth == null) router.push("/signup");
            else setRender(true);
    }, [auth]);

    return (
        <BasicLayout header={{ title: "SignUp" }}>
            {render && <SignUp_Step3 />}
        </BasicLayout>
    );
}

export default signup;
