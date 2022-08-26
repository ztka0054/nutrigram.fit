import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import useApp from "../../../../hooks/useApp";
import TagLang from "../../../modules/GetTagLang";
import SetLink from "../../../modules/SetLink";
import MessageValidation from "../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../helper/i18n/getValueTagLang";

export default function FormSignUp() {
    const router = useRouter();
    const { putObjectSignUp } = useApp();

    const formik = useFormik({
        validateOnChange: true,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData, resetForm);
        },
    });

    const SendForm = (formData) => {
        putObjectSignUp({ step_1: formData });
        router.push("/signup_step_2");
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="sty-title-1">
                <TagLang group={"signin"} tag={"title_2"} />
            </div>
            <div className="sty-cont-input-1">
                <div className="sty-input-1">
                    <input
                        name={`email`}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="text"
                        placeholder={GetLanguage("input", "email")}
                    />
                    <MessageValidation error={formik.errors.email} />
                </div>
            </div>
            <div className="sty-cont-input-1 fix-1">
                <div className="sty-input-1">
                    <input
                        name={`password`}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        placeholder={GetLanguage("input", "password")}
                    />
                    <MessageValidation error={formik.errors.password} />
                </div>
            </div>
            <div className="">
                <button className="sty-button-sec-1" type="submit">
                    <TagLang group={"button"} tag={"tag_t_1_5"} />
                </button>
            </div>
            <div className="sty-cont-link-1">
                <div className="sty-link-1">
                    <TagLang group={"signin"} tag={"sub_2_1"} />
                    <SetLink route="terms">
                        <TagLang group={"signin"} tag={"sub_2_2"} />
                    </SetLink>
                    .
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        email: "",
        password: "",
    };
}

function validationSchema() {
    return {
        email: Yup.string().email().required("required"),
        password: Yup.string()
            .required("required")
            .matches(
                // /^.*(?=.{8})((?=.*[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
                /^(?=.*[0-9])(?=.*[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])(?=.{8,})/,
                "format_password"
            ),
    };
}
