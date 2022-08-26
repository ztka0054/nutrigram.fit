import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map, size } from "lodash";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../../../helper/core_services/core/requestService";
import consulation from "../../../../../../../../helper/core_services/endpoints/consulation";
import patient from "../../../../../../../../helper/core_services/endpoints/patients";
import apiMenu from "../../../../../../../../helper/core_services/endpoints/menu";
import Getlanguage from "../../../../../../../../helper/i18n/getValueTagLang";
import {
    harris,
    mifflin,
    owen,
    oms,
    average,
} from "../../../../../../../../helper/calculations/energy";
import fixDate from "../../../../../../../../helper/date/fixDateTimeService";
import { message_1 } from "../../../../../../../../helper/appearance/messages";
import { loadElement } from "../../../../../../../../helper/appearance/load";

import FieldRadio from "../../../../../../../../helper/forms/elements/radio";

import InputTextForm_1 from "../../../../../../../../components/components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputTextAreaForm_1 from "../../../../../../../../components/components/Inputs/InputTypeForm_1/InputTextAreaForm_1";
import InputTimeForm_1 from "../../../../../../../../components/components/Inputs/InputTypeForm_1/InputTimeForm_1";
import InputDate_1 from "../../../../../../../../components/components/Inputs/InputTypeForm_1/InputDate_1";

import FormContQuestionnarie from "./FormContQuestionnarie";
import FormContAntrophometric from "./FormContAntrophometric";
import FormContFolds from "./FormContFolds";
import FormContFoldsCircunferences from "./FormContFoldsCircunferences";
import SectionMenu from "../SectionMenu";
import getTimeZoneDate from "../../../../../../../../helper/date/getTimeZoneDate";
import ScrollError from "../../../../../../../../helper/scroll/ScrollError";

const icon_title = "/static/img/favicons/app/icon_nu_1.png";

const idAntropo = 0;
const idFolds = 1;
const idCircum = 2;

