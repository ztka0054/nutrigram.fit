import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import moment from "moment";
import { size } from "lodash";

import "react-datepicker/dist/react-datepicker.css";

import TagLang from "../../../../../../modules/GetTagLang";
import IconPlus from "../../../../../../components/Icons/Plus";
import utcFormat from "../../../../../../../helper/date/utcFormat";
import getTimeZoneHour from "../../../../../../../helper/date/getTimeZoneHour";
import getDurationByHours from "../../../../../../../helper/date/getDurationByHours";
import getIntervalsTime from "../../../../../../../helper/date/getIntervalsTime";
import { startHour, endHour, fixDays } from "../../../../../../catalogs/quotes";

import request from "../../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../../helper/core_services/endpoints/appointments";

import style from "./formNew.module.scss";

const pic = "/static/img/favicons/app/human.png";

export default function NewAppoinment({
    availabilities,
    dateSelect,
    setStateModal,
    setActiveRefresh,
    setViewState,
    selectUser,
    activeRefreshList,
    setActiveRefreshList,
}) {
    const router = useRouter();

    const [dateFrom, setDateFrom] = useState(startHour);
    const [dateTo, setDateTo] = useState(endHour);
    const [includesTimes, setIncludesTimes] = useState(undefined);

    useEffect(() => {
        let intervals = availabilities.filter(
            (obj) =>
                obj?.weekday ===
                fixDays.find((obj) => obj.dateValue === dateSelect?.getDay())
                    .value
        );
        if (size(intervals) > 0) {
            let arrayDates = getIntervalsTime(dateSelect, intervals, 30);
            setDateFrom(arrayDates[0]);
            setDateTo(arrayDates[size(arrayDates) - 1]);
            setIncludesTimes(arrayDates);
        }
    }, [availabilities]);

    useEffect(() => {
        if (dateSelect) formik.setFieldValue("date", utcFormat(dateSelect));
        else formik.setFieldValue("date", "");
    }, [dateSelect]);

    useEffect(() => {
        if (selectUser) formik.setFieldValue("patient", selectUser?.id);
        else formik.setFieldValue("patient", "");
    }, [selectUser]);

    const formik = useFormik({
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            CreateElement(formData);
        },
    });

    useEffect(() => {
        formik.setFieldValue("fromTime", moment(dateFrom).format("HH:mm"));
    }, [dateFrom]);

    useEffect(() => {
        formik.setFieldValue("toTime", moment(dateTo).format("HH:mm"));
    }, [dateTo]);

    const CreateElement = async (formData) => {
        let params = {
            patient: formData?.patient,
            state: 2,
            datetime: getTimeZoneHour(
                formData?.date,
                formData?.fromTime
            ).format(),
            duration: getDurationByHours(
                formData?.date,
                formData?.fromTime,
                formData?.toTime
            ),
        };
        let result = await request(
            ApiAppoinments.post_new_appointment,
            params,
            null,
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
                            src={selectUser?.picture ? selectUser.picture : pic}
                        />
                    </div>
                </div>
                <div className={style.nameUser}>
                    {!selectUser && (
                        <div className={style.unselectUser}>
                            <TagLang group="input" tag={"new_none_patient"} />
                        </div>
                    )}
                    {selectUser && (
                        <div>{`${selectUser?.firstName} ${selectUser?.lastName}`}</div>
                    )}
                </div>

                <div
                    className={style.buttonAdd}
                    onClick={() => setViewState(2)}>
                    <IconPlus />
                </div>
            </div>

            <div className={style.contInputs}>
                <div className={style.contInput}>
                    <div className={style.tag}>
                        <TagLang group="input" tag={"from_quotes"} />
                    </div>
                    <div>
                        <DatePicker
                            className={`${style.datePicker}`}
                            selected={dateFrom}
                            onChange={(date) => setDateFrom(date)}
                            // minDate={new Date()}
                            // maxDate={dateTo}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                            minTime={startHour}
                            maxTime={dateTo}
                            includeTimes={includesTimes}
                        />
                    </div>
                </div>
                <div className={style.contInput}>
                    <div className={style.tag}>
                        <TagLang group="input" tag={"to_quotes"} />
                    </div>
                    <div>
                        <DatePicker
                            className={`${style.datePicker}`}
                            selected={dateTo}
                            onChange={(date) => setDateTo(date)}
                            // minDate={dateFrom}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                            minTime={dateFrom}
                            maxTime={endHour}
                            includeTimes={includesTimes}
                        />
                    </div>
                </div>
            </div>
            <div className={style?.error}>
                {formik?.errors?.patient && (
                    <TagLang group="input" tag={formik?.errors?.patient} />
                )}
            </div>
            <div className={style.contButtons}>
                <button
                    className={style.buttonCancel}
                    onClick={() => setStateModal(false)}
                    type="button">
                    <TagLang group="button" tag={"cancel"} />
                </button>
                <button className={style.buttonAccept} type="submit">
                    <TagLang group="button" tag={"accept"} />
                </button>
            </div>
        </form>
    );
}

function initialValues() {
    return {
        patient: "",
        date: "",
        fromTime: "",
        toTime: "",
    };
}

function validationSchema() {
    return {
        patient: Yup.string().required("validation_patient"),
        date: Yup.string().required("required"),
        fromTime: Yup.string().required("required"),
        toTime: Yup.string().required("required"),
    };
}
