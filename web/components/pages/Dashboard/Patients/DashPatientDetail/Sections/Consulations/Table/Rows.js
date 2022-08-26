import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../../../hooks/useApp";
import ModalDelete from "../../../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../../../helper/core_services/core/requestService";
import apiMenu from "../../../../../../../../helper/core_services/endpoints/menu";
import apiConsulation from "../../../../../../../../helper/core_services/endpoints/consulation";
import fixDate from "../../../../../../../../helper/date/fixDateTimeService";

export default function Rows({ row, UpdateTable, customFunction }) {
    const router = useRouter();
    const { query, locale } = router;
    const [dateElement, setDateElement] = useState(null);
    const [nameMenu, setNameMenu] = useState(null);

    useEffect(() => {
        setDateElement(
            fixDate(row.datetime).locale(locale).format("DD MMMM, YYYY")
        );
    }, [locale]);

    useEffect(() => {
        if (locale) GetMenu();
    }, [row, locale]);

    const GetMenu = async () => {
        let reqConsulation = await request(
            apiConsulation.get_consulation,
            null,
            [query.id, row.id],
            { locale }
        );
        if (reqConsulation != null) {
            if (reqConsulation?.patientMenu) {
                let reqPatientMenu = await request(
                    apiMenu.get_menu_patient,
                    null,
                    [reqConsulation.patientMenu],
                    { locale }
                );
                if (reqPatientMenu != null) {
                    let resultMenu = await request(
                        apiMenu.get_menu,
                        null,
                        [reqPatientMenu.menu],
                        { locale }
                    );
                    if (resultMenu != null) {
                        setNameMenu(resultMenu?.name);
                    }
                }
            }
        }
    };

    return (
        <>
            <tr onClick={() => customFunction(row.id)}>
                <td>{dateElement}</td>
                <td>{nameMenu}</td>
            </tr>
        </>
    );
}
