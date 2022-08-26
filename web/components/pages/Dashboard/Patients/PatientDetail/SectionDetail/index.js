import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import patient from "../../../../../../helper/core_services/endpoints/patients";
import { loadElement } from "../../../../../../helper/appearance/load";

import FieldPic from "../../../../../../helper/forms/elements/pic";
import FieldSelect from "../../../../../../helper/forms/elements/select";
import FieldDate from "../../../../../../helper/forms/elements/date";

export default function Detail({
    idPatient = null,
    setFormUser,
    setInfoUser,
    setFlagGinecology,
}) {
    const { locale } = useApp();
    const [selectGender, setSelectGender] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            let formNew = { ...formData };
            if (formNew.picture == "" || formNew.picture == null)
                delete formNew.picture;
            if (idPatient == null) SendForm(formNew);
            if (idPatient != null) UpdateForm(formNew);
        },
    });

    useEffect(() => {
        setFormUser(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [idPatient]);

    useEffect(() => {
        if (formik?.values["gender"] == "1") setFlagGinecology(true);
        else setFlagGinecology(false);
    }, [formik?.values]);

    useEffect(() => {
        setSelectGender([
            { id: 2, name: GetLanguages("input", "Male") },
            { id: 1, name: GetLanguages("input", "Female") },
        ]);
    }, [locale]);

    const getInformation = async () => {
        let req = await request(patient.get_patient, null, [idPatient], {
            locale,
        });
        if (req != null) formik.setValues(req);
    };

    const SendForm = async (formData) => {
        loadElement(true);
        let req = await request(patient.post_new_patients, formData, null, {
            locale,
        });
        loadElement(false);
        if (req != null) {
            setInfoUser(req);
        }
    };

    const UpdateForm = async (formData) => {
        loadElement(true);
        let req = await request(patient.patch_patient, formData, [idPatient], {
            locale,
        });
        loadElement(false);
        if (req != null) {
            setInfoUser(req);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-5">
                    <FieldPic formik={formik} name={"picture"} />
                </div>
                <div className="col-7">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang group={"input"} tag={"name"} />
                                    </div>
                                    <div className="sty-input">
                                        <input
                                            name={`firstName`}
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            type="text"
                                        />
                                        <MessageValidation
                                            error={formik.errors.firstName}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"lastName"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <input
                                            name={`lastName`}
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            type="text"
                                        />
                                        <MessageValidation
                                            error={formik.errors.lastName}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"gender"}
                                        />
                                    </div>
                                    <div className="sty-input">
                                        <FieldSelect
                                            formik={formik}
                                            name={"gender"}
                                            elements={selectGender}
                                        />
                                        <MessageValidation
                                            error={formik.errors.gender}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"input"}
                                            tag={"dateBirth"}
                                        />
                                    </div>
                                    <div className="sty-input sty-boots-calendar-1">
                                        <FieldDate
                                            formik={formik}
                                            name="birthday"
                                        />
                                        <MessageValidation
                                            error={formik.errors.birthday}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"profession"}
                                    />
                                </div>
                                <div className="sty-input">
                                    <input
                                        name={`profession`}
                                        value={formik.values.profession}
                                        onChange={formik.handleChange}
                                        type="text"
                                    />
                                    <MessageValidation
                                        error={formik.errors.profession}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"email"} />
                                </div>
                                <div className="sty-input">
                                    <input
                                        name={`email`}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        type="text"
                                    />
                                    <MessageValidation
                                        error={formik.errors.email}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"phone"} />
                                </div>
                                <div className="sty-input">
                                    <input
                                        name={`phone`}
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        type="text"
                                    />
                                    <MessageValidation
                                        error={formik.errors.phone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
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
                    </div>
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        picture: "",
        firstName: "",
        lastName: "",
        gender: "",
        birthday: "",
        profession: "",
        email: "",
        phone: "",
        notes: "",
    };
}

function validationSchema() {
    return {
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
        gender: Yup.string().required("required"),
        birthday: Yup.string().required("required"),
        profession: Yup.string().required("required"),
        email: Yup.string().email().required("required"),
        phone: Yup.string().required("required"),
    };
}
