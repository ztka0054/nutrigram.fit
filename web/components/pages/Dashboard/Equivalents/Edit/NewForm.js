import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size, differenceBy } from "lodash";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";

import TagLang from "../../../../modules/GetTagLang";
import SelectLanguage from "../../../../components/SelectLanguage";
import InputText from "../../../../components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputNumber from "../../../../components/Inputs/InputTypeForm_1/InputNumber_1";
import InputSelect from "../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../helper/core_services/core/requestService";
import apiFoods from "../../../../../helper/core_services/endpoints/foods";
import { loadElement } from "../../../../../helper/appearance/load";
import ScrollError from "../../../../../helper/scroll/ScrollError";

import PortionElementForm from "./PortionElementForm";

const icon_title = "/static/img/favicons/app/icon_nu_1.png";

export default function NewRecipe({ dataFood = null }) {
    const router = useRouter();

    const [statusLanguage, setStatusLanguage] = useState(1);
    const [catalogueCategories, setCatalogueCategories] = useState([]);
    const [cataloguePortionsInfo, setCataloguePortionsInfo] = useState([]);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (formData.fiber == "") delete formData.fiber;
            if (formData.vitaminA == "") delete formData.vitaminA;
            if (formData.ascorbicAcid == "") delete formData.ascorbicAcid;
            if (formData.folicAcid == "") delete formData.folicAcid;
            if (formData.hemIron == "") delete formData.hemIron;
            if (formData.nonHemIron == "") delete formData.nonHemIron;
            if (formData.potassium == "") delete formData.potassium;
            if (formData.glycemicIndex == "") delete formData.glycemicIndex;
            if (formData.glycemicLoad == "") delete formData.glycemicLoad;
            if (formData.sugarByEquivalent == "")
                delete formData.sugarByEquivalent;
            if (formData.calcium == "") delete formData.calcium;
            if (formData.sodium == "") delete formData.sodium;
            if (formData.selenium == "") delete formData.selenium;
            if (formData.phosphorus == "") delete formData.phosphorus;
            if (formData.cholesterol == "") delete formData.cholesterol;
            if (formData.saturatedFattyAcids == "")
                delete formData.saturatedFattyAcids;
            if (formData.monounsaturatedFattyAcids == "")
                delete formData.monounsaturatedFattyAcids;
            if (formData.polyunsaturatedFattyAcids == "")
                delete formData.polyunsaturatedFattyAcids;
            if (formData.ethanol == "") delete formData.ethanol;

            loadElement(true);
            if (!formData?.id) CreateFood(formData);
            if (formData?.id) UpdateFood(formData);
            loadElement(false);
        },
    });

    useEffect(() => {
        if (dataFood != null) LoadData();
    }, [dataFood]);

    const LoadData = () => {
        let newData = { ...dataFood };
        newData.name_es = newData?.names?.es;
        newData.name_en = newData?.names?.["en-us"];
        newData.portions = map(dataFood.portions, (portion, index) => {
            let defaultPortion = false;
            if (portion.id == dataFood.defaultPortion) {
                newData.loadValueCheck = index;
                defaultPortion = true;
            }
            return {
                ...portion,
                defaultPortion,
            };
        });
        delete newData.name;
        formik.setValues(newData);
    };

    const CreateFood = async (formData) => {
        let newForm = {
            name: {
                "en-us": formData.name_en,
                es: formData.name_es,
            },
            ...formData,
        };
        let resultFood = await request(
            apiFoods.post_create_food,
            newForm,
            null,
            {
                locale: router.locale,
            }
        );
        if (resultFood != null) {
            CreatePortions(formData, resultFood);
            router.push(`/dashboard/equivalents`);
        }
    };

    const UpdateFood = async (formData) => {
        let newForm = {
            name: {
                "en-us": formData.name_en,
                es: formData.name_es,
            },
            ...formData,
        };
        let resultFood = await request(
            apiFoods.patch_food,
            newForm,
            [dataFood?.id],
            {
                locale: router.locale,
            }
        );
        if (resultFood != null) {
            CreatePortions(formData, resultFood);
            UpdatePortions(formData, resultFood);
            DeletePortion(formData);
            router.push(
                `/dashboard/equivalents/data/${router.query.id_category}`
            );
        }
    };

    const DeletePortion = async (formData) => {
        let filterId = formData.portions.filter((obj) => obj?.id);
        let DeleteElements = differenceBy(dataFood.portions, filterId, "id");
        let arrayRequest = [];
        map(DeleteElements, (element) => {
            arrayRequest.push(
                request(apiFoods.del_potion, null, [element.id], {
                    locale: router.locale,
                })
            );
        });
        await Promise.all(arrayRequest);
    };

    const CreatePortions = async (formData, resultFood) => {
        let deafultPortion = null;
        let arrayRequest = [];
        let filterId = formData.portions.filter((obj) => !obj?.id);
        map(filterId, (element, index) => {
            if (element.defaultPortion) {
                deafultPortion = index;
            }
            arrayRequest.push(
                request(
                    apiFoods.post_portion,
                    {
                        food: resultFood.id,
                        ...element,
                    },
                    null,
                    {
                        locale: router.locale,
                    }
                )
            );
        });
        let resultPortions = await Promise.all(arrayRequest);
        let params = { ...resultFood };
        if (deafultPortion != null) {
            params.defaultPortion = resultPortions[deafultPortion].id;
            await request(apiFoods.put_food, params, [resultFood.id], {
                locale: router.locale,
            });
        }
    };

    const UpdatePortions = async (formData, resultFood) => {
        let deafultPortion = null;
        let arrayRequest = [];
        let filterId = formData.portions.filter((obj) => obj?.id);
        map(filterId, (element, index) => {
            if (element.defaultPortion) {
                deafultPortion = index;
            }
            arrayRequest.push(
                request(
                    apiFoods.patch_potion,
                    {
                        food: resultFood.id,
                        ...element,
                    },
                    [element.id],
                    {
                        locale: router.locale,
                    }
                )
            );
        });
        await Promise.all(arrayRequest);
        let params = { ...resultFood };
        if (deafultPortion != null) {
            params.defaultPortion = filterId[deafultPortion].id;
            await request(apiFoods.put_food, params, [resultFood.id], {
                locale: router.locale,
            });
        }
    };

    useEffect(() => {
        if (router?.locale) {
            GetCatalogueCategories();
            GetTypePortionInfo();
        }
    }, [router.locale]);

    const GetCatalogueCategories = async () => {
        let result = await request(apiFoods.get_food_categories, null, null, {
            locale: router.locale,
        });
        if (result != null) {
            setCatalogueCategories(result.result);
        }
    };

    const GetTypePortionInfo = async () => {
        let result = await request(apiFoods.get_portions_info, null, null, {
            locale: router.locale,
        });
        if (result != null) {
            let resultNew = map(result.result, (element) => {
                let name = "";
                if (router.locale == "es") name = element.name["es"];
                if (router.locale == "en") name = element.name["en-us"];
                element.name = name;
                return element;
            });
            setCataloguePortionsInfo(resultNew);
        }
    };

    const ClickSend = () => {
        ScrollError();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <SelectLanguage
                        formik={formik}
                        statusLanguage={statusLanguage}
                        setStatusLanguage={setStatusLanguage}
                        error={formik?.errors?.language}>
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                * <TagLang group={"input"} tag={"name"} />
                            </div>
                            {statusLanguage == 1 && (
                                <div className="sty-input">
                                    <input
                                        name={`name_es`}
                                        type="text"
                                        value={formik.values.name_es}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            )}
                            {statusLanguage == 2 && (
                                <div className="sty-input">
                                    <input
                                        name={`name_en`}
                                        type="text"
                                        value={formik.values.name_en}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            )}
                        </div>
                    </SelectLanguage>

                    <div className="margin-top-2">
                        <InputSelect
                            formik={formik}
                            title={"category"}
                            name={"category"}
                            value={formik.values.category}
                            error={formik.errors.category}
                            elements={catalogueCategories}
                            required={true}
                        />
                    </div>

                    <InputNumber
                        formik={formik}
                        title={"weight"}
                        name={"weight"}
                        value={formik.values.weight}
                        error={formik.errors.weight}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"grossWeight"}
                        name={"grossWeight"}
                        value={formik.values.grossWeight}
                        error={formik.errors.grossWeight}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"calories"}
                        name={"calories"}
                        value={formik.values.calories}
                        error={formik.errors.calories}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"protein"}
                        name={"protein"}
                        value={formik.values.protein}
                        error={formik.errors.protein}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"lipids"}
                        name={"lipids"}
                        value={formik.values.lipids}
                        error={formik.errors.lipids}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"carbohydrates"}
                        name={"carbohydrates"}
                        value={formik.values.carbohydrates}
                        error={formik.errors.carbohydrates}
                        required={true}
                    />

                    <InputNumber
                        formik={formik}
                        title={"fiber"}
                        name={"fiber"}
                        value={formik.values.fiber}
                        error={formik.errors.fiber}
                    />

                    <InputNumber
                        formik={formik}
                        title={"vitaminA"}
                        name={"vitaminA"}
                        value={formik.values.vitaminA}
                        error={formik.errors.vitaminA}
                    />

                    <InputNumber
                        formik={formik}
                        title={"ascorbicAcid"}
                        name={"ascorbicAcid"}
                        value={formik.values.ascorbicAcid}
                        error={formik.errors.ascorbicAcid}
                    />

                    <InputNumber
                        formik={formik}
                        title={"folicAcid"}
                        name={"folicAcid"}
                        value={formik.values.folicAcid}
                        error={formik.errors.folicAcid}
                    />

                    <InputNumber
                        formik={formik}
                        title={"hemIron"}
                        name={"hemIron"}
                        value={formik.values.hemIron}
                        error={formik.errors.hemIron}
                    />

                    <InputNumber
                        formik={formik}
                        title={"nonHemIron"}
                        name={"nonHemIron"}
                        value={formik.values.nonHemIron}
                        error={formik.errors.nonHemIron}
                    />

                    <InputNumber
                        formik={formik}
                        title={"potassium"}
                        name={"potassium"}
                        value={formik.values.potassium}
                        error={formik.errors.potassium}
                    />

                    <InputNumber
                        formik={formik}
                        title={"glycemicIndex"}
                        name={"glycemicIndex"}
                        value={formik.values.glycemicIndex}
                        error={formik.errors.glycemicIndex}
                    />

                    <InputNumber
                        formik={formik}
                        title={"glycemicLoad"}
                        name={"glycemicLoad"}
                        value={formik.values.glycemicLoad}
                        error={formik.errors.glycemicLoad}
                    />

                    <InputNumber
                        formik={formik}
                        title={"sugarByEquivalent"}
                        name={"sugarByEquivalent"}
                        value={formik.values.sugarByEquivalent}
                        error={formik.errors.sugarByEquivalent}
                    />

                    <InputNumber
                        formik={formik}
                        title={"calcium"}
                        name={"calcium"}
                        value={formik.values.calcium}
                        error={formik.errors.calcium}
                    />

                    <InputNumber
                        formik={formik}
                        title={"sodium"}
                        name={"sodium"}
                        value={formik.values.sodium}
                        error={formik.errors.sodium}
                    />

                    <InputNumber
                        formik={formik}
                        title={"selenium"}
                        name={"selenium"}
                        value={formik.values.selenium}
                        error={formik.errors.selenium}
                    />

                    <InputNumber
                        formik={formik}
                        title={"phosphorus"}
                        name={"phosphorus"}
                        value={formik.values.phosphorus}
                        error={formik.errors.phosphorus}
                    />

                    <InputNumber
                        formik={formik}
                        title={"cholesterol"}
                        name={"cholesterol"}
                        value={formik.values.cholesterol}
                        error={formik.errors.cholesterol}
                    />

                    <InputNumber
                        formik={formik}
                        title={"saturatedFattyAcids"}
                        name={"saturatedFattyAcids"}
                        value={formik.values.saturatedFattyAcids}
                        error={formik.errors.saturatedFattyAcids}
                    />

                    <InputNumber
                        formik={formik}
                        title={"monounsaturatedFattyAcids"}
                        name={"monounsaturatedFattyAcids"}
                        value={formik.values.monounsaturatedFattyAcids}
                        error={formik.errors.monounsaturatedFattyAcids}
                    />

                    <InputNumber
                        formik={formik}
                        title={"polyunsaturatedFattyAcids"}
                        name={"polyunsaturatedFattyAcids"}
                        value={formik.values.polyunsaturatedFattyAcids}
                        error={formik.errors.polyunsaturatedFattyAcids}
                    />

                    <InputNumber
                        formik={formik}
                        title={"ethanol"}
                        name={"ethanol"}
                        value={formik.values.ethanol}
                        error={formik.errors.ethanol}
                    />
                </div>
                <div className="col-6">
                    {/* <InputSelect
                        formik={formik}
                        title={"defaultPortion"}
                        name={"category"}
                        value={formik.values.category}
                        elements={catalogueCategories}
                    /> */}

                    <div className="sty-title-secction-1">
                        <div className="text">
                            <TagLang group={"input"} tag={"portions"} />
                        </div>
                        <div className="icon">
                            <img src={icon_title} />
                        </div>
                    </div>

                    <FormikProvider value={formik}>
                        <FieldArray
                            name="portions"
                            render={(arrayHelpers) => (
                                <PortionElementForm
                                    formik={formik}
                                    arrayHelpers={arrayHelpers}
                                    father={"portions"}
                                    cataloguePortionsInfo={
                                        cataloguePortionsInfo
                                    }
                                />
                            )}
                        />
                    </FormikProvider>
                </div>
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
    );
}

