import { useState, useEffect, useRef } from "react";
import { map, isEqual } from "lodash";

import TagLang from "../../../../../modules/GetTagLang";
import Pagination from "../../../../../modules/Dashboard/Table/ElementPagination";
import InputSelect from "./InputSelectCategory";
import Icon from "../../../../../modules/Icons";
import Modal from "./ModalDetail";

import request from "../../../../../../helper/core_services/core/requestService";
import apiRecipe from "../../../../../../helper/core_services/endpoints/recipes";
import getTagLang from "../../../../../../helper/i18n/getValueTagLang";

import Rows from "./RowRecipes";

function usePreviousValue(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function TableIngredients({ SelectRecipe, daySelect }) {
    const pageSize = 10;

    const [selectCategory, setSelectCategory] = useState([]);
    const [dataRecipe, setDataRecipe] = useState(null);
    const [activeModal, setActiveModal] = useState(false);
    const [total, setTotal] = useState(1);
    const [params, setParams] = useState({ page: 1, page_size: pageSize });
    const [activeRefresh, setActiveRefresh] = useState(false);
    const [rows, setRows] = useState([]);

    let lastParams = usePreviousValue(params);

    useEffect(() => {
        (async () => {
            let result = await request(apiRecipe.get_categories);
            if (result != null) {
                setSelectCategory(result.result);
            }
        })();
    }, []);

    useEffect(() => {
        if (daySelect != null) setActiveRefresh(true);
    }, [daySelect]);

    const SetValuesParam = (values) => {
        let newParams = { ...params };
        map(values, (value) => {
            if (value.isAdd) newParams[value.name] = value.value;
            if (!value.isAdd) delete newParams[value.name];
        });
        setParams(newParams);
    };

    useEffect(() => {
        if (lastParams != undefined)
            if (!isEqual(lastParams, params)) setActiveRefresh(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    useEffect(() => {
        if (activeRefresh) {
            GetDataRecipes();
            setActiveRefresh(false);
        }
    }, [activeRefresh]);

    const GetDataRecipes = async () => {
        let result = await request(apiRecipe.get_recipes, params);
        if (result != null) {
            setTotal(result.page.count);
            let elements = map(result.result, (element) => {
                return (
                    <Rows
                        key={`recipe_${element.id}`}
                        row={element}
                        daySelect={daySelect}
                        SelectRecipe={SelectRecipe}
                        ClickSeeRecipe={ClickSeeRecipe}
                    />
                );
            });
            setRows(elements);
        }
    };

    const PutPage = (page) => {
        let params = [{ name: "page", value: page, isAdd: true }];
        SetValuesParam(params);
    };

    const ChangeCategory = (e) => {
        let value = e.currentTarget.value;
        let params = [{ name: "page", value: 1, isAdd: true }];
        params.push({ name: "categories", value, isAdd: true });
        SetValuesParam(params);
    };

    const WriteSearch = (e) => {
        let value = e.currentTarget.value;
        let params = [{ name: "page", value: 1, isAdd: true }];
        if (value != "") params.push({ name: "search", value, isAdd: true });
        if (value == "") params.push({ name: "search", isAdd: false });
        SetValuesParam(params);
    };

    useEffect(() => {
        if (activeModal) setActiveModal(false);
    }, [activeModal]);

    const ClickSeeRecipe = (row) => {
        setDataRecipe(row);
        setActiveModal(true);
    };

    return (
        <>
            <Modal activeModal={activeModal} dataRecipe={dataRecipe} />

            <div className="row sty-cont-option-1">
                <div className="col-12 col-md-6 text-center text-md-left">
                    <InputSelect
                        title={"category"}
                        elements={selectCategory}
                        onChange={ChangeCategory}
                    />
                </div>
                <div className="col-12 col-md-6 text-center text-md-right sty-cont-search-1 align-self-end">
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
                            onChange={(e) => WriteSearch(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="sty-content-data-1">
                <div className={`sty-card-title`}>
                    <TagLang group={"dashboard"} tag={"tit_menu_1_2"} />
                </div>
                <div className="sty-cont-table-1">
                    <table className="sty-table-1">
                        <thead>
                            <tr>
                                <th>
                                    <TagLang group={"input"} tag={"name"} />
                                </th>
                                <th>
                                    <TagLang group={"input"} tag={"options"} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
                <div className="col-12 sty-all-pagination">
                    <Pagination
                        pageSize={pageSize}
                        total={total}
                        page={params.page}
                        setPage={PutPage}
                    />
                </div>
            </div>
        </>
    );
}
