import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import TagLang from "../../../../../modules/GetTagLang";

import Form from "./FormActivity";

export default function index({
    idPatient,
    setFormPhysical,
    setFlagSendPhysical,
}) {
    const [isOpen, setIsOpen] = useState(true);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="sty-header-collapse-1" onClick={() => toogle()}>
                <div className="tag">
                    <TagLang
                        group={"dashboard"}
                        tag={"tit_pacient_2_tag_2_2"}
                    />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div className="sty-collapse-1">
                    <Form
                        idPatient={idPatient}
                        setFormPhysical={setFormPhysical}
                        setFlagSendPhysical={setFlagSendPhysical}
                    />
                </div>
            </Collapse>
        </>
    );
}
