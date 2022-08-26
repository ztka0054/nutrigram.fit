import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputTimeForm_min from "../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1_min";
import InputTimeForm_max from "../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1_max";

import style from "../DataSection/sections.module.scss";
import { setPic } from "../../../../../../utils/localStorage";
const pic = "/static/img/favicons/app/human.png";

export default function newQuote({ setSection, userSelect }) {
    const [nameUser, setNameUser] = useState(null);
    const [picUser, setPicUser] = useState(pic);

    const formik = useFormik({
        validateOnChange: false,
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            if (selectAppoin == null) SendAppoinment(formData, resetForm);
            else UpdateAppoinment(formData, resetForm);
        },
    });

    useEffect(() => {
        if (userSelect != null) {
            setNameUser(`${userSelect.firstName} ${userSelect.lastName}`);
            if (userSelect?.picture) setPicUser(userSelect.picture);
            if (userSelect?.id) formik.setFieldValue("patient", userSelect.id);
        }
    }, [userSelect]);

    return (
        <div className={style.contAppionment}>
            <div className={style.titleAppoinment}>Nueva cita</div>
            <div className={style.contUser}>
                <div className={style.pictUser}>
                    <img src={picUser} />
                </div>
                <div>
                    <div className={style.contName}>
                        {!nameUser && <>Sin usuario asignado</>}
                        {nameUser && <>{nameUser}</>}
                    </div>
                    <div className={`${style.contButton} ${style.marginTop}`}>
                        <button
                            className={style.buttonAccept}
                            onClick={() => setSection(3)}>
                            Seleccionar paciente
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.contSchedule}>
                <div className={style.title}>Horario</div>
                <div className={style.contInputs}>
                    <div>
                        <InputTimeForm_max
                            formik={formik}
                            title={"start"}
                            name={`start`}
                            value={formik.values.start}
                            error={formik.errors.start}
                            maxHour={formik.values.end}
                        />
                    </div>
                    <div>
                        <InputTimeForm_min
                            formik={formik}
                            title={"end"}
                            name={`end`}
                            value={formik.values.end}
                            error={formik.errors.end}
                            minHour={formik.values.start}
                        />
                    </div>
                </div>
            </div>
            <div className={style.contButtons}>
                <div className={style.contButton}>
                    <button
                        className={style.buttonCancel}
                        onClick={() => setSection(1)}
                        type={"button"}>
                        Cancelar
                    </button>
                </div>
                <div className={style.contButton}>
                    <button
                        className={style.buttonAccept}
                        type={"submit"}
                        disabled={!formik.dirty && !formik.isValid}>
                        Crear
                    </button>
                </div>
            </div>
        </div>
    );
}

function initialValues() {
    return {
        patient: "",
        start: "",
        end: "",
    };
}

function validationSchema() {
    return {
        patient: Yup.string().required("required"),
        start: Yup.string().required("required"),
        end: Yup.string().required("required"),
    };
}
