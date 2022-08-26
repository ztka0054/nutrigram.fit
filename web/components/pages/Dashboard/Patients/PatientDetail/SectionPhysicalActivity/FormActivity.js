import React, { useEffect, useState } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../helper/core_services/core/requestService";
import workouts from "../../../../../../helper/core_services/endpoints/workouts";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../../../helper/appearance/load";

import FieldSelect from "../../../../../../helper/forms/elements/select";

export default function FormActivity({
    idPatient,
    setFormPhysical,
    setFlagSendPhysical,
}) {
    const { locale } = useApp();
    const [catType, setCatType] = useState([]);
    const [catClasification, setcatClasification] = useState([]);
    const [catSchedule, setCatSchedule] = useState([
        { id: 1, name: "AM" },
        { id: 2, name: "PM" },
    ]);

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
        setFormPhysical(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [idPatient]);

    useEffect(() => {
        setCatType([
            { id: 1, name: GetLanguage("input", "strength") },
            { id: 2, name: GetLanguage("input", "cardio") },
        ]);
    }, [locale]);

    useEffect(() => {
        setcatClasification([
            { id: 1, name: GetLanguage("input", "sedentary") },
            { id: 2, name: GetLanguage("input", "light") },
            { id: 3, name: GetLanguage("input", "moderate") },
            { id: 4, name: GetLanguage("input", "intense") },
        ]);
    }, [locale]);

    const getInformation = async () => {
        let req = await request(
            workouts.get_configuration,
            null,
            [idPatient],
            locale
        );
        if (req != null) {
            formik.setValues(req);
        }
    };

    const SendForm = async (formData) => {
        await SaveWorkOut(formData);
        setFlagSendPhysical(true);
    };

    const UpdateForm = async (formData) => {
        await UpdateWorkOut(formData);
        setFlagSendPhysical(true);
    };

    const SaveWorkOut = async (formData) => {
        loadElement(true);
        await request(
            workouts.post_create_configuration,
            formData,
            [formData.idUser],
            {
                locale,
            }
        );
        loadElement(false);
    };

    const UpdateWorkOut = async (formData) => {
        loadElement(true);
        await request(
            workouts.patch_update_configuration,
            formData,
            [formData.idUser],
            {
                locale,
            }
        );
        loadElement(false);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"day_physical"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <input
                                        name={`days`}
                                        value={formik.values.days}
                                        onChange={formik.handleChange}
                                        type="number"
                                        max="7"
                                    />
                                    <MessageValidation
                                        error={formik.errors.days}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"minutes_physical"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <input
                                        name={`minutes`}
                                        value={formik.values.minutes}
                                        onChange={formik.handleChange}
                                        type="number"
                                    />
                                    <MessageValidation
                                        error={formik.errors.minutes}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"training_type"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <FieldSelect
                                        formik={formik}
                                        name={"type"}
                                        elements={catType}
                                    />
                                    <MessageValidation
                                        error={formik.errors.type}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"schedule_physical"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <FieldSelect
                                        formik={formik}
                                        name={"schedule"}
                                        elements={catSchedule}
                                    />
                                    <MessageValidation
                                        error={formik.errors.schedule}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"clasification_pyshical"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <FieldSelect
                                        formik={formik}
                                        name={"classification"}
                                        elements={catClasification}
                                    />
                                    <MessageValidation
                                        error={formik.errors.classification}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return { days: 0, type: "", minutes: 0, schedule: "" };
}

function validationSchema() {
    return {
        days: Yup.string().required("required"),
        type: Yup.string().required("required"),
        minutes: Yup.string().required("required"),
        schedule: Yup.string().required("required"),
    };
}
