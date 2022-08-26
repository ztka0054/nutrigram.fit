import React from "react";

import TagLang from "../../../../modules/GetTagLang";

import Availaility from "./Availability";
import Unavailability from "./Unavailability";

import style from "./Schedule.module.scss";

export default function Schedules() {
    return (
        <div>
            <div className={style.titleConfig}>
                <TagLang group="input" tag="title_config_quotes" />{" "}
            </div>
            <div className={style.contSections}>
                <div className={style.section}>
                    <Availaility />
                </div>
                <div className={style.section}>
                    <Unavailability />
                </div>
            </div>
        </div>
    );
}
