import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";

import request from "../../../../../helper/core_services/core/requestService";
import menu from "../../../../../helper/core_services/endpoints/menu";
import { sortByAttr } from "../../../../../helper/array/sort";

import SubMealsCont from "../Forms/SubMealsCont";

export default function FormMenu({ idElement }) {
    const router = useRouter();
    const { locale } = useApp();
    const [elementsMeals, setElementsMeals] = useState(null);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (!formData?.id) SaveMenu(formData);
            else UpdateMenu(formData);
            // SendForm(formData, resetForm);
        },
    });

    useEffect(() => {
        GetMeals();
    }, [idElement]);

    useEffect(() => {
        if (idElement && elementsMeals) GetData();
    }, [elementsMeals]);

    const GetData = async () => {
        let req = await request(menu.get_menu, null, [idElement], {
            locale,
        });
        if (req != null) DrawGetData(req);
    };

    const DrawGetData = (info) => {
        let mealTypes = map(elementsMeals, (element) => {
            let find = info.mealTypeMenus.find((obj) => {
                return obj.mealType.id === element.mealType;
            });
            if (find != undefined)
                return {
                    mealType: find.mealType.id,
                    name: find.mealType.name,
                    monday: find.monday,
                    tuesday: find.tuesday,
                    tuesday: find.tuesday,
                    wednesday: find.wednesday,
                    thursday: find.thursday,
                    friday: find.friday,
                    saturday: find.saturday,
                    sunday: find.sunday,
                };
            else return { ...element };
        });
        let values = {
            id: info.id,
            name: info.name,
            mealTypes,
        };
        formik.setValues(values);
    };

    const GetMeals = async () => {
        let req = await request(menu.get_meals_type, null, null, {
            locale,
        });
        if (req != null) DrawMeals(req);
    };

    const DrawMeals = (info) => {
        sortByAttr();
        info = info.sortBy("order");
        let mealTypes = map(info, (element, index) => {
            return {
                mealType: element.id,
                name: element.name,
                monday: null,
                tuesday: null,
                tuesday: null,
                wednesday: null,
                thursday: null,
                friday: null,
                saturday: null,
                sunday: null,
            };
            // arrayHelpers.push({ mealType: element.id, ...element, ...week });
        });
        let values = {
            name: "",
            mealTypes,
        };
        formik.setValues(values);
        setElementsMeals(mealTypes);
    };

    const SaveMenu = async (formData) => {
        let req = await request(menu.post_new_menu, formData, null, {
            locale,
        });
        if (req != null) router.push("/dashboard/menus");
    };

    const UpdateMenu = async (formData) => {
        let req = await request(menu.put_edit_menu, formData, [formData.id], {
            locale,
        });
        if (req != null) router.push("/dashboard/menus");
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
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
                            />
                            <MessageValidation error={formik.errors.name} />
                        </div>
                    </div>
                </div>
                <FormikProvider value={formik}>
                    <FieldArray
                        name="mealTypes"
                        render={(arrayHelpers) => (
                            <SubMealsCont
                                formik={formik}
                                arrayHelpers={arrayHelpers}
                                father={"mealTypes"}
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
        name: "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required("required"),
    };
}
