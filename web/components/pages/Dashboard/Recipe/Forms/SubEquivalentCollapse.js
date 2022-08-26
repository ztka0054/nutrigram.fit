import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { map, size } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../helper/core_services/core/requestService";
import recipe from "../../../../../helper/core_services/endpoints/recipes";

import TablePag from "../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./SubEquivalentRow";

import SubEquivalentFields from "./SubEquivalentFields";

export default function SubEquivalentColapse({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    const { locale } = useApp();
    const [flagCollapse, setflagCollapse] = useState(true);
    const valuesElement = formik.values[father][index];

    useEffect(() => {
        if (valuesElement?.recipe) PutDataRecipe(valuesElement.recipe);
    }, [valuesElement?.recipe]);

    const SelectEquivalent = (row) => {
        PutDataRecipe(row);
    };

    const PutDataRecipe = async (row) => {
        setflagCollapse(false);
        formik.setFieldValue(`${father}[${index}].equivalent`, row.id);
        formik.setFieldValue(`${father}[${index}].name`, row.name);
        formik.setFieldValue(
            `${father}[${index}].image`,
            row.images?.[0]?.image
        );
        let req = await request(recipe.get_recipe, null, [row.id], {
            locale,
        });
        if (req != null)
            formik.setFieldValue(
                `${father}[${index}].ingredients`,
                req.ingredients
            );
    };

    return (
        <>
            {!flagCollapse && (
                <SubEquivalentFields
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    father={father}
                    content={content}
                    index={index}
                />
            )}
            <Collapse isOpen={flagCollapse} className="sty-data-content">
                <Card>
                    <CardBody>
                        <TablePag
                            titles={[
                                <TagLang group={"input"} tag={"name"} />,
                                <TagLang group={"input"} tag={"difficulty"} />,
                            ]}
                            titleTable={
                                <TagLang group={"input"} tag={"recipes_u"} />
                            }
                            tagCount={
                                <TagLang group={"input"} tag={"recipes"} />
                            }
                            pageSize={10}
                            endpoint={recipe.get_recipes}
                            Rows={Rows}
                            customFunction={SelectEquivalent}
                        />
                    </CardBody>
                </Card>
            </Collapse>
        </>
    );
}
