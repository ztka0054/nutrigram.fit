import React from "react";

import TagLang from "../../../../modules/GetTagLang";

import Form from "./NewForm";

export default function New() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"button"} tag={"tag_new_equivalent"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form />
            </div>
        </div>
    );
}
