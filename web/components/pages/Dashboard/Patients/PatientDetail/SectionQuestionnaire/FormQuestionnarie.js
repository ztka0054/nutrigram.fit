import React, { useState, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";

import request from "../../../../../../helper/core_services/core/requestService";
import apiMedicalRecords from "../../../../../../helper/core_services/endpoints/medical_records";
import { loadElement } from "../../../../../../helper/appearance/load";

import FormSubContQuestions from "./FormSubContQuestions";

export default function FormQuestionnarie({
    idPatient = null,
    questionsInfo,
    setFormQuestions,
    setFlagSendQuestions,
}) {
    const { locale } = useApp();

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData, resetForm);
        },
    });

    useEffect(() => {
        setFormQuestions(formik);
    }, []);

    useEffect(() => {
        if (idPatient != null) getInformation();
    }, [questionsInfo, idPatient]);

    useEffect(() => {
        GetQuestions();
    }, []);

    const GetQuestions = async () => {
        formik.setFieldValue("questions", questionsInfo);
    };

    const getInformation = async () => {
        let reqQuestons = await request(
            apiMedicalRecords.get_question_ans,
            { category: 1 },
            [idPatient],
            { locale },
            false
        );
        if (reqQuestons != null) {
            let questions = map(questionsInfo, (element, index) => {
                let find = reqQuestons.find((obj) => {
                    return obj.question === element.id;
                });
                if (find == undefined) return { ...element };
                else
                    return {
                        ...element,
                        answer: find.answer,
                        idAnswer: find.id,
                    };
            });
            formik.setValues({ questions });
        }
    };

    const SendForm = async (formData) => {
        await SaveQuestions(formData);
        setFlagSendQuestions(true);
    };

    const SaveQuestions = async (formData) => {
        let arrayRequest = [];
        map(formData.questions, (element) => {
            if (element.answer != null) {
                if (!element?.idAnswer) {
                    let params = {
                        answer: element.answer,
                        question: element.id,
                    };
                    arrayRequest.push(
                        request(
                            apiMedicalRecords.post_new_question_ans,
                            params,
                            [formData.idUser],
                            {
                                locale,
                            }
                        )
                    );
                }
                if (element?.idAnswer) {
                    let params = {
                        answer: element.answer,
                        question: element.id,
                    };
                    arrayRequest.push(
                        request(
                            apiMedicalRecords.patch_new_question_ans,
                            params,
                            [formData.idUser, element.idAnswer],
                            {
                                locale,
                            }
                        )
                    );
                }
            }
        });
        loadElement(true);
        await Promise.all(arrayRequest);
        loadElement(false);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <FormikProvider value={formik}>
                            <FieldArray
                                name="questions"
                                render={(arrayHelpers) => (
                                    <FormSubContQuestions
                                        formik={formik}
                                        arrayHelpers={arrayHelpers}
                                        father={"questions"}
                                    />
                                )}
                            />
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return { questions: [] };
}

function validationSchema() {
    return {};
}
