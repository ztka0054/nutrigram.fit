import { useState, useEffect } from "react";
import { map, size } from "lodash";

import TagLang from "../../../../modules/GetTagLang";
import InputText from "../../../../components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputNumber from "../../../../components/Inputs/InputTypeForm_1/InputNumber_1";
import InputSelect from "../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";
import InputCheckForm from "../../../../components/Inputs/InputTypeForm_1/InputCheckForm_1";
import IconClose from "../../../../components/Icons/Close";
import MessageValidation from "../../../../modules/Forms/MessageValidation";

import style from "./portionelement.module.scss";

export default function PortionElementForm({
    formik,
    arrayHelpers,
    father,
    cataloguePortionsInfo,
}) {
    const [indexSelectCheck, setIndexSelectCheck] = useState(0);

    useEffect(() => {
        if (formik?.values?.loadValueCheck > -1)
            setIndexSelectCheck(formik?.values?.loadValueCheck);
    }, [formik?.values?.loadValueCheck]);

    useEffect(() => {
        if (size(formik.values[father]) == 1) {
            formik.setFieldValue(`${father}[0].defaultPortion`, true);
            setIndexSelectCheck(0);
        }
        if (size(formik.values[father]) > 1) {
            let indexes = formik.values[father]
                .map((portion, i) =>
                    portion.defaultPortion === true ? i : null
                )
                .filter((i) => i !== null);
            if (size(indexes) > 1) {
                map(indexes, (element) => {
                    if (element == indexSelectCheck)
                        formik.setFieldValue(
                            `${father}[${element}].defaultPortion`,
                            false
                        );
                    if (element != indexSelectCheck)
                        setIndexSelectCheck(element);
                });
            }
            if (size(indexes) == 0) {
                formik.setFieldValue(`${father}[0].defaultPortion`, true);
                setIndexSelectCheck(0);
            }
        }
    }, [formik.values[father]]);

    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div className={style.content} key={`direction_${index}`}>
                    <div className={style.title}>
                        <div className={style.tag}>
                            <TagLang group={"input"} tag={"portion"} />
                        </div>
                        <div
                            className={style.icon}
                            onClick={() => arrayHelpers.remove(index)}>
                            <IconClose />
                        </div>
                    </div>
                    <InputSelect
                        formik={formik}
                        title={"unity"}
                        name={`${father}[${index}].info`}
                        value={formik.values[father][index].info}
                        elements={cataloguePortionsInfo}
                        error={formik?.errors[father]?.[index]?.info}
                    />
                    <InputNumber
                        type={"number"}
                        formik={formik}
                        title={"weight"}
                        name={`${father}[${index}].weight`}
                        value={formik.values[father][index].weight}
                        error={formik?.errors[father]?.[index]?.weight}
                    />
                    <InputNumber
                        type={"number"}
                        formik={formik}
                        title={"suggestedQuantity"}
                        name={`${father}[${index}].suggestedQuantity`}
                        value={formik.values[father][index].suggestedQuantity}
                        error={
                            formik?.errors[father]?.[index]?.suggestedQuantity
                        }
                    />
                    <div className={style.contCheck}>
                        <InputCheckForm
                            formik={formik}
                            title={"defaultPortion"}
                            name={`${father}[${index}].defaultPortion`}
                            value={formik.values[father][index].defaultPortion}
                        />
                    </div>
                </div>
            ))}
            {typeof formik.errors?.portions === "string" && (
                <div className="validation-array" id={"field_error"}>
                    <MessageValidation error={formik.errors.portions} />
                </div>
            )}
            <div className="row justify-content-end">
                <div className="col-6">
                    <button
                        className="sty-button-dash-1 fix-25"
                        type="button"
                        onClick={() =>
                            arrayHelpers.push({
                                info: "",
                                weight: "",
                                suggestedQuantity: "",
                                defaultPortion: false,
                            })
                        }>
                        <div className="sty-icon">
                            <img src="/static/img/favicons/app/add_w.svg" />
                        </div>
                        <div className="sty-tag">
                            <TagLang group={"button"} tag={"add"} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
