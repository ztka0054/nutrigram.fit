import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import { map, isEqual } from "lodash";

import useAuth from "../../../../../../hooks/useAuth";

import Icon from "../../../../../modules/Icons";
import Pagination from "../../../../../modules/Dashboard/Table/ElementPagination";
import getTagLang from "../../../../../../helper/i18n/getValueTagLang";
import ModalDelete from "../../../../../modules/Dashboard/Table/ModalDelete";

import TagLang from "../../../../../modules/GetTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import apiFood from "../../../../../../helper/core_services/endpoints/foods";

import style from "./table.module.scss";

function usePreviousValue(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function TableEquivalents() {
    const pageSize = 10;
    const router = useRouter();
    const { query, locale } = useRouter();
    const { auth } = useAuth();

    const [nameCategory, setNameCategory] = useState("");
    const [elements, setElements] = useState([]);
    const [selectDeleteId, setSelectDeleteId] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [activeModal, setActiveModal] = useState(false);
    const [activeRefresh, setActiveRefresh] = useState(false);
    const [params, setParams] = useState({
        page: 1,
        page_size: pageSize,
    });

    let lastParams = usePreviousValue(params);
    let lastpage = usePreviousValue(page);

    useEffect(() => {
        if (!router.isReady) return;
        GetCategory();
    }, [router.isReady]);

    const GetCategory = async () => {
        let result = await request(apiFood.get_food_category, null, [
            router.query.id,
        ]);
        if (result != null) {
            setNameCategory(result.name);
        }
    };

    useEffect(() => {
        if (!router.isReady && auth?.idNutritionist) return;
        SetValuesParam([{ name: "category", value: query.id, isAdd: true }]);
        // codes using router.query
    }, [router.isReady, auth]);

    const SetValuesParam = (values) => {
        let newParams = { ...params };
        map(values, (value) => {
            if (value.isAdd) newParams[value.name] = value.value;
            if (!value.isAdd) delete newParams[value.name];
        });
        setParams(newParams);
    };

    useEffect(() => {
        if (activeRefresh) {
            GetData();
            setActiveRefresh(false);
        }
    }, [activeRefresh]);

    useEffect(() => {
        if (lastParams != undefined)
            if (!isEqual(lastParams, params)) setActiveRefresh(true);
    }, [params]);

    useEffect(() => {
        if (lastpage != undefined)
            if (!isEqual(lastpage, page))
                SetValuesParam([{ name: "page", value: page, isAdd: true }]);
    }, [page]);

    const GetData = async () => {
        let req = await request(apiFood.get_food_equivalents, params, null, {
            locale,
        });
        if (req != null) {
            DrawElements(req);
            setTotal(req.page.count);
        }
    };

    const DrawElements = (info) => {
        let dataElements = [];
        dataElements = map(info.result, (element, i) => {
            let suggestedQuantity = null;
            let namedeUnit = null;
            if (element.defaultPortion != null) {
                suggestedQuantity = element.defaultPortion.suggestedQuantity;
                namedeUnit = element.defaultPortion.name;
            }
            return (
                <tr key={`food_${i}`}>
                    <td>{element.name}</td>
                    <td>
                        <div className="text-v">{suggestedQuantity}</div>
                    </td>
                    <td>
                        <div className="text-v">{namedeUnit}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.grossWeight}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.weight}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.calories}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.protein}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.lipids}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.carbohydrates}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.fiber}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.vitaminA}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.ascorbicAcid}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.folicAcid}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.hemIron}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.potassium}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.glycemicIndex}</div>
                    </td>
                    <td>
                        <div className="text-v">{element.glycemicLoad}</div>
                    </td>
                    <td>
                        {auth?.idNutritionist == element?.nutritionist && (
                            <>
                                <div
                                    className={`${style.contButton} ${style.success}`}>
                                    <button
                                        onClick={() => EditElement(element.id)}>
                                        Editar
                                    </button>
                                </div>
                                <div
                                    className={`${style.contButton} ${style.delete}`}>
                                    <button
                                        onClick={() =>
                                            ActiveDeleteElement(element.id)
                                        }>
                                        Eliminar
                                    </button>
                                </div>
                            </>
                        )}
                    </td>
                </tr>
            );
        });
        setElements(dataElements);
    };

    const Search = (e) => {
        let value = e.currentTarget.value;

        if (value != "")
            SetValuesParam([
                { name: "search", value, isAdd: true },
                { name: "page", value: 1, isAdd: true },
            ]);
        if (value == "")
            SetValuesParam([
                { name: "search", isAdd: false },
                { name: "page", value: 1, isAdd: true },
            ]);
    };

    const EditElement = (id) => {
        router.push(`/dashboard/equivalents/edit/${query.id}/${id}`);
    };

    const ActiveDeleteElement = (id) => {
        setSelectDeleteId(id);
        setActiveModal(true);
    };

    const toogleModal = () => {
        setActiveModal(!activeModal);
    };

    const DeleteElement = async () => {
        await request(apiFood.del_food_equivalent, null, [selectDeleteId], {
            locale,
        });
        setActiveModal(false);
        setSelectDeleteId(null);
        setPage(1);
        setActiveRefresh(true);
    };

    return (
        <>
            <ModalDelete
                flagModal={activeModal}
                toogleModalChild={toogleModal}
                functionButton={DeleteElement}
            />
            <div className="row sty-cont-option-1">
                <div className="col-12 col-md-6">
                    <h2>{nameCategory}</h2>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right sty-cont-search-1">
                    <div className="sty-search-input">
                        <div className="sty-cont-icon">
                            <Icon
                                className={"sty-icon"}
                                viewBox={"0 0 515.558 515.558"}
                                name="icon-search"
                            />
                        </div>
                        <input
                            placeholder={getTagLang("input", "search")}
                            type="text"
                            onChange={(e) => Search(e)}
                        />
                    </div>
                </div>
            </div>
            <div className={style.table_cont_style}>
                <div className={style.table_style}>
                    <table>
                        <thead className="sty-title">
                            <tr>
                                <th className="title">
                                    <TagLang
                                        group={"dashboard"}
                                        tag={"tab_1_ti_1"}
                                    />
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_1"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_2"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_3"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_4"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_5"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_6"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_7"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_8"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_9"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_10"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_11_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_11_2"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_12"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_13_1"}
                                        />
                                        <br />
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_13_2"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_14"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_15"}
                                        />
                                    </div>
                                </th>
                                <th className="feature">
                                    <div className="text-f">
                                        <TagLang
                                            group={"dashboard"}
                                            tag={"tab_1_col_16"}
                                        />
                                    </div>
                                </th>
                                <th className="title">
                                    <TagLang group={"input"} tag={"options"} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>{elements}</tbody>
                    </table>
                </div>
            </div>
            <div className="col-12 sty-all-pagination">
                <Pagination
                    pageSize={pageSize}
                    total={total}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    );
}
