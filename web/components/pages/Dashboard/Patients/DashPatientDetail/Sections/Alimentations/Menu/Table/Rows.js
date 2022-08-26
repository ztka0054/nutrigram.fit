import React, { useState } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../../../../hooks/useApp";
import ModalDelete from "../../../../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../../../../helper/core_services/core/requestService";
import blog from "../../../../../../../../../helper/core_services/endpoints/blog";
import GetLanguage from "../../../../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../../../../helper/appearance/load";

export default function Rows({ row, UpdateTable, customFunction, values }) {
    const router = useRouter();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);

    const ShowDetail = (id) => {
        router.push(`/dashboard/blogs/detail/${id}`);
    };

    const ShowModal = (id) => {
        toogleModal();
        setIdElement(id);
    };

    const DeleteRow = async () => {
        toogleModal();
        loadElement(true);
        let req = await request(blog.delete_blog, {}, [idElement], {
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
                <td>{row.name}</td>
                <td>
                    <button
                        className="sty-button-table-1 color-1"
                        type="button"
                        onClick={() => customFunction(row, values.selectMeals)}>
                        <div className="sty-icon">
                            <img src="/static/img/favicons/dashboard/edit.svg" />
                        </div>
                        <div className="sty-tag">
                            {GetLanguage("button", "choose")}
                        </div>
                    </button>
                </td>
            </tr>
            {/* <ModalDelete
                flagModal={flagModal}
                toogleModalChild={toogleModal}
                functionButton={DeleteRow}
            /> */}
        </>
    );
}
