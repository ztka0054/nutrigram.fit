import React, { useState, useEffect } from "react";
import { map } from "lodash";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import menu from "../../../../../../../../helper/core_services/endpoints/menu";
import { message_1 } from "../../../../../../../../helper/appearance/messages";
import { loadElement } from "../../../../../../../../helper/appearance/load";
import GetLanguages from "../../../../../../../../helper/i18n/getValueTagLang";

export default function FoodPlan({ ShowMenu, menuPatient }) {
    const { locale } = useApp();
    const [elementMenu, setElementMenu] = useState(null);

    useEffect(() => {
        GetDataMenu();
    }, [menuPatient]);

    const GetDataMenu = async () => {
        let menuReq = null;
        let dataReq = null;
        if (menuPatient != null) {
            menuReq = await request(
                menu.get_menu_patient,
                null,
                [menuPatient],
                {
                    locale,
                }
            );
            dataReq = await request(menu.get_menu, null, [menuReq.menu], {
                locale,
            });
        }
        DrawMenu(menuReq, dataReq);
    };

    const DrawMenu = async (menuReq, dataReq) => {
        let element = null;
        if (menuPatient != null) {
            let schedules = map(menuReq.schedules, (element, index) => {
                return (
                    <div className="col-12" key={`schedule_${index}`}>
                        <div className="row sty-schedule">
                            <div className="col-4 sty-title">
                                {element.type.name}
                            </div>
                            <div className="col-4 sty-time">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"from_"} />
                                </div>
                                <div className="sty-value">
                                    {moment(
                                        `${moment().format("YYYY-MM-DD")}T${
                                            element.fromTime
                                        }`
                                    ).format("HH:mm:ss")}
                                </div>
                            </div>
                            <div className="col-4 sty-time">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"to_"} />
                                </div>
                                <div className="sty-value">
                                    {moment(
                                        `${moment().format("YYYY-MM-DD")}T${
                                            element.toTime
                                        }`
                                    ).format("HH:mm:ss")}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            element = (
                <div>
                    <div className="sty-tag-patient-1">
                        <div className="sty-title">
                            <TagLang group={"input"} tag={"menu_"} />
                        </div>
                        <div className="sty-value">{dataReq.name}</div>
                    </div>
                    <div className="row sty-cont-patient-schedule">
                        {schedules}
                    </div>
                </div>
            );
        } else {
            element = (
                <div className="sty-empty-mesage-1 text-center">
                    <TagLang
                        group={"validation"}
                        tag={"without_assigned_plan"}
                    />
                </div>
            );
        }
        setElementMenu(element);
    };

    const SendMenu = async () => {
        loadElement(true);
        let resultSendMenu = await request(
            menu.get_send_menu,
            null,
            [menuPatient],
            {
                locale,
            }
        );
        loadElement(false);
        if (resultSendMenu != null) {
            message_1(GetLanguages("validation", "menu_sent"));
        }
    };

    return (
        <>
            <div className="col-12">
                <div className="sty-input-tag-g-1">
                    <TagLang group={"dashboard"} tag={"tit_pacient_2_7"} />
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-8">{elementMenu}</div>
                    <div className="col-4 align-self-end text-right">
                        {menuPatient && (
                            <button
                                className="sty-button-dash-1 sty-button-right"
                                onClick={() => SendMenu()}>
                                <TagLang group={"input"} tag={"send"} />
                            </button>
                        )}
                        <button
                            className="sty-button-dash-1"
                            onClick={() => ShowMenu()}>
                            <div className="sty-icon">
                                <img src="/static/img/favicons/app/add_w.svg" />
                            </div>
                            <TagLang group={"button"} tag={"edit"} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
