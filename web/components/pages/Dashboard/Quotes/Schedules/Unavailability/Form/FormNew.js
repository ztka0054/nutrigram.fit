import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import TagLang from "../../../../../../modules/GetTagLang";
import getValueTagLang from "../../../../../../../helper/i18n/getValueTagLang";

import request from "../../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../../helper/core_services/endpoints/appointments";
import UTCFormat from "../../../../../../../helper/date/utcFormat";

import style from "./formNew.module.scss";

let startDate = addDays(new Date(), 0);
let endDate = addDays(new Date(), 7);

export default function IndexForm({
    setStateModal,
    setRefresh,
    unavalivilityObject,
}) {
    const router = useRouter();

    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    useEffect(() => {
        if (unavalivilityObject) {
            formik.setFieldValue("id", unavalivilityObject?.id);
            setDateFrom(moment(unavalivilityObject?.fromDate).toDate());
            setDateTo(moment(unavalivilityObject?.toDate).toDate());
        }
    }, [unavalivilityObject]);

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
        formik.setFieldValue("fromDate", UTCFormat(dateFrom));
    }, [dateFrom]);

    useEffect(() => {
        formik.setFieldValue("toDate", UTCFormat(dateTo));
    }, [dateTo]);

    const UpdateElement = async (formData) => {
        let result = await request(
            ApiAppoinments.patch_unavailabilities,
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
            ApiAppoinments.post_unavailabilities,
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
                    <div className={style.tag}>
                        <TagLang group="input" tag={"from_quotes"} />
                    </div>
                    <div>
                        <DatePicker
                            placeholderText={getValueTagLang(
                                "input",
                                "start_date"
                            )}
                            className={`${style.datePicker}`}
                            selected={dateFrom}
                            onChange={(date) => setDateFrom(date)}
                            minDate={new Date()}
                            maxDate={dateTo}
                        />
                    </div>
                </div>
                <div className={style.contInput}>
                    <div className={style.tag}>
                        <TagLang group="input" tag={"to_quotes"} />
                    </div>
                    <div>
                        <DatePicker
                            placeholderText={getValueTagLang(
                                "input",
                                "final_date"
                            )}
                            className={`${style.datePicker}`}
                            selected={dateTo}
                            onChange={(date) => setDateTo(date)}
                            minDate={dateFrom}
                            disabled={dateFrom == null}
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
        fromDate: "",
        toDate: "",
    };
}

function validationSchema() {
    return {
        fromDate: Yup.string().required("required"),
        toDate: Yup.string().required("required"),
    };
}
