import React from "react";

import SetLink from "../../../../../modules/SetLink";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import appointments from "../../../../../../helper/core_services/endpoints/appointments";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";
import moment from "moment";

export default function Table({
    titleTable,
    selectDate = null,
    ShowEdit,
    putChangeQuotes,
}) {
    return (
        <>
            {selectDate != null && (
                <TablePag
                    showSearch={false}
                    titles={[
                        GetLanguage("input", "patient"),
                        GetLanguage("input", "schedule"),
                        GetLanguage("input", "options"),
                    ]}
                    titleTable={titleTable}
                    tagCount={GetLanguage("input", "posts")}
                    pageSize={10}
                    endpoint={appointments.get_appointments}
                    params={{
                        datetime__gte: `${moment(selectDate).format(
                            "YYYY-MM-DD"
                        )}T00:00`,
                        datetime__lt: `${moment(selectDate).format(
                            "YYYY-MM-DD"
                        )}T23:59`,
                    }}
                    Rows={Rows}
                    customFunction={ShowEdit}
                    customFunction2={putChangeQuotes}
                />
            )}
        </>
    );
}
