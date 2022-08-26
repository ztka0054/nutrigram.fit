import React, { useState, useEffect } from "react";
import { map } from "lodash";

import useApp from "../../../../hooks/useApp";
import Icon from "../../../modules/Icons";

import getTagLang from "../../../../helper/i18n/getValueTagLang";
import request from "../../../../helper/core_services/core/requestService";

import Pagination from "./ElementPagination";

export default function TablePagination(props) {
    const { locale } = useApp();
    const { elementTitle, titleTable, tagCount, classCustomTitle } = props;
    const { pageSize = 20, titles, Rows, endpoint, params, ids = null } = props;
    const { customFunction, customFunction2, values } = props;
    const { showSearch = true } = props;
    const [titlesTable, setTitlesTable] = useState([]);
    const [search, setSearch] = useState("");

    const [pageRequest, setPageRequest] = useState(1);
    const [dataTable, setDataTable] = useState([]);
    const [totalEntries, setTotalEntries] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [flagRefresh, setFlagRefresh] = useState(false);

    useEffect(() => {
        DrawTitleTable();
    }, []);

    useEffect(() => {
        if (locale) if (pageRequest != 0) GetDataTable();
    }, [locale, params, pageRequest, values]);

    useEffect(() => {
        if (pageRequest == 0) setPageRequest(1);
    }, [pageRequest]);

    useEffect(() => {
        if (flagRefresh) {
            setPageRequest(0);
            setFlagRefresh(false);
        }
    }, [flagRefresh]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageRequest(0);
        }, 200);
        return () => clearTimeout(timer);
    }, [search]);

    const DrawTitleTable = () => {
        let titlesTable = map(titles, (element, i) => {
            return <th key={`cell_${i}`}>{element}</th>;
        });
        setTitlesTable(titlesTable);
    };

    const GetDataTable = async () => {
        let paramsReq = {};
        if (params != null) paramsReq = { ...params };
        paramsReq.page_size = pageSize;
        paramsReq.page = pageRequest;
        if (search != "") paramsReq.search = search;
        let req = await request(
            endpoint,
            paramsReq,
            ids,
            {
                locale,
            },
            true,
            false
        );
        if (req != null) {
            DrawTable(req);
            setTotalEntries(req.page.count);
            setTotalPages(Math.ceil(req.page.count / pageSize));
        }
    };

    const DrawTable = async (info) => {
        let dataTable = map(info.result, (row, index) => {
            return (
                <Rows
                    key={`row_table_${index}`}
                    row={row}
                    UpdateTable={UpdateTable}
                    index={index}
                    customFunction={customFunction}
                    customFunction2={customFunction2}
                    values={values}
                />
            );
        });
        if (dataTable.length == 0)
            dataTable = (
                <tr>
                    <td className="sty-notResult" colSpan={titles.length}>
                        {getTagLang("input", "table_empty")}
                    </td>
                </tr>
            );
        setDataTable(dataTable);
    };

    const UpdateTable = () => {
        setFlagRefresh(true);
    };

    const Search = (e) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <>
            <div className="row sty-cont-option-1">
                <div className="col-12 col-md-6 text-center text-md-left">
                    {elementTitle}
                </div>
                {showSearch == true && (
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
                )}
            </div>
            <div className="sty-content-data-1">
                <div className={`sty-card-title ${classCustomTitle}`}>
                    {titleTable}
                </div>
                <div className="sty-cont-table-1">
                    <table className="sty-table-1">
                        <thead>
                            <tr>{titlesTable}</tr>
                        </thead>
                        <tbody>{dataTable}</tbody>
                    </table>
                </div>
                <div className="col-12 sty-all-pagination">
                    <Pagination
                        pageSize={pageSize}
                        total={totalEntries}
                        page={pageRequest}
                        setPage={setPageRequest}
                    />
                </div>
            </div>
        </>
    );
}
