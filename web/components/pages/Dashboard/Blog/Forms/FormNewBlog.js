import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import MessageValidation from "../../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";
import request from "../../../../../helper/core_services/core/requestService";
import blog from "../../../../../helper/core_services/endpoints/blog";
import { loadElement } from "../../../../../helper/appearance/load";
import { sortByAttr } from "../../../../../helper/array/sort";

import FieldPic from "../../../../../helper/forms/elements/pic_1";
import FieldVideo from "../../../../../helper/forms/elements/video";
import FieldCheck from "../../../../../helper/forms/elements/check";
import SubContentsCont from "./SubContentsCont";

export default function FormNewBlog({ idElement }) {
    const router = useRouter();
    const { locale } = useApp();

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (!formData?.id) SendNewForm(formData, resetForm);
            else {
                SendUpdateForm(formData);
            }
        },
    });

    useEffect(() => {
        if (idElement) GetData();
    }, [idElement]);

    const GetData = async () => {
        let req = await request(blog.get_blog, null, [idElement], {
            locale,
        });
        if (req != null) {
            let images = map(req.images, (element) => {
                element.image_check = "up";
                element.type = 1;
                return element;
            });
            let texts = map(req.paragraphs, (element) => {
                element.type = 2;
                return element;
            });
            let contents = [...images, ...texts];
            sortByAttr();
            contents = contents.sortBy("order");
            PutData(req, contents);
            // this.setState({ dataGet: req });
            // this.setState({ imageLements: order });
        }
    };

    const PutData = (info, contents) => {
        let values = {
            id: info.id,
            image_check: info.image == null ? "" : info.image,
            image_pic_preview: info.image,
            video: info.video,
            title: info.title,
            instagramLink: info.instagramLink,
            isActive: info.isActive,
            isPublic: info.isPublic,
            content: info.content,
            contents: contents,
        };
        formik.setValues(values);
    };

    const SendNewForm = async (formData, resetForm) => {
        Object.keys(formData).forEach(
            (key) => formData[key] == null && delete formData[key]
        );
        loadElement(true);
        let req = await request(blog.post_blog, formData, null, {
            locale,
        });
        loadElement(false);
        if (req != null) SaveContents(formData, req);
    };

    const SaveContents = async (formData, info) => {
        let paramsDina = { content: formData.content, paragraphs: [] };
        let id = info.id;
        if (typeof formData.contents != "undefined") {
            let imagesRequest = [];
            map(formData.contents, async (element, index) => {
                if (typeof element.text != "undefined")
                    paramsDina.paragraphs.push({
                        order: index,
                        text: element.text,
                    });
                if (typeof element.image != "undefined") {
                    var params = { order: index, image: element.image };
                    imagesRequest.push(
                        request(blog.post_blog_img, params, [id], {
                            locale,
                        })
                    );
                }
            });
            loadElement(true);
            await Promise.all(imagesRequest);
            await request(blog.patch_n_blog, paramsDina, [id], {
                locale,
            });
            loadElement(false);
        }
        router.push("/dashboard/blogs");
    };

    const SendUpdateForm = async (formData) => {
        loadElement(true);
        if (formData.video === null) delete formData.video;
        if (typeof formData.video === "string") delete formData.video;
        let req = await request(blog.patch_blog, formData, [idElement], {
            locale,
        });
        loadElement(false);
        if (req != null) UpdateContents(formData, req);
    };

    const UpdateContents = async (formData, info) => {
        let deleteImage = [];
        map(info.images, (image) => {
            let find = formData.contents.find((obj) => obj.id == image.id);
            if (find === undefined) {
                deleteImage.push(
                    request(blog.delete_blog_img, {}, [idElement, image.id], {
                        locale,
                    })
                );
            }
        });
        await Promise.all(deleteImage);
        let paramsDina = { content: formData.content, paragraphs: [] };
        let id = idElement;
        if (formData?.contents) {
            let imagesRequest = [];
            map(formData.contents, async (element, index) => {
                if (element.type === 2)
                    paramsDina.paragraphs.push({
                        order: index,
                        text: element.text,
                    });
                if (element.type === 1) {
                    if (element?.id) {
                        var params = { order: index };
                        if (typeof value == "string")
                            params["image"] = element.image;
                        imagesRequest.push(
                            request(
                                blog.patch_blog_img,
                                params,
                                [id, element.id],
                                {
                                    locale,
                                }
                            )
                        );
                    } else {
                        var params = { order: index, image: element.image };
                        imagesRequest.push(
                            request(blog.post_blog_img, params, [id], {
                                locale,
                            })
                        );
                    }
                }
            });
            loadElement(true);
            await Promise.all(deleteImage);
            await Promise.all(imagesRequest);
            await request(blog.patch_n_blog, paramsDina, [id], {
                locale,
            });
            loadElement(false);
        }
        router.push("/dashboard/blogs");
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-5">
                    <FieldPic formik={formik} name={"image"} />
                    <FieldVideo formik={formik} name={"video"} />
                </div>
                <div className="col-7">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"title"} />
                        </div>
                        <div className="sty-input">
                            <input
                                name={`title`}
                                type="text"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                            />
                            <MessageValidation error={formik.errors.title} />
                        </div>
                    </div>
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"instagram"} />
                        </div>
                        <div className="sty-input">
                            <input
                                name={`instagramLink`}
                                value={formik.values.instagramLink}
                                onChange={formik.handleChange}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <FieldCheck
                                formik={formik}
                                name={"isActive"}
                                tag={GetLanguage("input", "active")}
                            />
                        </div>
                        <div className="col-6">
                            <FieldCheck
                                formik={formik}
                                name={"isPublic"}
                                tag={GetLanguage("input", "public")}
                            />
                        </div>
                    </div>
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"text"} />
                        </div>
                        <div className="sty-input">
                            <textarea
                                name={`content`}
                                value={formik.values.content}
                                onChange={formik.handleChange}
                            />
                            <MessageValidation error={formik.errors.content} />
                        </div>
                    </div>
                    <hr />
                    <FormikProvider value={formik}>
                        <FieldArray
                            name="contents"
                            render={(arrayHelpers) => (
                                <SubContentsCont
                                    formik={formik}
                                    arrayHelpers={arrayHelpers}
                                    father={"contents"}
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
        image_check: "",
        title: "",
        instagramLink: "",
        isActive: false,
        isPublic: false,
        content: "",
        contents: [],
    };
}

function validationSchema() {
    return {
        image_check: Yup.string().required("required"),
        title: Yup.string().required("required"),
        content: Yup.string().required("required"),
        contents: Yup.array().of(
            Yup.object().shape({
                // image_check: Yup.string().required("required"),
                // text: Yup.string().required("required"),
                image_check: Yup.string()
                    .ensure()
                    .when("text", {
                        is: undefined,
                        then: Yup.string().required("required"),
                    }),
            })
        ),
        // .required("Must have friends")
        // .min(3, "Minimum of 3 friends"),
    };
}
