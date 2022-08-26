import React from "react";

import TagLang from "../../../../../modules/GetTagLang";

export default function CallapseRowUser({ row, customFunction }) {
    return (
        <tr>
            <td>{`${row.firstName} ${row.lastName}`}</td>
            <td>{row.birthday}</td>
            <td>{row.email}</td>
            <td>
                <button
                    className="sty-button-table-1 color-1"
                    onClick={() => customFunction(row)}
                >
                    <div className="sty-icon">
                        <img src="/static/img/favicons/dashboard/edit.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"button"} tag={"choose"} />
                    </div>
                </button>
            </td>
        </tr>
    );
}
