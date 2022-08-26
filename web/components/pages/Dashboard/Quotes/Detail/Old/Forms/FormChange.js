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

import FieldTime from "../../../../../../helper/forms/elements/time";
import InputTimeForm from "../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1";
import InputTimeForm_ex from "../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1_del_max";
import getTimeZoneDate from "../../../../../../helper/date/getTimeZoneDate";

const pic = "/static/img/favicons/app/human.png";

export default function FormChange({ element, putChangeQuotes }) {
    const { locale } = useApp();

    const [statePic, setStatePic] = useState(pic);
    const [dataChange, setDataChange] = useState({});

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            sendForm(formData);
        },
    });

    useEffect(() => {
        DrawElement();
    }, [element]);

    const sendForm = async (formData) => {
        let duration = getDuration(
            fixDate(element.suggestedDatetime).toDate(),
            fixDate(element.suggestedDatetime).toDate(),
            moment(
                `${fixDate(element.suggestedDatetime).format("YYYY-MM-DD")}T${
                    formData.end
                }`
            ).toDate()
        );
        let params = {
            state: formData.state,
            datetime: getTimeZoneDate(element.suggestedDatetime),
            duration,
        };
        let req = await request(
            appointment.patch_edit_appointment,
            params,
            [element.id],
            {
                locale,
            }
        );
        putChangeQuotes(true);
    };

    const DrawElement = () => {
        if (element?.patient?.picture) setStatePic(element.patient.picture);
        let dataChange = {
            oldDate: fixDate(element.datetime)
                .locale(locale)
                .format("dddd, DD MMMM, YYYY"),
            oldHourStart: fixDate(element.datetime)
                .locale(locale)
                .format("HH:mm"),
            oldHourEnd: addDuration(element.datetime, element.duration)
                .locale(locale)
                .format("HH:mm"),
            newDate: fixDate(element.suggestedDatetime)
                .locale(locale)
                .format("dddd, DD MMMM, YYYY"),
            newHourStart: fixDate(element.suggestedDatetime)
                .locale(locale)
                .format("HH:mm"),
        };
        formik.setValues(dataChange);
        // setDataChange(dataChange);
    };

    const SendStateAccept = () => {
        formik.setFieldValue("state", 2);
    };

    const SendStateCancel = () => {
        formik.setFieldValue("state", 3);
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
                            <div className="row">
                                <div className="col-12">
                                    <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"name"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {element?.patient?.firstName}{" "}
                                            {element?.patient?.lastName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="sty-input-tag-g-1">
                                        <TagLang
                                            group={"input"}
                                            tag={"previous_appointment"}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"date"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {dataChange.oldDate}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <InputTimeForm
                                        formik={formik}
                                        title={"start"}
                                        name={`oldHourStart`}
                                        value={formik.values.oldHourStart}
                                        error={formik.errors.oldHourStart}
                                    />
                                    {/* <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"start"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {dataChange.oldHourStart}
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-4">
                                    <InputTimeForm
                                        formik={formik}
                                        title={"end"}
                                        name={`oldHourEnd`}
                                        value={formik.values.oldHourEnd}
                                        error={formik.errors.oldHourEnd}
                                    />
                                    {/* <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"end"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {dataChange.oldHourEnd}
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-12">
                                    <hr />
                                    <div className="sty-input-tag-g-1">
                                        <TagLang
                                            group={"input"}
                                            tag={"new_appointment"}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"date"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {dataChange.newDate}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <InputTimeForm
                                        formik={formik}
                                        title={"start"}
                                        name={`newHourStart`}
                                        value={formik.values.newHourStart}
                                        error={formik.errors.newHourStart}
                                    />
                                    {/* <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"start"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {dataChange.newHourStart}
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-4">
                                    <InputTimeForm_ex
                                        formik={formik}
                                        title={"end"}
                                        name={`end`}
                                        value={formik.values.end}
                                        error={formik.errors.end}
                                        maxhour={formik.values.newHourStart}
                                    />
                                    {/* <div className="sty-cont-input-2">
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
                                            <MessageValidation
                                                error={formik.errors.end}
                                            />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text-right sty-magin-b-1">
                                <button
                                    className="sty-button-dash-1 color-2 fix-1 sty-tag fix-m-r-1"
                                    type="submit"
                                    onClick={() => SendStateCancel()}>
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/add_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"refuse"}
                                        />
                                    </div>
                                </button>
                                <button
                                    className="sty-button-dash-1 fix-1 sty-tag"
                                    type="submit"
                                    onClick={() => SendStateAccept()}>
                                    <div className="sty-icon">
                                        <img src="/static/img/favicons/app/add_w.svg" />
                                    </div>
                                    <div className="sty-tag">
                                        <TagLang
                                            group={"button"}
                                            tag={"accept"}
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
        start: "",
        end: "",
    };
}

function validationSchema() {
    return {
        end: Yup.string().required("required"),
    };
}
