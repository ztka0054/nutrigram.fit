import React from "react";

import TagLang from "../../../../../../../modules/GetTagLang";

import Form from "./FormBiochemical";

export default function index({ ShowBiomedical }) {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_pacient_2_6"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form ShowBiomedical={ShowBiomedical} />
            </div>
        </div>
    );
}
