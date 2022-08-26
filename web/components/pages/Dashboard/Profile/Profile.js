import React from "react";

import TagLang from "../../../modules/GetTagLang";

import Form from "./FormProfile";

export default function Profile() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_profile"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form />
            </div>
        </div>
    );
}