function initialValues() {
    return {
        name_es: "",
        name_en: "",
        category: "",
        weight: "",
        grossWeight: "",
        calories: "",
        protein: "",
        lipids: "",
        carbohydrates: "",
        fiber: "",
        vitaminA: "",
        ascorbicAcid: "",
        folicAcid: "",
        hemIron: "",
        nonHemIron: "",
        potassium: "",
        glycemicIndex: "",
        glycemicLoad: "",
        sugarByEquivalent: "",
        calcium: "",
        sodium: "",
        selenium: "",
        phosphorus: "",
        cholesterol: "",
        saturatedFattyAcids: "",
        monounsaturatedFattyAcids: "",
        polyunsaturatedFattyAcids: "",
        ethanol: "",
    };
}

function validationSchema() {
    return {
        // language: Yup.bool().when(["name_es", "name_en"], {
        //     is: (name_es, name_en) =>
        //         (!name_es && !name_en) || (!!name_es && !!name_en),
        //     then: Yup.bool().required("fields_language"),
        //     otherwise: Yup.bool(),
        // }),
        language: Yup.bool().when(["name_es", "name_en"], {
            is: (name_es, name_en) => !name_es && !name_en,
            then: Yup.bool().required("fields_language"),
            otherwise: Yup.bool(),
        }),
        category: Yup.string().required("required"),
        weight: Yup.string().required("required"),
        grossWeight: Yup.string().required("required"),
        calories: Yup.string().required("required"),
        protein: Yup.string().required("required"),
        lipids: Yup.string().required("required"),
        carbohydrates: Yup.string().required("required"),
        // fiber: Yup.string().required("required"),
        // vitaminA: Yup.string().required("required"),
        // ascorbicAcid: Yup.string().required("required"),
        // folicAcid: Yup.string().required("required"),
        // hemIron: Yup.string().required("required"),
        // nonHemIron: Yup.string().required("required"),
        // potassium: Yup.string().required("required"),
        // glycemicIndex: Yup.string().required("required"),
        // glycemicLoad: Yup.string().required("required"),
        // sugarByEquivalent: Yup.string().required("required"),
        // calcium: Yup.string().required("required"),
        // sodium: Yup.string().required("required"),
        // selenium: Yup.string().required("required"),
        // phosphorus: Yup.string().required("required"),
        // cholesterol: Yup.string().required("required"),
        // saturatedFattyAcids: Yup.string().required("required"),
        // monounsaturatedFattyAcids: Yup.string().required("required"),
        // polyunsaturatedFattyAcids: Yup.string().required("required"),
        // ethanol: Yup.string().required("required"),
        portions: Yup.array()
            .of(
                Yup.object().shape({
                    info: Yup.string().required("required"),
                    weight: Yup.string().required("required"),
                    suggestedQuantity: Yup.string().required("required"),
                })
            )
            .min(1, "array_ingredients")
            .required("array_ingredients"),
    };
}
