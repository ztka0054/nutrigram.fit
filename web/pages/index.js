import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../components/pages/Home";
// import GetAgent from "../helper/initialProps/agent";

function index({}) {
    return (
        <BasicLayout header={{}}>
            <Home />
        </BasicLayout>
    );
}

// index.getInitialProps = async (ctx) => {
//     return { ...GetAgent(ctx) };
// };

export default index;
