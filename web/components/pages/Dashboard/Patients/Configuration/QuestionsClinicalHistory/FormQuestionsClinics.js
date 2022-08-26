import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import medical from "../../../../../../helper/core_services/endpoints/medical_records";
import { message_1 } from "../../../../../../helper/appearance/messages";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import SubFormQuestions from "./FormSubQuestions";

export default function FormQuestionsClinics() {
    const { locale } = useApp();

    const [flagSave, setFlagSave] = useState(false);
    const [valuesQuestions, setValuesQuestions] = useState([]);

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
            medical.get_medical_records,
            { category: 1 },
            null,
            locale
        );
        if (req != null) {
            PutDataQuestions(req.result);
        }
    };

    const PutDataQuestions = (info) => {
        formik.setValues({ questions: info });
        setValuesQuestions(info);
    };

    const SendForm = async (formData) => {
        let requestQuestions = [];
        map(valuesQuestions, (element) => {
            let find = formData.questions.find((obj) => {
                if (obj?.id) if (obj.id === element.id) return true;
                return false;
            });
            if (find === undefined) {
                requestQuestions.push(
                    request(medical.delete_question, null, [element.id], {
                        locale,
                    })
                );
            }
        });
        map(formData.questions, (element) => {
            if (!element?.id)
                requestQuestions.push(
                    request(
                        medical.post_new_question,
                        { question: element.question },
                        null,
                        {
                            locale,
                        }
                    )
                );
            if (element?.id)
                requestQuestions.push(
                    request(
                        medical.patch_edit_question,
                        { question: element.question },
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
                            <div className="text-right">
                                <button
                                    className="sty-button-dash-1 color-3"
                                    type="button"
                                    onClick={() =>
                                        arrayHelpers.push({
                                            question: "",
                                        })
                                    }>
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
        questions: [],
    };
}

function validationSchema() {
    return {
        questions: Yup.array().of(
            Yup.object().shape({
                question: Yup.string().required("required"),
            })
        ),
    };
}
