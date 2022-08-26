import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";
import SelectLanguage from "../../../../components/SelectLanguage";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../helper/core_services/core/requestService";
import recipes from "../../../../../helper/core_services/endpoints/recipes";
import { loadElement } from "../../../../../helper/appearance/load";

import InputPicture from "../../../../components/Inputs/InputImages/InputImage_1";
import InputTextForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputTextForm_1";
import InputNumber_1 from "../../../../components/Inputs/InputTypeForm_1/InputNumber_1";
import InputSelectForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1";
import InputCheckForm_1 from "../../../../components/Inputs/InputTypeForm_1/InputCheckForm_1";

import ScrollError from "../../../../../helper/scroll/ScrollError";

import SubCategoryCont from "./SubCategoryCont";
import SubRegionCont from "./SubRegionCont";
import SubIngredientCont from "./SubIngredientCont";
import SubDirectionCont from "./SubDirectionCont";
import SubEquivalentCont from "./SubEquivalentCont";

export default function NewRecipe({
    idElement,
    type,
    idList,
    dataRecipe,
    flagEditRecipe,
}) {
    const { locale } = useApp();
    const router = useRouter();
    const [elementsDiffucult, setElementsDiffucult] = useState([]);
    const [equivalents, setEquivalents] = useState([]);
    const [showEquivalents, setShowEquivalents] = useState(false);
    const [statusLanguage, setStatusLanguage] = useState(1);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (!formData?.id) SaveRecipe(formData);
            else UpdateRecipe(formData);
        },
    });

    useEffect(() => {
        GetEquivalentsNumber();
    }, []);

    useEffect(() => {
        if (dataRecipe != null) GetData();
    }, [dataRecipe]);

    useEffect(() => {
        GetElementsDifficult();
    }, [locale]);

    const GetData = async () => {
        let data = {};
        let reqEqui = await request(
            recipes.get_equivalents,
            null,
            [idElement],
            {
                locale,
            }
        );
        data = { ...dataRecipe };
        delete data.nutritionist;
        data["name_es"] = data.name["es"];
        data["name_en"] = data.name["en-us"];
        delete data.name;
        let directions = map(data.directions, (element) => {
            return {
                direction_es: element.direction["es"],
                direction_en: element.direction["en-us"],
            };
        });
        data.directions = directions;
        if (size(data.images) > 0) {
            data.image_check = data.images[0].image;
            data.image_pic_preview = data.images[0].image;
            delete data.images;
        }
        if (size(data.categories) > 0) {
            data.categories = map(data.categories, (element) => {
                return { category: element };
            });
        }
        if (size(data.regions) > 0) {
            data.regions = map(data.regions, (element) => {
                return { region: element };
            });
        }
        if (size(data.ingredients) > 0) {
            data.ingredients = map(data.ingredients, (element) => {
                return {
                    id: element.id,
                    name: element.food.name,
                    food: element.food.id,
                    category: element.food.category,
                    portion: element.portion.id,
                    quantity: element.quantity,
                    flagLoad: true,
                };
            });
        }
        if (reqEqui != null) {
            let equivalents = [];
            equivalents = map(reqEqui, (element) => {
                return {
                    equivalent: element.equivalent.id,
                    recipe: element.equivalent,
                };
            });
            data.equivalents = equivalents;
            setEquivalents(reqEqui);
        }
        formik.setValues(data);
    };

    const GetElementsDifficult = () => {
        let data = [
            { name: GetLanguage("input", "select_diff_1"), id: "0" },
            { name: GetLanguage("input", "select_diff_2"), id: "1" },
            { name: GetLanguage("input", "select_diff_3"), id: "2" },
        ];
        setElementsDiffucult(data);
    };

    const SaveRecipe = async (formData) => {
        let params = { ...formData };
        params.name = { es: params.name_es, "en-us": params.name_en };
        delete params.name_es;
        delete params.name_en;
        params.directions = map(params.directions, (element) => {
            return {
                direction: {
                    es: element.direction_es,
                    "en-us": element.direction_en,
                },
            };
        });
        params.categories = map(formData.categories, (element) => {
            return element.category;
        });
        params.regions = map(formData.regions, (element) => {
            return element.region;
        });
        loadElement(true);
        let req = await request(recipes.post_create_recipes, params, [], {
            locale,
        });
        if (req != null) {
            await SaveImage(req, params);
            await SaveEquivalents(req, params);
            RouteSave();
        }
        loadElement(false);
    };

    const UpdateRecipe = async (formData) => {
        let params = { ...formData };
        params.name = { es: params.name_es, "en-us": params.name_en };
        delete params.name_es;
        delete params.name_en;
        params.directions = map(params.directions, (element) => {
            return {
                direction: {
                    es: element.direction_es,
                    "en-us": element.direction_en,
                },
            };
        });
        params.categories = map(formData.categories, (element) => {
            return element.category;
        });
        params.regions = map(formData.regions, (element) => {
            return element.region;
        });
        loadElement(true);
        let req = await request(
            recipes.patch_update_recipes,
            params,
            [idElement],
            {
                locale,
            }
        );
        if (req != null) {
            await SaveImage(req, params);
            await SaveEquivalents(req, params);
            RouteSave();
        }
        loadElement(false);
    };

    const RouteSave = () => {
        if (type === "1")
            router.push(`/dashboard/recipes/list_category/${idList}`);
        if (type === "2") router.push(`/dashboard/recipes/list_type/${idList}`);
    };

    const SaveImage = async (info, params) => {
        if (params?.image) {
            let deleteImages = [];
            if (size(info.images) > 0) {
                map(info.images, (element) => {
                    deleteImages.push(
                        request(
                            recipes.delete_image,
                            null,
                            [info.id, element.id],
                            {
                                locale,
                            }
                        )
                    );
                });
            }
            await Promise.all(deleteImages);
            await request(
                recipes.post_image,
                { image: params.image },
                [info.id],
                {
                    locale,
                }
            );
        }
    };

    const SaveEquivalents = async (info, params) => {
        let equivalentsNew = [];
        let deleteEquivalents = [];
        map(equivalents, (element) => {
            let find = params.equivalents.find((obj) => {
                return obj.equivalent === element.equivalent;
            });
            if (find == undefined)
                deleteEquivalents.push(
                    request(
                        recipes.delete_equivalents,
                        null,
                        [info.id, element.id],
                        {
                            locale,
                        }
                    )
                );
        });
        await Promise.all(deleteEquivalents);
        if (params?.equivalents) {
            map(params.equivalents, (element) => {
                equivalentsNew.push(
                    request(
                        recipes.post_equivalent,
                        { equivalent: element.equivalent },
                        [info.id],
                        {
                            locale,
                        }
                    )
                );
            });
            await Promise.all(equivalentsNew);
        }
    };

    const GetEquivalentsNumber = async () => {
        let req = await request(recipes.get_recipe, null, [], {
            locale,
        });
        if (req != null) if (size(req) > 0) setShowEquivalents(true);
    };

    const ClickSend = () => {
        ScrollError();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-5">
                    <InputPicture
                        formik={formik}
                        name={"image"}
                        error={formik?.errors?.[`${"image"}_check`]}
                        disabled={!flagEditRecipe}
                    />
                </div>
                <div className="col-7">
                    <SelectLanguage
                        statusLanguage={statusLanguage}
                        setStatusLanguage={setStatusLanguage}
                        error={formik?.errors?.language}>
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                <TagLang group={"input"} tag={"name"} />
                            </div>
                            {statusLanguage == 1 && (
                                <div className="sty-input">
                                    <input
                                        name={`name_es`}
                                        type="text"
                                        value={formik.values.name_es}
                                        onChange={formik.handleChange}
                                        disabled={!flagEditRecipe}
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
                                        disabled={!flagEditRecipe}
                                    />
                                </div>
                            )}
                        </div>
                    </SelectLanguage>

                    <div className="row margin-top-2">
                        <div className="col-9">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang
                                        group={"input"}
                                        tag={"categories"}
                                    />
                                </div>
                                <FormikProvider value={formik}>
                                    <FieldArray
                                        name="categories"
                                        render={(arrayHelpers) => (
                                            <SubCategoryCont
                                                formik={formik}
                                                arrayHelpers={arrayHelpers}
                                                father={"categories"}
                                                flagEditRecipe={flagEditRecipe}
                                            />
                                        )}
                                    />
                                </FormikProvider>
                            </div>
                        </div>
                        <div className="col-3">
                            <br />
                            <InputCheckForm_1
                                formik={formik}
                                title={"public"}
                                name={`isPublic`}
                                value={formik.values.isPublic}
                                error={formik?.errors?.isPublic}
                                disabled={!flagEditRecipe}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"regions"} />
                                </div>
                                <FormikProvider value={formik}>
                                    <FieldArray
                                        name="regions"
                                        render={(arrayHelpers) => (
                                            <SubRegionCont
                                                formik={formik}
                                                arrayHelpers={arrayHelpers}
                                                father={"regions"}
                                                flagEditRecipe={flagEditRecipe}
                                            />
                                        )}
                                    />
                                </FormikProvider>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <InputSelectForm_1
                                formik={formik}
                                elements={elementsDiffucult}
                                title={"difficulty"}
                                name={`difficulty`}
                                value={formik.values.difficulty}
                                error={formik?.errors?.difficulty}
                                disabled={!flagEditRecipe}
                            />
                        </div>
                        <div className="col-6">
                            <InputNumber_1
                                formik={formik}
                                title={"portions"}
                                name={`portions`}
                                value={formik.values.portions}
                                error={formik?.errors?.portions}
                                disabled={!flagEditRecipe}
                            />
                        </div>
                    </div>
                    <div className="sty-cont-input-2">
                        <InputTextForm_1
                            formik={formik}
                            title={"instagram"}
                            name={`instagramLink`}
                            value={formik.values.instagramLink}
                            error={formik?.errors?.instagramLink}
                            disabled={!flagEditRecipe}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <hr />
                    <div className="sty-dyna-title-1">
                        <TagLang group={"input"} tag={"ingredients"} />
                    </div>
                    <FormikProvider value={formik}>
                        <FieldArray
                            name="ingredients"
                            render={(arrayHelpers) => (
                                <SubIngredientCont
                                    formik={formik}
                                    arrayHelpers={arrayHelpers}
                                    father={"ingredients"}
                                    flagEditRecipe={flagEditRecipe}
                                />
                            )}
                        />
                    </FormikProvider>
                    {typeof formik.errors?.ingredients === "string" && (
                        <div className="validation-array">
                            <MessageValidation
                                error={formik.errors.ingredients}
                            />
                        </div>
                    )}
                    <hr />
                    <div className="sty-dyna-title-1">
                        <TagLang group={"input"} tag={"preparation"} />
                    </div>
                    <FormikProvider value={formik}>
                        <FieldArray
                            name="directions"
                            render={(arrayHelpers) => (
                                <SubDirectionCont
                                    formik={formik}
                                    arrayHelpers={arrayHelpers}
                                    father={"directions"}
                                    statusLanguage={statusLanguage}
                                    setStatusLanguage={setStatusLanguage}
                                    flagEditRecipe={flagEditRecipe}
                                />
                            )}
                        />
                    </FormikProvider>
                    <hr />
                    {showEquivalents && (
                        <>
                            <div className="sty-dyna-title-1">
                                <TagLang
                                    group={"input"}
                                    tag={"equivalent_recipes"}
                                />
                            </div>
                            <FormikProvider value={formik}>
                                <FieldArray
                                    name="equivalents"
                                    render={(arrayHelpers) => (
                                        <SubEquivalentCont
                                            formik={formik}
                                            arrayHelpers={arrayHelpers}
                                            father={"equivalents"}
                                            flagEditRecipe={flagEditRecipe}
                                        />
                                    )}
                                />
                            </FormikProvider>
                        </>
                    )}
                </div>
                <div className="col-12 text-center sty-magin-b-1">
                    {flagEditRecipe && (
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
                    )}
                    {!flagEditRecipe && (
                        <button
                            className="sty-button-dash-1"
                            type="submit"
                            onClick={() => RouteSave()}>
                            <div className="sty-tag">
                                <TagLang group={"button"} tag={"back"} />
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        image_check: "",
        name_es: "",
        name_en: "",
        portions: 1,
        categories: [{}],
        regions: [{}],
        directions: [{ direction: "" }],
        isPublic: false,
    };
}

