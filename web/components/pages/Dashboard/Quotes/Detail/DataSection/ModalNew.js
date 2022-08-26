import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal } from "reactstrap";
import moment from "moment";

import IconClose from "../../../../../components/Icons/Close";
import IconCalendar from "../../../../../components/Icons/Calendar";
import TagLang from "../../../../../modules/GetTagLang";

import Form from "./Form/NewAppoinment";
import TableUsers from "./TableUsers";

import style from "./modal.module.scss";

export default function ModalNew({
    availabilities,
    active,
    deactive,
    setActiveRefresh,
    dateSelect,
    activeRefreshList,
    setActiveRefreshList,
}) {
    const { locale } = useRouter();

    const [stateModal, setStateModal] = useState(false);
    const [selectUser, setSelectUser] = useState(null);
    const [viewState, setViewState] = useState(1);

    useEffect(() => {
        if (active) setStateModal(true);
        else {
            setSelectUser(null);
            setViewState(1);
        }
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
                            <TagLang group="input" tag="title_new" />
                        </div>
                    </div>
                    <div
                        className={style.close}
                        onClick={() => setStateModal(false)}>
                        <IconClose />
                    </div>
                </div>
                <div
                    className={`${
                        viewState === 1 ? style.block : style.hidden
                    }`}>
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
                        availabilities={availabilities}
                        dateSelect={dateSelect}
                        setStateModal={setStateModal}
                        setActiveRefresh={setActiveRefresh}
                        setViewState={setViewState}
                        selectUser={selectUser}
                        activeRefreshList={activeRefreshList}
                        setActiveRefreshList={setActiveRefreshList}
                    />
                </div>
                <div
                    className={`${
                        viewState === 2 ? style.block : style.hidden
                    }`}>
                    <TableUsers
                        setSelectUser={setSelectUser}
                        setViewState={setViewState}
                    />
                </div>
            </div>
        </Modal>
    );
}
