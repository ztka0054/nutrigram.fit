import React, { useState } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../helper/core_services/core/requestService";
import blog from "../../../../../../helper/core_services/endpoints/blog";
import { loadElement } from "../../../../../../helper/appearance/load";
import fixDate from "../../../../../../helper/date/fixDateTimeService";

const iconDelete = "/static/img/favicons/dashboard/delete_w.svg";

export default function Rows({ row, UpdateTable }) {
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
                <td onClick={(e) => ShowDetail(row.id)}>{row.title}</td>
                <td onClick={(e) => ShowDetail(row.id)}>
                    {fixDate(row.created)
                        .locale(locale)
                        .format("DD MMMM, YYYY")}
                </td>
                <td>
                    <button
                        className="sty-button-table-1 color-2"
                        onClick={() => ShowModal(row.id)}>
                        <div className="sty-icon">
                            <img src={iconDelete} />
                        </div>
                        <div className="sty-tag">
                            <TagLang group={"button"} tag={"delete"} />
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
