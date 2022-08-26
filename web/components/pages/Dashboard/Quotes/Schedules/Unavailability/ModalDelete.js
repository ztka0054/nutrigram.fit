import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal } from "reactstrap";

import IconClose from "../../../../../components/Icons/Close";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../helper/core_services/endpoints/appointments";

import style from "./modal.module.scss";

export default function ModalDelete({
    active,
    deactive,
    unavalivilityObject,
    setRefresh,
}) {
    const router = useRouter();

    const [stateModal, setStateModal] = useState(false);

    useEffect(() => {
        if (active) setStateModal(true);
    }, [active]);

    useEffect(() => {
        if (deactive) setStateModal(false);
    }, [deactive]);

    const DeleteElement = async () => {
        let result = await request(
            ApiAppoinments.delete_unavailabilities,
            null,
            [unavalivilityObject?.id],
            { locale: router?.locale }
        );
        if (result) {
            setRefresh(true);
            setStateModal(false);
        }
    };

    return (
        <Modal centered isOpen={stateModal} toggle={() => setStateModal(false)}>
            <div className={style.modalContent}>
                <div className={style.header}>
                    <div className={style.titleModal}>
                        <div>
                            <TagLang
                                group="input"
                                tag={"modal_delete_2_quotes"}
                            />
                        </div>
                    </div>
                    <div
                        className={style.close}
                        onClick={() => setStateModal(false)}>
                        <IconClose />
                    </div>
                </div>
                <div>
                    <div className={style.messageDelete}>
                        <TagLang group="input" tag={"modal_delete_1_quotes"} />
                    </div>
                </div>
                <div className={style.contButtons}>
                    <button
                        className={style.buttonCancel}
                        onClick={() => setStateModal(false)}>
                        <TagLang group="button" tag={"cancel"} />
                    </button>
                    <button
                        className={style.buttonAccept}
                        onClick={() => DeleteElement()}>
                        <TagLang group="button" tag={"accept"} />
                    </button>
                </div>
            </div>
        </Modal>
    );
}