function validationSchema() {
    return {
        // image_check: Yup.string().required("required"),
        // name_es: Yup.string().required("required"),
        // name_en: Yup.string().required("required"),
        language: Yup.bool().when(["name_es", "name_en"], {
            is: (name_es, name_en) => !name_es && !name_en,
            then: Yup.bool().required("fields_language"),
            otherwise: Yup.bool(),
        }),
        categories: Yup.array().of(
            Yup.object().shape({
                category: Yup.string().required("required"),
            })
        ),
        regions: Yup.array().of(
            Yup.object().shape({
                region: Yup.string().required("required"),
            })
        ),
        directions: Yup.array().of(
            Yup.object().shape({
                // direction_es: Yup.string().required("required"),
                // direction_en: Yup.string().required("required"),
                directionsLanguage: Yup.bool().when(
                    ["direction_es", "direction_en"],
                    {
                        is: (direction_es, direction_en) =>
                            !direction_es && !direction_en,
                        then: Yup.bool().required("fields_language"),
                        otherwise: Yup.bool(),
                    }
                ),
            })
        ),
        ingredients: Yup.array()
            .of(
                Yup.object().shape({
                    portion: Yup.string().required("required"),
                    quantity: Yup.string().required("required"),
                })
            )
            .required("array_ingredients"),
    };
}
