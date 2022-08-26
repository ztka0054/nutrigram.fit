import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

const initDate = moment("2020-01-01T10:00:00").toDate();

export default function InputTimeForm_1({
    formik,
    title,
    name,
    value,
    error,
    maxHour,
}) {
    const [selectDate, setSelectDate] = useState(initDate);

    useEffect(() => {
        if (value) {
            if (typeof value == "string") {
                if (value != "") {
                    let date = moment(
                        `${moment().format("YYYY-MM-DD")}T${value}`
                    ).toDate();
                    setSelectDate(date);
                }
            }
        } else {
            let value = `${moment(initDate).format("HH:mm:ss")}`;
            formik.setFieldValue(name, value);
        }
    }, [value]);

    const SelectDate = (date) => {
        let value = `${moment(date).format("HH:mm:ss")}`;
        formik.setFieldValue(name, value);
    };

    return (
        <>
            <div className={style.content} id={error ? "field_error" : ""}>
                <div className={style.tag}>
                    <TagLang group={"input"} tag={title} />
                </div>
                <div className={`${style.input} ${style.contPicker}`}>
                    <DatePicker
                        selected={selectDate}
                        onChange={(date) => SelectDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        // excludeTimes={excludeDates}
                        minTime={moment(
                            `${moment().format("YYYY-MM-DD")}T00:00`
                        ).toDate()}
                        maxTime={moment(
                            `${moment().format("YYYY-MM-DD")}T${maxHour}`
                        ).toDate()}
                    />
                    <Validation error={error} />
                </div>
            </div>
        </>
    );
}
