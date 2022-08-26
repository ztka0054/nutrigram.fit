import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import useApp from "../../../../hooks/useApp";
import TagLang from "../../../modules/GetTagLang";

import MessageValidation from "../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../helper/i18n/getValueTagLang";
import request from "../../../../helper/core_services/core/requestService";
import administrator from "../../../../helper/core_services/endpoints/administrator";
import { message_1 } from "../../../../helper/appearance/messages";

export default function FormRecovery() {
    const router = useRouter();
    const { locale } = useApp();

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData, resetForm);
        },
    });

    const SendForm = async (formData, resetForm) => {
        let req = await request(administrator.post_recovery, formData, null, {
            locale,
        });
        if (req != null) {
            message_1(GetLanguage("validation", "message_email_1"));
            resetForm(initialValues());
            router.push("/login");
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="sty-title-1">
                <TagLang group={"login"} tag={"Recuperar contraseña"} />
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
            <div className="">
                <button className="sty-button-sec-1" type="submit">
                    <TagLang group={"button"} tag={"send"} />
                </button>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        email: "",
    };
}

function validationSchema() {
    return {
        email: Yup.string().email().required("required"),
    };
}
