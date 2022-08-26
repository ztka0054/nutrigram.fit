import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import Login from "../components/pages/Login";

export default function login() {
    return (
        <BasicLayout header={{ title: "Login" }}>
            <Login />
        </BasicLayout>
    );
}
