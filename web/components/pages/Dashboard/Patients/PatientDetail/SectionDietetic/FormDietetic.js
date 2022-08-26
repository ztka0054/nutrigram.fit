import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../helper/core_services/core/requestService";
import apiMedicalRecords from "../../../../../../helper/core_services/endpoints/medical_records";
import menu from "../../../../../../helper/core_services/endpoints/menu";
import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../helper/appearance/load";

import FormSubContHabitual from "./FormSubContHabitual";

import FieldRadio from "../../../../../../helper/forms/elements/radio";

const icon_title = "/static/img/favicons/app/icon_nu_1.png";

const getTime = (id) => {
    let time = null;
    switch (id) {
        case 1:
            time = "08:00";
            break;
        case 3:
            time = "12:00";
            break;
        case 2:
            time = "14:00";
            break;
        case 4:
            time = "18:00";
            break;
        case 5:
            time = "20:00";
            break;

        default:
            time = "08:00";
            break;
    }
    return time;
};

const valuesRadioInit = [
    {
        tag: <TagLang group={"input"} tag={"no"} />,
        value: false,
    },
    {
        tag: <TagLang group={"input"} tag={"yes"} />,
        value: true,
    },
];

export default function FormDietetic({
    idPatient = null,
    setFormDiet,
    setFlagSendDiet,
}) {
    const { locale } = useApp();
    const [flagsFields, setFlagsFields] = useState({});
    const [valuesRadio, setValuesRadio] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (idPatient == null) SendForm(formData, resetForm);
            if (idPatient != null) UpdateForm(formData);
        },
    });

    useEffect(() => {
        setFormDiet(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [idPatient]);

    useEffect(() => {
        GetFlagsActive();
    }, []);

    useEffect(() => {
        GetDietHabitual();
    }, []);

    useEffect(() => {
        setValuesRadio(valuesRadioInit);
    }, [locale]);

    const GetFlagsActive = async () => {
        let req = await request(
            apiMedicalRecords.get_settings_medical,
            null,
            null,
            {
                locale,
            },
            false
        );
        if (req != null) {
            setFlagsFields(req);
        }
    };

    const getInformation = async () => {
        let values = [];
        let req = await request(
            apiMedicalRecords.get_diet,
            null,
            [idPatient],
            {
                locale,
            },
            false
        );
        if (req != null) {
            values = { ...req };
        }
        let reqType = await request(menu.get_meals_type, null, null, locale);
        let reqMeal = await request(
            apiMedicalRecords.get_meal,
            null,
            [idPatient],
            {
                locale,
            },
            false
        );
        let diets = map(reqType, (element, index) => {
            let time = getTime(element.id);
            let find = reqMeal.find((obj) => {
                return obj.type == element.id;
            });
            if (find == undefined)
                return {
                    ...element,
                    time: moment(
                        `${moment().format("YYYY-MM-DD")} ${time}`
                    ).toDate(),
                    diet: "",
                    place: "",
                    type: element.id,
                };
            else {
                return {
                    ...element,
                    time: moment(
                        `${moment().format("YYYY-MM-DD")} ${find.time}`
                    ).toDate(),
                    diet: find.diet,
                    place: find.place,
                    type: element.id,
                };
            }
        });
        values.diets = diets;
        formik.setValues(values);
    };

    const GetDietHabitual = async () => {
        let req = await request(menu.get_meals_type, null, null, {
            locale,
        });
        if (req != null) {
            let initFormik = map(req, (element) => {
                let time = getTime(element.id);
                return {
                    ...element,
                    time: moment(
                        `${moment().format("YYYY-MM-DD")}T${time}`
                    ).toDate(),
                    diet: "",
                    place: "",
                    type: element.id,
                };
            });

            formik.setFieldValue("diets", initFormik);
        }
    };

    const SendForm = async (formData) => {
        loadElement(true);
        await request(
            apiMedicalRecords.post_new_diet,
            formData,
            [formData.idUser],
            {
                locale,
            }
        );
        await SaveMeals(formData, { idUser: formData.idUser });
        setFlagSendDiet(true);
    };

    const SaveMeals = async (formData, info) => {
        let arrayRequest = [];
        map(formData.diets, (element) => {
            if (element.diet != "" && element.place != "") {
                let params = { ...element };
                params.time = `${moment(params.time).format(`HH:mm`)}:00`;
                arrayRequest.push(
                    request(
                        apiMedicalRecords.post_new_meal,
                        params,
                        [info.idUser],
                        {
                            locale,
                        }
                    )
                );
            }
        });
        loadElement(true);
        await Promise.all(arrayRequest);
        loadElement(false);
    };

    const UpdateForm = async (formData) => {
        loadElement(true);
        await request(apiMedicalRecords.patch_diet, formData, [idPatient], {
            locale,
        });
        let diets = [];
        map(formData.diets, (element) => {
            if (element.diet != "" && element.place != "") {
                let params = { ...element };
                params.time = `${moment(params.time).format(`HH:mm`)}:00`;
                diets.push(params);
            }
        });
        await request(apiMedicalRecords.put_meal, diets, [idPatient], {
            locale,
        });
        loadElement(false);
        setFlagSendDiet(true);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"diet_text"} />
                        </div>
                        <div className="sty-input">
                            <textarea
                                name={`previousDiet`}
                                value={formik.values.previousDiet}
                                onChange={formik.handleChange}
                                rows={3}
                            />
                            <MessageValidation
                                error={formik.errors.previousDiet}
                            />
                        </div>
                    </div>
                </div>
                {flagsFields?.alcohol && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"alcohol"} />
                            </div>
                            <div className="sty-input">
                                <FieldRadio
                                    formik={formik}
                                    name={"alcohol"}
                                    values={valuesRadio}
                                />
                                <MessageValidation
                                    error={formik.errors.alcohol}
                                />
                                {/* <FieldTextArea formik={formik} name={"alcohol"} /> */}
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.smoke && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"smoke"} />
                            </div>
                            <div className="sty-input">
                                <FieldRadio
                                    formik={formik}
                                    name={"smoke"}
                                    values={valuesRadio}
                                />
                                <MessageValidation
                                    error={formik.errors.smoke}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.meals && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang
                                    group={"input"}
                                    tag={"how_many_foods"}
                                />
                            </div>
                            <div className="sty-input">
                                <input
                                    name={`meals`}
                                    value={formik.values.meals}
                                    onChange={formik.handleChange}
                                    type="number"
                                />
                                <MessageValidation
                                    error={formik.errors.meals}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.allergies && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang
                                    group={"input"}
                                    tag={"allergies_text"}
                                />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`allergies`}
                                    value={formik.values.allergies}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.allergies}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.restrictions && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang
                                    group={"input"}
                                    tag={"restrictions_text"}
                                />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`restrictions`}
                                    value={formik.values.restrictions}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.restrictions}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {flagsFields?.dislikes && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang
                                    group={"input"}
                                    tag={"dislikes_text"}
                                />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`dislikes`}
                                    value={formik.values.dislikes}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.dislikes}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.preferred && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"like_food"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`preferred`}
                                    value={formik.values.preferred}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.preferred}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.dietNotes && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"notes"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`notes`}
                                    value={formik.values.notes}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.notes}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="sty-title-secction-1">
                <div className="text">
                    <TagLang group={"input"} tag={"usual_diet"} />
                </div>
                <div className="icon">
                    <img src={icon_title} />
                </div>
            </div>
            <FormikProvider value={formik}>
                <FieldArray
                    name="diets"
                    render={(arrayHelpers) => (
                        <FormSubContHabitual
                            formik={formik}
                            arrayHelpers={arrayHelpers}
                            father={"diets"}
                        />
                    )}
                />
            </FormikProvider>

            <div className="row">
                {flagsFields?.water && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"water"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`water`}
                                    value={formik.values.water}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.water}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {flagsFields?.coffee && (
                    <div className="col-6">
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"coffee"} />
                            </div>
                            <div className="sty-input">
                                <FieldRadio
                                    formik={formik}
                                    name={"coffee"}
                                    values={valuesRadio}
                                />
                                <MessageValidation
                                    error={formik.errors.coffee}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}

function initialValues() {
    return {
        previousDiet: "",
        alcohol: false,
        smoke: false,
        meals: 0,
        allergies: "",
        restrictions: "",
        dislikes: "",
        preferred: "",
        notes: "",
        diets: [],
        water: "",
        coffee: false,
    };
}

function validationSchema() {
    return {};
}
