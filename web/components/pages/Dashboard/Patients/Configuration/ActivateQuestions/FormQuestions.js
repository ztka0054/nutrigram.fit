import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { size, map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import consulation from "../../../../../../helper/core_services/endpoints/consulation";
import { message_1 } from "../../../../../../helper/appearance/messages";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import SubFormQuestions from "./FormSubQuestions.js";

export default function FormQuestionsClinics() {
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
        GetQuestions();
    }, []);

    useEffect(() => {
        if (flagSave) {
            GetQuestions();
            setFlagSave(false);
        }
    }, [flagSave]);

    const GetQuestions = async () => {
        let req = await request(
            consulation.get_questions_settings,
            null,
            null,
            {
                locale,
            }
        );
        if (req != null) {
            let nutriQuestions = [];
            map(req, (element) => {
                if (element.nutritionist == null) {
                    let values = element;
                    if (values.setting == null) values.isHidden = true;
                    else values.isHidden = !element.setting.isHidden;
                    nutriQuestions.push(values);
                }
            });
            PutDataQuestions(nutriQuestions);
        }
    };

    const PutDataQuestions = (info) => {
        formik.setValues({ questions: info });
    };

    const SendForm = async (formData) => {
        let requestQuestions = [];
        map(formData.questions, (element) => {
            let params = { isHidden: !element.isHidden };
            requestQuestions.push(
                request(
                    consulation.put_questions_settings,
                    params,
                    [element.id],
                    {
                        locale,
                    }
                )
            );
        });
        await Promise.all(requestQuestions);
        setFlagSave(true);
        message_1(GetLanguage("validation", "message_1"));
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
                <FieldArray
                    name="questions"
                    render={(arrayHelpers) => (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    <SubFormQuestions
                                        formik={formik}
                                        arrayHelpers={arrayHelpers}
                                        father={"questions"}
                                    />
                                </div>
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
        questions: [],
    };
}

function validationSchema() {
    return {};
}
