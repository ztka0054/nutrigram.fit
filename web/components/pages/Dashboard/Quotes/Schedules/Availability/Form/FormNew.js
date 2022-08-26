import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import TagLang from "../../../../../../modules/GetTagLang";
import getValueTagLang from "../../../../../../../helper/i18n/getValueTagLang";

import request from "../../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../../helper/core_services/endpoints/appointments";

import InputSelect from "../../../../../../components/Inputs/InputTypeForm_1/InputSelectForm_1_lang";

import { days } from "../../../../../../catalogs/quotes";
import { startHour, endHour } from "../../../../../../catalogs/quotes";

import style from "./formNew.module.scss";

export default function IndexForm({
    setStateModal,
    setRefresh,
    availailityObject,
}) {
    const router = useRouter();

    const [dateFrom, setDateFrom] = useState(startHour);
    const [dateTo, setDateTo] = useState(endHour);

    useEffect(() => {
        if (availailityObject) {
            let fromTime = availailityObject?.fromTime.split(":");
            let toTime = availailityObject?.toTime.split(":");
            formik.setFieldValue("id", availailityObject?.id);
            formik.setFieldValue("weekday", availailityObject?.weekday);
            setDateFrom(
                setHours(
                    setMinutes(new Date(), parseInt(fromTime[1])),
                    parseInt(fromTime[0])
                )
            );
            setDateTo(
                setHours(
                    setMinutes(new Date(), parseInt(toTime[1])),
                    parseInt(toTime[0])
                )
            );
        }
    }, [availailityObject]);

    const formik = useFormik({
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (formData?.id) UpdateElement(formData);
            else CreateElement(formData);
        },
    });

    useEffect(() => {
        formik.setFieldValue("fromTime", moment(dateFrom).format("HH:mm"));
    }, [dateFrom]);

    useEffect(() => {
        formik.setFieldValue("toTime", moment(dateTo).format("HH:mm"));
    }, [dateTo]);

    const UpdateElement = async (formData) => {
        let result = await request(
            ApiAppoinments.patch_availabilities,
            formData,
            [formData?.id],
            { locale: router.locale }
        );
        if (result) {
            setStateModal(false);
            setRefresh(true);
        }
    };

    const CreateElement = async (formData) => {
        let result = await request(
            ApiAppoinments.post_availabilities,
            formData,
            null,
            { locale: router.locale }
        );
        if (result) {
            setStateModal(false);
            setRefresh(true);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.contInputs}>
                <div className={style.contInput}>
                    <InputSelect
                        formik={formik}
                        elements={days}
                        title={getValueTagLang("input", "day_quotes")}
                        name={`weekday`}
                        value={formik.values.weekday}
                        error={formik?.errors?.weekday}
                    />
                </div>
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
                        />
                    </div>
                </div>
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
        weekday: "",
        fromTime: "",
        toTime: "",
    };
}

function validationSchema() {
    return {
        weekday: Yup.string().required("required"),
        fromTime: Yup.string().required("required"),
        toTime: Yup.string().required("required"),
    };
}
