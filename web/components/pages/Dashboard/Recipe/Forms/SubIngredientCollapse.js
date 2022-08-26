import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { map, size } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

import request from "../../../../../helper/core_services/core/requestService";
import foods from "../../../../../helper/core_services/endpoints/foods";

import TablePag from "../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./SubIngredientRow";

import SubIngredientFields from "./SubIngredientFields";

export default function SubIngredientColapse({
    formik,
    arrayHelpers,
    father,
    content,
    index,
    flagEditRecipe,
}) {
    const { locale } = useApp();
    const [flagCollapse, setflagCollapse] = useState(true);
    const [unities, setUnities] = useState(null);
    const valuesElement = formik.values[father][index];

    useEffect(() => {
        let id = valuesElement?.food;
        if (id) GetEquivalent(id);
    }, [valuesElement.food]);

    useEffect(() => {
        if (valuesElement?.flagLoad) setflagCollapse(false);
    }, [valuesElement?.flagLoad]);

    const SelectIngredient = (row) => {
        setflagCollapse(false);
        formik.setFieldValue(`${father}[${index}].food`, row.id);
        formik.setFieldValue(`${father}[${index}].name`, row.name);
        formik.setFieldValue(`${father}[${index}].category`, row.category);
    };

    const GetEquivalent = async (id) => {
        let req = await request(foods.get_food, null, [id], {
            locale,
        });
        setUnities(req.portions);
    };

    return (
        <>
            {!flagCollapse && (
                <SubIngredientFields
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    father={father}
                    content={content}
                    index={index}
                    unities={unities}
                    flagEditRecipe={flagEditRecipe}
                />
            )}
            <Collapse isOpen={flagCollapse} className="sty-data-content">
                <Card>
                    <CardBody>
                        <TablePag
                            titles={[
                                <TagLang group={"input"} tag={"name"} />,
                                <TagLang group={"input"} tag={"options"} />,
                            ]}
                            titleTable={
                                <TagLang
                                    group={"dashboard"}
                                    tag={"tit_recipe_1_4_1"}
                                />
                            }
                            tagCount={""}
                            pageSize={10}
                            endpoint={foods.get_foods}
                            Rows={Rows}
                            customFunction={SelectIngredient}
                        />
                    </CardBody>
                </Card>
            </Collapse>
        </>
    );
}
