import React from "react";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";

import patients from "../../../../../../helper/core_services/endpoints/patients";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import Rows from "./CallapseRowUser";

export default function CollapseUsers({ SetUser }) {
    return (
        <div className="sty-content-data-1">
            <TablePag
                titles={[
                    GetLanguage("input", "name"),
                    GetLanguage("input", "last_appointment"),
                    GetLanguage("input", "email"),
                    GetLanguage("input", "options"),
                ]}
                titleTable={GetLanguage("dashboard", "tit_quote_1_1")}
                tagCount={GetLanguage("input", "patients")}
                pageSize={10}
                endpoint={patients.get_patients}
                Rows={Rows}
                customFunction={SetUser}
            />
        </div>
    );
}
