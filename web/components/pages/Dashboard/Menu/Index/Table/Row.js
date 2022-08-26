import React, { useState } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../hooks/useApp";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../helper/core_services/core/requestService";
import menu from "../../../../../../helper/core_services/endpoints/menu";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../helper/appearance/load";

const iconDelete = "/static/img/favicons/dashboard/delete_w.svg";

export default function Row({ row, UpdateTable }) {
    const router = useRouter();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);

    const ShowDetail = (id) => {
        router.push(`/dashboard/menus/detail/${id}`);
    };

    const ShowModal = (id) => {
        toogleModal();
        setIdElement(id);
    };

    const DeleteRow = async () => {
        toogleModal();
        loadElement(true);
        let req = await request(menu.delete_menu, {}, [idElement], {
            locale,
        });
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
            <tr>
                <td onClick={() => ShowDetail(row.id)}>{row.name}</td>
                <td>
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
