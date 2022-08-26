import React from "react";
import BasicLayout from "../layouts/BasicLayout";

import Blog from "../components/pages/Blog";

function blog() {
    return <BasicLayout header={{ title: "Blog" }}>{<Blog />}</BasicLayout>;
}

export default blog;
