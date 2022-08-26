import React, { useState, useEffect } from "react";

import TagLang from "../../../../modules/GetTagLang";

export default function SubEquivalentRow({ row, customFunction, values }) {
    const [equivalent, setEquivalent] = useState(null);
    const [quantity, setQuantity] = useState(null);

    useEffect(() => {
        SetValues();
    }, [row]);

    const SetValues = () => {
        if (row.defaultPortion != null)
            if (row.defaultPortion.suggestedQuantity != null) {
                let equivalent = `${(
                    (values.quantity / values.suggested) *
                    row.defaultPortion.suggestedQuantity
                ).toFixed(2)}`;
                let quantity = `${row.defaultPortion.name}`;
                setEquivalent(equivalent);
                setQuantity(quantity);
            }
    };

    return (
        <tr>
            <td>{row.name}</td>
            <td>{equivalent}</td>
            <td>{quantity}</td>
            <td>{row.calories}</td>
            <td>{row.protein}</td>
            <td>{row.lipids}</td>
            <td>
                <button
                    className="sty-button-table-1 color-1"
                    type="button"
                    onClick={() => customFunction(row, equivalent)}
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
