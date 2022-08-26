import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import TagLang from "../../../../../modules/GetTagLang";

import Form from "./FormQuestions.js";

export default function QuestionClinic() {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="col-12 sty-cont-form-1">
            <div className="sty-header-collapse-1" onClick={() => toogle()}>
                <div className="tag">
                    <TagLang group={"dashboard"} tag={"tit_pacient_config_8"} />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div className="sty-collapse-1">
                    <Form />
                </div>
            </Collapse>
        </div>
    );
}
