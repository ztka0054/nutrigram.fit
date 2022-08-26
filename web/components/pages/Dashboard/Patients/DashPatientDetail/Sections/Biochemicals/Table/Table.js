import React from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../../../helper/i18n/getValueTagLang";
import consulation from "../../../../../../../../helper/core_services/endpoints/consulation";

import TablePag from "../../../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";

const titlesTag = [
    <TagLang group={"input"} tag={"name"} />,
    <TagLang group={"input"} tag={"date"} />,
    <TagLang group={"input"} tag={"options"} />,
];

export default function Table({ ShowFormBiochemical }) {
    const { query } = useRouter();

    const elementTitle = (
        <button
            className="sty-button-dash-1"
            onClick={() => ShowFormBiochemical()}
        >
            <div className="sty-icon">
                <img src="/static/img/favicons/app/add_w.svg" />
            </div>
            <div className="sty-tag">
                <TagLang group={"button"} tag={"tag_d_add_study"} />
            </div>
        </button>
    );

    const SelectConsulation = (id) => {
        ShowFormConsult(id);
    };

    return (
        <>
            {query?.id && (
                <TablePag
                    titles={titlesTag}
                    titleTable={<TagLang group={"dashboard"} tag={"studies"} />}
                    tagCount={<TagLang group={"input"} tag={"studies_"} />}
                    pageSize={20}
                    elementTitle={elementTitle}
                    endpoint={consulation.get_analisys}
                    ids={[query.id]}
                    Rows={Rows}
                    customFunction={SelectConsulation}
                    showSearch={false}
                />
            )}
        </>
    );
}
