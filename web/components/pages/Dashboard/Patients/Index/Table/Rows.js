import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { size } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";

import request from "../../../../../../helper/core_services/core/requestService";
import blog from "../../../../../../helper/core_services/endpoints/blog";
import consulation from "../../../../../../helper/core_services/endpoints/consulation";
import { loadElement } from "../../../../../../helper/appearance/load";
import fixDate from "../../../../../../helper/date/fixDateTimeService";

export default function Rows({ row, UpdateTable }) {
    const router = useRouter();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);
    const [datePast, setDatePast] = useState(null);
    const [dateNext, setDateNExt] = useState(null);

    useEffect(() => {
        getPastConsulation();
    }, []);

    useEffect(() => {
        getNextConsulation();
    }, []);

    const getPastConsulation = async () => {
        let reqLast = await request(
            consulation.get_consulations,
            {
                ordering: "-datetime",
                datetime__lte: `${moment().format("YYYY-MM-DDTHH:MM:ss")}`,
                page_size: 1,
            },
            [row.id],
            {
                locale,
            }
        );
        if (reqLast != null)
            if (size(reqLast.result) > 0)
                setDatePast(
                    fixDate(reqLast.result[0].datetime).format("YYYY-MM-DD")
                );
    };

    const getNextConsulation = async () => {
        let reqLast = await request(
            consulation.get_consulations,
            {
                ordering: "datetime",
                datetime__gte: `${moment().format("YYYY-MM-DDTHH:MM:ss")}`,
                page_size: 1,
            },
            [row.id],
            {
                locale,
            }
        );
        if (reqLast != null)
            if (size(reqLast.result) > 0)
                setDateNExt(
                    fixDate(reqLast.result[0].datetime).format("YYYY-MM-DD")
                );
    };

    const ShowDetail = (id) => {
        router.push(`/dashboard/patients/detail/${id}`);
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
            <tr onClick={() => ShowDetail(row.id)}>
                <td>{`${row.firstName} ${row.lastName}`}</td>
                <td>{row.birthday}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{datePast}</td>
                <td>{dateNext}</td>
            </tr>
            <ModalDelete
                flagModal={flagModal}
                toogleModalChild={toogleModal}
                functionButton={DeleteRow}
            />
        </>
    );
}
