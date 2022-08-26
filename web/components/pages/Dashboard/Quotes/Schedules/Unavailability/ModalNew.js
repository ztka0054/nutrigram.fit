import { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import IconClose from "../../../../../components/Icons/Close";
import TagLang from "../../../../../modules/GetTagLang";

import Form from "./Form/FormNew";

import style from "./modal.module.scss";

export default function ModalNew({
    active,
    deactive,
    setRefresh,
    unavalivilityObject,
}) {
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
                        {!unavalivilityObject && (
                            <div>
                                <TagLang
                                    group="input"
                                    tag={"modal_new_1_quotes"}
                                />
                            </div>
                        )}
                        {unavalivilityObject && (
                            <div>
                                <TagLang
                                    group="input"
                                    tag={"modal_edit_1_quotes"}
                                />
                            </div>
                        )}
                    </div>
                    <div
                        className={style.close}
                        onClick={() => setStateModal(false)}>
                        <IconClose />
                    </div>
                </div>
                <div>
                    <Form
                        setStateModal={setStateModal}
                        setRefresh={setRefresh}
                        unavalivilityObject={unavalivilityObject}
                    />
                </div>
            </div>
        </Modal>
    );
}
