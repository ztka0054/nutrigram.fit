import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../hooks/useApp";
import useAuth from "../../../../hooks/useAuth";
import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";
import MessageValidation from "../../../modules/Forms/MessageValidation";
import { loadElement } from "../../../../helper/appearance/load";
import { message_1 } from "../../../../helper/appearance/messages";
import GetLanguage from "../../../../helper/i18n/getValueTagLang";

import request from "../../../../helper/core_services/core/requestService";
import nutri from "../../../../helper/core_services/endpoints/nutritionist";
import medical from "../../../../helper/core_services/endpoints/medical_records";

import FieldPic from "../../../../helper/forms/elements/pic";
import FieldSelect from "../../../../helper/forms/elements/select";
import FieldCheck from "../../../../helper/forms/elements/check";

export default function FormStep2() {
    const router = useRouter();
    const { locale, objectsSignUp } = useApp();
    const { login } = useAuth();
    const [specialities, setSpecialities] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData, resetForm);
        },
    });

    useEffect(() => {
        GetSpecialities();
    }, [locale]);

    const GetSpecialities = async () => {
        let req = await request(nutri.get_specialities, null, null, {
            locale,
        });
        if (req != null) {
            let selectSpecial = map(req.result, (element, index) => {
                return { id: element.id, name: element.name };
            });
            setSpecialities(selectSpecial);
        }
    };

    const SendForm = async (formData, resetForm) => {
        let params = { ...objectsSignUp.step_1, ...formData };
        loadElement(true);
        let req = await request(nutri.post_signin, params, null, {
            locale,
        });
        loadElement(false);
        if (req != null) {
            await CreateMedicalSettings();
            // login(req);
            // resetForm(initialValues());
            // router.push("/signup_step_3");

            router.push("/");
            message_1(GetLanguage("validation", "success_request"));
        }
    };

    const CreateMedicalSettings = async () => {
        loadElement(true);
        let req = await request(
            medical.post_settings_medical,
            deafaultValues,
            null,
            {
                locale,
            }
        );
        loadElement(false);
    };

    let tagTerms = (
        <>
            <TagLang group={"input"} tag={"aceptTerms"} />{" "}
            <SetLink route={"/terms"}>
                <TagLang group={"input"} tag={"aceptTerms_1"} />
            </SetLink>
        </>
    );

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-5">
                    <FieldPic formik={formik} name={"picture"} />
                </div>
                <div className="col-12 col-md-7">
                    <div className="row">
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"lastName"} />
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
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"specialization"} />
                        </div>
                        <div className="sty-input">
                            <FieldSelect
                                formik={formik}
                                name={"specialty"}
                                elements={specialities}
                            />
                            <MessageValidation
                                error={formik.errors.specialty}
                            />
                        </div>
                    </div>
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang
                                group={"input"}
                                tag={"professionalLicense"}
                            />
                        </div>
                        <div className="sty-input">
                            <input
                                name={`professionalLicense`}
                                value={formik.values.professionalLicense}
                                onChange={formik.handleChange}
                                type="text"
                            />
                            <MessageValidation
                                error={formik.errors.professionalLicense}
                            />
                        </div>
                    </div>
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
                            <MessageValidation error={formik.errors.phone} />
                        </div>
                    </div>
                    <div className="sty-checkbox-container">
                        <FieldCheck
                            formik={formik}
                            name={"terms"}
                            tag={tagTerms}
                        />
                        <MessageValidation error={formik.errors.terms} />
                    </div>
                </div>
            </div>
            <div className="text-center sty-button-mrgin-1">
                <button className="sty-button-dash-1">
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/save_w.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"button"} tag={"save"} />
                    </div>
                </button>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        picture: null,
        firstName: "",
        lastName: "",
        specialty: "",
        professionalLicense: "",
        phone: "",
        terms: false,
    };
}

function validationSchema() {
    return {
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
        specialty: Yup.string().required("required"),
        professionalLicense: Yup.string().required("required"),
        phone: Yup.string().required("required"),
        terms: Yup.boolean().oneOf([true], "must_accept_terms"),
    };
}

const deafaultValues = {
    reason: true,
    notes: true,
    diarrhea: true,
    constipation: true,
    gastritis: true,
    ulcer: true,
    nausea: true,
    pyrosis: true,
    vomit: true,
    colitis: true,
    observations: true,
    disease: true,
    pastDisease: true,
    laxative: true,
    diuretic: true,
    antacid: true,
    analgesic: true,
    surgeries: true,
    obesity: true,
    diabetes: true,
    hypertension: true,
    cancer: true,
    thyroidProblems: true,
    dyslipidemia: true,
    heartDisease: true,
    gastrointestinalDisease: true,
    otherDiseases: true,
    pregnancy: true,
    gestationalAge: true,
    lastMenstrualPeriod: true,
    hormonalProblems: true,
    hormonalTherapy: true,
    contraceptives: true,
    climacteric: true,
    alcohol: true,
    smoke: true,
    coffee: true,
    meals: true,
    allergies: true,
    restrictions: true,
    water: true,
    dislikes: true,
    preferred: true,
    dietNotes: true,
};
