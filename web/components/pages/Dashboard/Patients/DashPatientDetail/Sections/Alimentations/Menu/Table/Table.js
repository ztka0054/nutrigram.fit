import React from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../../../../helper/i18n/getValueTagLang";
import menu from "../../../../../../../../../helper/core_services/endpoints/menu";

import TablePag from "../../../../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";

const titlesTag = [
    <TagLang group={"input"} tag={"name"} />,
    <TagLang group={"input"} tag={"options"} />,
];

export default function Table({ values, SelectMenu }) {
    const { query } = useRouter();

    const CustomFunction = (row, selectMeals) => {
        SelectMenu(row, selectMeals);
    };

    return (
        <>
            {query?.id && (
                <TablePag
                    titles={titlesTag}
                    titleTable={
                        <TagLang group={"dashboard"} tag={"tit_menu_1_1"} />
                    }
                    tagCount={<TagLang group={"input"} tag={"menus"} />}
                    pageSize={20}
                    endpoint={menu.get_menus}
                    Rows={Rows}
                    customFunction={CustomFunction}
                    values={values}
                />
            )}
        </>
    );
}
