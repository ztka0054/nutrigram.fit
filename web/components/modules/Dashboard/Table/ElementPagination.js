import { useState, useEffect } from "react";
import { map } from "lodash";

import TagLang from "../../../modules/GetTagLang";

export default function Pagination({ pageSize, total, page, setPage }) {
    const maxSize = 5;
    const limit = 2;
    const [numberPages, setNumberPages] = useState(0);
    const [arrayNumbers, setArrayNumbers] = useState([]);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        let totalPages = total / pageSize;
        setNumberPages(Math.ceil(totalPages));
    }, [total, pageSize]);

    useEffect(() => {
        if (numberPages != 0) {
            if (numberPages <= maxSize) DrawNumbersSize();
            else DrawNumbersNoSize();
        }
    }, [numberPages, page]);

    useEffect(() => {
        let elements = map(arrayNumbers, (element, index) => {
            let flag = element == page;
            return (
                <div
                    key={`number_${index}`}
                    className={`${
                        page == element ? "sty-pag-ele" : "sty-pag-points"
                    } ${flag ? "sty-select" : ""}`}
                    onClick={() => {
                        setPage(element);
                    }}>
                    {element}
                </div>
            );
        });
        setElements(elements);
    }, [arrayNumbers]);

    const DrawNumbersSize = () => {
        let numbers = [];
        for (let index = 1; index <= numberPages; index++) {
            numbers.push(index);
        }
        setArrayNumbers(numbers);
    };

    const DrawNumbersNoSize = () => {
        let numbers = [];
        if (page <= limit)
            for (let index = 1; index <= maxSize; index++) {
                numbers.push(index);
            }
        if (page > limit && page <= numberPages - limit)
            for (let index = page - limit; index <= page + limit; index++) {
                numbers.push(index);
            }
        if (page > numberPages - limit)
            for (
                let index = numberPages - maxSize + 1;
                index <= numberPages;
                index++
            ) {
                numbers.push(index);
            }
        setArrayNumbers(numbers);
    };

    const restPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const AddPage = () => {
        if (page < numberPages) setPage(page + 1);
    };

    return (
        <>
            {numberPages > 0 && (
                <div className="row sty-cont-pagination">
                    <div className="col-12 text-center sty-cont-pag">
                        <div
                            key={`right_tabL_arrow`}
                            className="sty-pag-ele"
                            onClick={() => restPage()}>
                            <img src="/static/img/favicons/app/prev.svg" />
                        </div>

                        {elements}

                        <div
                            key={`right_tabR_row`}
                            className="sty-pag-ele"
                            onClick={() => AddPage()}>
                            <img src="/static/img/favicons/app/next.svg" />
                        </div>
                    </div>
                    <div className="col-12 text-right sty-cont-total">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"table_tag_1"} />
                        </div>
                        <div className="sty-data">{total}</div>
                    </div>
                </div>
            )}
        </>
    );
}
