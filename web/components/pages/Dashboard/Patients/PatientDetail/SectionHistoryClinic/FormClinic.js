import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import patient from "../../../../../../helper/core_services/endpoints/patients";
import apiMedicalRecords from "../../../../../../helper/core_services/endpoints/medical_records";
import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../helper/appearance/load";

import FieldCheck from "../../../../../../helper/forms/elements/check";
import FieldRadio from "../../../../../../helper/forms/elements/radio";

import FormSubContMediccation from "./FormSubContMedication";
import FormSubContSuplement from "./FormSubContSuplement";

const valuesRadioInit = [
    {
        tag: GetLanguages("input", "no"),
        value: false,
    },
    {
        tag: GetLanguages("input", "yes"),
        value: true,
    },
];

export default function FormClinic({
    idPatient = null,
    setFormClinic,
    setFlagSendClinic,
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
        setFormClinic(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [idPatient]);

    useEffect(() => {
        GetFlagsActive();
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
        let values = {};
        let req = await request(
            apiMedicalRecords.get_medical,
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
        let reqMedication = await request(
            apiMedicalRecords.get_medication,
            null,
            [idPatient],
            {
                locale,
            },
            false
        );
        if (reqMedication != null) {
            values.medications = reqMedication;
        }
        let reqSuplements = await request(
            apiMedicalRecords.get_suplement,
            null,
            [idPatient],
            {
                locale,
            },
            false
        );
        if (reqSuplements != null) {
            values.suplements = reqSuplements;
        }
        formik.setValues(values);
    };

    const SendForm = async (formData) => {
        loadElement(true);
        await request(
            apiMedicalRecords.post_new_medical,
            formData,
            [formData.idUser],
            {
                locale,
            }
        );
        loadElement(false);

        let data = { idUser: formData.idUser };
        await SaveMedication(formData, data);
        await SaveSuplements(formData, data);
        setFlagSendClinic(true);
    };

    const SaveMedication = async (formData, info) => {
        let ArrayRequest = [];
        map(formData.medications, (element) => {
            ArrayRequest.push(
                request(
                    apiMedicalRecords.post_new_medication,
                    element,
                    [info.idUser],
                    {
                        locale,
                    }
                )
            );
        });
        loadElement(true);
        await Promise.all(ArrayRequest);
        loadElement(false);
    };

    const SaveSuplements = async (formData, info) => {
        let ArrayRequest = [];
        map(formData.suplements, (element) => {
            ArrayRequest.push(
                request(
                    apiMedicalRecords.post_new_suplement,
                    element,
                    [info.idUser],
                    {
                        locale,
                    }
                )
            );
        });
        loadElement(true);
        await Promise.all(ArrayRequest);
        loadElement(false);
    };

    const UpdateForm = async (formData) => {
        loadElement(true);
        await request(
            apiMedicalRecords.patch_medical,
            formData,
            [idPatient],
            locale
        );
        await request(
            apiMedicalRecords.put_medication,
            formData.medications,
            [idPatient],
            {
                locale,
            }
        );
        await request(
            apiMedicalRecords.put_suplement,
            formData.suplements,
            [idPatient],
            {
                locale,
            }
        );
        loadElement(false);
        setFlagSendClinic(true);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12">
                    {flagsFields?.reason && (
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang
                                    group={"input"}
                                    tag={"reason_consultation"}
                                />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`reason`}
                                    value={formik.values.reason}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.reason}
                                />
                            </div>
                        </div>
                    )}
                    {flagsFields?.notes && (
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
                    )}
                </div>
                <div className="col-12">
                    <div className="sty-input-tag-g-1">
                        <TagLang group={"input"} tag={"current_conditions"} />
                    </div>
                    <div className="row">
                        {flagsFields?.diarrhea && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"diarrhea"}
                                    tag={GetLanguage("input", "diarrhea")}
                                />
                                <MessageValidation
                                    error={formik.errors.diarrhea}
                                />
                            </div>
                        )}
                        {flagsFields?.constipation && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"constipation"}
                                    tag={GetLanguage("input", "constipation")}
                                />
                                <MessageValidation
                                    error={formik.errors.constipation}
                                />
                            </div>
                        )}
                        {flagsFields?.gastritis && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"gastritis"}
                                    tag={GetLanguage("input", "gastritis")}
                                />
                                <MessageValidation
                                    error={formik.errors.gastritis}
                                />
                            </div>
                        )}
                        {flagsFields?.ulcer && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"ulcer"}
                                    tag={GetLanguage("input", "ulcer")}
                                />
                                <MessageValidation
                                    error={formik.errors.ulcer}
                                />
                            </div>
                        )}
                        {flagsFields?.nausea && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"nausea"}
                                    tag={GetLanguage("input", "nausea")}
                                />
                                <MessageValidation
                                    error={formik.errors.nausea}
                                />
                            </div>
                        )}
                        {flagsFields?.pyrosis && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"pyrosis"}
                                    tag={GetLanguage("input", "pyrosis")}
                                />
                                <MessageValidation
                                    error={formik.errors.pyrosis}
                                />
                            </div>
                        )}
                        {flagsFields?.vomit && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"vomit"}
                                    tag={GetLanguage("input", "vomit")}
                                />
                                <MessageValidation
                                    error={formik.errors.vomit}
                                />
                            </div>
                        )}
                        {flagsFields.colitis && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"colitis"}
                                    tag={GetLanguage("input", "colitis")}
                                />
                                <MessageValidation
                                    error={formik.errors.colitis}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    {flagsFields?.observations && (
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"observations"} />
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`observations`}
                                    value={formik.values.observations}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={formik.errors.observations}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-12">
                    <div className="sty-input-tag-g-1">
                        <TagLang group={"input"} tag={"take"} />
                    </div>
                    <div className="row">
                        {flagsFields?.laxative && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"laxative"}
                                    tag={GetLanguage("input", "laxative")}
                                />
                                <MessageValidation
                                    error={formik.errors.laxative}
                                />
                            </div>
                        )}
                        {flagsFields?.diuretic && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"diuretic"}
                                    tag={GetLanguage("input", "diuretic")}
                                />
                                <MessageValidation
                                    error={formik.errors.diuretic}
                                />
                            </div>
                        )}
                        {flagsFields?.antacid && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"antacid"}
                                    tag={GetLanguage("input", "antacid")}
                                />
                                <MessageValidation
                                    error={formik.errors.antacid}
                                />
                            </div>
                        )}
                        {flagsFields?.analgesic && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"analgesic"}
                                    tag={GetLanguage("input", "analgesic")}
                                />
                                <MessageValidation
                                    error={formik.errors.analgesic}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="sty-input-tag-g-1">
                        <TagLang group={"input"} tag={"family_background"} />
                    </div>
                    <div className="row">
                        {flagsFields?.obesity && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"obesity"}
                                    tag={GetLanguage("input", "obesity")}
                                />
                                <MessageValidation
                                    error={formik.errors.obesity}
                                />
                            </div>
                        )}
                        {flagsFields?.diabetes && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"diabetes"}
                                    tag={GetLanguage("input", "diabetes")}
                                />
                                <MessageValidation
                                    error={formik.errors.diabetes}
                                />
                            </div>
                        )}
                        {flagsFields?.hypertension && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"hypertension"}
                                    tag={GetLanguage("input", "hypertension")}
                                />
                                <MessageValidation
                                    error={formik.errors.hypertension}
                                />
                            </div>
                        )}
                        {flagsFields?.cancer && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"cancer"}
                                    tag={GetLanguage("input", "cancer")}
                                />
                                <MessageValidation
                                    error={formik.errors.cancer}
                                />
                            </div>
                        )}
                        {flagsFields?.thyroidProblems && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"thyroidProblems"}
                                    tag={GetLanguage(
                                        "input",
                                        "thyroidProblems"
                                    )}
                                />
                                <MessageValidation
                                    error={formik.errors.thyroidProblems}
                                />
                            </div>
                        )}
                        {flagsFields?.dyslipidemia && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"dyslipidemia"}
                                    tag={GetLanguage("input", "dyslipidemia")}
                                />
                                <MessageValidation
                                    error={formik.errors.dyslipidemia}
                                />
                            </div>
                        )}
                        {flagsFields?.heartDisease && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"heartDisease"}
                                    tag={GetLanguage("input", "heartDisease")}
                                />
                                <MessageValidation
                                    error={formik.errors.heartDisease}
                                />
                            </div>
                        )}
                        {flagsFields?.gastrointestinalDisease && (
                            <div className="col-3">
                                <FieldCheck
                                    formik={formik}
                                    name={"gastrointestinalDisease"}
                                    tag={GetLanguage(
                                        "input",
                                        "gastrointestinalDisease"
                                    )}
                                />
                                <MessageValidation
                                    error={
                                        formik.errors.gastrointestinalDisease
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        {/* {flagsFields.disease && (
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            {getTagLang("input", "ailments")}
                                        </div>
                                        <div className="sty-input">
                                            <Field
                                                component={renderText}
                                                type="text"
                                                className=""
                                                name="disease"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {flagsFields.pastDisease && (
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            {getTagLang(
                                                "input",
                                                "past_ailments"
                                            )}
                                        </div>
                                        <div className="sty-input">
                                            <Field
                                                component={renderText}
                                                type="text"
                                                className=""
                                                name="pastDisease"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )} */}
                        {flagsFields?.otherDiseases && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"other_ailments"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`otherDiseases`}
                                            value={formik.values.otherDiseases}
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={formik.errors.otherDiseases}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {flagsFields?.surgeries && (
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"operations_1"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <textarea
                                            name={`surgeries`}
                                            value={formik.values.surgeries}
                                            onChange={formik.handleChange}
                                            rows={3}
                                        />
                                        <MessageValidation
                                            error={formik.errors.surgeries}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"take_medication"} />
                        </div>
                        <div className="sty-input">
                            <FieldRadio
                                formik={formik}
                                name={"medicated"}
                                values={valuesRadio}
                            />
                            <MessageValidation
                                error={formik.errors.medicated}
                            />
                        </div>
                    </div>
                </div>
                {formik?.values?.medicated && (
                    <FormikProvider value={formik}>
                        <FieldArray
                            name="medications"
                            render={(arrayHelpers) => (
                                <div className="col-12">
                                    {/* <div className="sty-input-tag-g-1">
                                            <TagLang
                                                group={"input"}
                                                tag={"take_medication"}
                                            />
                                        </div> */}
                                    <FormSubContMediccation
                                        formik={formik}
                                        arrayHelpers={arrayHelpers}
                                        father={"medications"}
                                    />
                                </div>
                            )}
                        />
                    </FormikProvider>
                )}
                <FormikProvider value={formik}>
                    <FieldArray
                        name="suplements"
                        render={(arrayHelpers) => (
                            <div className="col-12 cont-field-array">
                                <div className="sty-input-tag-g-1">
                                    <TagLang
                                        group={"input"}
                                        tag={"take_supplement"}
                                    />
                                </div>
                                <FormSubContSuplement
                                    formik={formik}
                                    arrayHelpers={arrayHelpers}
                                    father={"suplements"}
                                />
                            </div>
                        )}
                    />
                </FormikProvider>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        reason: "",
        notes: "",
        diarrhea: false,
        constipation: false,
        gastritis: false,
        ulcer: false,
        nausea: false,
        pyrosis: false,
        vomit: false,
        colitis: false,
        observations: "",
        laxative: false,
        diuretic: false,
        antacid: false,
        analgesic: false,
        obesity: false,
        diabetes: false,
        hypertension: false,
        cancer: false,
        thyroidProblems: false,
        dyslipidemia: false,
        heartDisease: false,
        gastrointestinalDisease: false,
        otherDiseases: "",
        surgeries: "",
        medicated: false,
    };
}

function validationSchema() {
    return {};
}
