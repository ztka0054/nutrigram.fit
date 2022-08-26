import React, { useState, useEffect } from "react";
import classnames from "classnames";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { map, size } from "lodash";

import useApp from "../../../../../../hooks/useApp";

import request from "../../../../../../helper/core_services/core/requestService";
import appointment from "../../../../../../helper/core_services/endpoints/appointments";
import fixDate from "../../../../../../helper/date/fixDateTimeService";
import addDuration from "../../../../../../helper/date/addDurationDateTime";

export default function ElementDate({
    element,
    SelectDay,
    dataAppoinments,
    pendingAppoinments,
}) {
    const { locale } = useApp();

    const [appointments, setAppointments] = useState([]);
    const [flagChanges, setFlagChanges] = useState(false);
    const [flagToday, setFlagToday] = useState(false);

    useEffect(() => {
        setFlagChanges(false);
        if (moment(moment().format("L")).isSame(element.date))
            setFlagToday(true);
        else setFlagToday(false);
    }, [element]);

    useEffect(() => {
        let finderPending = pendingAppoinments?.filter((obj) => {
            return (
                fixDate(obj.datetime).format("YYYY-MM-DD") ===
                moment(element.date).format("YYYY-MM-DD")
            );
        });

        if (finderPending != undefined)
            setFlagChanges(size(finderPending) > 0 ? true : false);
    }, [pendingAppoinments]);

    useEffect(() => {
        if (size(GetAppointments()) > 0) GetAppointments();
    }, [dataAppoinments]);

    const GetAppointments = async () => {
        // ************
        let finder = dataAppoinments.filter((obj) => {
            return (
                fixDate(obj.datetime).format("YYYY-MM-DD") ===
                moment(element.date).format("YYYY-MM-DD")
            );
        });

        let appointments = [];

        appointments = map(finder, (element, index) => {
            let hourStart = fixDate(element.datetime).format("HH:mm");
            let hourEnd = addDuration(
                element.datetime,
                element.duration
            ).format("HH:mm");
            return (
                <div className="sty-quotes" key={`appointment_${index}`}>
                    <div className="sty-time">
                        {hourStart} - {hourEnd}
                    </div>
                    <div className="sty-name">
                        {element.patient?.firstName} {element.patient?.lastName}
                    </div>
                </div>
            );
        });
        setAppointments(appointments);
    };

    return (
        <div
            className="sty-day-calendar"
            onClick={() => SelectDay(element.active, element.date)}>
            <div
                className={`${classnames("sty-cont-date sty-select", {
                    "sty-deact": !element.active,
                    "sty-today": flagToday,
                })}`}
                // onClick={(e) =>
                //     this.handleShowQuotes(e, i, row, element.date, result)
                // }
            >
                {flagChanges && (
                    <div className="sty-notification">
                        <FontAwesomeIcon
                            className="sty-icon"
                            icon={faExchangeAlt}
                        />
                    </div>
                )}
                <div className="sty-day">
                    {moment(element?.date).format("DD")}
                </div>
                <div className="sty-cont-quotes">{appointments}</div>
            </div>
        </div>
    );
}
