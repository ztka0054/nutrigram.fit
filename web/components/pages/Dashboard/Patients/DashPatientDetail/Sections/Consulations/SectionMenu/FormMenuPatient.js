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

let emptyField = {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
};

export default function FormMenu({
    dataMenu,
    ClickShowConsult,
    setDataMenu,
    menuSelect,
    dataMenuPatient,
}) {
    const router = useRouter();
    const { id } = router.query;

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            setDataMenu(formData);
            ClickShowConsult();
        },
    });

    useEffect(() => {
        if (dataMenu != null) formik.setValues(dataMenu);
    }, [dataMenu]);

    useEffect(() => {
        if (menuSelect != null) {
            let values = { patient: id };
            values.menu = menuSelect.id;
            values.name = menuSelect.name;
            let schedules = [];
            if (dataMenuPatient == null)
                schedules = map(menuSelect.mealTypeMenus, (element) => {
                    return {
                        type: element?.mealType?.id,
                        name: element?.mealType?.name,
                        fromTime: element?.mealType?.fromTime,
                        toTime: element?.mealType?.toTime,
                    };
                });
            if (dataMenuPatient != null)
                schedules = map(menuSelect.mealTypeMenus, (element) => {
                    return {
                        type: element?.mealType?.id,
                        name: element?.mealType?.name,
                        fromTime: element?.mealType?.fromTime,
                        toTime: element?.mealType?.toTime,
                    };
                });
            values.schedules = schedules;
            formik.setValues(values);
        }
    }, [menuSelect]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-12">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"name_menu"} />
                        </div>
                        <div className="sty-value">{formik.values.name}</div>
                    </div>
                </div>
                <div className="col-12">
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
        schedules: [{}],
    };
}

function validationSchema() {
    return {
        // image_check: Yup.string().required("required"),
    };
}
