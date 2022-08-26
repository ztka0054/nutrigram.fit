import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function time({ formik, name }) {
    const [selectDate, setSelectDate] = useState(null);

    useEffect(() => {
        if (formik.values?.[name])
            setSelectDate(moment(formik.values[name]).toDate());
    }, [formik.values?.[name]]);

    const SelectDate = (date) => {
        let format = moment(date).format("YYYY-MM-DD");
        formik.setFieldValue(name, format);
    };

    return (
        <>
            <DatePicker
                selected={selectDate}
                onChange={(date) => SelectDate(date)}
                dateFormat="dd-MM-yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                // excludeTimes={excludeDates}
            />
        </>
    );
}
