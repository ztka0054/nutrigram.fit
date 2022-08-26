import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../../../helper/core_services/core/requestService";
import consulation from "../../../../../../../../helper/core_services/endpoints/consulation";
import { loadElement } from "../../../../../../../../helper/appearance/load";

import FieldDocument from "../../../../../../../../helper/forms/elements/document";
import FieldDate from "../../../../../../../../helper/forms/elements/date";
import FieldTime from "../../../../../../../../helper/forms/elements/time";

export default function FormBiochemical({ ShowBiomedical }) {
    const { locale } = useApp();
    const { query } = useRouter();

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData);
        },
    });

    const SendForm = async (formData) => {
        let newParams = { ...formData };
        newParams.datetime = `${newParams.date}T${moment(newParams.hour).format(
            "HH:mm:ss"
        )}`;
        loadElement(true);
        let req = await request(
            consulation.post_analisys,
            newParams,
            [query.id],
            {
                locale,
            }
        );
        loadElement(false);
        if (req != null) {
            ShowBiomedical();
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-5">
                    <FieldDocument formik={formik} name={"document"} />
                    <MessageValidation error={formik.errors.document} />
                </div>
                <div className="col-7">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang group={"input"} tag={"date"} />
                                    </div>
                                    <div className="sty-input">
                                        <FieldDate
                                            formik={formik}
                                            name="date"
                                        />
                                        <MessageValidation
                                            error={formik.errors.date}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang group={"input"} tag={"hour"} />
                                    </div>
                                    <div className="sty-input">
                                        <FieldTime
                                            formik={formik}
                                            name="hour"
                                        />
                                        <MessageValidation
                                            error={formik.errors.hour}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="sty-cont-input-2">
                                    <div className="sty-tag">
                                        <TagLang group={"input"} tag={"name"} />
                                    </div>
                                    <div className="sty-input">
                                        <input
                                            name={`name`}
                                            type="text"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                        <MessageValidation
                                            error={formik.errors.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </div>
        </form>
    );
}

function initialValues() {
    return {
        document: "",
        name: "",
        date: "",
        hour: "",
    };
}

function validationSchema() {
    return {
        document: Yup.string().required("required"),
        name: Yup.string().required("required"),
        date: Yup.string().required("required"),
        hour: Yup.string().required("required"),
    };
}
