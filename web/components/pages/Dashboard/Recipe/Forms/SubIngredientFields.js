import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";

import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import foods from "../../../../../helper/core_services/endpoints/foods";

import TablePag from "../../../../modules/Dashboard/Table/TablePagination";
import Rows from "./SubIngredientEquivalentRow";

import InputTextForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputNumber_1 from "../../../../components/Inputs/InputTypeForm_1/InputNumber_1";
import InputSelectForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";

export default function SubIngredientFields({
    formik,
    arrayHelpers,
    father,
    index,
    unities,
    flagEditRecipe,
}) {
    const elementArray = formik.values[father][index];
    const [flagButton, setFlagButton] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [toogleCollapse, setToogleCollapse] = useState(false);
    const [suggestedQuantity, setSuggestedQuantity] = useState(0);

    useEffect(() => {
        if (elementArray?.portion != "" && elementArray?.quantity != "") {
            setFlagButton(false);
            setShowTable(true);
        } else {
            setFlagButton(true);
            setShowTable(false);
        }
    }, [elementArray.portion, elementArray.quantity]);

    useEffect(() => {
        FindSugestion();
    }, [elementArray.portion]);

    const FindSugestion = () => {
        if (unities != null) {
            let finder = unities.find(
                (obj) => `${obj.id}` === elementArray.portion
            );
            setSuggestedQuantity(finder.suggestedQuantity);
        }
    };

    const selectEquivalent = (row, quantity) => {
        formik.setFieldValue(`${father}[${index}].food`, row.id);
        formik.setFieldValue(`${father}[${index}].quantity`, quantity);
        setToogleCollapse(false);
    };

    const ShowEquivalents = () => {
        setToogleCollapse(!toogleCollapse);
    };

    return (
        <>
            <div
                className="row"
                // key={index}
            >
                <div className="col-5">
                    <InputTextForm_1
                        formik={formik}
                        title={"ingredient"}
                        name={`${father}[${index}].name`}
                        value={formik.values[father][index].name}
                        error={formik.errors[father]?.[index]?.name}
                        disabled={!flagEditRecipe}
                    />
                </div>
                <div className="col-2">
                    <InputSelectForm_1
                        formik={formik}
                        elements={unities}
                        title={"unit"}
                        name={`${father}[${index}].portion`}
                        value={formik.values[father][index].portion}
                        error={formik.errors[father]?.[index]?.portion}
                        disabled={!flagEditRecipe}
                    />
                </div>
                <div className="col-2">
                    <InputNumber_1
                        formik={formik}
                        title={"quantity"}
                        name={`${father}[${index}].quantity`}
                        value={formik.values[father][index].quantity}
                        error={formik.errors[father]?.[index]?.quantity}
                        disabled={!flagEditRecipe}
                    />
                </div>
                {flagEditRecipe && (
                    <>
                        <div className="col-2 align-self-center">
                            <button
                                className="sty-button-dash-1 fix-icon color-2"
                                type="button"
                                onClick={() => ShowEquivalents()}
                                disabled={flagButton}>
                                <div className="sty-text">Equivalentes</div>
                            </button>
                        </div>
                        <div className="col-1 align-self-center">
                            <button
                                className="sty-button-dash-1 fix-icon"
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}>
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/app/rem_w.svg" />
                                </div>
                            </button>
                        </div>
                    </>
                )}
            </div>
            {showTable && (
                <div className="sty-content-data-1">
                    <Collapse
                        isOpen={toogleCollapse}
                        className="sty-data-content">
                        <Card>
                            <CardBody>
                                <TablePag
                                    titles={[
                                        <TagLang
                                            group={"input"}
                                            tag={"name"}
                                        />,
                                        <TagLang
                                            group={"input"}
                                            tag={"unit"}
                                        />,
                                        <TagLang
                                            group={"input"}
                                            tag={"quantity"}
                                        />,
                                        <TagLang group={"input"} tag={"cal"} />,
                                        <TagLang
                                            group={"input"}
                                            tag={"prot"}
                                        />,
                                        <TagLang group={"input"} tag={"lip"} />,
                                        <TagLang
                                            group={"input"}
                                            tag={"options"}
                                        />,
                                    ]}
                                    titleTable={`${GetLanguage(
                                        "dashboard",
                                        "tit_recipe_1_6"
                                    )}: ${elementArray.name}`}
                                    classCustomTitle={"color-1"}
                                    tagCount={""}
                                    pageSize={10}
                                    endpoint={foods.get_food_equivalents}
                                    params={{ category: elementArray.category }}
                                    Rows={Rows}
                                    customFunction={selectEquivalent}
                                    values={{
                                        quantity: elementArray.quantity,
                                        suggested: suggestedQuantity,
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            )}
        </>
    );
}
