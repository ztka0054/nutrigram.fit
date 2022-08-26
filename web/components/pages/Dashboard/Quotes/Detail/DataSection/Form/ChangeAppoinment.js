import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import TagLang from "../../../../../../modules/GetTagLang";
import utcFormat from "../../../../../../../helper/date/utcFormat";
import {
    getHourDateTime,
    addTimeToDateTime,
} from "../../../../../../../helper/date/getTimeZoneData";

import request from "../../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../../helper/core_services/endpoints/appointments";

import style from "./formNew.module.scss";

const pic = "/static/img/favicons/app/human.png";

export default function ChangeAppoinment({
    dateSelect,
    setStateModal,
    setActiveRefresh,
    selectAppoiment,
    activeRefreshList,
    setActiveRefreshList,
}) {
    const router = useRouter();

    useEffect(() => {
        if (dateSelect) formik.setFieldValue("date", utcFormat(dateSelect));
        else formik.setFieldValue("date", "");
    }, [dateSelect]);

    const formik = useFormik({
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            ChangeElement(formData);
        },
    });

    const ChangeElement = async (formData) => {
        let params = {
            state: formData.state,
        };
        if (formData?.state == 2) {
            params.datetime = selectAppoiment?.suggestedDatetime;
        }

        let result = await request(
            ApiAppoinments.patch_edit_appointment,
            params,
            [selectAppoiment?.id],
            { locale: router.locale }
        );
        if (result) {
            setStateModal(false);
            setActiveRefresh(true);
            setActiveRefreshList(!activeRefreshList);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.contUser}>
                <div className={style.contPicture}>
                    <div className={style.picture}>
                        <img
                            src={
                                selectAppoiment?.patient?.picture
                                    ? selectAppoiment.patient.picture
                                    : pic
                            }
                        />
                    </div>
                </div>
                <div className={style.nameUser}>
                    {!selectAppoiment?.patient && (
                        <div className={style.unselectUser}>
                            <TagLang group="input" tag={"new_none_patient"} />
                        </div>
                    )}
                    {selectAppoiment?.patient && (
                        <div>{`${selectAppoiment?.patient?.firstName} ${selectAppoiment?.patient?.lastName}`}</div>
                    )}
                </div>
            </div>

            <div className={style.conDataChange}>
                <div className={style.dataInfo}>
                    <div className={`${style.titleSection} ${style.color1}`}>
                        <TagLang group="input" tag={"title_1_change_quote"} />
                    </div>
                    <div className={style.contDataInfo}>
                        <div className={`${style.element} ${style.date}`}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"date"} />
                            </div>
                            <div className={style.data}>
                                {moment(utcFormat(selectAppoiment?.datetime))
                                    .locale(router.locale)
                                    .format("dddd, MMMM DD")}
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"from_quotes"} />
                            </div>
                            <div className={style.data}>
                                {getHourDateTime(selectAppoiment?.datetime)}
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"to_quotes"} />
                            </div>
                            <div className={style.data}>
                                {addTimeToDateTime(
                                    selectAppoiment?.datetime,
                                    selectAppoiment?.duration
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.lineChange} />
                <div className={style.dataInfo}>
                    <div className={`${style.titleSection} ${style.color2}`}>
                        <TagLang group="input" tag={"title_2_change_quote"} />
                    </div>
                    <div className={style.contDataInfo}>
                        <div className={`${style.element} ${style.date}`}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"date"} />
                            </div>
                            <div className={style.data}>
                                {moment(
                                    utcFormat(
                                        selectAppoiment?.suggestedDatetime
                                    )
                                )
                                    .locale(router.locale)
                                    .format("dddd, MMMM DD")}
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"from_quotes"} />
                            </div>
                            <div className={style.data}>
                                {getHourDateTime(
                                    selectAppoiment?.suggestedDatetime
                                )}
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.title}>
                                <TagLang group="input" tag={"to_quotes"} />
                            </div>
                            <div className={style.data}>
                                {addTimeToDateTime(
                                    selectAppoiment?.suggestedDatetime,
                                    selectAppoiment?.duration
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style?.error}>{formik?.errors?.patient}</div>
            <div className={style.contButtons}>
                <button
                    className={style.buttonCancel}
                    onClick={() => formik.setFieldValue("state", 3)}
                    type="submit">
                    <TagLang group="button" tag={"cancel_appoiment"} />
                </button>
                <button
                    className={style.buttonAccept}
                    onClick={() => formik.setFieldValue("state", 2)}
                    type="submit">
                    <TagLang group="button" tag={"accept_appoiment"} />
                </button>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        state: "",
    };
}

function validationSchema() {
    return {
        state: Yup.string().required("required"),
    };
}
