import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import medical from "../../../../../../helper/core_services/endpoints/medical_records";
import { message_1 } from "../../../../../../helper/appearance/messages";

import FieldCheck from "../../../../../../helper/forms/elements/check";

export default function FormsFields() {
    const { locale } = useApp();

    const [flagSave, setFlagSave] = useState(false);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData);
        },
    });

    useEffect(() => {
        GetData();
    }, []);

    useEffect(() => {
        if (flagSave) {
            GetData();
            setFlagSave(false);
        }
    }, [flagSave]);

    const GetData = async () => {
        let dataValue = {};
        let req = await request(medical.get_settings_medical, null, null, {
            locale,
        });
        if (req != null) {
            dataValue = req;
        }
        formik.setValues(dataValue);
    };

    const SendForm = async (info) => {
        let req = await request(medical.patch_settings_medical, info, null, {
            locale,
        });
        if (req != null) {
            setFlagSave(true);
            message_1(GetLanguage("validation", "message_1"));
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"reason"}
                        formik={formik}
                        tag={GetLanguage("input", "reason_consultation")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"notes"}
                        formik={formik}
                        tag={GetLanguage("input", "notes")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"diarrhea"}
                        formik={formik}
                        tag={GetLanguage("input", "diarrhea")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"constipation"}
                        formik={formik}
                        tag={GetLanguage("input", "constipation")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"gastritis"}
                        formik={formik}
                        tag={GetLanguage("input", "gastritis")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"ulcer"}
                        formik={formik}
                        tag={GetLanguage("input", "ulcer")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"nausea"}
                        formik={formik}
                        tag={GetLanguage("input", "nausea")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"pyrosis"}
                        formik={formik}
                        tag={GetLanguage("input", "pyrosis")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"vomit"}
                        formik={formik}
                        tag={GetLanguage("input", "vomit")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"colitis"}
                        formik={formik}
                        tag={GetLanguage("input", "colitis")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"observations"}
                        formik={formik}
                        tag={GetLanguage("input", "observations")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"disease"}
                        formik={formik}
                        tag={GetLanguage("input", "ailments")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"pastDisease"}
                        formik={formik}
                        tag={GetLanguage("input", "past_ailments")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"laxative"}
                        formik={formik}
                        tag={GetLanguage("input", "laxative")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"diuretic"}
                        formik={formik}
                        tag={GetLanguage("input", "diuretic")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"antacid"}
                        formik={formik}
                        tag={GetLanguage("input", "antacid")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"analgesic"}
                        formik={formik}
                        tag={GetLanguage("input", "analgesic")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"surgeries"}
                        formik={formik}
                        tag={GetLanguage("input", "operations")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"obesity"}
                        formik={formik}
                        tag={GetLanguage("input", "obesity")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"diabetes"}
                        formik={formik}
                        tag={GetLanguage("input", "diabetes")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"hypertension"}
                        formik={formik}
                        tag={GetLanguage("input", "hypertension")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"cancer"}
                        formik={formik}
                        tag={GetLanguage("input", "cancer")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"thyroidProblems"}
                        formik={formik}
                        tag={GetLanguage("input", "thyroidProblems")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"dyslipidemia"}
                        formik={formik}
                        tag={GetLanguage("input", "dyslipidemia")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"heartDisease"}
                        formik={formik}
                        tag={GetLanguage("input", "heartDisease")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"gastrointestinalDisease"}
                        formik={formik}
                        tag={GetLanguage("input", "gastrointestinalDisease")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"otherDiseases"}
                        formik={formik}
                        tag={GetLanguage("input", "other_ailments")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"pregnancy"}
                        formik={formik}
                        tag={GetLanguage("input", "pregnant")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"gestationalAge"}
                        formik={formik}
                        tag={GetLanguage("input", "gestation_time")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"lastMenstrualPeriod"}
                        formik={formik}
                        tag={GetLanguage("input", "last_menstruation")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"hormonalProblems"}
                        formik={formik}
                        tag={GetLanguage("input", "hormonal_problems")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"hormonalTherapy"}
                        formik={formik}
                        tag={GetLanguage("input", "hormonal_therapy")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"contraceptives"}
                        formik={formik}
                        tag={GetLanguage("input", "contraceptives_1")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"climacteric"}
                        formik={formik}
                        tag={GetLanguage("input", "climacteric")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"alcohol"}
                        formik={formik}
                        tag={GetLanguage("input", "alcohol")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"smoke"}
                        formik={formik}
                        tag={GetLanguage("input", "smoke")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"coffee"}
                        formik={formik}
                        tag={GetLanguage("input", "coffee")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"meals"}
                        formik={formik}
                        tag={GetLanguage("input", "foods")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"allergies"}
                        formik={formik}
                        tag={GetLanguage("input", "allergies")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"restrictions"}
                        formik={formik}
                        tag={GetLanguage("input", "restrictions")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"water"}
                        formik={formik}
                        tag={GetLanguage("input", "water")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"dislikes"}
                        formik={formik}
                        tag={GetLanguage("input", "not_like")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"preferred"}
                        formik={formik}
                        tag={GetLanguage("input", "preferences")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"notes"}
                        formik={formik}
                        tag={GetLanguage("input", "notes")}
                    />
                </div>
            </div>
            <div className="col-12 text-center sty-magin-b-1">
                <button className="sty-button-dash-1" type="submit">
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
        questions: [],
    };
}

function validationSchema() {
    return {};
}
