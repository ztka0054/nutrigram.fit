import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useApp from "../../../../../../../hooks/useApp";
import TagLang from "../../../../../../modules/GetTagLang";

import request from "../../../../../../../helper/core_services/core/requestService";
import patient from "../../../../../../../helper/core_services/endpoints/patients";

import FoodPlan from "./Data/FoodPlan";
import HydratationPlan from "./Data/HydratationPlan";

export default function Data({ ShowMenu, ShowHydratation }) {
    const { query } = useRouter();
    const { locale } = useApp();
    const [menuPatient, setMenuPatient] = useState(null);

    useEffect(() => {
        if (query?.id) {
            GetDataUser();
        }
    }, [query, locale]);

    const GetDataUser = async () => {
        let req = await request(patient.get_patient, null, [query.id], {
            locale,
        });
        if (req != null) {
            setMenuPatient(req.menu);
        }
    };

    return (
        <>
            <div className="row">
                <FoodPlan ShowMenu={ShowMenu} menuPatient={menuPatient} />
            </div>
            <div className="row margin-top-2">
                <HydratationPlan
                    ShowHydratation={ShowHydratation}
                    menuPatient={menuPatient}
                />
            </div>
        </>
    );
}
