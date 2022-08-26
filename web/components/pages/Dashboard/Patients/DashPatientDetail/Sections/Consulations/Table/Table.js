import React from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../../../helper/i18n/getValueTagLang";
import consulation from "../../../../../../../../helper/core_services/endpoints/consulation";

import TablePag from "../../../../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./Rows";

const titlesTag = [
    <TagLang group={"input"} tag={"date"} />,
    <TagLang group={"input"} tag={"diet_1"} />,
];

export default function Table({ ShowFormConsult }) {
    const { query } = useRouter();

    const elementTitle = (
        <button className="sty-button-dash-1" onClick={() => ShowFormConsult()}>
            <div className="sty-icon">
                <img src="/static/img/favicons/app/add_w.svg" />
            </div>
            <div className="sty-tag">
                <TagLang group={"button"} tag={"tag_d_add_consulation"} />
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
                    titleTable={
                        <TagLang group={"dashboard"} tag={"tit_pacient_2_2"} />
                    }
                    tagCount={<TagLang group={"input"} tag={"consulations"} />}
                    pageSize={20}
                    elementTitle={elementTitle}
                    endpoint={consulation.get_consulations}
                    ids={[query.id]}
                    Rows={Rows}
                    customFunction={SelectConsulation}
                    showSearch={false}
                    params={{ ordering: "-datetime" }}
                />
            )}
        </>
    );
}
