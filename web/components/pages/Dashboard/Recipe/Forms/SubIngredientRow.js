import TagLang from "../../../../modules/GetTagLang";

export default function SubIngredientRow({ row, customFunction }) {
    return (
        <tr>
            <td>{row.name}</td>
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
