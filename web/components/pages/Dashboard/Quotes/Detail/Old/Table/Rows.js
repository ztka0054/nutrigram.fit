import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../helper/core_services/core/requestService";
import appoinments from "../../../../../../helper/core_services/endpoints/appointments";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../helper/appearance/load";
import fixDate from "../../../../../../helper/date/fixDateTimeService";
import addDuration from "../../../../../../helper/date/addDurationDateTime";

const iconEdit = "/static/img/favicons/dashboard/edit_w.svg";
const iconDelete = "/static/img/favicons/dashboard/delete_w.svg";

export default function Rows({
    row,
    UpdateTable,
    customFunction,
    customFunction2,
}) {
    const router = useRouter();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);

    const [hourStart, setHourStart] = useState(null);
    const [hourEnd, setHourEnd] = useState(null);

    const ShowDetail = (row) => {
        customFunction(row);
        // router.push(`/dashboard/blogs/detail/${id}`);
    };

    useEffect(() => {
        let start = fixDate(row.datetime);
        let end = addDuration(row.datetime, row.duration);
        setHourStart(start.format(`HH:mm`));
        setHourEnd(end.format(`HH:mm`));
    }, []);

    const ShowModal = (id) => {
        toogleModal();
        setIdElement(id);
    };

    const DeleteRow = async () => {
        toogleModal();
        loadElement(true);
        let req = await request(
            appoinments.delete_appointment,
            {},
            [idElement],
            {
                locale,
            }
        );
        loadElement(false);
        if (req != null) {
            UpdateTable();
            UpdateTable();
            customFunction2(true);
            customFunction2(true);
        }
    };

    const toogleModal = () => {
        setFlagModal(!flagModal);
    };

    return (
        <>
            <tr>
                <td>
                    {row?.patient?.firstName} {row?.patient?.lastName}
                </td>
                <td>
                    {hourStart} - {hourEnd}
                </td>
                <td>
                    <button
                        className="sty-button-table-1 color-1 margin-1"
                        onClick={() => ShowDetail(row)}>
                        <div className="sty-icon">
                            <img src={iconEdit} />
                        </div>
                        <div className="sty-tag">
                            {GetLanguage("button", "edit")}
                        </div>
                    </button>
                    <button
                        className="sty-button-table-1 color-2"
                        onClick={() => ShowModal(row.id)}>
                        <div className="sty-icon">
                            <img src={iconDelete} />
                        </div>
                        <div className="sty-tag">
                            {GetLanguage("button", "delete")}
                        </div>
                    </button>
                </td>
            </tr>
            <ModalDelete
                flagModal={flagModal}
                toogleModalChild={toogleModal}
                functionButton={DeleteRow}
            />
        </>
    );
}
