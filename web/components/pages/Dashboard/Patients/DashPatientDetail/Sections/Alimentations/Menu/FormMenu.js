import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { Collapse, CardBody, Card } from "reactstrap";
import * as Yup from "yup";
import { map, size } from "lodash";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../../../helper/core_services/core/requestService";
import patient from "../../../../../../../../helper/core_services/endpoints/patients";
import menu from "../../../../../../../../helper/core_services/endpoints/menu";
import { message_1 } from "../../../../../../../../helper/appearance/messages";
import GetLanguage from "../../../../../../../../helper/i18n/getValueTagLang";

import FormContMenu from "./FormContMenu";
import Table from "./Table";

let emptyField = {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
};

export default function FormMenu({ ShowData }) {
    const { query } = useRouter();
    const { locale, putFlagChangeElement } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const [selectMeals, setSelectMeals] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (!formData?.idSchecule) SendNewForm(formData, resetForm);
            if (formData?.idSchecule) SendUpdateForm(formData);
        },
    });

    useEffect(() => {
        GetMeals();
    }, [locale]);

    useEffect(() => {
        if (size(selectMeals) > 0) GetDataPatient();
    }, [selectMeals]);

    const GetDataPatient = async () => {
        let req = await request(patient.get_patient, null, [query.id], {
            locale,
        });
        if (req != null) {
            if (req.menu != null) GetUpdateData(req.menu);
        }
    };

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    const GetMeals = async () => {
        let req = await request(menu.get_meals_type, null, null, {
            locale,
        });
        if (req != null) DrawMeals(req);
    };

    const GetUpdateData = async (idMenu) => {
        let req = await request(menu.get_menu_patient, null, [idMenu], {
            locale,
        });
        if (req != null) {
            let req1 = await request(menu.get_menu, null, [req.menu], {
                locale,
            });
            let schedulesF = map(selectMeals, (element) => {
                let find = req.schedules.find((obj) => {
                    return obj.type.id == element.type;
                });
                if (find == undefined) return element;
                else
                    return {
                        fromTime: moment(
                            `2020-01-01T${find.fromTime}`
                        ).toDate(),
                        toTime: moment(`2020-01-01T${find.toTime}`).toDate(),
                        ...element,
                    };
            });
            let schedules = map(schedulesF, (element, index) => {
                let find = req1.mealTypeMenus.find((obj) => {
                    return obj.mealType.id == element.type;
                });
                formik.setFieldValue(
                    `schedules[${index}].fromTime`,
                    element.fromTime
                );
                formik.setFieldValue(
                    `schedules[${index}].toTime`,
                    element.toTime
                );
                if (find != undefined) {
                    formik.setFieldValue(
                        `schedules[${index}].monday`,
                        find.monday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].tuesday`,
                        find.tuesday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].wednesday`,
                        find.wednesday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].thursday`,
                        find.thursday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].friday`,
                        find.friday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].saturday`,
                        find.saturday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].sunday`,
                        find.sunday
                    );
                }
            });
            formik.setFieldValue("idSchecule", req.id);
            formik.setFieldValue("menu", req1.id);
            formik.setFieldValue("name", req1.name);
            formik.setFieldValue("patient", query.id);
        }
    };

    const DrawMeals = (info) => {
        let schedules = map(info, (element) => {
            return {
                type: element.id,
                name: element.name,
                ...emptyField,
            };
            // arrayHelpers.push({ mealType: element.id, ...element, ...week });
        });
        setSelectMeals(schedules);
        let values = {
            name: "",
            schedules,
        };
        formik.setValues(values);
    };

    const SelectMenu = async (row, selectMeals) => {
        let req = await request(menu.get_menu, null, [row.id], {
            locale,
        });
        if (req != null) {
            setIsOpen(false);
            let schedules = map(selectMeals, (element, index) => {
                let find = req.mealTypeMenus.find((obj) => {
                    return obj.mealType.id === element.type;
                });
                if (find != undefined) {
                    formik.setFieldValue(
                        `schedules[${index}].type`,
                        element.type
                    );
                    // formik.setFieldValue(
                    //     `schedules[${index}].name`,
                    //     find.name[localeFix]
                    // );
                    formik.setFieldValue(
                        `schedules[${index}].monday`,
                        find.monday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].tuesday`,
                        find.tuesday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].wednesday`,
                        find.wednesday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].thursday`,
                        find.thursday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].friday`,
                        find.friday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].saturday`,
                        find.saturday
                    );
                    formik.setFieldValue(
                        `schedules[${index}].sunday`,
                        find.sunday
                    );
                }
            });
            formik.setFieldValue("name", row.name);
            formik.setFieldValue("menu", row.id);
            formik.setFieldValue("patient", query.id);
            // formik.setFieldValue("schedules", schedules);
        }
    };

    const SendNewForm = async (formData) => {
        let dataSend = { ...formData };
        dataSend.schedules = map(dataSend.schedules, (element) => {
            let params = { ...element };
            params.fromTime = moment(params.fromTime).format("HH:mm:ss");
            params.toTime = moment(params.toTime).format("HH:mm:ss");
            return params;
        });
        let req = await request(menu.post_new_menu_patient, dataSend, null, {
            locale,
        });
        ShowData();
        message_1(GetLanguage("validation", "message_1"));
        putFlagChangeElement();
    };

    const SendUpdateForm = async (formData) => {
        let dataSend = { ...formData };
        dataSend.schedules = map(dataSend.schedules, (element) => {
            let params = { ...element };
            params.fromTime = moment(params.fromTime).format("HH:mm:ss");
            params.toTime = moment(params.toTime).format("HH:mm:ss");
            return params;
        });
        let req = await request(
            menu.patch_menu_patient,
            dataSend,
            [dataSend.idSchecule],
            {
                locale,
            }
        );
        ShowData();
        message_1(GetLanguage("validation", "message_1"));
        putFlagChangeElement();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4 text-right">
                            <button
                                className="sty-button-dash-1 fix-1 color-3"
                                type="button"
                                onClick={() => toogle()}>
                                <div className="sty-icon">
                                    <img src="/static/img/favicons/app/add_w.svg" />
                                </div>
                                <div className="sty-tag">Seleccionar Menú</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 margin-top-2">
                    <Collapse isOpen={isOpen} className="sty-data-content">
                        <Card>
                            <CardBody>
                                <Table
                                    values={{ selectMeals }}
                                    SelectMenu={SelectMenu}
                                />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="col-12">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"name"} />
                        </div>
                        <div className="sty-input">
                            <input
                                name={`name`}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                type="text"
                                disabled={true}
                            />
                            <MessageValidation error={formik.errors.name} />
                        </div>
                    </div>
                </div>
                <FormikProvider value={formik}>
                    <FieldArray
                        name="schedules"
                        render={(arrayHelpers) => (
                            <FormContMenu
                                formik={formik}
                                arrayHelpers={arrayHelpers}
                                father={"schedules"}
                            />
                        )}
                    />
                </FormikProvider>
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
        schedules: [{}],
    };
}

function validationSchema() {
    return {
        // image_check: Yup.string().required("required"),
    };
}
