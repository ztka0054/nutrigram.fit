import React from "react";

import TagLang from "../../../../../../../modules/GetTagLang";

import Form from "./FormHydratation";

export default function Hydratation({ ShowData }) {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_pacient_2_9"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form ShowData={ShowData} />
            </div>
        </div>
    );
}
