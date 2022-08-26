import React from "react";

import TagLang from "../../../../modules/GetTagLang";

import Table from "./Table";

export default function Data() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_euivalent_2_1"} />
            </div>
            <div className="margin-top-2">
                <Table />
            </div>
        </div>
    );
}
