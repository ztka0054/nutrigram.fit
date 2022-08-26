import React from "react";

import Form from "./FormMenu";

export default function Menu({ ShowData }) {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">{"Asignación de Menú"}</div>
            <div className="col-12 sty-cont-form-1">
                <Form ShowData={ShowData} />
            </div>
        </div>
    );
}
