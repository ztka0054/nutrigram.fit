import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map, size } from "lodash";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import hydratation from "../../../../../../../../helper/core_services/endpoints/hydration";
import { message_1 } from "../../../../../../../../helper/appearance/messages";
import GetLanguage from "../../../../../../../../helper/i18n/getValueTagLang";

import SubFormQuestions from "./FormContHydratation";

export default function FormHydratation({ ShowData }) {
    const { query } = useRouter();
    const { locale } = useApp();
    const [dataUpdate, setDataUpdate] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendNewForm(formData, resetForm);
        },
    });

    useEffect(() => {
        GetDataHydratation();
    }, []);

    const GetDataHydratation = async () => {
        let req = await request(
            hydratation.get_hydratation,
            null,
            [query.id],
            locale
        );
        if (req != null) {
            let hydrations = map(req, (element) => {
                let values = { ...element };
                values.fromTime = moment(
                    `2020-01-01T${values.fromTime}`
                ).toDate();
                values.toTime = moment(`2020-01-01T${values.toTime}`).toDate();
                return values;
            });
            formik.setValues({ hydrations });
            setDataUpdate(hydrations);
        }
    };

    const SendNewForm = async (formData) => {
        let arrayRequest = [];
        map(dataUpdate, (element) => {
            let find = formData.hydrations.find((obj) => {
                return obj.id === element.id;
            });
            if (find == undefined)
                arrayRequest.push(
                    request(
                        hydratation.delete_hydratation,
                        null,
                        [query.id, element.id],
                        {
                            locale,
                        }
                    )
                );
        });
        map(formData.hydrations, (element) => {
            let params = { ...element };
            params.fromTime = moment(params.fromTime).format("HH:mm:ss");
            params.toTime = moment(params.toTime).format("HH:mm:ss");
            if (!params?.id)
                arrayRequest.push(
                    request(hydratation.post_hydratation, params, [query.id], {
                        locale,
                    })
                );
            if (params?.id)
                arrayRequest.push(
                    request(
                        hydratation.patch_hydratation,
                        params,
                        [query.id, params?.id],
                        {
                            locale,
                        }
                    )
                );
        });
        await Promise.all(arrayRequest);
        ShowData();
        message_1(GetLanguage("validation", "message_1"));
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
                <FieldArray
                    name="hydrations"
                    render={(arrayHelpers) => (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    <SubFormQuestions
                                        formik={formik}
                                        arrayHelpers={arrayHelpers}
                                        father={"hydrations"}
                                    />
                                </div>
                            </div>
                            <div className="text-right">
                                <button
                                    className="sty-button-dash-1 color-3"
                                    type="button"
                                    onClick={() => arrayHelpers.push({})}>
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/add_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang group={"button"} tag={"add"} />
                                    </div>
                                </button>
                            </div>
                            <div className="col-12 text-center sty-magin-b-1">
                                <button
                                    className="sty-button-dash-1"
                                    type="submit">
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/save_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"save"}
                                        />
                                    </div>
                                </button>
                            </div>
                        </>
                    )}
                />
            </FormikProvider>
        </form>
    );
}

function initialValues() {
    return {
        // image_check: "",
    };
}

function validationSchema() {
    return {
        // image_check: Yup.string().required("required"),
    };
}
