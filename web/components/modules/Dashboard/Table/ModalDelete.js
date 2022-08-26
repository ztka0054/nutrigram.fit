import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import TagLang from "../../../modules/GetTagLang";

export default function ModalDelete({
    flagModal,
    toogleModalChild,
    functionButton,
}) {
    return (
        <Modal
            isOpen={flagModal}
            toggle={toogleModalChild}
            className="modal_dashboard_delete"
        >
            <ModalHeader toggle={toogleModalChild}></ModalHeader>
            <ModalBody>
                <div className="text_modal">
                    <TagLang group="input" tag="delete_modal" />
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    className={"sty-button-dash-1 color-3"}
                    onClick={toogleModalChild}
                >
                    <TagLang group="button" tag="cancel" />
                </button>{" "}
                <button
                    className="sty-button-dash-1 color-2"
                    onClick={() => functionButton()}
                >
                    <TagLang group="button" tag="accept" />
                </button>
            </ModalFooter>
        </Modal>
    );
}
