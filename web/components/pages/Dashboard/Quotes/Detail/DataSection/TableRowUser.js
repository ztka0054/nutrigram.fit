import React from "react";

export default function CallapseRowUser({ row, customFunction }) {
    return (
        <tr>
            <td
                onClick={() =>
                    customFunction(row)
                }>{`${row.firstName} ${row.lastName}`}</td>
        </tr>
    );
}
