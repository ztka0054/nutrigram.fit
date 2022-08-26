import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal } from "reactstrap";
import moment from "moment";

import IconClose from "../../../../../components/Icons/Close";
import IconCalendar from "../../../../../components/Icons/Calendar";
import TagLang from "../../../../../modules/GetTagLang";

import Form from "./Form/ChangeAppoinment";

import style from "./modal.module.scss";

export default function ModalNew({
    active,
    deactive,
    setActiveRefresh,
    dateSelect,
    selectAppoiment,
    activeRefreshList,
    setActiveRefreshList,
}) {
    const { locale } = useRouter();

    const [stateModal, setStateModal] = useState(false);

    useEffect(() => {
        if (active) setStateModal(true);
    }, [active]);

    useEffect(() => {
        if (deactive) setStateModal(false);
    }, [deactive]);

    return (
        <Modal centered isOpen={stateModal} toggle={() => setStateModal(false)}>
            <div className={style.modalContent}>
                <div className={style.header}>
                    <div className={style.titleModal}>
                        <div>
                            <TagLang group="input" tag="title_change" />
                        </div>
                    </div>
                    <div
                        className={style.close}
                        onClick={() => setStateModal(false)}>
                        <IconClose />
                    </div>
                </div>
                <div>
                    <div className={style.dateHeader}>
                        <div className={style.date}>
                            {moment(dateSelect)
                                .locale(locale)
                                .format("dddd, MMMM DD")}
                        </div>
                        <div className={style.iconCalendar}>
                            <IconCalendar />
                        </div>
                    </div>
                    <Form
                        dateSelect={dateSelect}
                        setStateModal={setStateModal}
                        setActiveRefresh={setActiveRefresh}
                        selectAppoiment={selectAppoiment}
                        activeRefreshList={activeRefreshList}
                        setActiveRefreshList={setActiveRefreshList}
                    />
                </div>
            </div>
        </Modal>
    );
}
