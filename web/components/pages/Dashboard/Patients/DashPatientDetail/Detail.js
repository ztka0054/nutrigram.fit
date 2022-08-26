import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import moment from "moment";

import Information from "./Information";
import Sections from "./Sections";

import request from "../../../../../helper/core_services/core/requestService";
import patient from "../../../../../helper/core_services/endpoints/patients";

export default function Detail() {
    const query = useRouter()?.query;
    const { locale } = useRouter();

    const [dataPatient, setDataPatient] = useState(null);
    const [refreshPatient, setRefreshPatient] = useState(false);

    useEffect(() => {
        if (query) if (!isEmpty(query)) GetDataPatient();
    }, [query, locale]);

    useEffect(() => {
        if (refreshPatient) {
            GetDataPatient();
            setRefreshPatient(false);
        }
    }, [refreshPatient]);

    const GetDataPatient = async () => {
        let req = await request(patient.get_patient, null, [query.id], {
            locale,
        });
        if (req != null)
            setDataPatient({
                ...req,
                age: moment().diff(moment(req.birthday), "years"),
            });
    };

    return (
        <>
            <Information dataPatient={dataPatient} />
            <Sections
                dataPatient={dataPatient}
                setRefreshPatient={setRefreshPatient}
            />
        </>
    );
}
