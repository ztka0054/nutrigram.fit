import React, { useState, useEffect } from "react";

import TagLang from "../../../../../modules/GetTagLang";
import SetLink from "../../../../../modules/SetLink";

import patients from "../../../../../../helper/core_services/endpoints/patients";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";

export default function Table({ flagAddPatient }) {
    const [elementTable, setElementTable] = useState(<></>);

    useEffect(() => {
        if (flagAddPatient) setElementTable(elementTitle());
    }, [flagAddPatient]);

    const elementTitle = () => {
        return (
            <SetLink route={"/dashboard/patients/new"}>
                <button className="sty-button-dash-1">
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/add_w.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"button"} tag={"tag_d_add_patient"} />
                    </div>
                </button>
            </SetLink>
        );
    };

    return (
        <TablePag
            titles={[
                <TagLang group={"input"} tag={"name"} />,
                <TagLang group={"input"} tag={"birth"} />,
                <TagLang group={"input"} tag={"email"} />,
                <TagLang group={"input"} tag={"phone"} />,
                <TagLang group={"input"} tag={"last_consultation"} />,
                <TagLang group={"input"} tag={"next_consultation"} />,
            ]}
            titleTable={<TagLang group={"dashboard"} tag={"tit_pacient_1_1"} />}
            tagCount={<TagLang group={"input"} tag={"posts"} />}
            pageSize={20}
            elementTitle={elementTable}
            endpoint={patients.get_patients}
            Rows={Rows}
        />
    );
}
