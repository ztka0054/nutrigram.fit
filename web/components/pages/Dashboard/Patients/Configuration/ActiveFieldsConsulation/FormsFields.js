import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../../helper/core_services/core/requestService";
import consulation from "../../../../../../helper/core_services/endpoints/consulation";
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
        let req = await request(consulation.get_settings, null, null, {
            locale,
        });
        PutDataQuestions(req);
    };

    const PutDataQuestions = (info) => {
        formik.setValues(info);
    };

    const SendForm = async (info) => {
        let req = await request(consulation.put_settings, info, null, {
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
                        name={"harris"}
                        formik={formik}
                        tag={GetLanguage("input", "harris")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"mifflin"}
                        formik={formik}
                        tag={GetLanguage("input", "mifflin")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"owen"}
                        formik={formik}
                        tag={GetLanguage("input", "owen")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"fao"}
                        formik={formik}
                        tag={GetLanguage("input", "fao")}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FieldCheck
                        name={"average"}
                        formik={formik}
                        tag={GetLanguage("input", "average")}
                    />
                </div>
                <div className="col-3">
                    <FieldCheck
                        name={"activity"}
                        formik={formik}
                        tag={GetLanguage("input", "activity")}
                    />
                </div>
            </div>
            <div className="col-12 text-center sty-magin-b-1">
                <button className="sty-button-dash-1" type="submit">
                    <div className="sty-icon">
                        <img src="/static/img/favicons/app/save_w.svg" />
                    </div>
                    <div className="sty-tag">
                        {GetLanguage("button", "save")}
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
