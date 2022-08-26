import React, { useState, useEffect } from "react";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

export default function SubEquivalentRow({ row, customFunction }) {
    const { locale } = useApp();
    const [name, setName] = useState("");

    useEffect(() => {
        if (locale == "es") setName(row.name["es"]);
        if (locale == "en") setName(row.name["en-us"]);
    }, [locale]);

    return (
        <tr>
            <td>{name}</td>
            <td>
                <button
                    className="sty-button-table-1 color-1"
                    type="button"
                    onClick={() => customFunction(row)}>
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
