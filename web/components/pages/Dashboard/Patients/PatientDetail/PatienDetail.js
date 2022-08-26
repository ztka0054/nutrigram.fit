import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";

import TagLang from "../../../../modules/GetTagLang";

import FormDetail from "./SectionDetail";
import SectionHistoryClinic from "./SectionHistoryClinic";
import SectionGinecology from "./SectionGinecology";
import SectionDietetic from "./SectionDietetic";
import SectionQuestionnaire from "./SectionQuestionnaire";
import SectionLifestyle from "./SectionLifestyle";
import SectionPhysical from "./SectionPhysicalActivity";

export default function PatienDetail() {
    const router = useRouter();
    const [idPatient, setIdPatient] = useState(null);
    const [infoUser, setInfoUser] = useState(null);
    const [flagGinecology, setFlagGinecology] = useState(false);
    const [formUser, setFormUser] = useState(null);
    const [formClinic, setFormClinic] = useState(null);
    const [formGinecology, setFormGinecology] = useState(null);
    const [formDiet, setFormDiet] = useState(null);
    const [formQuestions, setFormQuestions] = useState(null);
    const [formLifestyle, setFormLifestyle] = useState(null);
    const [formPhysical, setFormPhysical] = useState(null);

    const [flagSendClinic, setFlagSendClinic] = useState(false);
    const [flagSendGinecology, setFlagSendGinecology] = useState(false);
    const [flagSendDiet, setFlagSendDiet] = useState(false);
    const [flagSendQuestions, setFlagSendQuestions] = useState(false);
    const [flagSendLifestyle, setFlagSendLifestyle] = useState(false);
    const [flagSendPhysical, setFlagSendPhysical] = useState(false);

    useEffect(() => {
        if (router.query?.id) setIdPatient(router.query.id);
    }, [router.query]);

    useEffect(() => {
        if (infoUser != null) SendOtherForms(infoUser);
    }, [infoUser]);

    useEffect(() => {
        if (
            flagSendClinic &&
            flagSendGinecology &&
            flagSendDiet &&
            flagSendQuestions &&
            flagSendLifestyle &&
            flagSendPhysical
        )
            router.push(`/dashboard/patients/detail/${infoUser.id}`);
    }, [
        flagSendClinic,
        flagSendGinecology,
        flagSendDiet,
        flagSendQuestions,
        flagSendLifestyle,
        flagSendPhysical,
    ]);

    const SendFormUser = async () => {
        let valPhysycal = await formPhysical.validateForm();
        let flagPhysycal = isEmpty(valPhysycal);
        if (flagPhysycal) formUser.handleSubmit();
        else formUser.validateForm();
    };

    const SendOtherForms = async (infoUser) => {
        formClinic.setFieldValue("idUser", infoUser.id);
        formDiet.setFieldValue("idUser", infoUser.id);
        formPhysical.setFieldValue("idUser", infoUser.id);

        formClinic.handleSubmit();
        if (flagGinecology) {
            formGinecology.setFieldValue("idUser", infoUser.id);
            formGinecology.handleSubmit();
        } else {
            setFlagSendGinecology(true);
        }
        formDiet.handleSubmit();
        if (formQuestions) {
            formQuestions.setFieldValue("idUser", infoUser.id);
            formQuestions.handleSubmit();
        }
        if (formLifestyle) {
            formLifestyle.setFieldValue("idUser", infoUser.id);
            formLifestyle.handleSubmit();
        }
        formPhysical.handleSubmit();
    };

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_pacient_1_2"} />
            </div>
            <div className="col-12 sty-cont-form-1">
                <FormDetail
                    idPatient={idPatient}
                    setFormUser={setFormUser}
                    setInfoUser={setInfoUser}
                    setFlagGinecology={setFlagGinecology}
                />
            </div>
            <div className="col-12">
                <SectionHistoryClinic
                    idPatient={idPatient}
                    setFormClinic={setFormClinic}
                    setFlagSendClinic={setFlagSendClinic}
                />

                {flagGinecology && (
                    <SectionGinecology
                        idPatient={idPatient}
                        setFormGinecology={setFormGinecology}
                        setFlagSendGinecology={setFlagSendGinecology}
                    />
                )}

                <SectionDietetic
                    idPatient={idPatient}
                    setFormDiet={setFormDiet}
                    setFlagSendDiet={setFlagSendDiet}
                />

                <SectionLifestyle
                    idPatient={idPatient}
                    setFormLifestyle={setFormLifestyle}
                    setFlagSendLifestyle={setFlagSendLifestyle}
                />
                <SectionPhysical
                    idPatient={idPatient}
                    setFormPhysical={setFormPhysical}
                    setFlagSendPhysical={setFlagSendPhysical}
                />
                <SectionQuestionnaire
                    idPatient={idPatient}
                    setFormQuestions={setFormQuestions}
                    setFlagSendQuestions={setFlagSendQuestions}
                />
            </div>
            <div className="col-12">
                <div className="text-center sty-magin-b-1">
                    <button
                        className="sty-button-dash-1"
                        type="button"
                        onClick={() => SendFormUser()}>
                        <div className="sty-icon">
                            <img src="/static/img/favicons/app/save_w.svg" />
                        </div>
                        <div className="sty-tag">
                            <TagLang group={"button"} tag={"save"} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
