import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useAuth from "../../../../../../hooks/useAuth";
import useApp from "../../../../../../hooks/useApp";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import recipe from "../../../../../../helper/core_services/endpoints/recipes";
import { loadElement } from "../../../../../../helper/appearance/load";

const iconEdit = "/static/img/favicons/dashboard/edit_w.svg";
const iconDelete = "/static/img/favicons/dashboard/delete_w.svg";

export default function Rows({ row, values, UpdateTable }) {
    const router = useRouter();
    const { auth } = useAuth();
    const { locale } = useApp();
    const [flagModal, setFlagModal] = useState(false);
    const [idElement, setIdElement] = useState(null);
    const [name, setName] = useState("");
    const [flagOptions, setFlagOptions] = useState(false);

    useEffect(() => {
        if (locale == "en") setName(row.name["en-us"]);
        if (locale == "es") setName(row.name["es"]);
    }, [locale, row]);

    useEffect(() => {
        if (`${row.nutritionist}` === `${auth.idNutritionist}`)
            setFlagOptions(true);
        else setFlagOptions(false);
    }, [row, auth]);

    const ShowDetail = (id) => {
        router.push(`/dashboard/recipes/detail/1/${values.category}/${id}`);
    };

    const ShowModal = (id) => {
        toogleModal();
        setIdElement(id);
    };

    const DeleteRow = async () => {
        toogleModal();
        loadElement(true);
        let req = await request(recipe.delete_recipes, {}, [idElement], {
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
                <td>{name}</td>
                <td>
                    {!flagOptions && (
                        <button
                            className="sty-button-table-1 color-1 margin-1"
                            onClick={() => ShowDetail(row.id)}>
                            <div className="sty-tag">
                                <TagLang group={"button"} tag={"see"} />
                            </div>
                        </button>
                    )}
                    {flagOptions && (
                        <>
                            <button
                                className="sty-button-table-1 color-1 margin-1"
                                onClick={() => ShowDetail(row.id)}>
                                <div className="sty-icon">
                                    <img src={iconEdit} />
                                </div>
                                <div className="sty-tag">
                                    <TagLang group={"button"} tag={"edit"} />
                                </div>
                            </button>
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
                        </>
                    )}
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
