import React from "react";

import TagLang from "../../../../../components/modules/GetTagLang";

import Form from "../Forms/FormMenu";

export default function New() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"input"} tag={"menu"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form />
            </div>
        </div>
    );
}
