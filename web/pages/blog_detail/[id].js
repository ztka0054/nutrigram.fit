import React from "react";
import BasicLayout from "../../layouts/BasicLayout";

import EntryBlog from "../../components/pages/BlogDetail";

function entry() {
    return (
        <BasicLayout header={{ title: "Blog" }}>
            <EntryBlog />
        </BasicLayout>
    );
}

export default entry;