export default function FormConsulation({
    idConsulation,
    ShowConsults,
    dataPatient,
    setRefreshPatient,
    dataMenuPatient,
}) {
    const { query, locale } = useRouter();
    const { putFlagChangeElement } = useApp();
    const [flagSettings, setFlagSettings] = useState({});
    const [valuesActivity, setValuesActivity] = useState([]);
    const [averageEnergy, setAverageEnergy] = useState(0);
    const [flagFollow, setFlagFollow] = useState(false);
    const [stateConsult, setStateConsult] = useState(1);
    const [dataMenu, setDataMenu] = useState(null);
    const [nameMenu, setNameMenu] = useState(null);
    const [dataConsulation, setDataConsulation] = useState(null);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (idConsulation == null) SendForm(formData, resetForm);
            if (idConsulation != null) SendUpdate(formData, resetForm);
            setRefreshPatient(true);
        },
    });

    const SendForm = async (formData, resetForm) => {
        let newData = { ...formData };
        let menuPatient = await SaveMenu();
        if (menuPatient != null) newData.patientMenu = menuPatient;
        newData.datetime = getTimeZoneDate(`${newData.date}T${newData.hour}`);
        console.log(`${newData.date}T${newData.hour}`);
        loadElement(true);
        let reqConsulation = await request(
            consulation.post_consulation,
            newData,
            [query.id],
            {
                locale,
            }
        );
        if (reqConsulation != null) {
            let paramsAntropo = {
                consultation: reqConsulation.id,
                datetime: newData.datetime,
                measurements: [
                    ...formData.anthropometrys,
                    ...formData.folds,
                    ...formData.circumferences,
                ],
            };
            await request(
                consulation.post_anthropometry,
                paramsAntropo,
                [query.id],
                {
                    locale,
                }
            );
            let arrayRequest = [];
            map(
                [
                    ...formData.anthropometrys,
                    ...formData.folds,
                    ...formData.circumferences,
                ],
                (element) => {
                    let paramTrait = {
                        trait: element.trait,
                        goal: element.goal,
                    };
                    if (element?.id)
                        arrayRequest.push(
                            request(
                                consulation.patch_trait_patient,
                                paramTrait,
                                [query.id, element.id],
                                {
                                    locale,
                                }
                            )
                        );
                    if (!element?.id)
                        arrayRequest.push(
                            request(
                                consulation.post_trait_patient,
                                paramTrait,
                                [query.id],
                                {
                                    locale,
                                }
                            )
                        );
                }
            );
            await Promise.all(arrayRequest);
            loadElement(false);
            ShowConsults();
            putFlagChangeElement();
            message_1(Getlanguage("validation", "message_1"));
        }
        setRefreshPatient(true);
        resetForm();
    };

    const SendUpdate = async (formData) => {
        let newData = { ...formData };
        delete newData.anthropometrys;
        delete newData.folds;
        delete newData.circumferences;
        newData.datetime = getTimeZoneDate(
            `${newData.date}T${moment(newData.hour).format("HH:mm:ss")}`
        );
        loadElement(true);
        let reqConsulation = await request(
            consulation.patch_consulation,
            newData,
            [query.id, idConsulation],
            {
                locale,
            }
        );
        let arrayRequest = [];
        if (reqConsulation != null) {
            let paramsAntropo = {
                consultation: reqConsulation.id,
                datetime: newData.datetime,
                measurements: [
                    ...formData.anthropometrys,
                    ...formData.folds,
                    ...formData.circumferences,
                ],
            };
            await request(
                consulation.patch_anthropometry,
                paramsAntropo,
                [query.id, newData.idAnthropometry],
                {
                    locale,
                }
            );
            map(
                [
                    ...formData.anthropometrys,
                    ...formData.folds,
                    ...formData.circumferences,
                ],
                (element) => {
                    let paramTrait = {
                        trait: element.trait,
                        goal: element.goal,
                    };
                    arrayRequest.push(
                        request(
                            consulation.patch_trait_patient,
                            paramTrait,
                            [query.id, element.id],
                            {
                                locale,
                            }
                        )
                    );
                }
            );
        }
        await Promise.all(arrayRequest);
        loadElement(false);
        ShowConsults();
        putFlagChangeElement();
        message_1(Getlanguage("validation", "message_1"));
        setRefreshPatient(true);
        resetForm();
    };

    useEffect(() => {
        GetCuestionnarie();
        GetValuesActivity();
    }, [locale]);

    useEffect(() => {
        if (query?.id) ValidateFirstConsulation();
    }, [query]);

    const ValidateFirstConsulation = async () => {
        let reqConsultation = await request(
            consulation.get_consulations,
            {
                page_size: 1,
            },
            [query.id],
            {
                locale,
            }
        );
        // let finf;
        if (size(reqConsultation.result) > 0) setFlagFollow(true);
    };

    useEffect(() => {
        if (query?.id) {
            if (idConsulation != null) GetDataUpdate();
            else GetTraits(query.id);
        }
    }, [query, locale, idConsulation]);

    useEffect(() => {
        GetSettings();
    }, []);

    useEffect(() => {
        if (dataPatient != null) EnergyCalculation();
    }, [dataPatient, flagSettings, formik.values.anthropometrys]);

    useEffect(() => {
        PhisicalActivity();
    }, [averageEnergy, formik.values]);

    const GetDataUpdate = async () => {
        let req = await request(
            consulation.get_consulation,
            null,
            [query.id, idConsulation],
            {
                locale,
            }
        );
        if (req != null) {
            setDataConsulation(req);
            let answers = map(req.answers, (element) => {
                return {
                    question_tag: element.question.question,
                    question: element.question.id,
                    answer: element.answer,
                };
            });
            let values = {
                date: fixDate(req.datetime).format("YYYY-MM-DD"),
                hour: fixDate(req.datetime).toDate(),
                notes: req.notes,
                activity: req.activity,
                answers,
                idAnthropometry: req.anthropometry.id,
            };
            let traitsPatient = await request(
                consulation.get_traits_patient,
                null,
                [query.id],
                {
                    locale,
                }
            );
            let arrayAntropo = [];
            let arrayFolds = [];
            let arrayCircumf = [];
            map(traitsPatient, (element) => {
                let finder = req.anthropometry.measurements.find((obj) => {
                    return obj.trait.id === element.trait.id;
                });
                if (finder != undefined) {
                    let params = {
                        id: element.id,
                        trait: element.trait.id,
                        traitName: element.trait.name,
                        supportsGoal: element.trait.supportsGoal,
                        identifier: element.trait.identifier,
                        value: finder.value,
                        goal: element.goal,
                    };

                    if (element.trait.group == idAntropo)
                        arrayAntropo.push(params);
                    if (element.trait.group == idFolds) arrayFolds.push(params);
                    if (element.trait.group == idCircum)
                        arrayCircumf.push(params);
                }
            });
            values.anthropometrys = arrayAntropo;
            values.folds = arrayFolds;
            values.circumferences = arrayCircumf;
            formik.setValues(values);
            GetActualValuesUpdate(
                fixDate(req.datetime).format("YYYY-MM-DD"),
                arrayAntropo,
                arrayFolds,
                arrayCircumf
            );
        }
    };

    const GetValuesActivity = () => {
        setValuesActivity([
            {
                tag: Getlanguage("input", "light"),
                value: "1",
            },
            {
                tag: Getlanguage("input", "moderate"),
                value: "2",
            },
            {
                tag: Getlanguage("input", "heavy"),
                value: "3",
            },
        ]);
    };

    const GetSettings = async () => {
        let req = await request(consulation.get_settings, null, null, {
            locale,
        });
        if (req != null) {
            setFlagSettings(req);
        }
    };

    const GetCuestionnarie = async () => {
        let req = await request(consulation.get_questions, null, null, {
            locale,
        });
        let questions = map(req, (element, index) => {
            return { question_tag: element.question, question: element.id };
        });
        formik.setFieldValue("answers", questions);
    };

    const GetTraits = async (idPatient) => {
        let traits = await request(consulation.get_traits, null, null, locale);
        let traitsPatient = await request(
            consulation.get_traits_patient,
            null,
            [idPatient],
            {
                locale,
            }
        );
        if (traits != null) {
            let arrayAntropo = [];
            let arrayFolds = [];
            let arrayCircumf = [];
            map(traits, (element, i) => {
                let params = {
                    trait: element.id,
                    traitName: element.name,
                    supportsGoal: element.supportsGoal,
                    identifier: element.identifier,
                    past: 0,
                    value: 0,
                    goal: 0,
                };
                let find = traitsPatient.find((obj) => {
                    return obj.trait.id === element.id;
                });
                if (find != undefined) {
                    params.id = find.id;
                    params.goal = find.goal;
                }

                if (element.group == idAntropo) arrayAntropo.push(params);
                if (element.group == idFolds) arrayFolds.push(params);
                if (element.group == idCircum) arrayCircumf.push(params);
            });
            formik.setFieldValue("anthropometrys", arrayAntropo);
            formik.setFieldValue("folds", arrayFolds);
            formik.setFieldValue("circumferences", arrayCircumf);
            GetActualValues(arrayAntropo, arrayFolds, arrayCircumf);
        }
    };

    const GetActualValues = async (arrayAntropo, arrayFolds, arrayCircumf) => {
        let reqLast = await request(
            consulation.get_consulations,
            {
                ordering: "-datetime",
                // datetime__lt: `${date}T23:59:59`,
                page_size: 1,
            },
            [query.id],
            {
                locale,
            }
        );
        if (reqLast != null) {
            if (size(reqLast.result) > 0) {
                let req = await request(
                    consulation.get_consulation,
                    null,
                    [query.id, reqLast.result[0].id],
                    {
                        locale,
                    }
                );
                if (req != null) {
                    map(arrayAntropo, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `anthropometrys[${index}].past`,
                                    find.value
                                );
                            if (!element.supportsGoal)
                                formik.setFieldValue(
                                    `anthropometrys[${index}].value`,
                                    find.value
                                );
                        }
                    });
                    map(arrayFolds, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `folds[${index}].past`,
                                    find.value
                                );
                            if (!element.supportsGoal)
                                formik.setFieldValue(
                                    `folds[${index}].value`,
                                    find.value
                                );
                        }
                    });
                    map(arrayCircumf, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `circumferences[${index}].past`,
                                    find.value
                                );
                            if (!element.supportsGoal)
                                formik.setFieldValue(
                                    `circumferences[${index}].value`,
                                    find.value
                                );
                        }
                    });
                }
            }
        }
    };

    const GetActualValuesUpdate = async (
        date,
        arrayAntropo,
        arrayFolds,
        arrayCircumf
    ) => {
        let reqLast = await request(
            consulation.get_consulations,
            {
                ordering: "-datetime",
                datetime__lt: `${date}T00:00:00`,
                page_size: 1,
            },
            [query.id],
            {
                locale,
            }
        );
        if (reqLast != null)
            if (size(reqLast.result) > 0) {
                let req = await request(
                    consulation.get_consulation,
                    null,
                    [query.id, reqLast.result[0].id],
                    {
                        locale,
                    }
                );
                if (req != null) {
                    map(arrayAntropo, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `anthropometrys[${index}].past`,
                                    find.value
                                );
                        }
                    });
                    map(arrayFolds, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `folds[${index}].past`,
                                    find.value
                                );
                        }
                    });
                    map(arrayCircumf, (element, index) => {
                        let find = req.anthropometry.measurements.find(
                            (obj) => {
                                return obj.trait.id === element.trait;
                            }
                        );
                        if (find != undefined) {
                            if (element.supportsGoal)
                                formik.setFieldValue(
                                    `circumferences[${index}].past`,
                                    find.value
                                );
                        }
                    });
                }
            }
    };

    const EnergyCalculation = () => {
        let arrayAverage = [];
        let height = formik?.values["anthropometrys"].find((obj) => {
            return obj.identifier == 1;
        });
        let weight = formik?.values["anthropometrys"].find((obj) => {
            return obj.identifier == 2;
        });
        if (height != undefined && weight != undefined) {
            if (flagSettings?.harris) {
                let valHarris = harris(
                    dataPatient.gender,
                    weight.value,
                    height.value,
                    dataPatient.age
                );
                formik.setFieldValue("harris", valHarris.toFixed(2));
                arrayAverage.push(valHarris);
            }
            if (flagSettings?.mifflin) {
                let valMifflin = mifflin(
                    dataPatient.gender,
                    weight.value,
                    height.value,
                    dataPatient.age
                );
                formik.setFieldValue("mifflin", valMifflin.toFixed(2));
                arrayAverage.push(valMifflin);
            }
            if (flagSettings?.owen) {
                let valOwen = owen(dataPatient.gender, weight.value);
                formik.setFieldValue("owen", valOwen.toFixed(2));
                arrayAverage.push(valOwen);
            }
            if (flagSettings?.fao) {
                let valOMS = oms(
                    dataPatient.gender,
                    weight.value,
                    dataPatient.age
                );
                formik.setFieldValue("fao", valOMS.toFixed(2));
                arrayAverage.push(valOMS);
            }
            if (flagSettings?.average) {
                let valAverage = average(arrayAverage);
                formik.setFieldValue("average", valAverage.toFixed(2));
                setAverageEnergy(valAverage);
            }
        }
    };

    const PhisicalActivity = () => {
        let value = parseInt(formik.values["activity"]);
        if (value) {
            let result = 0;
            if (value == 1) result = averageEnergy * 1.3;
            if (value == 2) result = averageEnergy * 1.4;
            if (value == 3) result = averageEnergy * 1.5;
            formik.setFieldValue("activity_cal", result.toFixed(2));
        }
    };

    const SaveMenu = async () => {
        if (dataMenu != null) {
            let resultMenu = await request(
                apiMenu.post_new_menu_patient,
                dataMenu,
                null,
                { locale }
            );
            if (dataMenu != null) {
                return resultMenu.id;
            }
            return null;
        }
    };

    useEffect(() => {
        if (dataPatient) GetMenuPatient();
    }, [dataPatient, dataConsulation]);

    const GetMenuPatient = async () => {
        if (dataPatient?.menu) {
            if (idConsulation == null) {
                let resultMenuPatient = await request(
                    apiMenu.get_menu_patient,
                    null,
                    [dataPatient?.menu],
                    { locale }
                );
                if (resultMenuPatient != null) {
                    let resultMenu = await request(
                        apiMenu.get_menu,
                        null,
                        [resultMenuPatient.menu],
                        { locale }
                    );
                    let schedules = map(
                        resultMenuPatient?.schedules,
                        (element) => {
                            return {
                                type: element?.type?.id,
                                name: element?.type?.name,
                                fromTime: element.fromTime,
                                toTime: element.toTime,
                            };
                        }
                    );
                    let dataMenu = {
                        patient: query.id,
                        menu: resultMenu?.id,
                        name: resultMenu?.name,
                        schedules: schedules,
                    };
                    setDataMenu(dataMenu);
                }
            }
            if (idConsulation != null) {
                if (dataConsulation?.patientMenu) {
                    let reqPatientMenu = await request(
                        apiMenu.get_menu_patient,
                        null,
                        [dataConsulation.patientMenu],
                        { locale }
                    );
                    if (reqPatientMenu != null) {
                        let resultMenu = await request(
                            apiMenu.get_menu,
                            null,
                            [reqPatientMenu.menu],
                            { locale }
                        );
                        if (resultMenu != null) {
                            let dataMenu = {
                                patient: query.id,
                                menu: resultMenu?.id,
                                name: resultMenu?.name,
                            };
                            setDataMenu(dataMenu);
                        }
                    }
                }
            }
        }
    };

    useEffect(() => {
        if (dataMenu?.name != null) {
            let name = "";
            if (dataMenu.name == "") name = Getlanguage("input", "unnamed");
            if (dataMenu.name != "") name = dataMenu.name;
            setNameMenu(name);
        }
    }, [dataMenu, locale]);

    const ClickShowMenu = () => {
        setStateConsult(2);
    };

    const ClickShowConsult = () => {
        setStateConsult(1);
    };

    const ClickSend = () => {
        ScrollError();
    };

    return (
        <>
            {stateConsult == 1 && (
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <InputDate_1
                                        formik={formik}
                                        title={"date"}
                                        name={"date"}
                                        value={formik.values.date}
                                        error={formik.errors.date}
                                    />
                                </div>
                                <div className="col-6">
                                    <InputTimeForm_1
                                        formik={formik}
                                        title={"hour"}
                                        name={"hour"}
                                        value={formik.values.hour}
                                        error={formik.errors.hour}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <InputTextAreaForm_1
                                        formik={formik}
                                        title={"note"}
                                        name={"notes"}
                                        value={formik.values.notes}
                                        error={formik.errors.notes}
                                    />
                                </div>
                            </div>
                        </div>
                        {flagFollow && (
                            <div className="col-12">
                                <div className="sty-title-secction-1">
                                    <div className="text">
                                        <TagLang
                                            group={"input"}
                                            tag={"questionnaire_consult"}
                                        />
                                    </div>
                                    <div className="icon">
                                        <img src={icon_title} />
                                    </div>
                                </div>

                                <div className="row">
                                    <FormikProvider value={formik}>
                                        <FieldArray
                                            name="answers"
                                            render={(arrayHelpers) => (
                                                <FormContQuestionnarie
                                                    formik={formik}
                                                    arrayHelpers={arrayHelpers}
                                                    father={"answers"}
                                                />
                                            )}
                                        />
                                    </FormikProvider>
                                </div>
                            </div>
                        )}
                        <div className="col-12">
                            <div className="sty-title-secction-1">
                                <div className="text">
                                    <TagLang
                                        group={"input"}
                                        tag={"anthropometry"}
                                    />
                                </div>
                                <div className="icon">
                                    <img src={icon_title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <FormikProvider value={formik}>
                                    <FieldArray
                                        name="anthropometrys"
                                        render={(arrayHelpers) => (
                                            <FormContAntrophometric
                                                formik={formik}
                                                arrayHelpers={arrayHelpers}
                                                father={"anthropometrys"}
                                            />
                                        )}
                                    />
                                </FormikProvider>
                            </div>
                        </div>
                        {/* {arrayFolds.length > 0 && ( */}
                        <>
                            <div className="col-12">
                                <div className="sty-title-secction-1">
                                    <div className="text">
                                        <TagLang
                                            group={"input"}
                                            tag={"folds"}
                                        />
                                    </div>
                                    <div className="icon">
                                        <img src={icon_title} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <FormikProvider value={formik}>
                                        <FieldArray
                                            name="folds"
                                            render={(arrayHelpers) => (
                                                <FormContFolds
                                                    formik={formik}
                                                    arrayHelpers={arrayHelpers}
                                                    father={"folds"}
                                                />
                                            )}
                                        />
                                    </FormikProvider>
                                </div>
                            </div>
                        </>
                        {/* )} */}
                        {/* {arrayCircumf.length > 0 && ( */}
                        <>
                            <div className="col-12">
                                <div className="sty-title-secction-1">
                                    <div className="text">
                                        <TagLang
                                            group={"input"}
                                            tag={"circumference"}
                                        />
                                    </div>
                                    <div className="icon">
                                        <img src={icon_title} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <FormikProvider value={formik}>
                                        <FieldArray
                                            name="circumferences"
                                            render={(arrayHelpers) => (
                                                <FormContFoldsCircunferences
                                                    formik={formik}
                                                    arrayHelpers={arrayHelpers}
                                                    father={"circumferences"}
                                                />
                                            )}
                                        />
                                    </FormikProvider>
                                </div>
                            </div>
                        </>
                        {/* )} */}
                        <div className="col-12">
                            <div className="sty-title-secction-1">
                                <div className="text">
                                    <TagLang
                                        group={"input"}
                                        tag={"energy_cal"}
                                    />
                                </div>
                                <div className="icon">
                                    <img src={icon_title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {/* {objectSettings.harris && ( */}
                                <div className="col-3">
                                    <InputTextForm_1
                                        formik={formik}
                                        title={"harris"}
                                        name={"harris"}
                                        value={formik.values.harris}
                                        error={formik.errors.harris}
                                        disabled={true}
                                    />
                                </div>
                                {/* )} */}
                                {/* {objectSettings.mifflin && ( */}
                                <div className="col-3">
                                    <InputTextForm_1
                                        formik={formik}
                                        title={"mifflin"}
                                        name={"mifflin"}
                                        value={formik.values.mifflin}
                                        error={formik.errors.mifflin}
                                        disabled={true}
                                    />
                                </div>
                                {/* )} */}
                                {/* {objectSettings.owen && ( */}
                                <div className="col-3">
                                    <InputTextForm_1
                                        formik={formik}
                                        title={"owen"}
                                        name={"owen"}
                                        value={formik.values.owen}
                                        error={formik.errors.owen}
                                        disabled={true}
                                    />
                                </div>
                                {/* )} */}
                                {/* {objectSettings.fao && ( */}
                                <div className="col-3">
                                    <InputTextForm_1
                                        formik={formik}
                                        title={"fao"}
                                        name={"fao"}
                                        value={formik.values.fao}
                                        error={formik.errors.fao}
                                        disabled={true}
                                    />
                                </div>
                                {/* )} */}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {/* {objectSettings.average && ( */}
                                <div className="col-3">
                                    <InputTextForm_1
                                        formik={formik}
                                        title={"average"}
                                        name={"average"}
                                        value={formik.values.average}
                                        error={formik.errors.average}
                                        disabled={true}
                                    />
                                </div>
                                {/* )} */}
                            </div>
                        </div>
                        {/* {objectSettings.activity && ( */}
                        <>
                            <div className="col-12">
                                <div className="sty-title-secction-1">
                                    <div className="text">
                                        <TagLang
                                            group={"input"}
                                            tag={"physical_act"}
                                        />
                                    </div>
                                    <div className="icon">
                                        <img src={icon_title} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <FieldRadio
                                    formik={formik}
                                    name={"activity"}
                                    values={valuesActivity}
                                />
                                <MessageValidation
                                    error={formik.errors.activity}
                                />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="sty-cont-input-2">
                                            <div className="sty-tag">
                                                <TagLang
                                                    group={"input"}
                                                    tag={"day_kcal"}
                                                />
                                            </div>
                                            <div className="sty-input">
                                                <input
                                                    name={`activity_cal`}
                                                    value={
                                                        formik.values
                                                            .activity_cal
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    type="text"
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                        {/* ////// */}
                        <div className="col-12">
                            <div className="sty-title-secction-1">
                                <div className="text">
                                    <TagLang group={"input"} tag={"menu"} />
                                </div>
                                <div className="icon">
                                    <img src={icon_title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-8">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"Assigned_menu"}
                                            />
                                        </div>
                                        <div className="sty-value">
                                            {nameMenu == null && (
                                                <TagLang
                                                    group={"validation"}
                                                    tag={
                                                        "without_assigned_menu"
                                                    }
                                                />
                                            )}
                                            {nameMenu != null && (
                                                <> {nameMenu}</>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 text-right">
                                    {idConsulation == null && (
                                        <button
                                            className="sty-button-dash-1"
                                            onClick={() => ClickShowMenu()}>
                                            <div className="sty-tag">
                                                <TagLang
                                                    group={"input"}
                                                    tag={"select"}
                                                />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ////// */}
                        <div className="col-12 text-center sty-magin-b-1">
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
                    </div>
                </form>
            )}
            {stateConsult == 2 && (
                <SectionMenu
                    dataMenu={dataMenu}
                    setDataMenu={setDataMenu}
                    ClickShowConsult={ClickShowConsult}
                    dataMenuPatient={dataMenuPatient}
                />
            )}
        </>
    );
}

function initialValues() {
    return {
        date: "",
        hour: "",
        answers: [],
        anthropometrys: [],
        folds: [],
        circumferences: [],
        harris: "",
        mifflin: "",
        owen: "",
        fao: "",
        average: "",
        activity: "1",
    };
}

function validationSchema() {
    return {
        date: Yup.string().required("required"),
        hour: Yup.string().required("required"),
    };
}
