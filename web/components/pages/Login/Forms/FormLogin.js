import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import useApp from "../../../../hooks/useApp";
import useAuth from "../../../../hooks/useAuth";
import SetLink from "../../../modules/SetLink";
import TagLang from "../../../modules/GetTagLang";
import MessageValidation from "../../../modules/Forms/MessageValidation";

import GetLanguage from "../../../../helper/i18n/getValueTagLang";
import request from "../../../../helper/core_services/core/requestService";
import nutri from "../../../../helper/core_services/endpoints/nutritionist";
import subscription from "../../../../helper/core_services/endpoints/subscription";

export default function FormLogin() {
    const router = useRouter();
    const { locale } = useApp();
    const { login } = useAuth();

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            SendForm(formData, resetForm);
        },
    });

    const SendForm = async (formData, resetForm) => {
        let responseLogin = await request(nutri.post_login, formData, null, {
            locale,
        });
        if (responseLogin != null) {
            login(responseLogin);
            resetForm(initialValues());
            // router.push("/dashboard/patients");
            GetPlan();
        }
    };

    const GetPlan = async () => {
        let responseSubscription = await request(
            subscription.get_subscription,
            null,
            null,
            {
                locale,
            },
            false
        );
        if (responseSubscription != null) {
            router.push("/dashboard/patients");
        } else {
            router.push("/signup_step_4");
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="sty-title-1">
                <TagLang group={"login"} tag={"title_1"} />
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
            <div className="sty-cont-input-1">
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
                    <TagLang group={"button"} tag={"tag_t_1_4"} />
                </button>
            </div>
            <div className="sty-cont-link-1">
                <SetLink route={"/recovery"}>
                    <div className="sty-link-1 link text-right">
                        <TagLang group={"login"} tag={"sub_1"} />
                    </div>
                </SetLink>
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
        password: Yup.string().required("required"),
    };
}
