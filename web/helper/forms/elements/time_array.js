import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initDate = moment("2020-01-01T10:00:00").toDate();

export default function time({ formik, father, name, index }) {
    const [selectDate, setSelectDate] = useState(initDate);

    useEffect(() => {
        if (formik.values?.[father]?.[index]?.[name])
            setSelectDate(formik.values[father][index][name]);
        else formik.setFieldValue(`${father}[${index}].${name}`, initDate);
    }, [formik.values[father][index]?.[name]]);

    const SelectDate = (date) => {
        formik.setFieldValue(`${father}[${index}].${name}`, date);
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
