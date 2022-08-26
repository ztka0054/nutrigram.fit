import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import TagLang from "../../../../../../../modules/GetTagLang";
import request from "../../../../../../../../helper/core_services/core/requestService";
import apiMenu from "../../../../../../../../helper/core_services/endpoints/menu";

import Form from "./FormConsulation";

export default function index({
    ShowConsults,
    selectConsulation,
    dataPatient,
    setRefreshPatient,
}) {
    const router = useRouter();
    const [activeRefresh, setActiveRefresh] = useState(false);
    const [dataMenuPatient, setDataMenuPatient] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        setActiveRefresh(true);
    }, [router.isReady]);

    useEffect(() => {
        if (activeRefresh) {
            if (dataPatient?.menu != null) GetDataMenuPatient();
            setActiveRefresh(false);
        }
    }, [activeRefresh]);

    const GetDataMenuPatient = async () => {
        let resultMenuPatient = await request(
            apiMenu.get_menu_patient,
            null,
            [dataPatient?.menu],
            { locale: router.locale }
        );
        if (resultMenuPatient != null) {
            let resultMenu = await request(
                apiMenu.get_menu,
                null,
                [resultMenuPatient.menu],
                { locale: router.locale }
            );
            if (resultMenu != null) setDataMenuPatient(resultMenu);
        }
    };

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_pacient_2_3"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form
                    idConsulation={selectConsulation}
                    ShowConsults={ShowConsults}
                    dataPatient={dataPatient}
                    setRefreshPatient={setRefreshPatient}
                    dataMenuPatient={dataMenuPatient}
                />
            </div>
        </div>
    );
}
