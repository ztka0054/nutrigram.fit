import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { size } from "lodash";
import moment from "moment";

import IconPlus from "../../../../../components/Icons/Plus";

import request from "../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../helper/core_services/endpoints/appointments";
import utcFormat from "../../../../../../helper/date/utcFormat";
import TimeZoneDate from "../../../../../../helper/date/getTimeZoneHour";

import ListChanges from "./ListChanges";
import List from "./ListAppoiments";
import ModalNew from "./ModalNew";
import TagLang from "../../../../../modules/GetTagLang";

import style from "./data.module.scss";

export default function Data({ dateSelect, availabilities, setActiveRefresh }) {
    const router = useRouter();

    const { locale } = useRouter();

    const [activeModal, setActiveModal] = useState(false);
    const [appoiments, setAppoiments] = useState([]);
    const [changes, setChanges] = useState([]);
    const [activeRefreshList, setActiveRefreshList] = useState(false);

    useEffect(() => {
        let ignore = false;

        const requestAppoimentsDay = async () => {
            let resultAppoiments = await request(
                ApiAppoinments.get_appointments,
                {
                    datetime__gte: TimeZoneDate(
                        utcFormat(dateSelect),
                        "00:00"
                    ).format(),
                    datetime__lte: TimeZoneDate(
                        utcFormat(dateSelect),
                        "23:59"
                    ).format(),
                },
                null,
                null,
                {
                    local: router.locale,
                }
            );

            if (resultAppoiments) {
                let appoiments = resultAppoiments.result.filter(
                    (obj) => obj.state === 2
                );
                let changes = resultAppoiments.result.filter(
                    (obj) => obj.state === 1
                );
                setAppoiments(appoiments);
                setChanges(changes);
            }
        };

        requestAppoimentsDay();

        return () => {
            ignore = true;
        };
    }, [dateSelect, activeRefreshList]);

    useEffect(() => {
        if (activeModal) setActiveModal(false);
    }, [activeModal]);

    return (
        <>
            <ModalNew
                availabilities={availabilities}
                active={activeModal}
                dateSelect={dateSelect}
                setActiveRefresh={setActiveRefresh}
                activeRefreshList={activeRefreshList}
                setActiveRefreshList={setActiveRefreshList}
            />

            <div className={style.cont}>
                <div className={style.contHeader}>
                    <div className={style.date}>
                        {moment(dateSelect)
                            .locale(locale)
                            .format("dddd, MMMM DD")}
                    </div>
                    <div className={style.contButton}>
                        {moment(moment().format("YYYY-MM-DD")).isSameOrBefore(
                            moment(dateSelect)
                        ) && (
                            <div
                                className={style.buttonAdd}
                                onClick={() => setActiveModal(true)}>
                                <IconPlus />
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.contInfo}>
                    <ListChanges
                        appoiments={changes}
                        setActiveRefresh={setActiveRefresh}
                        activeRefreshList={activeRefreshList}
                        setActiveRefreshList={setActiveRefreshList}
                    />
                    {size(changes) > 0 && <div className={style.lineChange} />}
                    <List appoiments={appoiments} />
                    {size(appoiments) == 0 && size(changes) == 0 && (
                        <div className={style.noneList}>
                            <TagLang group="input" tag="none_quotes_list" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
