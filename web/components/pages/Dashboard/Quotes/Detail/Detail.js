import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Calendar from "./Calendar";
import Data from "./DataSection";

import request from "../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../helper/core_services/endpoints/appointments";

import style from "./detail.module.scss";

export default function Quotes() {
    const router = useRouter();

    const [dateSelect, setDateSelect] = useState(new Date());
    const [availabilities, setAvailabilities] = useState([]);
    const [unavailabilities, setUnavailabilities] = useState(null);
    const [activeRefresh, setActiveRefresh] = useState(true);

    useEffect(() => {
        if (!router.isReady) return;
        let ignore = false;

        async function requestAvailavility() {
            let result = await request(
                ApiAppoinments.get_availabilities,
                null,
                null,
                { local: router.locale }
            );
            if (result) {
                setAvailabilities(result.result);
            }
        }
        async function requestUnavailabilities() {
            let result = await request(
                ApiAppoinments.get_unavailabilities,
                null,
                null,
                {
                    local: router.locale,
                }
            );
            if (result) {
                setUnavailabilities(result.result);
            }
        }

        requestAvailavility();
        requestUnavailabilities();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div className={style.cont}>
            <Calendar
                setDateSelect={setDateSelect}
                dateSelect={dateSelect}
                unavailabilities={unavailabilities}
                setActiveRefresh={setActiveRefresh}
                activeRefresh={activeRefresh}
            />
            <Data
                dateSelect={dateSelect}
                availabilities={availabilities}
                setActiveRefresh={setActiveRefresh}
            />
        </div>
    );
}
