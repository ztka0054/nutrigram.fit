import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../modules/Forms/MessageValidation";

import request from "../../../../../../helper/core_services/core/requestService";
import appointment from "../../../../../../helper/core_services/endpoints/appointments";
import fixDate from "../../../../../../helper/date/fixDateTimeService";
import addDuration from "../../../../../../helper/date/addDurationDateTime";
import getDuration from "../../../../../../helper/date/getDurationDateHours";
import getTimeZoneDate from "../../../../../../helper/date/getTimeZoneDate";

import FieldTime from "../../../../../../helper/forms/elements/time";

const pic = "/static/img/favicons/app/human.png";

export default function FormAppoinment({
    putChangeQuotes,
    selectAppoin,
    ShowQuotes,
    selectDate,
    ShowUsers,
    selectUser,
}) {
    const { locale } = useApp();
    const [statePic, setStatePic] = useState(pic);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (selectAppoin == null) SendAppoinment(formData, resetForm);
            else UpdateAppoinment(formData, resetForm);
        },
    });

    useEffect(() => {
        if (selectAppoin != null) GetData();
    }, [selectAppoin]);

    useEffect(() => {
        if (selectUser) {
            if (selectUser?.picture) setStatePic(selectUser.picture);
            formik.setFieldValue("patient", selectUser.id);
            formik.setFieldValue(
                "name",
                `${selectUser.firstName} ${selectUser.lastName}`
            );
        }
    }, [selectUser]);

    const GetData = async () => {
        if (selectAppoin.patient?.picture)
            setStatePic(selectAppoin.patient.picture);
        formik.setValues({
            patient: selectAppoin.patient.id,
            name: `${selectAppoin.patient.firstName} ${selectAppoin.patient.lastName}`,
            start: fixDate(selectAppoin.datetime).toDate(),
            end: addDuration(
                selectAppoin.datetime,
                selectAppoin.duration
            ).toDate(),
        });
    };

    const SendAppoinment = async (formData, resetForm) => {
        let params = { ...formData };
        params.datetime = getTimeZoneDate(
            `${moment(selectDate).format("YYYY-MM-DD")} ${moment(
                formData.start
            ).format("HH:mm")}`
        );
        params.duration = getDuration(selectDate, formData.start, formData.end);
        let req = await request(
            appointment.post_new_appointment,
            params,
            null,
            {
                locale,
            }
        );
        ShowQuotes();
        putChangeQuotes(true);
    };

    const UpdateAppoinment = async (formData, resetForm) => {
        let params = { ...formData };
        params.datetime = getTimeZoneDate(
            `${moment(selectDate).format("YYYY-MM-DD")}T${moment(
                formData.start
            ).format("HH:mm")}`
        );
        params.duration = getDuration(selectDate, formData.start, formData.end);
        let req = await request(
            appointment.patch_edit_appointment,
            params,
            [selectAppoin.id],
            {
                locale,
            }
        );
        ShowQuotes();
        putChangeQuotes(true);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row justify-content-center sty-cont-form-1">
                <div className="col-10">
                    <div className="row">
                        <div className="col-3">
                            <div className="sty-u-cont-pic">
                                <div className="sty-pic" id="id_pic">
                                    <img src={statePic} />
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            {!selectAppoin && (
                                <div className="sty-margin-button-1">
                                    <button
                                        className="sty-button-dash-1"
                                        type="button"
                                        onClick={() => ShowUsers()}>
                                        <div className="sty-icon">
                                            <img src="/static/img/favicons/app/add_w.svg" />
                                        </div>
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"button"}
                                                tag={"tag_d_select_patient"}
                                            />
                                        </div>
                                    </button>
                                </div>
                            )}
                            <div className="row">
                                <div className="col-12">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"name"}
                                            />
                                        </div>
                                        <div className="sty-input">
                                            <input
                                                name={`name`}
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                type="text"
                                                disabled={true}
                                            />
                                            <MessageValidation
                                                error={formik.errors.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"start"}
                                            />
                                        </div>
                                        <div className="sty-input">
                                            <FieldTime
                                                formik={formik}
                                                name="start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="sty-cont-input-2">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"end"}
                                            />
                                        </div>
                                        <div className="sty-input">
                                            <FieldTime
                                                formik={formik}
                                                name="end"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text-center sty-magin-b-1 cont-buttons-form">
                                <button
                                    className="sty-button-dash-1 color-2"
                                    type="button"
                                    onClick={() => ShowQuotes()}>
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/rem_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"cancel"}
                                        />
                                    </div>
                                </button>
                                <button
                                    className="sty-button-dash-1"
                                    type="submit">
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/save_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"save"}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        patient: "",
        name: "",
        start: "",
        end: "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required("required"),
        start: Yup.string().required("required"),
        end: Yup.string().required("required"),
    };
}
