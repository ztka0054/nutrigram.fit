import React, { useState, useEffect } from "react";

import SetLink from "../../../../../modules/SetLink";
import TagLang from "../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";
import menu from "../../../../../../helper/core_services/endpoints/menu";
import Rows from "./Row";

const titlesTag = [
    <TagLang group={"input"} tag={"name"} />,
    <TagLang group={"input"} tag={"options"} />,
];

export default function Table() {
    const elementTitle = (
        <SetLink route={"/dashboard/menus/new"}>
            <button className="sty-button-dash-1">
                <div className="sty-icon">
                    <img src="/static/img/favicons/app/add_w.svg" />
                </div>
                <div className="sty-tag">
                    {GetLanguage("button", "tag_d_add_menu")}
                </div>
            </button>
        </SetLink>
    );

    return (
        <TablePag
            titles={titlesTag}
            titleTable={<TagLang group={"dashboard"} tag={"tit_menu_1_1"} />}
            tagCount={<TagLang group={"input"} tag={"menus"} />}
            pageSize={20}
            elementTitle={elementTitle}
            endpoint={menu.get_menus}
            Rows={Rows}
        />
    );
}
