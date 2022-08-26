import React from "react";

import SetLink from "../../../../../modules/SetLink";
import TagLang from "../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import blog from "../../../../../../helper/core_services/endpoints/blog";

import TablePag from "../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";

const titlesTag = [
    <TagLang group={"input"} tag={"name"} />,
    <TagLang group={"input"} tag={"date"} />,
    <TagLang group={"input"} tag={"options"} />,
];

export default function Table() {
    const elementTitle = (
        <SetLink route={"/dashboard/blogs/new"}>
            <button className="sty-button-dash-1">
                <div className="sty-icon">
                    <img src="/static/img/favicons/app/add_w.svg" />
                </div>
                <div className="sty-tag">{GetLanguage("button", "add")}</div>
            </button>
        </SetLink>
    );

    return (
        <TablePag
            titles={titlesTag}
            titleTable={GetLanguage("dashboard", "tit_blog_1_1")}
            tagCount={GetLanguage("input", "posts")}
            pageSize={20}
            elementTitle={elementTitle}
            endpoint={blog.get_blogs}
            Rows={Rows}
        />
    );
}
