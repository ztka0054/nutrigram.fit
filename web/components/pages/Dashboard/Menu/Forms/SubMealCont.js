import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { map } from "lodash";

import TagLang from "../../../../modules/GetTagLang";
import TablePag from "../../../../modules/Dashboard/Table/TablePagination";

import Table from "./TableIngredients";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import recipe from "../../../../../helper/core_services/endpoints/recipes";

import SubDayColapse from "./SubDayColapse";

import Rows from "./RowRecipes";

const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];

export default function SubMealColapse({
    formik,
    arrayHelpers,
    index,
    content,
    father,
}) {
    const [openTable, setOpenTable] = useState(false);
    const [daySelect, setdaySelect] = useState(null);

    useEffect(() => {
        setOpenTable(false);
    }, [content?.[index]?.[daySelect]]);

    const ActiveTable = (day) => {
        setOpenTable(true);
        setdaySelect(day);
    };

    const SelectRecipe = (row, daySelect) => {
        formik.setFieldValue(`${father}[${index}].${daySelect}`, row.id);
        setOpenTable(false);
    };

    return (
        <>
            <div className="sty-card-menu-days">
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[0]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[1]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[2]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[3]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[4]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[5]}
                    ActiveTable={ActiveTable}
                />
                <SubDayColapse
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    index={index}
                    content={content}
                    father={father}
                    day={days[6]}
                    ActiveTable={ActiveTable}
                />
            </div>

            <Collapse isOpen={openTable} className="sty-data-content">
                <Card>
                    <CardBody className="sty-cont-option-2">
                        <div className="title_select_recipe">
                            <TagLang group={"dashboard"} tag={"tit_menu_day"} />
                            <TagLang group={"app"} tag={daySelect} />
                        </div>
                        <div className="sty-content-data-1">
                            <Table
                                SelectRecipe={SelectRecipe}
                                daySelect={daySelect}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Collapse>
        </>
    );
}
