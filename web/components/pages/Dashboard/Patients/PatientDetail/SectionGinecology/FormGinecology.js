import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import apiMedicalRecords from "../../../../../../helper/core_services/endpoints/medical_records";
import { loadElement } from "../../../../../../helper/appearance/load";

import FieldRadio from "../../../../../../helper/forms/elements/radio";

export default function FormGinecology({
    idPatient = null,
    setFormGinecology,
    setFlagSendGinecology,
}) {
    const { locale } = useApp();
    const [flagsFields, setFlagsFields] = useState({});
    const [valuesPregnacy, setValuesPregnacy] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (!formData?.id) SendForm(formData, resetForm);
            if (formData?.id) UpdateForm(formData);
        },
    });

    useEffect(() => {
        setFormGinecology(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [idPatient]);

    useEffect(() => {
        setValuesPregnacy([
            {
                tag: GetLanguages("input", "no"),
                value: false,
            },
            {
                tag: GetLanguages("input", "yes"),
                value: true,
            },
        ]);
    }, [locale]);

    useEffect(() => {
        GetFlagsActive();
    }, []);

    const getInformation = async () => {
        let reqGyne = await request(
            apiMedicalRecords.get_gyneco,
            null,
            [idPatient],
            {
                locale,
            },
            false
        );
        if (reqGyne != null) {
            formik.setValues(reqGyne);
        }
    };

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

    const SendForm = async (formData) => {
        loadElement(true);
        await request(
            apiMedicalRecords.post_new_gyneco,
            formData,
            [formData.idUser],
            {
                locale,
            }
        );
        loadElement(false);
        setFlagSendGinecology(true);
    };

    const UpdateForm = async (formData) => {
        loadElement(true);
        await request(apiMedicalRecords.patch_gyneco, formData, [idPatient], {
            locale,
        });
        loadElement(false);
        setFlagSendGinecology(true);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                {flagsFields?.pregnancy && (
                    <div className="col-12">
                        <div className="sty-input-tag-g-1">
                            <TagLang group={"input"} tag={"pregnant"} />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FieldRadio
                                    formik={formik}
                                    name={"pregnancy"}
                                    values={valuesPregnacy}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="col-12">
                    <div className="row">
                        {flagsFields?.gestationalAge &&
                            formik.values["pregnancy"] == "1" && (
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"gestation_time"}
                                            />
                                        </div>
                                        <div className="sty-input">
                                            <textarea
                                                name={`gestationalAge`}
                                                value={
                                                    formik.values.gestationalAge
                                                }
                                                onChange={formik.handleChange}
                                                rows={3}
                                            />
                                            <MessageValidation
                                                error={
                                                    formik.errors.gestationalAge
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        {flagsFields?.lastMenstrualPeriod &&
                            formik.values["pregnancy"] == "1" && (
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"last_menstruation"}
                                            />
                                        </div>
                                        <div className="sty-input">
                                            <textarea
                                                name={`lastMenstrualPeriod`}
                                                value={
                                                    formik.values
                                                        .lastMenstrualPeriod
                                                }
                                                onChange={formik.handleChange}
                                                rows={3}
                                            />
                                            <MessageValidation
                                                error={
                                                    formik.errors
                                                        .lastMenstrualPeriod
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        {flagsFields?.hormonalProblems && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"hormonal_problems"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`hormonalProblems`}
                                            value={
                                                formik.values.hormonalProblems
                                            }
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={
                                                formik.errors.hormonalProblems
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {flagsFields?.hormonalTherapy && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"hormonal_therapy"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`hormonalTherapy`}
                                            value={
                                                formik.values.hormonalTherapy
                                            }
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={
                                                formik.errors.hormonalTherapy
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {flagsFields?.contraceptives && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"contraceptives_1"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`contraceptives`}
                                            value={formik.values.contraceptives}
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={formik.errors.contraceptives}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {flagsFields?.climacteric && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"climacteric"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`climacteric`}
                                            value={formik.values.climacteric}
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={formik.errors.climacteric}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        pregnancy: false,
        gestationalAge: "",
        lastMenstrualPeriod: "",
        hormonalProblems: "",
        hormonalTherapy: "",
        contraceptives: "",
        climacteric: "",
    };
}

function validationSchema() {
    return {};
}
