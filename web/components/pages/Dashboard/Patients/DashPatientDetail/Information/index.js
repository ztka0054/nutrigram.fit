import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { size } from "lodash";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import SetLink from "../../../../../modules/SetLink";

import request from "../../../../../../helper/core_services/core/requestService";
import patient from "../../../../../../helper/core_services/endpoints/patients";
import consulation from "../../../../../../helper/core_services/endpoints/consulation";
import medical from "../../../../../../helper/core_services/endpoints/medical_records";
import apiMenu from "../../../../../../helper/core_services/endpoints/menu";
import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";
import fixDate from "../../../../../../helper/date/fixDateTimeService";

import Notes from "./Notes";

const pic = "/static/img/favicons/app/human.png";

export default function index({ dataPatient }) {
    const { query } = useRouter();
    const { locale, flagChangeElement } = useApp();
    const [statePic, setStatePic] = useState(pic);
    // const [dataPatient, setDataPatient] = useState({});
    const [infoPatient, setInfoPatient] = useState({});
    const [alimentPlan, setAlimentPlan] = useState(null);
    const [firstWeight, setFirstWeight] = useState(null);
    const [lastWeight, setLastWeight] = useState(null);
    const [firstFat, setFirstFat] = useState(null);
    const [lastFat, setLastFat] = useState(null);

    useEffect(() => {
        if (dataPatient != null) {
            GetMenu();
            GetInfoPatient();
        }
    }, [dataPatient]);

    useEffect(() => {
        if (dataPatient != null) {
            GetConsulation();
        }
    }, [dataPatient]);

    const GetInfoPatient = async () => {
        let suffering = await GetSuffering();
        setInfoPatient({ ...suffering });
    };

    const GetSuffering = async () => {
        let suffering = "";
        let reason = "";
        let req = await request(medical.get_medical, null, [query.id], {
            locale,
        });
        if (req != null) {
            let arraySuffering = [];
            if (req?.diarrhea)
                arraySuffering.push(GetLanguages("input", "diarrhea"));
            if (req?.constipation)
                arraySuffering.push(GetLanguages("input", "constipation"));
            if (req?.gastritis)
                arraySuffering.push(GetLanguages("input", "gastritis"));
            if (req?.ulcer) arraySuffering.push(GetLanguages("input", "ulcer"));
            if (req?.nausea)
                arraySuffering.push(GetLanguages("input", "nausea"));
            if (req?.pyrosis)
                arraySuffering.push(GetLanguages("input", "pyrosis"));
            if (req?.vomit) arraySuffering.push(GetLanguages("input", "vomit"));
            if (req?.colitis)
                arraySuffering.push(GetLanguages("input", "colitis"));
            suffering = arraySuffering.join(", ");
            if (req?.reason) reason = req.reason;
        }
        return { suffering, reason };
    };

    const GetMenu = async () => {
        if (dataPatient.menu != null) {
            let req = await request(
                apiMenu.get_menu_patient,
                null,
                [dataPatient.menu],
                {
                    locale,
                }
            );
            if (req != null) {
                let req1 = await request(apiMenu.get_menu, null, [req.menu], {
                    locale,
                });
                setAlimentPlan(req1.name);
            }
        }
    };

    const GetConsulation = async () => {
        let reqFirst = await request(
            consulation.get_consulations,
            {
                ordering: "datetime",
                page_size: 1,
            },
            [query.id],
            {
                locale,
            }
        );
        let reqLast = await request(
            consulation.get_consulations,
            {
                ordering: "-datetime",
                datetime__lt: `${moment().format("YYYY-MM-DD")}T23:59:59`,
                page_size: 1,
            },
            [query.id],
            {
                locale,
            }
        );
        if (size(reqFirst.result) > 0) {
            let reqOne = await request(
                consulation.get_consulation,
                null,
                [query.id, reqFirst.result[0].id],
                {
                    locale,
                }
            );
            if (reqOne != null) {
                PutFirstWightAndFat(reqOne.anthropometry.measurements);
            }
        }
        if (size(reqLast.result) > 0) {
            let reqOne = await request(
                consulation.get_consulation,
                null,
                [query.id, reqLast.result[0].id],
                {
                    locale,
                }
            );
            if (reqOne != null) {
                PutLastWightAndFat(reqOne.anthropometry.measurements);
            }
        }
    };

    const PutFirstWightAndFat = (measurements) => {
        let find = measurements.find((obj) => {
            return obj.trait.identifier == 2;
        });
        if (find != undefined) setFirstWeight(find.value);
        let find2 = measurements.find((obj) => {
            return obj.trait.identifier == 3;
        });
        if (find2 != undefined) setFirstFat(find2.value);
    };

    const PutLastWightAndFat = (measurements) => {
        let find = measurements.find((obj) => {
            return obj.trait.identifier == 2;
        });
        if (find != undefined) setLastWeight(find.value);
        let find2 = measurements.find((obj) => {
            return obj.trait.identifier == 3;
        });
        if (find2 != undefined) setLastFat(find2.value);
    };

    return (
        <>
            <div className="sty-content-data-1">
                <div className="sty-card-title">
                    <TagLang group={"dashboard"} tag={"tit_pacient_2_1"} />
                </div>
                <div className="col-12 sty-cont-form-1">
                    <div className="row">
                        <div className="col-3">
                            <div className="sty-u-cont-pic">
                                <div className="sty-pic" id="id_pic">
                                    {dataPatient?.picture && (
                                        <img src={dataPatient?.picture} />
                                    )}
                                    {!dataPatient?.picture && <img src={pic} />}
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-8">
                                    <div className="sty-info-tag">
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"input"}
                                                tag={"full_name"}
                                            />
                                        </div>
                                        <div className="sty-data">
                                            {`${
                                                dataPatient?.firstName
                                                    ? dataPatient?.firstName
                                                    : ""
                                            } ${
                                                dataPatient?.lastName
                                                    ? dataPatient?.lastName
                                                    : ""
                                            }`}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <Notes />
                                </div>

                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"age"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {`${
                                                        dataPatient?.age
                                                            ? dataPatient?.age
                                                            : ""
                                                    } ${GetLanguages(
                                                        "input",
                                                        "years"
                                                    )}`}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"ailment"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {infoPatient.suffering}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <SetLink
                                                route={`/dashboard/patients/edit`}
                                                params={{ id: query.id }}>
                                                <button className="sty-button-dash-1 fix-25">
                                                    <div className="sty-icon">
                                                        <img src="/static/img/favicons/app/add_w.svg" />
                                                    </div>
                                                    <div className="sty-tag">
                                                        <TagLang
                                                            group={"button"}
                                                            tag={"edit"}
                                                        />
                                                    </div>
                                                </button>
                                            </SetLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"starting_weight"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {firstWeight}
                                                    {/* {
                                                            dataUserTag.startWeight
                                                        } */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"last_weight_1"}
                                                    />{" "}
                                                    (kg)
                                                </div>
                                                <div className="sty-data">
                                                    {lastWeight}
                                                    {/* {dataUserTag.endWeight} */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={
                                                            "reason_consultation"
                                                        }
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {infoPatient.reason}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"initial_fat"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {firstFat}
                                                    {/* {
                                                            dataUserTag.startGrease
                                                        } */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"last_fat"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {lastFat}
                                                    {/* {dataUserTag.endGrease} */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="sty-info-tag">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"diet_1"}
                                                    />
                                                </div>
                                                <div className="sty-data">
                                                    {alimentPlan}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
