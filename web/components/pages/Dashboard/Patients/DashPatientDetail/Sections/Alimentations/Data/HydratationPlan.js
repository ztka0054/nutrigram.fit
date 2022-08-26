import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import moment from "moment";

import useApp from "../../../../../../../../hooks/useApp";
import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import hydratation from "../../../../../../../../helper/core_services/endpoints/hydration";

export default function HydratationPlan({ ShowHydratation, menuPatient }) {
    const { query } = useRouter();
    const { locale } = useApp();
    const [elementHydratation, setElementHydratation] = useState(null);

    useEffect(() => {
        if (query?.id) GetDataHydratation();
    }, [query, menuPatient]);

    const GetDataHydratation = async () => {
        let req = await request(hydratation.get_hydratation, null, [query.id], {
            locale,
        });
        if (req != null) {
            DrawHidratation(req);
        }
    };

    const DrawHidratation = (info) => {
        let element = null;
        if (size(info) > 0) {
            let schedules = map(info, (element, index) => {
                return (
                    <div className="col-12">
                        <div className="row sty-schedule">
                            <div className="col-4 sty-time">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"from_"} />
                                </div>
                                <div className="sty-value">
                                    {moment(
                                        `${moment().format("YYYY-MM-DD")}T${
                                            element.fromTime
                                        }`
                                    ).format("hh:mm A")}
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
                                    ).format("hh:mm A")}
                                </div>
                            </div>
                            <div className="col-4 sty-time">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"portion_"} />
                                </div>
                                <div className="sty-value">
                                    {element.quantity} (L)
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            element = (
                <div className="row sty-cont-patient-schedule">{schedules}</div>
            );
        }
        if (size(info) == 0) {
            element = (
                <div className="sty-empty-mesage-1 text-center">
                    <TagLang
                        group={"validation"}
                        tag={"without_assigned_plan"}
                    />
                </div>
            );
        }
        setElementHydratation(element);
    };

    return (
        <>
            <div className="col-12">
                <div className="sty-input-tag-g-1">
                    <TagLang group={"dashboard"} tag={"tit_pacient_2_8"} />
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-8">{elementHydratation}</div>
                    <div className="col-4 align-self-end text-right">
                        <button
                            className="sty-button-dash-1 fix-1"
                            onClick={() => ShowHydratation()}>
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
