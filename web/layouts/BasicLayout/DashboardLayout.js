import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useAuth from "../../hooks/useAuth";

import BasicLayout from "./BasicLayout";
import DashboardMenu from "./DashboardMenu";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        if (!auth.isReady) return;
        if (auth?.auth == undefined) router.push("/login");
    }, [auth]);

    return (
        <>
            {auth?.flagLogin && (
                <BasicLayout typeNav={2} header={{ title: "Dashboard" }}>
                    <DashboardMenu>{children}</DashboardMenu>
                </BasicLayout>
            )}
        </>
    );
}
