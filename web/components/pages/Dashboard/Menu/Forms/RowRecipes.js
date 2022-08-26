import React, { useState, useEffect } from "react";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

export default function RowRecipes({ row, customFunction, values }) {
    const { locale } = useApp();
    const [tagName, setTagName] = useState(null);

    useEffect(() => {
        if (locale == "es") setTagName(row.name["es"]);
        if (locale == "en") setTagName(row.name["en-us"]);
    }, [locale, row]);

    return (
        <tr>
            <td>{tagName}</td>
            <td>
                <button
                    className="sty-button-table-1 color-1"
                    type="button"
                    onClick={() => customFunction(row, values.daySelect)}>
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
