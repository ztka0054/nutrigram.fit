import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import moment from "moment";

import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../helper/core_services/endpoints/appointments";
import utcFormat from "../../../../../../helper/date/utcFormat";
import TimeZoneDate from "../../../../../../helper/date/getTimeZoneHour";

import IconLeft from "../../../../../components/Icons/ArrowLeft";
import IconRight from "../../../../../components/Icons/ArrowRight";
import IconChange from "../../../../../components/Icons/Change";
import LoadCircle from "../../../../../components/Icons/LoadCircle";
import getDays from "../../../../../../helper/calendar/getDaysArray";

import style from "./calendar.module.scss";

export default function Calendar({
    setDateSelect,
    dateSelect,
    unavailabilities,
    setActiveRefresh,
    activeRefresh,
}) {
    const router = useRouter();
    const { locale } = useRouter();

    const [days, setDays] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let ignore = false;

        let today = new Date();
        let daysCalendar = getDays(date.getFullYear(), date.getMonth());

        async function requestAvailavility() {
            let daysObjects = await Promise.all(
                map(daysCalendar, async (element, index) => {
                    if (element == null) return null;
                    else {
                        let resultAppoiments = await request(
                            ApiAppoinments.get_appointments,
                            {
                                state: 2,
                                page_size: 1,
                                datetime__gte: TimeZoneDate(
                                    utcFormat(element?.date),
                                    "00:00"
                                ).format(),
                                datetime__lte: TimeZoneDate(
                                    utcFormat(element?.date),
                                    "23:59"
                                ).format(),
                            },
                            null,
                            null,
                            {
                                local: router.locale,
                            }
                        );
                        let resultChanges = await request(
                            ApiAppoinments.get_appointments,
                            {
                                state: 1,
                                page_size: 1,
                                datetime__gte: TimeZoneDate(
                                    utcFormat(element?.date),
                                    "00:00"
                                ).format(),
                                datetime__lte: TimeZoneDate(
                                    utcFormat(element?.date),
                                    "23:59"
                                ).format(),
                            },
                            null,
                            null,
                            {
                                local: router.locale,
                            }
                        );
                        let quotes = resultAppoiments?.result;
                        let changes = resultChanges?.result;

                        let istoday = false;

                        let isDisabled = false;
                        if (element?.date?.sameDay(today)) istoday = true;

                        map(unavailabilities, (unavailability) => {
                            let flagSameFrom = moment(element?.date).isSame(
                                moment(unavailability?.fromDate)
                            );
                            let flagSameTo = moment(element?.date).isSame(
                                moment(unavailability?.toDate)
                            );
                            let flagBetween = moment(element?.date).isBetween(
                                moment(unavailability?.fromDate),
                                moment(unavailability?.toDate)
                            );
                            if (flagSameFrom || flagSameTo || flagBetween) {
                                isDisabled = true;
                            }
                        });
                        return {
                            istoday,
                            isDisabled,
                            day: element?.day,
                            date: element?.date,
                            quotes,
                            changes,
                        };
                    }
                })
            );
            setDays(daysObjects);
        }
        if (unavailabilities)
            if (activeRefresh) {
                setDays(null);
                requestAvailavility();
                setActiveRefresh(false);
            }

        return () => {
            ignore = true;
        };
    }, [activeRefresh, unavailabilities]);

    const SubMonth = () => {
        let newDate = date;
        newDate.setMonth(date.getMonth() - 1);
        setDate(newDate);
        setActiveRefresh(true);
    };

    const AddMonth = () => {
        let newDate = date;
        newDate.setMonth(date.getMonth() + 1);
        setDate(newDate);
        setActiveRefresh(true);
    };

    const SelectDate = (obj) => {
        setDateSelect(obj?.date);
    };

    return (
        <div className={style.contCalendar}>
            <div className={style.header}>
                <div className={style.date}>
                    {moment(date).locale(locale).format("MMMM YYYY")}
                </div>
                <div className={style.contArrow}>
                    <div className={style.arrow} onClick={() => SubMonth()}>
                        <IconLeft />
                    </div>
                    <div className={style.arrow} onClick={() => AddMonth()}>
                        <IconRight />
                    </div>
                </div>
            </div>
            <div className={style.contAllCalendar}>
                <div className={style.contNames}>
                    <div className={style.name}>
                        <TagLang group="input" tag="DOM." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="LUN." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="MAR." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="MIR." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="JUE." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="VIE." />
                    </div>
                    <div className={style.name}>
                        <TagLang group="input" tag="SAB." />
                    </div>
                </div>
                {days && (
                    <div className={style.contDays}>
                        {map(days, (day, index) => {
                            if (day) {
                                let isSelect = false;
                                if (day?.date?.sameDay(dateSelect))
                                    isSelect = true;
                                return (
                                    <div
                                        key={`${index}`}
                                        className={`${style.day} ${
                                            day?.istoday ? style.today : ""
                                        }  ${isSelect ? style.select : ""} ${
                                            day?.isDisabled
                                                ? style.disabled
                                                : ""
                                        } ${
                                            size(day?.quotes) > 0
                                                ? style.quotes
                                                : ""
                                        } ${
                                            size(day?.changes) > 0
                                                ? style.changes
                                                : ""
                                        }`}
                                        onClick={() => {
                                            if (!day?.isDisabled)
                                                SelectDate(day);
                                        }}>
                                        {day?.day}
                                        <div
                                            className={`${
                                                size(day?.changes) > 0
                                                    ? style.block
                                                    : ""
                                            } ${style.changeIcon}`}>
                                            <IconChange />
                                        </div>
                                    </div>
                                );
                            } else return <div key={`${index}`}></div>;
                        })}
                    </div>
                )}
                {!days && (
                    <div className={style.loadCalendar}>
                        <div className={style.iconLoad}>
                            <LoadCircle />
                        </div>
                    </div>
                )}
            </div>
            <div className={style.contSquedule}>
                <button
                    onClick={() => router.push("/dashboard/quotes/schedules")}>
                    <TagLang group="input" tag="calendar_button" />
                </button>
            </div>
        </div>
    );
}
