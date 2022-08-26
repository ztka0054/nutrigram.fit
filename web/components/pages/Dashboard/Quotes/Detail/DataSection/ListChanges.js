import { useState, useEffect } from "react";
import { map } from "lodash";

import IconChange from "../../../../../components/Icons/Change";
import {
    getHourDateTime,
    addTimeToDateTime,
} from "../../../../../../helper/date/getTimeZoneData";

import ModalChange from "./ModalChange";

import style from "./data.module.scss";

export default function ListChanges({
    appoiments,
    setActiveRefresh,
    activeRefreshList,
    setActiveRefreshList,
}) {
    const [activeModal, setActiveModal] = useState(false);
    const [selectAppoiment, setSelectAppoiment] = useState(null);

    useEffect(() => {
        if (activeModal) setActiveModal(false);
    }, [activeModal]);

    return (
        <>
            <ModalChange
                active={activeModal}
                selectAppoiment={selectAppoiment}
                setActiveRefresh={setActiveRefresh}
                activeRefreshList={activeRefreshList}
                setActiveRefreshList={setActiveRefreshList}
            />
            {map(appoiments, (appoiment) => {
                return (
                    <div
                        className={`${style.appoinment} ${style.change}`}
                        key={`${appoiment?.id}`}
                        onClick={() => {
                            setActiveModal(true);
                            setSelectAppoiment(appoiment);
                        }}>
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
                                        <IconChange />
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
