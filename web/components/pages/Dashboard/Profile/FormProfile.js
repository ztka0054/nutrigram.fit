import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../hooks/useApp";
import TagLang from "../../../modules/GetTagLang";
import SetLink from "../../../modules/SetLink";

import request from "../../../../helper/core_services/core/requestService";
import nutri from "../../../../helper/core_services/endpoints/nutritionist";
import cleanerNullsObject from "../../../../helper/array/cleanNullsObject";
import subscription from "../../../../helper/core_services/endpoints/subscription";

import InputText from "../../../components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputSelect from "../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";

import FieldPic from "../../../../helper/forms/elements/pic";
import FieldDocument from "../../../../helper/forms/elements/document";
import { loadElement } from "../../../../helper/appearance/load";
import { message_1 } from "../../../../helper/appearance/messages";
import GetLanguage from "../../../../helper/i18n/getValueTagLang";
import ScrollError from "../../../../helper/scroll/ScrollError";

export default function FormProfile() {
    const { locale } = useApp();
    const [specialities, setSpecialities] = useState([]);
    const [namePlan, setNamePlan] = useState(null);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData);
        },
    });

    useEffect(() => {
        GetSpecialities();
    }, [locale]);

    useEffect(() => {
        GetData();
    }, [locale]);

    useEffect(() => {
        GetPlan();
    }, [locale]);

    const GetData = async () => {
        let req = await request(nutri.get_nutritionist, null, null, {
            locale,
        });
        if (req != null) {
            let values = cleanerNullsObject(req);
            formik.setValues(values);
        }
    };

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

    const GetPlan = async () => {
        let req = await request(subscription.get_subscription, null, null, {
            locale,
        });
        if (req != null) {
            setNamePlan({
                name: req?.price.subscription.name,
                period: req?.price?.name,
            });
        }
    };

    const SendForm = async (formData) => {
        let params = { ...formData };
        if (params.picture == "") delete params.picture;
        if (params.webPage == null) delete params.webPage;
        if (params.cv == "") delete params.cv;
        if (params.facebook == null) delete params.facebook;
        if (params.twitter == null) delete params.twitter;
        if (params.instagram == null) delete params.instagram;
        loadElement(true);
        let result = await request(nutri.put_nutritionist, params, null, {
            locale,
        });
        loadElement(false);
        if (result != null) {
            message_1(GetLanguage("validation", "message_1"));
        }
    };

    const ClickSend = () => {
        ScrollError();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-5 sty-hide-resp-1">
                    <FieldPic formik={formik} name={"picture"} />
                    <div className="sty-info-tag">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"CV"} />
                        </div>
                    </div>
                    <FieldDocument formik={formik} name={"cv"} />
                </div>

                <div className="col-12 col-md-7">
                    <div className="row sty-cont-resp-1">
                        <div className="col-12 col-md-4">
                            <div className="sty-info-tag">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"tag_code"} />
                                </div>
                                {/* <div className="sty-data">skdfijs783489</div> */}
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="sty-info-tag">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"tag_plan"} />
                                </div>
                                <div className="sty-data">
                                    {namePlan == null && (
                                        <TagLang
                                            group={"validation"}
                                            tag={"no_plan"}
                                        />
                                    )}
                                    {namePlan != null && (
                                        <>
                                            {namePlan.name}
                                            <br />
                                            {namePlan.period}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <SetLink route={"/dashboard/profile/plan"}>
                                <button className="sty-button-dash-1 fix-25">
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/add_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"tag_d_1"}
                                        />
                                    </div>
                                </button>
                            </SetLink>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <InputText
                                formik={formik}
                                title={"name"}
                                name={"firstName"}
                                value={formik.values.firstName}
                                error={formik.errors.firstName}
                                required={true}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <InputText
                                formik={formik}
                                title={"lastName"}
                                name={"lastName"}
                                value={formik.values.lastName}
                                error={formik.errors.lastName}
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <InputSelect
                                formik={formik}
                                title={"specialization"}
                                name={"specialty"}
                                value={formik.values.specialty}
                                error={formik.errors.specialty}
                                elements={specialities}
                                required={true}
                            />
                        </div>
                        <div className="col-12">
                            <InputText
                                formik={formik}
                                title={"professionalLicense"}
                                name={"professionalLicense"}
                                value={formik.values.professionalLicense}
                                error={formik.errors.professionalLicense}
                                required={true}
                            />
                        </div>
                        <div className="col-12">
                            <InputText
                                formik={formik}
                                title={"phone"}
                                name={"phone"}
                                value={formik.values.phone}
                                error={formik.errors.phone}
                                required={true}
                            />
                        </div>
                        <div className="col-12">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"email"} />
                                </div>
                                <div className="sty-input">
                                    <div className="value-text">
                                        {formik.values.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <InputText
                                        formik={formik}
                                        title={"facebook"}
                                        name={"facebook"}
                                        value={formik.values.facebook}
                                        error={formik.errors.facebook}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <InputText
                                        formik={formik}
                                        title={"twitter"}
                                        name={"twitter"}
                                        value={formik.values.twitter}
                                        error={formik.errors.twitter}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <InputText
                                        formik={formik}
                                        title={"instagram"}
                                        name={"instagram"}
                                        value={formik.values.instagram}
                                        error={formik.errors.instagram}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <InputText
                                        formik={formik}
                                        title={"webPage"}
                                        name={"webPage"}
                                        value={formik.values.webPage}
                                        error={formik.errors.webPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center sty-magin-b-1">
                <button
                    className="sty-button-dash-1"
                    type="submit"
                    onClick={() => ClickSend()}>
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
        firstName: "",
        lastName: "",
        specialty: "",
        professionalLicense: "",
        phone: "",
        facebook: "",
        twitter: "",
        instagram: "",
        webPage: "",
    };
}

function validationSchema() {
    return {
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
        specialty: Yup.string().required("required"),
        professionalLicense: Yup.string().required("required"),
        phone: Yup.string().required("required"),
    };
}
