import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initDate = moment("2020-01-01T10:00:00").toDate();

export default function time({ formik, name }) {
    const [flagGet, setFlagGet] = useState(true);
    const [selectDate, setSelectDate] = useState(initDate);

    useEffect(() => {
        setSelectDate(formik.values[name]);
    }, [formik.values?.[name]]);

    const SelectDate = (date) => {
        formik.setFieldValue(name, date);
    };

    return (
        <>
            <DatePicker
                selected={selectDate}
                onChange={(date) => SelectDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                // excludeTimes={excludeDates}
            />
        </>
    );
}
