import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../modules/GetTagLang";

export default function RowRecipes({
    row,
    daySelect,
    SelectRecipe,
    ClickSeeRecipe,
}) {
    const router = useRouter();

    const [tagName, setTagName] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        if (router.locale == "es") setTagName(row.name["es"]);
        if (router.locale == "en") setTagName(row.name["en-us"]);
    }, [router, row]);

    return (
        <tr>
            <td>{tagName}</td>
            <td>
                <button
                    className="sty-button-table-1 color-1 margin-1"
                    type="button"
                    onClick={() => ClickSeeRecipe(row)}>
                    <div className="sty-tag">
                        <TagLang group={"button"} tag={"see"} />
                    </div>
                </button>
                <button
                    className="sty-button-table-1 color-1"
                    type="button"
                    onClick={() => SelectRecipe(row, daySelect)}>
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
