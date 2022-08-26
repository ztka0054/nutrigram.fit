import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TagLang from "../../../modules/GetTagLang";
import Validation from "../Validation";

import style from "./input.module.scss";

export default function InputTimeDate_1({ formik, title, name, value, error }) {
    const [selectDate, setSelectDate] = useState(null);

    useEffect(() => {
        if (value) setSelectDate(moment(value).toDate());
    }, [value]);

    const SelectDate = (date) => {
        let format = moment(date).format("YYYY-MM-DD");
        formik.setFieldValue(name, format);
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
                        dateFormat="dd-MM-yyyy"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        // excludeTimes={excludeDates}
                    />
                    <Validation error={error} />
                </div>
            </div>
        </>
    );
}
