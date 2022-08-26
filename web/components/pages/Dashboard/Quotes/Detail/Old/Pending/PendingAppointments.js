import React, { useState, useEffect } from "react";
import { map } from "lodash";

import ElementPending from "./ElementPending";

export default function PendingAppointments({
    pendingChange,
    putChangeQuotes,
}) {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        DrawElements();
    }, [pendingChange]);

    const DrawElements = () => {
        let elements = map(pendingChange, (element, index) => {
            if (element.suggestedDatetime != null)
                return (
                    <ElementPending
                        element={element}
                        key={`element_${index}`}
                        putChangeQuotes={putChangeQuotes}
                    />
                );
        });
        setElements(elements);
    };

    return <>{elements}</>;
}
