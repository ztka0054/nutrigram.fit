import React from "react";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";

import patients from "../../../../../../helper/core_services/endpoints/patients";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import Rows from "./TableRowUser";

export default function TableUsers({ setSelectUser, setViewState }) {
    const PutUser = (row) => {
        setSelectUser(row);
        setViewState(1);
    };

    return (
        <div className={"sty-dashboard"}>
            <TablePag
                titles={[GetLanguage("input", "name")]}
                titleTable={GetLanguage("dashboard", "tit_quote_1_1")}
                tagCount={GetLanguage("input", "patients")}
                pageSize={5}
                endpoint={patients.get_patients}
                Rows={Rows}
                customFunction={PutUser}
            />
        </div>
    );
}
