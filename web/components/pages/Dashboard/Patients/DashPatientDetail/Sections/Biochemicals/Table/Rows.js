import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../../../hooks/useApp";
import ModalDelete from "../../../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../../../helper/core_services/core/requestService";
import apiConsulation from "../../../../../../../../helper/core_services/endpoints/consulation";
import GetLanguage from "../../../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../../../helper/appearance/load";
import fixDate from "../../../../../../../../helper/date/fixDateTimeService";

const iconDelete = "/static/img/favicons/dashboard/delete_w.svg";

export default function Rows({ row, UpdateTable, customFunction }) {
    const router = useRouter();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);
    const [dateElement, setDateElement] = useState(null);

    useEffect(() => {
        setDateElement(
            fixDate(row.datetime).locale(locale).format("DD MMMM, YYYY")
        );
    }, [locale]);

    const ShowModal = (id) => {
        toogleModal();
        setIdElement(id);
    };

    const DeleteRow = async () => {
        toogleModal();
        loadElement(true);
        let req = await request(
            apiConsulation.delete_single_analysis,
            null,
            [router.query.id, row.id],
            {
                locale,
            },
            false
        );
        loadElement(false);
        if (req != null) {
            UpdateTable();
        }
    };

    const toogleModal = () => {
        setFlagModal(!flagModal);
    };

    return (
        <>
            <tr
            // onClick={(e) => customFunction(row.id)}
            >
                <td>{row.name}</td>
                <td>{dateElement}</td>
                <td>
                    <a target="blank" href={row.document}>
                        <button className="sty-button-table-1 color-1 margin-1">
                            <div className="sty-tag">
                                {GetLanguage("button", "see")}
                            </div>
                        </button>
                    </a>
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
