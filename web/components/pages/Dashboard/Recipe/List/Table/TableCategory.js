import React from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../modules/GetTagLang";
import SetLink from "../../../../../modules/SetLink";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import recipe from "../../../../../../helper/core_services/endpoints/recipes";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./RowsCategory";

export default function Table() {
    const { query } = useRouter();

    const elementTitle = (
        <SetLink route={`/dashboard/recipes/new/${1}/${query.id}`}>
            <button className="sty-button-dash-1">
                <div className="sty-icon">
                    <img src="/static/img/favicons/app/add_w.svg" />
                </div>
                <div className="sty-tag">
                    <TagLang group={"button"} tag={"add"} />
                </div>
            </button>
        </SetLink>
    );

    return (
        <>
            {query?.id && (
                <TablePag
                    titles={[
                        GetLanguage("input", "name"),
                        GetLanguage("input", "options"),
                    ]}
                    titleTable={GetLanguage("dashboard", "tit_recipe_1_2")}
                    tagCount={GetLanguage("input", "recipes")}
                    pageSize={10}
                    elementTitle={elementTitle}
                    endpoint={recipe.get_recipes}
                    Rows={Rows}
                    params={{ categories: query.id }}
                    values={{ category: query.id }}
                />
            )}
        </>
    );
}
