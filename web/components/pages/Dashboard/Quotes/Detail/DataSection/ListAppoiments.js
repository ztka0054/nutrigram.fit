import React from "react";
import { map } from "lodash";
import moment from "moment";

import IconCalendar from "../../../../../components/Icons/Calendar";
import IconChange from "../../../../../components/Icons/Change";
import {
    getHourDateTime,
    addTimeToDateTime,
} from "../../../../../../helper/date/getTimeZoneData";

import style from "./data.module.scss";

const pic = "/static/img/favicons/app/human.png";

export default function ListAppoiments({ appoiments }) {
    return (
        <>
            {map(appoiments, (appoiment) => {
                return (
                    <div
                        className={`${style.appoinment}`}
                        key={`${appoiment?.id}`}>
                        <div className={style.content}>
                            <div className={style.contPicture}>
                                <div className={style.picture}>
                                    <img
                                        src={
                                            appoiment?.patient?.picture
                                                ? appoiment.patient.picture
                                                : pic
                                        }
                                    />
                                </div>
                            </div>
                            <div className={style.contentData}>
                                <div className={style.header}>
                                    <div className={style.schedule}>
                                        {getHourDateTime(appoiment?.datetime)} -{" "}
                                        {addTimeToDateTime(
                                            appoiment?.datetime,
                                            appoiment?.duration
                                        )}
                                    </div>
                                    <div>
                                        <IconCalendar />
                                    </div>
                                </div>
                                <div className={style.line} />
                                <div
                                    className={
                                        style.name
                                    }>{`${appoiment?.patient?.firstName} ${appoiment?.patient?.lastName}`}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
