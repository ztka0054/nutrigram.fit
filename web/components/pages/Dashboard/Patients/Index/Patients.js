import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import useApp from "../../../../../hooks/useApp";
import TagLang from "../../../../modules/GetTagLang";
import SetLink from "../../../../modules/SetLink";

import request from "../../../../../helper/core_services/core/requestService";
import apiMedical from "../../../../../helper/core_services/endpoints/medical_records";
import patients from "../../../../../helper/core_services/endpoints/patients";
import subscription from "../../../../../helper/core_services/endpoints/subscription";

import Table from "./Table";

export default function Patients() {
    const { locale } = useApp();
    const [flagAddPatient, setFlagAddPatient] = useState(true);
    const [countElement, setCountElement] = useState(0);

    useEffect(() => {
        ValidateMedicalSettings();
        GetDataSubscription();
    }, []);

    const GetDataSubscription = async () => {
        let reqSubscription = await request(
            subscription.get_subscription,
            null,
            null,
            {
                locale,
            }
        );
        let reqPatients = await request(
            patients.get_patients,
            { page_size: 1 },
            null,
            {
                locale,
            }
        );
        if (reqSubscription != null && reqPatients != null) {
            setCountElement(
                reqSubscription?.price?.subscription?.patients -
                    reqPatients.page.count
            );
            if (
                reqSubscription?.price?.subscription?.patients <=
                reqPatients.page.count
            ) {
                setFlagAddPatient(false);
            }
        }
    };

    const ValidateMedicalSettings = async () => {
        let resultMedical = await request(
            apiMedical.get_settings_medical,
            null,
            null,
            null,
            false
        );
        if (resultMedical == null) {
            let resultMedical = await request(
                apiMedical.post_settings_medical,
                medicalFields
            );
        }
    };

    return (
        <>
            <div className="col-12"></div>
            <div className="sty-bar-config">
                <div
                    className={`text-notice ${classnames({
                        deactive: !flagAddPatient,
                    })}`}>
                    {flagAddPatient && (
                        <TagLang
                            group={"validation"}
                            tag={"available_patients"}
                            dynamic={[countElement]}
                        />
                    )}
                    {!flagAddPatient && (
                        <TagLang
                            group={"validation"}
                            tag={"unavailable_patients"}
                        />
                    )}
                </div>
                <div className="sty-cont-button">
                    <SetLink route="/dashboard/patients/configuration">
                        {/* <Link route="dasConfigPatients" params={{lang}}>
                <a> */}
                        <button>
                            <FontAwesomeIcon icon={faCog} />
                        </button>
                        {/* </a>
                </Link> */}
                    </SetLink>
                </div>
            </div>
            <Table flagAddPatient={flagAddPatient} />
        </>
    );
}

const medicalFields = {
    reason: true,
    notes: true,
    diarrhea: true,
    constipation: true,
    gastritis: true,
    ulcer: true,
    nausea: true,
    pyrosis: true,
    vomit: true,
    colitis: true,
    observations: true,
    disease: true,
    pastDisease: true,
    laxative: true,
    diuretic: true,
    antacid: true,
    analgesic: true,
    surgeries: true,
    obesity: true,
    diabetes: true,
    hypertension: true,
    cancer: true,
    thyroidProblems: true,
    dyslipidemia: true,
    heartDisease: true,
    gastrointestinalDisease: true,
    otherDiseases: true,
    pregnancy: true,
    gestationalAge: true,
    lastMenstrualPeriod: true,
    hormonalProblems: true,
    hormonalTherapy: true,
    contraceptives: true,
    climacteric: true,
    alcohol: true,
    smoke: true,
    coffee: true,
    meals: true,
    allergies: true,
    restrictions: true,
    water: true,
    dislikes: true,
    preferred: true,
    dietNotes: true,
};
