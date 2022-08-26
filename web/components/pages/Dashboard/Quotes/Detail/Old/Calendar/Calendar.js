import React, { useState, useEffect } from "react";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import capitalize from "../../../../../../helper/text/capitalize";
import daysCalendar from "../../../../../../helper/appearance/getDaysCalendar";
import request from "../../../../../../helper/core_services/core/requestService";
import appointments from "../../../../../../helper/core_services/endpoints/appointments";
import getTimeZoneDate from "../../../../../../helper/date/getTimeZoneDate";

import RowDates from "./RowDates";

const iconPrev = "/static/img/favicons/app/prev.svg";
const iconNext = "/static/img/favicons/app/next.svg";

export default function Calendar() {
    const { locale } = useApp();
    const [dateSelect, setDateSelect] = useState(moment());
    const [allDays, setAllDays] = useState([]);
    const [dataAppoinments, setDataAppoinments] = useState([]);
    const [pendingAppoinments, setPendingAppoinments] = useState([]);
    const [changeQuotes, setChangeQuotes] = useState(false);

    useEffect(() => {
        GetDaysMonth();
    }, [dateSelect]);

    useEffect(() => {
        GetAppoinments();
        GetPendings();
        if (changeQuotes) setChangeQuotes(false);
    }, [dateSelect, changeQuotes]);

    const GetDaysMonth = () => {
        setAllDays(
            daysCalendar(dateSelect.format("YYYY"), dateSelect.format("M"))
        );
    };

    const GetAppoinments = async () => {
        let params = {
            datetime__gte: getTimeZoneDate(
                `${dateSelect.startOf("month").format("YYYY-MM-DD")}T00:00`
            ),
            datetime__lt: getTimeZoneDate(
                `${dateSelect.endOf("month").format("YYYY-MM-DD")}T23:59`
            ),
            state: 2,
        };
        let req = await request(appointments.get_appointments, params, null, {
            locale,
        });
        if (req != null) {
            setDataAppoinments(req.result);
        }
    };

    const GetPendings = async () => {
        let params = {
            datetime__gte: getTimeZoneDate(
                `${dateSelect.startOf("month").format("YYYY-MM-DD")}T00:00`
            ),
            datetime__lt: getTimeZoneDate(
                `${dateSelect.endOf("month").format("YYYY-MM-DD")}T23:59`
            ),
            state: 1,
        };
        let req = await request(appointments.get_appointments, params, null, {
            locale,
        });
        if (req != null) {
            setPendingAppoinments(req.result);
        }
    };

    const SetAppoinments = () => {};

    const LessMonth = () => {
        let date = dateSelect.clone();
        setDateSelect(date.subtract(1, "M"));
    };

    const AddMonth = () => {
        let date = dateSelect.clone();
        setDateSelect(date.add(1, "M"));
    };

    const putChangeQuotes = (value) => {
        setChangeQuotes(value);
    };

    return (
        <>
            <div className="row sty-cont-option-1">
                <div className="col-6 text-left">
                    <div className="sty-cont-control-calendar">
                        <div className="sty-cont-month">
                            <div className="sty-year">
                                {dateSelect.locale(locale).format("YYYY")}
                            </div>
                            <div
                                className="sty-control"
                                onClick={() => LessMonth()}
                                // onClick={this.handleLessMonth}
                            >
                                <img src={iconPrev} />
                            </div>
                            <div className="sty-month">
                                {capitalize(
                                    dateSelect.locale(locale).format("MMMM")
                                )}
                            </div>
                            <div
                                className="sty-control"
                                onClick={() => AddMonth()}
                                // onClick={this.handleAddMonth}
                            >
                                <img src={iconNext} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 text-right"></div>
            </div>
            <div className="sty-content-data-1">
                <div className="sty-card-days">
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_1"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_2"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_3"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_4"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_5"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_6"} />
                        </div>
                    </div>
                    <div className="sty-day">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"tag_cal_7"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sty-cont-calendar">
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(0, 7)}
                    dataAppoinments={dataAppoinments}
                    pendingAppoinments={pendingAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(7, 14)}
                    dataAppoinments={dataAppoinments}
                    pendingAppoinments={pendingAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(14, 21)}
                    dataAppoinments={dataAppoinments}
                    pendingAppoinments={pendingAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(21, 28)}
                    dataAppoinments={dataAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(28, 35)}
                    dataAppoinments={dataAppoinments}
                    pendingAppoinments={pendingAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                <RowDates
                    dateSelect={dateSelect}
                    allDays={allDays.slice(35, 42)}
                    dataAppoinments={dataAppoinments}
                    pendingAppoinments={pendingAppoinments}
                    putChangeQuotes={putChangeQuotes}
                />
                {/* <div className="sty-cont-row">{dataCalendar[0]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={1}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                /> */}

                {/* <div className="sty-cont-row">{dataCalendar[1]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={2}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                />

                <div className="sty-cont-row">{dataCalendar[2]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={3}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                />

                <div className="sty-cont-row">{dataCalendar[3]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={4}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                />

                <div className="sty-cont-row">{dataCalendar[4]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={5}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                />

                <div className="sty-cont-row">{dataCalendar[5]}</div>
                <Date
                    idDayElement={idDayElement}
                    idRowElement={idRowElement}
                    row={6}
                    dayElementDate={dayElementDate}
                    dayElementData={dayElementData}
                    handleCreateAppointment={this.handleCreateAppointment}
                /> */}
            </div>
        </>
    );
}
